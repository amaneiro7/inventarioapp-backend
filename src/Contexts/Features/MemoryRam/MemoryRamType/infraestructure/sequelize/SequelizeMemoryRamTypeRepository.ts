import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeRepository } from '../../domain/MemoryRamTypeRepository'
import { MemoryRamTypeModel } from './MemoryRamTypeSchema'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type MemoryRamTypeDto } from '../../domain/MemoryRam.dto'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeMemoryRamTypeRepository
 * @extends SequelizeCriteriaConverter
 * @implements {MemoryRamTypeRepository}
 * @description Concrete implementation of the MemoryRamTypeRepository using Sequelize.
 * Handles data persistence for MemoryRamType entities, including caching mechanisms.
 */
export class SequelizeMemoryRamTypeRepository extends SequelizeCriteriaConverter implements MemoryRamTypeRepository {
	private readonly cacheKey: string = 'memoryRamType'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of MemoryRamType entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<MemoryRamTypeDto>>} A promise that resolves to a paginated response containing MemoryRamType DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<MemoryRamTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<MemoryRamTypeDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await MemoryRamTypeModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single MemoryRamType entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<MemoryRamTypeId>} id - The ID of the MemoryRamType to search for.
	 * @returns {Promise<MemoryRamTypeDto | null>} A promise that resolves to the MemoryRamType DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypeDto | null> {
		return await this.cache.getCachedData<MemoryRamTypeDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const memoryRamType = await MemoryRamTypeModel.findByPk(id)
				return memoryRamType ? memoryRamType.get({ plain: true }) : null
			}
		})
	}
}
