import { RegionModel } from './RegionSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionPrimitives, type RegionDto } from '../../domain/Region.dto'
import { type RegionId } from '../../domain/RegionId'
import { type RegionRepository } from '../../domain/RegionRepository'

/**
 * @class SequelizeRegionRepository
 * @extends SequelizeCriteriaConverter
 * @implements {RegionRepository}
 * @description Concrete implementation of the RegionRepository using Sequelize.
 * Handles data persistence for Region entities, including caching mechanisms.
 */
export class SequelizeRegionRepository extends SequelizeCriteriaConverter implements RegionRepository {
	private readonly cacheKey: string = 'regions'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Region entities based on the provided criteria.
	 * Includes associated state data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<RegionDto>>} A promise that resolves to a paginated response containing Region DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<RegionDto>> {
		const options = this.convert(criteria)
		options.include = ['state']
		return await this.cache.getCachedData<ResponseDB<RegionDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await RegionModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<RegionDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Region entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<RegionId>} id - The ID of the Region to search for.
	 * @returns {Promise<RegionDto | null>} A promise that resolves to the Region DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<RegionId>): Promise<RegionDto | null> {
		return await this.cache.getCachedData<RegionDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const region = await RegionModel.findByPk(id)
				return region ? (region.get({ plain: true }) as RegionDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Region entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {RegionPrimitives} payload - The Region data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: RegionPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await RegionModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
	}
}
