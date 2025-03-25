import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { CriteriaToSequelizeConverter } from '../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type HistoryDto, type HistoryPrimitives } from '../../domain/History.dto'
import { type HistoryRepository } from '../../domain/HistoryRepository'
import { HistoryAssociation } from './HistoryAssociation'
import { HistoryModel } from './HistorySchema'

export class SequelizeHistoryRepository extends CriteriaToSequelizeConverter implements HistoryRepository {
	private readonly cacheKey: string = 'histories'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<HistoryDto>> {
		const options = this.convert(criteria)
		const opt = HistoryAssociation.converFilter(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await HistoryModel.findAndCountAll(opt)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async save(payload: HistoryPrimitives): Promise<void> {
		await HistoryModel.create(payload)
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
