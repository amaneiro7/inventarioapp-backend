import { BrandModel } from './BrandSchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { type BrandRepository } from '../../domain/BrandRepository'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type BrandDto } from '../../domain/Brand.dto'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'

/**
 * @class SequelizeBrandRepository
 * @extends SequelizeCriteriaConverter
 * @implements {BrandRepository}
 * @description Concrete implementation of the BrandRepository using Sequelize.
 * Handles data persistence for Brand entities, including caching mechanisms.
 */
export class SequelizeBrandRepository extends SequelizeCriteriaConverter implements BrandRepository {
	private readonly cacheKey: string = 'brands'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Brand entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<BrandDto>>} A promise that resolves to a paginated response containing Brand DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<BrandDto>> {
		const options = this.convert(criteria)

		return await this.cache.getCachedData<ResponseDB<BrandDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await BrandModel.findAndCountAll(options)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true })) // Ensure plain objects are returned
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Brand entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the Brand to search for.
	 * @returns {Promise<BrandDto | null>} A promise that resolves to the Brand DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<BrandDto | null> {
		return await this.cache.getCachedData<BrandDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const brand = await BrandModel.findByPk(id)
				return brand ? brand.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Brand entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {string} name - The name of the Brand to search for.
	 * @returns {Promise<BrandDto | null>} A promise that resolves to the Brand DTO if found, or null otherwise.
	 */
	async searchByName(name: string): Promise<BrandDto | null> {
		return await this.cache.getCachedData<BrandDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const brand = await BrandModel.findOne({ where: { name } })
				return brand ? brand.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Brand entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {BrandDto} payload - The Brand data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: BrandDto): Promise<void> {
		// Use upsert for atomic create or update operation
		await BrandModel.upsert(payload)

		// Invalidate relevant cache entries
		// Assuming removeCachedData with a base key clears all entries starting with that key.
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		// Also invalidate specific entries if they were cached
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${payload.name}` })
	}

	/**
	 * @method remove
	 * @description Deletes a Brand entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the Brand to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		// First, retrieve the brand to get its name for cache invalidation
		const brandToRemove = await BrandModel.findByPk(id)

		await BrandModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		// Assuming removeCachedData with a base key clears all entries starting with that key.
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		// Also invalidate the specific ID entry
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		// If the brand was found, invalidate its name-based cache entry as well
		if (brandToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${brandToRemove.name}` })
		}
	}
}
