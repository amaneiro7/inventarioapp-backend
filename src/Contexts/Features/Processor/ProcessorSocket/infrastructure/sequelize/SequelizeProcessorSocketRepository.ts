import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ProcessorSocketModel } from './ProcessorSocketSchema'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketDto } from '../../domain/ProcessorSocket.dto'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketRepository } from '../../domain/ProcessorSocketRepository'

/**
 * @class SequelizeProcessorSocketRepository
 * @extends SequelizeCriteriaConverter
 * @implements {ProcessorSocketRepository}
 * @description Concrete implementation of the ProcessorSocketRepository using Sequelize.
 * Handles data persistence for ProcessorSocket entities, including caching mechanisms.
 */
export class SequelizeProcessorSocketRepository
	extends SequelizeCriteriaConverter
	implements ProcessorSocketRepository
{
	private readonly cacheKey: string = 'processorSocket'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of ProcessorSocket entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ProcessorSocketDto>>} A promise that resolves to a paginated response containing ProcessorSocket DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorSocketDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<ProcessorSocketDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorSocketModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single ProcessorSocket entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<ProcessorSocketId>} id - The ID of the ProcessorSocket to search for.
	 * @returns {Promise<ProcessorSocketDto | null>} A promise that resolves to the ProcessorSocket DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<ProcessorSocketId>): Promise<ProcessorSocketDto | null> {
		return await this.cache.getCachedData<ProcessorSocketDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processorSocket = await ProcessorSocketModel.findByPk(id)
				return processorSocket ? processorSocket.get({ plain: true }) : null
			}
		})
	}
}
