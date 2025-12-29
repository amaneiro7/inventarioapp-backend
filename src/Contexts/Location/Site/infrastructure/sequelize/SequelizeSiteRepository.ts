import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { SiteModels } from './SiteSchema'
import { SiteAssociation } from './SiteAssociation'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type SiteCacheInvalidator } from '../../domain/repository/SiteCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type SiteRepository } from '../../domain/repository/SiteRepository'
import { type SiteDto, type SitePrimitives } from '../../domain/entity/Site.dto'
import { type SiteId } from '../../domain/valueObject/SiteId'
import { type SiteName } from '../../domain/valueObject/SiteName'

/**
 * @class SequelizeSiteRepository
 * @extends SequelizeCriteriaConverter
 * @implements {SiteRepository}
 * @description Concrete implementation of the SiteRepository using Sequelize.
 * Handles data persistence for Site entities, including caching mechanisms.
 */
export class SequelizeSiteRepository
	extends SequelizeCriteriaConverter
	implements SiteRepository, SiteCacheInvalidator
{
	private readonly cacheKey: string = 'sites'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Site entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<SiteDto>>} A promise that resolves to a paginated response containing Site DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<SiteDto>> {
		const options = SiteAssociation.converFilter(criteria, this.convert(criteria))
		return await this.cache.getCachedData<ResponseDB<SiteDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await SiteModels.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<SiteDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single Site entity by its unique identifier.
	 * Includes associated city, state, and region data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<SiteId>} id - The ID of the Site to search for.
	 * @returns {Promise<SiteDto | null>} A promise that resolves to the Site DTO if found, or null otherwise.
	 */
	async findById(id: Primitives<SiteId>): Promise<SiteDto | null> {
		return await this.cache.getCachedData<SiteDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const site = await SiteModels.findByPk(id, {
					include: [
						{
							association: 'city',
							include: [
								{
									association: 'state',
									include: ['region']
								}
							]
						}
					]
				})
				return site ? (site.get({ plain: true }) as SiteDto) : null
			}
		})
	}

	/**
	 * @method findByName
	 * @description Retrieves a single Site entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<SiteName>} name - The name of the Site to search for.
	 * @returns {Promise<SiteDto | null>} A promise that resolves to the Site DTO if found, or null otherwise.
	 */
	async findByName(name: Primitives<SiteName>): Promise<SiteDto | null> {
		return await this.cache.getCachedData<SiteDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const city = await SiteModels.findOne({
					where: { name }
				})
				return city ? (city.get({ plain: true }) as SiteDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Site entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {SitePrimitives} payload - The Site data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: SitePrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await SiteModels.upsert(payload)
	}

	/**
	 * @method invalidateSiteCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements SiteCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<SiteId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}
