import { StatusModel } from './StatusSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/StatusId'
import { type StatusRepository } from '../../domain/StatusRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type StatusDto } from '../../domain/Status.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class SequelizeStatusRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {StatusRepository}
 * @description Concrete implementation of the StatusRepository using Sequelize.
 * Handles data persistence for Status entities, including caching mechanisms.
 */
export class SequelizeStatusRepository extends CriteriaToSequelizeConverter implements StatusRepository {
	private readonly cacheKey: string = 'status'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Status entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<StatusDto>>} A promise that resolves to a paginated response containing Status DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<StatusDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<StatusDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await StatusModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Status entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<StatusId>} id - The ID of the Status to search for.
	 * @returns {Promise<StatusDto | null>} A promise that resolves to the Status DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<StatusId>): Promise<StatusDto | null> {
		return await this.cache.getCachedData<StatusDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const status = await StatusModel.findByPk(id)
				return status ? status.get({ plain: true }) : null
			}
		})
	}
}
