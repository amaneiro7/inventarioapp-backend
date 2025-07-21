import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryRepository } from '../../domain/MainCategoryRepository'
import { MainCategoryModel } from './MainCategorySchema'

/**
 * Sequelize implementation of the MainCategoryRepository.
 * Handles data persistence for MainCategory entities using Sequelize, with caching capabilities.
 *
 * @class SequelizeMainCategoryRepository
 * @extends {CriteriaToSequelizeConverter}
 * @implements {MainCategoryRepository}
 */
export class SequelizeMainCategoryRepository extends CriteriaToSequelizeConverter implements MainCategoryRepository {
	private readonly cacheKey: string = 'mainCategories'

	/**
	 * Creates an instance of SequelizeMainCategoryRepository.
	 * @param {CacheService} cache - The cache service for storing and retrieving cached data.
	 */
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * Retrieves a paginated list of main categories based on the provided criteria.
	 * Results are cached to improve performance.
	 *
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<MainCategoryDto>>} A promise that resolves to a paginated response of main categories.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>> {
		const options = this.convert(criteria)
		options.include = ['category']
		return await this.cache.getCachedData<ResponseDB<MainCategoryDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await MainCategoryModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * Retrieves a single main category by its unique identifier.
	 * Results are cached for faster subsequent lookups.
	 *
	 * @param {Primitives<MainCategoryId>} id - The ID of the main category to search for.
	 * @returns {Promise<MainCategoryDto | null>} A promise that resolves to the main category DTO if found, otherwise null.
	 */
	async searchById(id: Primitives<MainCategoryId>): Promise<MainCategoryDto | null> {
		return await this.cache.getCachedData<MainCategoryDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const mainCategory = await MainCategoryModel.findByPk(id)
				return mainCategory ? mainCategory.get({ plain: true }) : null
			}
		})
	}
}
