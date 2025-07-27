import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ProcessorSocketModel } from './ProcessorSocketSchema'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketDto } from '../../domain/ProcessorSocket.dto'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketRepository } from '../../domain/ProcessorSocketRepository'

/**
 * @description Sequelize implementation of the ProcessorSocketRepository.
 */
export class SequelizeProcessorSocketRepository
	extends SequelizeCriteriaConverter
	implements ProcessorSocketRepository
{
	private readonly cacheKeyPrefix = 'processorSocket'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorSocketDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<ProcessorSocketDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorSocketModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async searchById(id: Primitives<ProcessorSocketId>): Promise<ProcessorSocketDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<ProcessorSocketDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processorSocket = await ProcessorSocketModel.findByPk(id)
				return processorSocket ? processorSocket.get({ plain: true }) : null
			}
		})
	}
}
