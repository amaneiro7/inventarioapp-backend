import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RegionPrimitives } from '../../domain/Region'
import { type RegionId } from '../../domain/RegionId'
import { RegionRepository } from '../../domain/RegionRepository'
import { RegionModel } from './RegionSchema'

export class SequelizeRegionRepository implements RegionRepository {
	private readonly cacheKey: string = 'regions'
	constructor(private readonly cache: CacheService) {}
	async searchAll(): Promise<RegionPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await RegionModel.findAll({
				include: ['state']
			})
		})
	}

	async searchById(
		id: Primitives<RegionId>
	): Promise<RegionPrimitives | null> {
		return (await RegionModel.findByPk(id)) ?? null
	}
}
