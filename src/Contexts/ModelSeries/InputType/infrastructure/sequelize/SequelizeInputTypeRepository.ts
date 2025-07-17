import { InputTypeModel } from './InputTypeSchema'
import { type InputTypeRepository } from '../../domain/InputTypeRepository'
import { type InputTypeDto } from '../../domain/InputType.dto'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeInputTypeRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {InputTypeRepository}
 * @description Concrete implementation of the InputTypeRepository using Sequelize.
 * Handles data persistence for InputType entities, including caching mechanisms.
 */
export class SequelizeInputTypeRepository extends CriteriaToSequelizeConverter implements InputTypeRepository {
	private readonly cacheKey: string = 'inputTypes'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of InputType entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<InputTypeDto>>} A promise that resolves to a paginated response containing InputType DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<InputTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<InputTypeDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await InputTypeModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single InputType entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<InputTypeId>} id - The ID of the InputType to search for.
	 * @returns {Promise<InputTypeDto | null>} A promise that resolves to the InputType DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<InputTypeId>): Promise<InputTypeDto | null> {
		return await this.cache.getCachedData<InputTypeDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const inputType = await InputTypeModel.findByPk(id)
				return inputType ? inputType.get({ plain: true }) : null
			}
		})
	}
}
