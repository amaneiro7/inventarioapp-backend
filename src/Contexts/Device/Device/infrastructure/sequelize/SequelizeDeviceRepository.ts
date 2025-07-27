import { type Transaction, type Model, type ModelStatic } from 'sequelize'
import fs from 'node:fs'
import { set_fs, utils, write } from 'xlsx'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceModel } from './DeviceSchema'
import { DeviceComputer } from '../../../../Features/Computer/domain/Computer'
import { DeviceAssociation } from './DeviceAssociation'
import { DeviceHardDrive } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { MFP } from '../../../../Features/MFP/domain/MFP'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { clearComputerDataset } from './clearComputerDataset'
import { type DeviceRepository } from '../../domain/DeviceRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DevicePrimitives, type DeviceDto } from '../../domain/Device.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @class SequelizeDeviceRepository
 * @extends SequelizeCriteriaConverter
 * @implements {DeviceRepository}
 * @description Concrete implementation of the DeviceRepository using Sequelize.
 */
export class SequelizeDeviceRepository extends SequelizeCriteriaConverter implements DeviceRepository {
	private readonly models = sequelize.models
	private readonly cacheKeyPrefix = 'devices'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`
		return this.cache.getCachedData<ResponseDB<DeviceDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceModel.findAndCountAll(options)
				return { total: count, data: rows.map(row => row.get({ plain: true })) } as ResponseDB<DeviceDto>
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)
		const deviceOptions = new DeviceAssociation().convertFilterLocation(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:matching:${criteria.hash()}`
		return this.cache.getCachedData<ResponseDB<DeviceDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceModel.findAndCountAll(deviceOptions)
				return { total: count, data: rows.map(row => row.get({ plain: true })) } as ResponseDB<DeviceDto>
			}
		})
	}

	async searchById(id: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findByPk(id, {
					include: [
						{
							association: 'model',
							include: [
								{ association: 'modelComputer', include: ['memoryRamType'] },
								{ association: 'modelLaptop', include: ['memoryRamType'] }
							]
						},
						'category',
						'brand',
						'status',
						'employee',
						{
							association: 'computer',
							include: [
								'processor',
								'hardDriveCapacity',
								'hardDriveType',
								'operatingSystem',
								'operatingSystemArq'
							]
						},
						{ association: 'hardDrive', include: ['hardDriveCapacity', 'hardDriveType'] },
						'location',
						{
							association: 'history',
							include: [{ association: 'user', attributes: ['email', 'name', 'lastName'] }, 'employee'],
							order: [['createdAt', 'DESC']]
						}
					]
				})
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async searchByActivo(activo: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:activo:${activo}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { activo } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async searchBySerial(serial: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:serial:${serial}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { serial } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async searchByComputerName(computerName: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:computerName:${computerName}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const data = await DeviceModel.findOne({
					include: [{ association: 'computer', attributes: [], where: { computerName } }]
				})
				return data ? (data.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async save(payload: DevicePrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			await DeviceModel.upsert(payload, { transaction, returning: true })

			if (DeviceComputer.isComputerCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceComputer, payload, transaction)
			}
			if (DeviceHardDrive.isHardDriveCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceHardDrive, payload, transaction)
			}
			if (MFP.isMFPCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceMFP, payload, transaction)
			}

			await transaction.commit()
			await this.invalidateDeviceCache(payload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving device: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	private async upsertAssociatedDeviceModel(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		model: ModelStatic<Model<any, any>>,
		payload: DevicePrimitives,
		transaction: Transaction
	): Promise<void> {
		await model.upsert({ deviceId: payload.id, ...payload }, { transaction })
	}

	async remove(deviceId: string): Promise<void> {
		const deviceToRemove = await DeviceModel.findByPk(deviceId, { include: ['computer'] })
		await DeviceModel.destroy({ where: { id: deviceId } })
		if (deviceToRemove) {
			await this.invalidateDeviceCache(deviceToRemove.get({ plain: true }))
		}
	}

	private async invalidateDeviceCache(deviceData: Partial<DeviceDto>): Promise<void> {
		const { id, activo, serial, computer } = deviceData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (activo) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:activo:${activo}`)
		if (serial) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:serial:${serial}`)
		if (computer?.computerName)
			cacheKeysToRemove.push(`${this.cacheKeyPrefix}:computerName:${computer.computerName}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}

	async donwload(criteria: Criteria): Promise<Buffer> {
		set_fs(fs)
		const { data } = await this.matching(criteria)
		const wbData = clearComputerDataset({ devices: data })
		const worksheet = utils.json_to_sheet(wbData)
		worksheet['!cols'] = [{ wch: 20 }]
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, 'Inventario')
		return write(workbook, { type: 'buffer', bookType: 'xlsx', compression: true })
	}
}
