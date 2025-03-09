import { StatusModel } from './StatusSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/StatusId'
import { type StatusRepository } from '../../domain/StatusRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type StatusDto } from '../../domain/Status.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeStatusRepository extends CriteriaToSequelizeConverter implements StatusRepository {
	private readonly cacheKey: string = 'status'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<StatusDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			criteria,
			cacheKey: this.cacheKey,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await StatusModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<StatusId>): Promise<StatusDto | null> {
		return (await StatusModel.findByPk(id)) ?? null
	}
}
