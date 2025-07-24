import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../../domain/OperatingSystemArqID'
import { type OperatingSystemArqRepository } from '../../domain/OperatingSystemArqRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { OperatingSystemArqModel } from './OperatingSystemArqSchema'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type OperatingSystemArqDto } from '../../domain/OperatingSystemArq.dto'
import { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeOperatingSystemArqRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {OperatingSystemArqRepository}
 * @description Concrete implementation of the OperatingSystemArqRepository using Sequelize.
 * Handles data persistence for OperatingSystemArq entities, including caching mechanisms.
 */
export class SequelizeOperatingSystemArqRepository
	extends CriteriaToSequelizeConverter
	implements OperatingSystemArqRepository
{
	private readonly cacheKey: string = 'operatingSystemArq'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of OperatingSystemArq entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<OperatingSystemArqDto>>} A promise that resolves to a paginated response containing OperatingSystemArq DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemArqDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<OperatingSystemArqDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await OperatingSystemArqModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single OperatingSystemArq entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<OperatingSystemArqId>} id - The ID of the OperatingSystemArq to search for.
	 * @returns {Promise<OperatingSystemArqDto | null>} A promise that resolves to the OperatingSystemArq DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<OperatingSystemArqId>): Promise<OperatingSystemArqDto | null> {
		return await this.cache.getCachedData<OperatingSystemArqDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const operatingSystemArq = await OperatingSystemArqModel.findByPk(id)
				return operatingSystemArq ? operatingSystemArq.get({ plain: true }) : null
			}
		})
	}
}
