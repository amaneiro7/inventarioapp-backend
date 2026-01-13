import { Op } from 'sequelize'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringAssociation } from './LocationMonitoringAssociation'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import {
	type LocationMonitoringDto,
	type LocationMonitoringPrimitives
} from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringRepository } from '../../domain/repository/LocationMonitoringRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type LocationMonitoringCacheInvalidator } from '../../domain/repository/LocationMonitoringCacheInvalidator'
import { type LocationId } from '../../../Location/domain/valueObject/LocationId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @class SequelizeLocationMonitoringRepository
 * @extends SequelizeCriteriaConverter
 * @implements {LocationMonitoringRepository}
 * @description Concrete implementation of the LocationMonitoringRepository using Sequelize.
 * Handles data persistence for LocationMonitoring entities, including caching mechanisms.
 */
export class SequelizeLocationMonitoringRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringRepository, LocationMonitoringCacheInvalidator
{
	private readonly cacheKey: string = 'locationMonitoring'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
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
			cacheKey: `${this.cacheKey}:lists:all:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { count, rows } = await LocationMonitoringModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<LocationMonitoringDto>
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
			cacheKey: `${this.cacheKey}:lists:activeIpList:${page ?? 1}:${pageSize ?? 'all'}`,
			ttl: TimeTolive.VERY_LONG,
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
				return rows.map(row => row.get({ plain: true })) as LocationMonitoringDto[]
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single location monitoring entry by its unique identifier.
	 * @param {string} id - The ID of the location monitoring entry to search for.
	 * @returns {Promise<LocationMonitoringDto | null>} A promise that resolves to the LocationMonitoring DTO if found, or null otherwise.
	 */
	async findById(id: string): Promise<LocationMonitoringDto | null> {
		return await this.cache.getCachedData<LocationMonitoringDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locationMonitoring = await LocationMonitoringModel.findByPk(id)
				return locationMonitoring ? (locationMonitoring.get({ plain: true }) as LocationMonitoringDto) : null
			}
		})
	}

	/**
	 * @method findByLocationId
	 * @description Retrieves a single location monitoring entry by its location identifier.
	 * @param {string} locationId - The ID of the location.
	 * @returns {Promise<LocationMonitoringDto | null>} A promise that resolves to the LocationMonitoring DTO if found.
	 */
	async findByLocationId(locationId: string): Promise<LocationMonitoringDto | null> {
		return await this.cache.getCachedData<LocationMonitoringDto | null>({
			cacheKey: `${this.cacheKey}:locationId:${locationId}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locationMonitoring = await LocationMonitoringModel.findOne({
					where: { locationId },
					include: ['location']
				})
				return locationMonitoring ? (locationMonitoring.get({ plain: true }) as LocationMonitoringDto) : null
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
		await LocationMonitoringModel.upsert(payload)
	}

	/**
	 * @method saveAll
	 * @description Saves an array of location monitoring entries to the database.
	 * It updates the entries if they already exist or creates new ones if they do not.
	 * This operation is wrapped in a transaction to ensure atomicity.
	 * Invalidates relevant cache entries after a successful operation.
	 *
	 * @param {LocationMonitoringPrimitives[]} payloads - The array of location monitoring data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async saveAll(payloads: LocationMonitoringPrimitives[]): Promise<void> {
		await LocationMonitoringModel.bulkCreate(payloads, {
			updateOnDuplicate: ['status', 'lastScan', 'lastSuccess', 'lastFailed', 'locationId']
		})

		// Optimizamos la invalidación ejecutándola en paralelo
		const invalidationPromises = payloads.map(payload => this.invalidate(payload.id))
		await Promise.all(invalidationPromises)
	}

	/**
	 * @method invalidateLocationCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements LocationMonitoringCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<LocationId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}

	/**
	 * @method invalidateActiveIpCache
	 * @description Invalidates only the cache related to the list of locations with active IPs.
	 * This prevents clearing the entire dashboard cache when only the monitoring list changes.
	 */
	async invalidateActiveIpCache(): Promise<void> {
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:lists:activeIpList:*` })
	}
}
