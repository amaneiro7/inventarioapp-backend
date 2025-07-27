import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationStatusModel } from './LocationStatusSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../../domain/LocationStatus.dto'
import { type LocationStatusId } from '../../domain/LocationStatusId'
import { type LocationStatusRepository } from '../../domain/LocationStatusRepository'

/**
 * @class SequelizeLocationStatusRepository
 * @extends SequelizeCriteriaConverter
 * @implements {LocationStatusRepository}
 * @description Concrete implementation of the LocationStatusRepository using Sequelize.
 * Handles data persistence for LocationStatus entities, including caching mechanisms.
 */
export class SequelizeLocationStatusRepository extends SequelizeCriteriaConverter implements LocationStatusRepository {
	private readonly cacheKey: string = 'locationStatus'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of LocationStatus entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationStatusDto>>} A promise that resolves to a paginated response containing LocationStatus DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationStatusDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<LocationStatusDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await LocationStatusModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single LocationStatus entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<LocationStatusId>} id - The ID of the LocationStatus to search for.
	 * @returns {Promise<LocationStatusDto | null>} A promise that resolves to the LocationStatus DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<LocationStatusId>): Promise<LocationStatusDto | null> {
		return await this.cache.getCachedData<LocationStatusDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locationStatus = await LocationStatusModel.findByPk(id)
				return locationStatus ? locationStatus.get({ plain: true }) : null
			}
		})
	}
}
