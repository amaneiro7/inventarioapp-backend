import { BrandModel } from './BrandSchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { type BrandRepository } from '../../domain/BrandRepository'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type BrandPrimitives, type BrandDto } from '../../domain/Brand.dto'
import { sequelize } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { BrandAssociation } from './BrandAssociation'

/**
 * @class SequelizeBrandRepository
 * @extends SequelizeCriteriaConverter
 * @implements {BrandRepository}
 * @description Concrete implementation of the BrandRepository using Sequelize.
 * Handles data persistence for Brand entities, including caching mechanisms.
 */
export class SequelizeBrandRepository extends SequelizeCriteriaConverter implements BrandRepository {
	private readonly cacheKey: string = 'brands'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
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
		const opt = BrandAssociation.convertFilter(criteria, options)

		return await this.cache.getCachedData<ResponseDB<BrandDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await BrandModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true })) // Ensure plain objects are returned
				} as unknown as ResponseDB<BrandDto>
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
				const brand = await BrandModel.findByPk(id, {
					include: [
						{
							association: 'categories',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return brand ? (brand.get({ plain: true }) as BrandDto) : null
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
				return brand ? (brand.get({ plain: true }) as BrandDto) : null
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
	async save(payload: BrandPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { categories, ...restPayload } = payload
			// Use upsert for atomic create or update operation
			const [brandInstance] = await BrandModel.upsert(restPayload, { transaction, returning: true })

			// handle associations
			if (brandInstance) {
				console.log(brandInstance)
				await brandInstance.setCategories(categories, { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			// Assuming removeCachedData with a base key clears all entries starting with that key.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			// Also invalidate specific entries if they were cached
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${payload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Brands.'
			if (error instanceof Error) {
				errorMessage = `Error saving Brand: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Brand: ${error}`
			}
			throw new Error(errorMessage)
		}
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
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		// Also invalidate the specific ID entry
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		// If the brand was found, invalidate its name-based cache entry as well
		if (brandToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${brandToRemove.name}` })
		}
	}
}
