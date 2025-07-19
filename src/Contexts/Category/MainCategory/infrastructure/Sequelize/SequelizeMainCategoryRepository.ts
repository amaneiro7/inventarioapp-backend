import { MainCategoryModel } from './MainCategorySchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryRepository } from '../../domain/MainCategoryRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeMainCategoryRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {MainCategoryRepository}
 * @description Concrete implementation of the MainCategoryRepository using Sequelize.
 * Handles data persistence for MainCategory entities, including caching mechanisms.
 */
export class SequelizeMainCategoryRepository extends CriteriaToSequelizeConverter implements MainCategoryRepository {
	private readonly cacheKey: string = 'mainCategories'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of MainCategory entities based on the provided criteria.
	 * Includes associated category data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<MainCategoryDto>>} A promise that resolves to a paginated response containing MainCategory DTOs.
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
	 * @method searchById
	 * @description Retrieves a single MainCategory entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<MainCategoryId>} id - The ID of the MainCategory to search for.
	 * @returns {Promise<MainCategoryDto | null>} A promise that resolves to the MainCategory DTO if found, or null otherwise.
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
