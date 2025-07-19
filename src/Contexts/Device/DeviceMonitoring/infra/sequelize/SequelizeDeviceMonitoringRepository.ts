import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { DeviceMonitoringAssociation } from './DeviceMonitoringAssociation'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringRepository } from '../../domain/repository/DeviceMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'

/**
 * @class SequelizeDeviceMonitoringRepository
 * @extends SequelizeCriteriaConverter
 * @implements {DeviceMonitoringRepository}
 * @description Concrete implementation of the DeviceMonitoringRepository using Sequelize.
 * Handles data persistence for DeviceMonitoring entities, including caching mechanisms.
 */
export class SequelizeDeviceMonitoringRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringRepository
{
	private readonly cacheKey: string = 'deviceMonitoring'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Searches for all device monitoring entries matching the given criteria.
	 * It uses caching to improve performance.
	 * @param {Criteria} criteria - The criteria to filter, sort, and paginate the results.
	 * @returns {Promise<ResponseDB<DeviceMonitoringDto>>} A promise that resolves to a paginated response of device monitoring DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<DeviceMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<DeviceMonitoringDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await DeviceMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method searchNotNullIpAddress
	 * @description Searches for device monitoring entries that have a non-null IP address.
	 * This is useful for finding devices that are configured for network monitoring.
	 * @param {object} params - Parameters for pagination.
	 * @param {number} [params.page] - Optional page number for pagination.
	 * @param {number} [params.pageSize] - Optional page size for pagination.
	 * @returns {Promise<DeviceMonitoringDto[]>} A promise that resolves to an array of device monitoring DTOs.
	 */
	async searchNotNullIpAddress({
		page,
		pageSize
	}: {
		page?: number
		pageSize?: number
	}): Promise<DeviceMonitoringDto[]> {
		const offset = page && pageSize ? (page - 1) * pageSize : undefined
		return await this.cache.getCachedData<DeviceMonitoringDto[]>({
			cacheKey: `${this.cacheKey}-not-null-ip-address:${page ?? 1}:${pageSize ?? 'all'}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const rows = await DeviceMonitoringModel.findAll({
					offset,
					limit: pageSize,
					include: [
						{
							association: 'device',
							where: {
								statusId: StatusOptions.INUSE
							},
							include: [
								{
									association: 'computer',
									where: { ipAddress: { [Op.ne]: null } },
									attributes: ['ipAddress', 'computerName'],
									required: true
								}
							]
						}
					]
				})
				return rows.map(row => row.get({ plain: true }))
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single device monitoring entry by its unique identifier.
	 * @param {string} id - The ID of the device monitoring entry to search for.
	 * @returns {Promise<DeviceMonitoringDto | null>} A promise that resolves to the DeviceMonitoring DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<DeviceMonitoringDto | null> {
		return await this.cache.getCachedData<DeviceMonitoringDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const deviceMonitoring = await DeviceMonitoringModel.findByPk(id)
				return deviceMonitoring ? deviceMonitoring.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a device monitoring entry to the database.
	 * It updates the entry if it already exists or creates a new one if it does not.
	 * This operation is wrapped in a transaction to ensure atomicity.
	 * Invalidates relevant cache entries after a successful operation.
	 *
	 * @param {DeviceMonitoringPrimitives} payload - The device monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: DeviceMonitoringPrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			// Use upsert for atomic create or update operation
			await DeviceMonitoringModel.upsert(payload, { transaction: t })

			await t.commit() // Commit the transaction
			// Invalidate all cache entries related to device monitoring.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			// Also invalidate the specific ID entry.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		} catch (error: unknown) {
			await t.rollback() // Rollback the transaction on error

			// Improved error handling to provide more context
			let errorMessage = 'An unknown error occurred while saving the device monitoring data.'
			if (error instanceof Error) {
				errorMessage = `Error saving device monitoring data: ${error.message}`
			}
			throw new Error(errorMessage)
		}
	}
}

