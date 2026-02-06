import { type Transaction, type Model, type ModelStatic, Op } from 'sequelize'
import fs from 'node:fs'
import { set_fs, utils, type WorkSheet, write } from 'xlsx'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceModel } from './schema/DeviceSchema'
import { DeviceAssociation } from './DeviceAssociation'
import { DeviceComputer } from '../../domain/entity/Computer'
import { DeviceHardDrive } from '../../domain/entity/HardDrive'
import { DevicePrinter } from '../../domain/entity/Printer'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { clearComputerDataset } from './clearComputerDataset'
import { type DeviceRepository } from '../../domain/repository/DeviceRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DevicePrimitives, type DeviceDto } from '../../domain/dto/Device.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type ClearDefaultDataset } from './DeviceResponse'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../domain/valueObject/DeviceId'
import { type DeviceActivo } from '../../domain/valueObject/DeviceActivo'
import { type DeviceSerial } from '../../domain/valueObject/DeviceSerial'
import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'

/**
 * @class SequelizeDeviceRepository
 * @extends SequelizeCriteriaConverter
 * @implements {DeviceRepository}
 * @description Concrete implementation of the DeviceRepository using Sequelize.
 */
export class SequelizeDeviceRepository
	extends SequelizeCriteriaConverter
	implements DeviceRepository, CacheInvalidator
{
	private readonly models = sequelize.models
	private readonly cacheKeyPrefix = 'devices'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`
		return this.cache.getCachedData<ResponseDB<DeviceDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
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
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await DeviceModel.findAndCountAll(deviceOptions)
				return { total: count, data: rows.map(row => row.get({ plain: true })) } as ResponseDB<DeviceDto>
			}
		})
	}

	async findById(id: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const device = await DeviceModel.findByPk(id, {
					include: [
						{
							association: 'model',
							attributes: ['id', 'name', 'generic'],
							include: [
								{ association: 'modelComputer', include: ['memoryRamType'] },
								{ association: 'modelLaptop', include: ['memoryRamType'] }
							]
						},
						'category',
						{ association: 'brand', attributes: ['id', 'name'] },
						'status',
						{ association: 'employee', attributes: ['id', 'userName', 'name', 'lastName', 'email'] },
						{
							association: 'computer',
							attributes: [
								'computerName',
								'processorId',
								'memoryRam',
								'memoryRamCapacity',
								'hardDriveCapacityId',
								'hardDriveTypeId',
								'operatingSystemId',
								'operatingSystemArqId',
								'macAddress',
								'ipAddress'
							],
							include: [
								{
									association: 'processor',
									attributes: [
										'productCollection',
										'numberModel',
										'name',
										'frequency',
										'cores',
										'threads'
									]
								},
								{
									association: 'hardDriveCapacity',
									attributes: ['name']
								},
								{
									association: 'hardDriveType',
									attributes: ['name']
								},
								{
									association: 'operatingSystem',
									attributes: ['name', 'buildNumber', 'version']
								},
								{
									association: 'operatingSystemArq',
									attributes: ['name']
								}
							]
						},
						{
							association: 'hardDrive',
							attributes: ['hardDriveCapacityId', 'hardDriveTypeId'],
							include: [
								{
									association: 'hardDriveCapacity',
									attributes: ['name']
								},
								{
									association: 'hardDriveType',
									attributes: ['name']
								}
							]
						},
						{ association: 'printer', attributes: ['ipAddress'] },
						'location',
						{
							association: 'history',
							include: [
								{
									association: 'user',
									attributes: ['employeeId'],
									include: [
										{
											association: 'employee',
											attributes: ['name', 'lastName', 'userName', 'email']
										}
									]
								},
								{
									association: 'employee',
									attributes: ['name', 'lastName', 'userName', 'email']
								}
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
	 * @method findByIds
	 * @description Retrieves multiple devices by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of Device IDs to find.
	 * @returns {Promise<DeviceDto[]>} A promise resolving to an array of found Device DTOs.
	 */
	async findByIds(ids: string[]): Promise<DeviceDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<DeviceDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const devices = await DeviceModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return devices.map(device => device.get({ plain: true })) as DeviceDto[]
			}
		})
	}

	async searchByActivo(activo: Primitives<DeviceActivo>): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:activo:${activo}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { activo } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async searchBySerial(serial: Primitives<DeviceSerial>): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:serial:${serial}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { serial } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}
	async searchBySerialAndBrand(
		serial: Primitives<DeviceSerial>,
		brandId: Primitives<BrandId>,
		categoryId: Primitives<CategoryId>
	): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:serial:${serial}:brand:${brandId}:category:${categoryId}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const device = await DeviceModel.findOne({ where: { serial, brandId, categoryId } })
				return device ? (device.get({ plain: true }) as DeviceDto) : null
			}
		})
	}

	async searchByComputerName(computerName: string): Promise<DeviceDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:computerName:${computerName}`
		return this.cache.getCachedData<DeviceDto | null>({
			cacheKey,
			ttl: TimeTolive.LONG,
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
			if (DevicePrinter.isPrinterCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedDeviceModel(this.models.DevicePrinter, payload, transaction)
			}

			await transaction.commit()
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
		await DeviceModel.destroy({ where: { id: deviceId } })
	}

	async donwload(criteria: Criteria): Promise<Buffer> {
		set_fs(fs)

		const { data } = await this.matching(criteria)
		const wbData = clearComputerDataset({ devices: data })

		if (!wbData.length) {
			// Handle case where there is no data to write
			const emptyWorkbook = utils.book_new()
			utils.book_append_sheet(emptyWorkbook, utils.aoa_to_sheet([['No hay datos para exportar']]), 'Inventario')
			return write(emptyWorkbook, { type: 'buffer', bookType: 'xlsx', compression: true })
		}

		const worksheet: WorkSheet = utils.json_to_sheet(wbData)
		// --- Optimization: Calculate column widths in one go ---
		const headers = Object.keys(wbData[0])
		const cols = headers.map(header => {
			const headerWidth = header.length + 2
			const maxContentWidth = wbData.reduce(
				(max, row) => Math.max(max, String(row[header as keyof ClearDefaultDataset]).length + 2),
				headerWidth
			)
			return { wch: maxContentWidth }
		})
		worksheet['!cols'] = cols

		// --- ENhancement: Add metada to the workbook
		const workbook = utils.book_new()
		workbook.Props = {
			Title: 'Reporde de Inventario de Dispositivos',
			Subject: 'Inventario de computadores',
			Author: 'Sistema de Inventario (BNC)',
			CreatedDate: new Date()
		}
		// --- Enhancement: Add styling for headers (requires a custom cell style function) ---
		// SheetJS does not have a simple way to apply styles directly to the worksheet object.
		// For simple styling like bolding headers, you need to iterate and modify cell properties.
		const headerRow = utils.sheet_to_json(worksheet, { header: 1 })[0] as string[]
		headerRow.forEach((_header, index) => {
			const cellRef = utils.encode_cell({ r: 0, c: index })
			if (worksheet[cellRef]) {
				worksheet[cellRef].s = {
					font: { bold: true },
					fill: { fgColor: { rgb: 'E8F2FF' } }
				}
			}
		})
		utils.book_append_sheet(workbook, worksheet, 'Inventario')
		return write(workbook, { type: 'buffer', bookType: 'xlsx', compression: true })
	}

	/**
	 * @method invalidateDeviceCache
	 * @description Invalidates all devices-related cache entries.
	 * Implements DeviceCacheInvalidator interface.
	 */
	async invalidate(
		params?: Primitives<DeviceId> | Record<string, string | number | null | undefined>
	): Promise<void> {
		await this.cacheInvalidator.invalidate(params)

		if (params && typeof params !== 'string') {
			// Invalida cache específica por computerName
			if (params.computerName) {
				await this.cache.removeCachedData({
					cacheKey: `${this.cacheKeyPrefix}:computerName:${params.computerName}`
				})
			}
			// Invalida cache del nombre anterior si cambió (para evitar datos obsoletos)
			if (params.oldComputerName) {
				await this.cache.removeCachedData({
					cacheKey: `${this.cacheKeyPrefix}:computerName:${params.oldComputerName}`
				})
			}
			// Invalida cache por serial
			if (params.serial) {
				await this.cache.removeCachedData({ cacheKey: `${this.cacheKeyPrefix}:serial:${params.serial}` })
			}
			// Invalida cache por activo
			if (params.activo) {
				await this.cache.removeCachedData({ cacheKey: `${this.cacheKeyPrefix}:activo:${params.activo}` })
			}
			// Invalida cache compuesta (Serial + Brand + Category)
			if (params.serial && params.brandId && params.categoryId) {
				await this.cache.removeCachedData({
					cacheKey: `${this.cacheKeyPrefix}:serial:${params.serial}:brand:${params.brandId}:category:${params.categoryId}`
				})
			}
			// Invalida todas las búsquedas por múltiples IDs (findByIds) para evitar inconsistencias en listas parciales
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKeyPrefix}:ids:*` })
		}
	}
}
