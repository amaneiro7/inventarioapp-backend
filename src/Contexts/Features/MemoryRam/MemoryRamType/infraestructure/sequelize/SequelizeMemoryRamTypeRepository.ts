import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { Op } from 'sequelize'
import { MemoryRamTypeModel } from './MemoryRamTypeSchema'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/valueObject/MemoryRamTypeId'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../../domain/entity/MemoryRam.dto'
import { type MemoryRamTypeRepository } from '../../domain/repository/MemoryRamTypeRepository'

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

	async findById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypeDto | null> {
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

	/**
	 * @method findByIds
	 * @description Retrieves multiple memoryRamTypes by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of MemoryRamType IDs to find.
	 * @returns {Promise<MemoryRamTypeDto[]>} A promise resolving to an array of found MemoryRamType DTOs.
	 */
	async findByIds(ids: Primitives<MemoryRamTypeId>[]): Promise<MemoryRamTypeDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<MemoryRamTypeDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const memoryRamTypes = await MemoryRamTypeModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return memoryRamTypes.map(memoryRamType => memoryRamType.get({ plain: true })) as MemoryRamTypeDto[]
			}
		})
	}
}
