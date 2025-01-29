import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type ProcessorSocketDto } from '../../domain/ProcessorSocket.dto'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketRepository } from '../../domain/ProcessorSocketRepository'
import { ProcessorSocketModel } from './ProcessorSocketSchema'

export class SequelizeProcessorSocketRepository
	extends CriteriaToSequelizeConverter
	implements ProcessorSocketRepository
{
	private readonly cacheKey: string = 'processorSocket'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(
		criteria: Criteria
	): Promise<ResponseDB<ProcessorSocketDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { rows, count } =
					await ProcessorSocketModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<ProcessorSocketId>
	): Promise<ProcessorSocketDto | null> {
		return (await ProcessorSocketModel.findByPk(id)) ?? null
	}
}
