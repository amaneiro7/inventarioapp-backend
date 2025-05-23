import { set_fs, utils, write } from 'xlsx'
import fs from 'node:fs'

import { type Transaction } from 'sequelize'
import { type DeviceRepository } from '../../domain/DeviceRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../domain/DeviceId'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'

import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceModel } from './DeviceSchema'
import { DeviceComputer } from '../../../../Features/Computer/domain/Computer'
import { DeviceAssociation } from './DeviceAssociation'
import { DeviceHardDrive } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { MFP } from '../../../../Features/MFP/domain/MFP'
import { clearComputerDataset } from './clearComputerDataset'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type DevicePrimitives, type DeviceDto } from '../../domain/Device.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeDeviceRepository extends SequelizeCriteriaConverter implements DeviceRepository {
	private readonly models = sequelize.models
	private readonly cacheKey: string = 'devices'
	constructor(private readonly cache: CacheService) {
		super()
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceModel.findAndCountAll(options)
				return {
					total: count,
					data: rows
				}
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)

		const deviceOptions = new DeviceAssociation().convertFilterLocation(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count: total, rows: data } = await DeviceModel.findAndCountAll(deviceOptions)

				return {
					total,
					data
				}
			}
		})
	}

	async searchById(id: string): Promise<DeviceDto | null> {
		return (
			(await DeviceModel.findByPk(id, {
				include: [
					{
						association: 'model',
						include: [
							{
								association: 'modelComputer',
								include: ['memoryRamType']
							},
							{
								association: 'modelLaptop',
								include: ['memoryRamType']
							}
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
					{
						association: 'hardDrive',
						include: ['hardDriveCapacity', 'hardDriveType']
					},
					'location',
					{
						association: 'history',
						include: [
							{
								association: 'user',
								attributes: ['email', 'name', 'lastName']
							},
							'employee'
						],
						order: [['createdAt', 'DESC']]
					}
				]
			})) ?? null
		)
	}

	async searchByActivo(activo: string): Promise<DeviceDto | null> {
		return (await DeviceModel.findOne({ where: { activo } })) ?? null
	}

	async searchBySerial(serial: string): Promise<DeviceDto | null> {
		return (await DeviceModel.findOne({ where: { serial } })) ?? null
	}

	async searchByComputerName(computerName: string): Promise<any> {
		return (
			(await this.models.DeviceComputer.findOne({
				where: { computerName }
			})) ?? null
		)
	}

	/**
	 * This function saves a device to the database, it updates the device if it already exists
	 * or creates a new one if it does not exist.
	 *
	 * It also checks if the device category is a computer category, if it is, it will
	 * create a new DeviceComputer entity, otherwise, it will not do anything.
	 *
	 * This function is wrapped in a transaction, if there is an error while updating/creating
	 * the device or creating the DeviceComputer entity, the transaction will be rolled back.
	 *
	 * @param payload - Device data to be saved
	 */
	async save(payload: DevicePrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			const { id, serial, activo, statusId, categoryId, brandId, modelId, locationId, observation, employeeId } =
				payload // Destructure the payload
			const device = (await DeviceModel.findByPk(id)) ?? null // Find the device by its id, if it does not exist, device will be null
			if (!device) {
				// If the device does not exist
				await DeviceModel.create(
					{
						id,
						serial,
						activo,
						statusId,
						categoryId,
						brandId,
						modelId,
						locationId,
						observation,
						employeeId
					},
					{ transaction: t }
				) // Create a new device with the given payload
			} else {
				// If the device already exists
				await DeviceModel.update(
					{
						serial,
						activo,
						statusId,
						categoryId,
						brandId,
						modelId,
						employeeId,
						locationId,
						observation
					},
					{ where: { id }, transaction: t }
				) // Update the device with the given payload
				// await device.save({ transaction: t }) // Save the updated device
			}

			if (DeviceComputer.isComputerCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceComputerIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
			}
			if (DeviceHardDrive.isHardDriveCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceHardDriveIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
			}
			if (MFP.isMFPCategory({ categoryId })) {
				// If the device category is a computer category
				await this.creareDeviceMFPIfCategoryMatches(id, payload, t) // Create a new DeviceComputer entity with the given payload
			}

			await t.commit() // Commit the transaction
			await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error: any) {
			// If there is an error
			await t.rollback() // Rollback the transaction
			throw new Error(error)
		}
	}

	private async creareDeviceComputerIfCategoryMatches(
		id: Primitives<DeviceId>,
		payload: DevicePrimitives,
		transaction: Transaction
	): Promise<void> {
		const computer = (await this.models.DeviceComputer.findByPk(id)) ?? null
		if (computer === null) {
			await this.models.DeviceComputer.create({ deviceId: id, ...payload }, { transaction })
		} else {
			await this.models.DeviceComputer.update({ ...payload }, { where: { id }, transaction })
		}
	}
	private async creareDeviceHardDriveIfCategoryMatches(
		id: Primitives<DeviceId>,
		payload: DevicePrimitives,
		transaction: Transaction
	): Promise<void> {
		const hardDrive = (await this.models.DeviceHardDrive.findByPk(id)) ?? null
		if (hardDrive === null) {
			await this.models.DeviceHardDrive.create({ deviceId: id, ...payload }, { transaction })
		} else {
			await this.models.DeviceHardDrive.update({ ...payload }, { where: { id }, transaction })
		}
	}
	private async creareDeviceMFPIfCategoryMatches(
		id: Primitives<DeviceId>,
		payload: DevicePrimitives,
		transaction: Transaction
	): Promise<void> {
		const mfp = (await this.models.DeviceMFP.findByPk(id)) ?? null
		if (mfp === null) {
			await this.models.DeviceMFP.create({ deviceId: id, ...payload }, { transaction })
		} else {
			await this.models.DeviceMFP.update({ ...payload }, { where: { id }, transaction })
		}
	}

	async remove(deviceId: string): Promise<void> {
		await DeviceModel.destroy({ where: { id: deviceId } })
	}

	async donwload(criteria: Criteria): Promise<{}> {
		set_fs(fs)

		const { data } = await this.matching(criteria)

		const wbData = clearComputerDataset({ devices: data })
		// Crear una nueva hoja de cálculo
		const worksheet = utils.json_to_sheet(wbData)
		worksheet['!cols'] = [{ wch: 20 }]
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, 'Inventario')

		// Generar un archivo buffer
		// const now = new Date()
		// const filename = `Reporte-Inventario${now.toLocaleString().replace(/[/:]/g, '-')}.xlsx`
		// return writeFile(workbook, filename, { compression: true })
		const buf = write(workbook, {
			type: 'buffer',
			bookType: 'xlsx',
			compression: true
		})
		return buf
	}
}
