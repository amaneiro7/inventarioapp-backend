import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemDto } from '../../domain/OperatingSystem.dto'
import { type OperatingSystemId } from '../../domain/OperatingSystemId'
import { type OperatingSystemRepository } from '../../domain/OperatingSystemRepository'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { OperatingSystemModel } from './OperatingSystemSchema'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

export class SequelizeOperatingSystemRepository
	extends CriteriaToSequelizeConverter
	implements OperatingSystemRepository
{
	private readonly cacheKey: string = 'operatingSystem'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { rows, count } = await OperatingSystemModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<OperatingSystemId>): Promise<OperatingSystemDto | null> {
		return (await OperatingSystemModel.findByPk(id)) ?? null
	}
}
