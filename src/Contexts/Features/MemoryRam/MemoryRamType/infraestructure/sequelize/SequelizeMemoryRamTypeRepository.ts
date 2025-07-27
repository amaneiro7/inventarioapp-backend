import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeRepository } from '../../domain/MemoryRamTypeRepository'
import { MemoryRamTypeModel } from './MemoryRamTypeSchema'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../../domain/MemoryRam.dto'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

/**
 * @description Sequelize implementation of the MemoryRamTypeRepository.
 */
export class SequelizeMemoryRamTypeRepository extends SequelizeCriteriaConverter implements MemoryRamTypeRepository {
	private readonly cacheKeyPrefix = 'memoryRamType'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<MemoryRamTypeDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<MemoryRamTypeDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await MemoryRamTypeModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async searchById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypeDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<MemoryRamTypeDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const memoryRamType = await MemoryRamTypeModel.findByPk(id)
				return memoryRamType ? memoryRamType.get({ plain: true }) : null
			}
		})
	}
}
