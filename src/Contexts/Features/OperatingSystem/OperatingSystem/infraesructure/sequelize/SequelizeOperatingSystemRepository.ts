import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemDto } from '../../domain/OperatingSystem.dto'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemRepository } from '../../domain/OperatingSystemRepository'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { OperatingSystemModel } from './OperatingSystemSchema'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeOperatingSystemRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {OperatingSystemRepository}
 * @description Concrete implementation of the OperatingSystemRepository using Sequelize.
 * Handles data persistence for OperatingSystem entities, including caching mechanisms.
 */
export class SequelizeOperatingSystemRepository
	extends CriteriaToSequelizeConverter
	implements OperatingSystemRepository
{
	private readonly cacheKey: string = 'operatingSystem'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of OperatingSystem entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<OperatingSystemDto>>} A promise that resolves to a paginated response containing OperatingSystem DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<OperatingSystemDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await OperatingSystemModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single OperatingSystem entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<OperatingSystemId>} id - The ID of the OperatingSystem to search for.
	 * @returns {Promise<OperatingSystemDto | null>} A promise that resolves to the OperatingSystem DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<OperatingSystemId>): Promise<OperatingSystemDto | null> {
		return await this.cache.getCachedData<OperatingSystemDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const operatingSystem = await OperatingSystemModel.findByPk(id)
				return operatingSystem ? operatingSystem.get({ plain: true }) : null
			}
		})
	}
}
