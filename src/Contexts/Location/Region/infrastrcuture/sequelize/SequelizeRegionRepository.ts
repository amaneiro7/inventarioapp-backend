import { RegionModel } from './RegionSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionPrimitives, type RegionDto } from '../../domain/Region.dto'
import { type RegionId } from '../../domain/RegionId'
import { type RegionRepository } from '../../domain/RegionRepository'

export class SequelizeRegionRepository extends CriteriaToSequelizeConverter implements RegionRepository {
	private readonly cacheKey: string = 'regions'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<RegionDto>> {
		const options = this.convert(criteria)
		options.include = ['state']
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await RegionModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<RegionId>): Promise<RegionDto | null> {
		return (await RegionModel.findByPk(id)) ?? null
	}

	async save(payload: RegionPrimitives): Promise<void> {
		const { id } = payload
		const region = (await RegionModel.findByPk(id)) ?? null
		if (!region) {
			await RegionModel.create({ ...payload })
		} else {
			region.set({ ...payload })
			await region.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}
