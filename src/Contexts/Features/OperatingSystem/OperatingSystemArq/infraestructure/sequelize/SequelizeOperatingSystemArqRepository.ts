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

export class SequelizeOperatingSystemArqRepository
	extends CriteriaToSequelizeConverter
	implements OperatingSystemArqRepository
{
	private readonly cacheKey: string = 'operatingSystemArq'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(
		criteria: Criteria
	): Promise<ResponseDB<OperatingSystemArqDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } =
					await OperatingSystemArqModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<OperatingSystemArqId>
	): Promise<OperatingSystemArqDto | null> {
		return (await OperatingSystemArqModel.findByPk(id)) ?? null
	}
}
