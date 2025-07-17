import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringAssociation } from './LocationMonitoringAssociation'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import {
	type LocationMonitoringDto,
	type LocationMonitoringPrimitives
} from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringRepository } from '../../domain/repository/LocationMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'

/**
 * @class SequelizeLocationMonitoringRepository
 * @extends SequelizeCriteriaConverter
 * @implements {LocationMonitoringRepository}
 * @description Concrete implementation of the LocationMonitoringRepository using Sequelize.
 * Handles data persistence for LocationMonitoring entities, including caching mechanisms.
 */
export class SequelizeLocationMonitoringRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringRepository
{
	private readonly cacheKey: string = 'locationMonitoring'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Searches for all location monitoring entries matching the given criteria.
	 * It uses caching to improve performance.
	 * @param {Criteria} criteria - The criteria to filter, sort, and paginate the results.
	 * @returns {Promise<ResponseDB<LocationMonitoringDto>>} A promise that resolves to a paginated response of location monitoring DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationMonitoringDto>> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<LocationMonitoringDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await LocationMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method searchNotNullIpAddress
	 * @description Searches for location monitoring entries that have a non-null subnet.
	 * This is useful for finding locations that are configured for network monitoring.
	 * @param {object} params - Parameters for pagination.
	 * @param {number} [params.page] - Optional page number for pagination.
	 * @param {number} [params.pageSize] - Optional page size for pagination.
	 * @returns {Promise<LocationMonitoringDto[]>} A promise that resolves to an array of location monitoring DTOs.
	 */
	async searchNotNullIpAddress({
		page,
		pageSize
	}: {
		page?: number
		pageSize?: number
	}): Promise<LocationMonitoringDto[]> {
		const offset = page && pageSize ? (page - 1) * pageSize : undefined
		return await this.cache.getCachedData<LocationMonitoringDto[]>({
			cacheKey: `${this.cacheKey}-not-null-ip-address:${page ?? 1}:${pageSize ?? 'all'}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const rows = await LocationMonitoringModel.findAll({
					offset,
					limit: pageSize,
					include: [
						{
							association: 'location',
							where: {
								locationStatusId: LocationStatusOptions.OPERATIONAL,
								subnet: { [Op.ne]: null }
							}
						}
					]
				})
				return rows.map(row => row.get({ plain: true }))
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single location monitoring entry by its unique identifier.
	 * @param {string} id - The ID of the location monitoring entry to search for.
	 * @returns {Promise<LocationMonitoringDto | null>} A promise that resolves to the LocationMonitoring DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<LocationMonitoringDto | null> {
		return await this.cache.getCachedData<LocationMonitoringDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locationMonitoring = (await LocationMonitoringModel.findByPk(id))
				return locationMonitoring ? locationMonitoring.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a location monitoring entry to the database.
	 * It updates the entry if it already exists or creates a new one if it does not.
	 * This operation is wrapped in a transaction to ensure atomicity.
	 * Invalidates relevant cache entries after a successful operation.
	 *
	 * @param {LocationMonitoringPrimitives} payload - The location monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: LocationMonitoringPrimitives): Promise<void> {
		const t = await sequelize.transaction() // Start a new transaction
		try {
			// Use upsert for atomic create or update operation
			await LocationMonitoringModel.upsert(payload, { transaction: t })

			await t.commit() // Commit the transaction
			// Invalidate all cache entries related to location monitoring.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			// Also invalidate the specific ID entry.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		} catch (error: unknown) {
			await t.rollback() // Rollback the transaction on error

			// Improved error handling to provide more context
			let errorMessage = 'An unknown error occurred while saving the location monitoring data.'
			if (error instanceof Error) {
				errorMessage = `Error saving location monitoring data: ${error.message}`
			}
			throw new Error(errorMessage)
		}
	}
}
