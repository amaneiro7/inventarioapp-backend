import { sequelize } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { BrandModel } from './BrandSchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { BrandAssociation } from './BrandAssociation'
import { GenericCacheInvalidator } from '../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type BrandPrimitives, type BrandDto } from '../../domain/entity/Brand.dto'
import { type BrandRepository } from '../../domain/repository/BrandRepository'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type BrandCacheInvalidator } from '../../domain/repository/BrandCacheInvalidator'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type BrandId } from '../../domain/valueObject/BrandId'

/**
 * @class SequelizeBrandRepository
 * @extends SequelizeCriteriaConverter
 * @implements {BrandRepository}
 * @description Concrete implementation of the `BrandRepository` using Sequelize for data persistence.
 * It handles all database operations for the Brand entity and includes caching to improve performance.
 */
export class SequelizeBrandRepository
	extends SequelizeCriteriaConverter
	implements BrandRepository, BrandCacheInvalidator
{
	private readonly cacheKeyPrefix = 'brands'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of brands based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<BrandDto>>} A promise resolving to a paginated response of brand DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<BrandDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = BrandAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<BrandDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await BrandModel.findAndCountAll(finalOptions)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as unknown as ResponseDB<BrandDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single brand by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {string} id The ID of the brand to find.
	 * @returns {Promise<BrandDto | null>} A promise resolving to the brand DTO if found, otherwise null.
	 */
	async findById(id: string): Promise<BrandDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<BrandDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
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
	 * @method findByName
	 * @description Retrieves a single brand by its name.
	 * Caches the result for faster subsequent lookups.
	 * @param {string} name The name of the brand to find.
	 * @returns {Promise<BrandDto | null>} A promise resolving to the brand DTO if found, otherwise null.
	 */
	async findByName(name: string): Promise<BrandDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<BrandDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const brand = await BrandModel.findOne({ where: { name } })
				return brand ? (brand.get({ plain: true }) as BrandDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a brand entity (creates or updates) to the database within a transaction.
	 * It also handles setting the brand's category associations.
	 * After saving, it invalidates relevant cache entries to ensure data consistency.
	 * @param {BrandPrimitives} payload The primitive brand data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails.
	 */
	async save(payload: BrandPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { categories, ...restPayload } = payload
			const [brandInstance] = await BrandModel.upsert(restPayload, { transaction, returning: true })

			if (brandInstance) {
				await brandInstance.setCategories(categories, { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving brand: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a brand from the database by its ID.
	 * After deletion, it invalidates relevant cache entries.
	 * @param {string} id The ID of the brand to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		await BrandModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateBrandCache
	 * @description Invalidates all brands-related cache entries.
	 * Implements BrandCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<BrandId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}
