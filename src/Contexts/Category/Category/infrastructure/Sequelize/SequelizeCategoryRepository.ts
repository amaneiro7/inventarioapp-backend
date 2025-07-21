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
 * Sequelize implementation of the CategoryRepository.
 * Handles data persistence for Category entities using Sequelize, with caching capabilities.
 *
 * @class SequelizeCategoryRepository
 * @extends {SequelizeCriteriaConverter}
 * @implements {CategoryRepository}
 */
export class SequelizeCategoryRepository extends SequelizeCriteriaConverter implements CategoryRepository {
	private readonly cacheKey: string = 'categories'

	/**
	 * Creates an instance of SequelizeCategoryRepository.
	 * @param {CacheService} cache - The cache service for storing and retrieving cached data.
	 */
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * Retrieves a paginated list of categories based on the provided criteria.
	 * Results are cached to improve performance.
	 *
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CategoryDto>>} A promise that resolves to a paginated response of categories.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>> {
		const options = this.convert(criteria)
		options.include = ['mainCategory']
		return await this.cache.getCachedData<ResponseDB<CategoryDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await CategoryModel.findAndCountAll(options)

				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * Retrieves a single category by its unique identifier.
	 * Results are cached for faster subsequent lookups.
	 *
	 * @param {Primitives<CategoryId>} id - The ID of the category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category DTO if found, otherwise null.
	 */
	async searchById(id: Primitives<CategoryId>): Promise<CategoryDto | null> {
		return await this.cache.getCachedData<CategoryDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const category = await CategoryModel.findByPk(id)
				return category ? category.get({ plain: true }) : null
			}
		})
	}

	/**
	 * Retrieves a single category by its name.
	 * Results are cached for faster subsequent lookups.
	 *
	 * @param {Primitives<CategoryName>} name - The name of the category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the category DTO if found, otherwise null.
	 */
	async searchByName(name: Primitives<CategoryName>): Promise<CategoryDto | null> {
		return await this.cache.getCachedData<CategoryDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const category = await CategoryModel.findOne({ where: { name } })
				return category ? category.get({ plain: true }) : null
			}
		})
	}
}
