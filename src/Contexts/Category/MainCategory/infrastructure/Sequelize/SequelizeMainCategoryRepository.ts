import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MainCategoryModel } from './MainCategorySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryRepository } from '../../domain/MainCategoryRepository'

/**
 * @class SequelizeMainCategoryRepository
 * @extends SequelizeCriteriaConverter
 * @implements {MainCategoryRepository}
 * @description Concrete implementation of the `MainCategoryRepository` using Sequelize.
 * It handles database operations for the Main Category entity and includes caching.
 */
export class SequelizeMainCategoryRepository extends SequelizeCriteriaConverter implements MainCategoryRepository {
	private readonly cacheKeyPrefix = 'mainCategories'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of main categories based on specified criteria.
	 * Caches the results to optimize performance.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<MainCategoryDto>>} A promise resolving to a paginated response of main category DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>> {
		const sequelizeOptions = this.convert(criteria)
		sequelizeOptions.include = ['category']
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<MainCategoryDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await MainCategoryModel.findAndCountAll(sequelizeOptions)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single main category by its unique identifier.
	 * Caches the result for faster lookups.
	 * @param {Primitives<MainCategoryId>} id The ID of the main category to find.
	 * @returns {Promise<MainCategoryDto | null>} A promise resolving to the main category DTO if found, otherwise null.
	 */
	async findById(id: Primitives<MainCategoryId>): Promise<MainCategoryDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<MainCategoryDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const mainCategory = await MainCategoryModel.findByPk(id)
				return mainCategory ? mainCategory.get({ plain: true }) : null
			}
		})
	}
}
