import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeRepository } from '../../domain/MemoryRamTypeRepository'
import { MemoryRamTypeModel } from './MemoryRamTypeSchema'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../../domain/MemoryRam.dto'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

export class SequelizeMemoryRamTypeRepository extends CriteriaToSequelizeConverter implements MemoryRamTypeRepository {
	private readonly cacheKey: string = 'memoryRamType'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<MemoryRamTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await MemoryRamTypeModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypeDto | null> {
		return (await MemoryRamTypeModel.findByPk(id)) ?? null
	}
}
