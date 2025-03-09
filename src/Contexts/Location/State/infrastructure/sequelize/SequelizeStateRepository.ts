import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateDto } from '../../domain/State.dto'
import { type StateId } from '../../domain/StateId'
import { type StateRepository } from '../../domain/StateRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { StateModel } from './StateSchema'

export class SequelizeStateRepository extends CriteriaToSequelizeConverter implements StateRepository {
	private readonly cacheKey: string = 'states'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<StateDto>> {
		const options = this.convert(criteria)

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await StateModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<StateId>): Promise<StateDto | null> {
		return (await StateModel.findByPk(id)) ?? null
	}
}
