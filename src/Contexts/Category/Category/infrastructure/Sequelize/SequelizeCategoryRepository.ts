import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { CategoryModel } from './CategorySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryDto } from '../../domain/Category.dto'
import { type CategoryId } from '../../domain/CategoryId'
import { type CategoryName } from '../../domain/CategoryName'
import { type CategoryRepository } from '../../domain/CategoryRepository'

/**
 * @class SequelizeCategoryRepository
 * @extends SequelizeCriteriaConverter
 * @implements {CategoryRepository}
 * @description Concrete implementation of the `CategoryRepository` using Sequelize.
 * It handles database operations for the Category entity and includes caching to improve performance.
 */
export class SequelizeCategoryRepository extends SequelizeCriteriaConverter implements CategoryRepository {
	private readonly cacheKeyPrefix = 'categories'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of categories based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CategoryDto>>} A promise resolving to a paginated response of category DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>> {
		const sequelizeOptions = this.convert(criteria)
		sequelizeOptions.include = ['mainCategory']
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<CategoryDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await CategoryModel.findAndCountAll(sequelizeOptions)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<CategoryDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single category by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {Primitives<CategoryId>} id The ID of the category to find.
	 * @returns {Promise<CategoryDto | null>} A promise resolving to the category DTO if found, otherwise null.
	 */
	async searchById(id: Primitives<CategoryId>): Promise<CategoryDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<CategoryDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const category = await CategoryModel.findByPk(id)
				return category ? (category.get({ plain: true }) as CategoryDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single category by its name.
	 * Caches the result for faster subsequent lookups.
	 * @param {Primitives<CategoryName>} name The name of the category to find.
	 * @returns {Promise<CategoryDto | null>} A promise resolving to the category DTO if found, otherwise null.
	 */
	async searchByName(name: Primitives<CategoryName>): Promise<CategoryDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<CategoryDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const category = await CategoryModel.findOne({ where: { name } })
				return category ? (category.get({ plain: true }) as CategoryDto) : null
			}
		})
	}
}
