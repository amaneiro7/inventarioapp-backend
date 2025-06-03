import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { LocationStatusModel } from './LocationStatusSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusDto } from '../../domain/LocationStatus.dto'
import { type LocationStatusId } from '../../domain/LocationStatusId'
import { type LocationStatusRepository } from '../../domain/LocationStatusRepository'

export class SequelizeLocationStatusRepository
	extends CriteriaToSequelizeConverter
	implements LocationStatusRepository
{
	private readonly cacheKey: string = 'locationStatus'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationStatusDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await LocationStatusModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<LocationStatusId>): Promise<LocationStatusDto | null> {
		return (await LocationStatusModel.findByPk(id)) ?? null
	}
}
