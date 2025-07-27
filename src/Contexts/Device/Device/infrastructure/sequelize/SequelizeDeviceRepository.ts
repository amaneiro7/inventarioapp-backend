import { type Transaction, Model, ModelStatic } from 'sequelize'
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
 * Handles data persistence for Device entities, including caching mechanisms, associated feature models, and data export.
 */
export class SequelizeDeviceRepository extends SequelizeCriteriaConverter implements DeviceRepository {
	private readonly models = sequelize.models
	private readonly cacheKey: string = 'devices'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Device entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DeviceDto>>} A promise that resolves to a paginated response containing Device DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<DeviceDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceModel.findAndCountAll(options)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<DeviceDto>
			}
		})
	}

	/**
	 * @method matching
	 * @description Retrieves a paginated list of Device entities that match specific criteria,
	 * often used for more complex filtering logic defined in DeviceAssociation.
	 * Utilizes caching for improved performance.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DeviceDto>>} A promise that resolves to a paginated response containing Device DTOs.
	 */
	async matching(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)

		const deviceOptions = new DeviceAssociation().convertFilterLocation(criteria, options)
		return await this.cache.getCachedData<ResponseDB<DeviceDto>>({
			cacheKey: `${this.cacheKey}:matching:${criteria.hash()}`,
			criteria: criteria,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count: total, rows: data } = await DeviceModel.findAndCountAll(deviceOptions)

				return {
					total,
					data: data.map(row => row.get({ plain: true }))
				} as ResponseDB<DeviceDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Device entity by its unique identifier.
	 * Includes all relevant associated models (model, category, brand, status, employee, computer, hardDrive, location, history).
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the Device to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the Device DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<DeviceDto | null> {
		return await this.cache.getCachedData<DeviceDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findByPk(id, {
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
				})
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	/**
	 * @method searchByActivo
	 * @description Retrieves a single Device entity by its 'activo' field.
	 * Utilizes caching for direct lookups.
	 * @param {string} activo - The 'activo' value of the Device to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the Device DTO if found, or null otherwise.
	 */
	async searchByActivo(activo: string): Promise<DeviceDto | null> {
		return await this.cache.getCachedData<DeviceDto | null>({
			cacheKey: `${this.cacheKey}:activo:${activo}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { activo } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	/**
	 * @method searchBySerial
	 * @description Retrieves a single Device entity by its serial number.
	 * Utilizes caching for direct lookups.
	 * @param {string} serial - The serial number of the Device to search for.
	 * @returns {Promise<DeviceDto | null>} A promise that resolves to the Device DTO if found, or null otherwise.
	 */
	async searchBySerial(serial: string): Promise<DeviceDto | null> {
		return await this.cache.getCachedData<DeviceDto | null>({
			cacheKey: `${this.cacheKey}:serial:${serial}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { serial } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	/**
	 * @method searchByComputerName
	 * @description Retrieves a single DeviceComputer model by its computer name.
	 * Utilizes caching for direct lookups.
	 * @param {string} computerName - The computer name to search for.
	 * @returns {Promise<Model<any, any> | null>} A promise that resolves to the DeviceComputer model if found, or null otherwise.
	 */
	async searchByComputerName(computerName: string): Promise<DeviceDto | null> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}:computerName:${computerName}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const data = await DeviceModel.findOne({
					include: [
						{
							association: 'computer',
							attributes: [],
							where: {
								computerName
							}
						}
					]
				})
				return data ? (data.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Device entity to the data store. Uses `upsert` for atomic creation or update.
	 * It also handles the creation/update of associated specific device types (e.g., Computer, HardDrive, MFP) based on category.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {DevicePrimitives} payload - The Device data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: DevicePrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			// Use upsert for the main Device entry
			await DeviceModel.upsert(payload, { transaction: t, returning: true })

			// Handle associated device types based on category
			if (DeviceComputer.isComputerCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceComputer, payload, t)
			}
			if (DeviceHardDrive.isHardDriveCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceHardDrive, payload, t)
			}
			if (MFP.isMFPCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DeviceMFP, payload, t)
			}

			await t.commit() // Commit the transaction
			// Invalidate all cache entries related to devices.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			// Also invalidate specific entries if they were cached by ID, activo, or serial.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:activo:${payload.activo}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:serial:${payload.serial}` })
			// Invalidate computerName cache if applicable
			if (payload && 'computerName' in payload) {
				await this.cache.removeCachedData({
					cacheKey: `${this.cacheKey}:computerName:${payload?.computerName}`
				})
			}
		} catch (error: unknown) {
			await t.rollback() // Rollback the transaction
			let errorMessage = 'An unknown error occurred while saving the device.'
			if (error instanceof Error) {
				errorMessage = `Error saving device: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving device: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @private
	 * @method upsertAssociatedDeviceModel
	 * @description Helper method to perform an upsert operation on an associated device model.
	 * @param {ModelStatic<Model<any, any>>} model - The Sequelize model for the associated entity (e.g., DeviceComputer).
	 * @param {DevicePrimitives} payload - The data for the associated model.
	 * @param {Transaction} transaction - The Sequelize transaction to use.
	 * @returns {Promise<void>}
	 */
	private async upsertAssociatedDeviceModel(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		model: ModelStatic<Model<any, any>>,
		payload: DevicePrimitives,
		transaction: Transaction
	): Promise<void> {
		// Assuming the associated models also have a 'deviceId' field that matches the main device's id
		await model.upsert({ deviceId: payload.id, ...payload }, { transaction })
	}

	/**
	 * @method remove
	 * @description Deletes a Device entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} deviceId - The ID of the Device to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(deviceId: string): Promise<void> {
		// Retrieve the device to get its activo, serial, and computerName for cache invalidation
		const deviceToRemove = await DeviceModel.findByPk(deviceId)

		await DeviceModel.destroy({ where: { id: deviceId } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${deviceId}` })
		if (deviceToRemove) {
			if (deviceToRemove.activo) {
				await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:activo:${deviceToRemove.activo}` })
			}
			if (deviceToRemove.serial) {
				await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:serial:${deviceToRemove.serial}` })
			}
			if (deviceToRemove && 'computerName' in deviceToRemove) {
				await this.cache.removeCachedData({
					cacheKey: `${this.cacheKey}:computerName:${deviceToRemove.computerName}`
				})
			}
		}
	}

	/**
	 * @method donwload
	 * @description Generates an Excel file (buffer) containing device data based on provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering the data to be downloaded.
	 * @returns {Promise<Buffer>} A promise that resolves to an Excel file buffer.
	 */
	async donwload(criteria: Criteria): Promise<Buffer> {
		set_fs(fs)

		const { data } = await this.matching(criteria)

		const wbData = clearComputerDataset({ devices: data })
		// Create a new worksheet
		const worksheet = utils.json_to_sheet(wbData)
		worksheet['!cols'] = [{ wch: 20 }]
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, 'Inventario')

		// Generate a buffer
		const buf = write(workbook, {
			type: 'buffer',
			bookType: 'xlsx',
			compression: true
		})
		return buf
	}
}
