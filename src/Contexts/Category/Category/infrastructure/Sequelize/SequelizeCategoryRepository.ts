import { CategoryModel } from './CategorySchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryId } from '../../domain/CategoryId'
import { type CategoryName } from '../../domain/CategoryName'
import { type CategoryRepository } from '../../domain/CategoryRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CategoryDto } from '../../domain/Category.dto'

/**
 * @class SequelizeCategoryRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {CategoryRepository}
 * @description Concrete implementation of the CategoryRepository using Sequelize.
 * Handles data persistence for Category entities, including caching mechanisms.
 */
export class SequelizeCategoryRepository extends SequelizeCriteriaConverter implements CategoryRepository {
	private readonly cacheKey: string = 'categories'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Category entities based on the provided criteria.
	 * Includes associated mainCategory data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CategoryDto>>} A promise that resolves to a paginated response containing Category DTOs.
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
	 * @method searchById
	 * @description Retrieves a single Category entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<CategoryId>} id - The ID of the Category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the Category DTO if found, or null otherwise.
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
	 * @method searchByName
	 * @description Retrieves a single Category entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CategoryName>} name - The name of the Category to search for.
	 * @returns {Promise<CategoryDto | null>} A promise that resolves to the Category DTO if found, or null otherwise.
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
