import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type HardDriveCapacityDto } from '../../domain/HardDriveCapacity.dto'
import { type HardDriveCapacityId } from '../../domain/HardDriveCapacityId'
import { type HardDriveCapacityRepository } from '../../domain/HardDriveCapacityRepository'
import { HardDriveCapacityModel } from './HardDriveCapacitySchema'

/**
 * @class SequelizeHardDriveCapacityRepository
 * @extends SequelizeCriteriaConverter
 * @implements {HardDriveCapacityRepository}
 * @description Concrete implementation of the HardDriveCapacityRepository using Sequelize.
 * Handles data persistence for HardDriveCapacity entities, including caching mechanisms.
 */
export class SequelizeHardDriveCapacityRepository
	extends SequelizeCriteriaConverter
	implements HardDriveCapacityRepository
{
	private readonly cacheKey: string = 'hardDriveCapacities'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of HardDriveCapacity entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<HardDriveCapacityDto>>} A promise that resolves to a paginated response containing HardDriveCapacity DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveCapacityDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<HardDriveCapacityDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await HardDriveCapacityModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single HardDriveCapacity entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<HardDriveCapacityId>} id - The ID of the HardDriveCapacity to search for.
	 * @returns {Promise<HardDriveCapacityDto | null>} A promise that resolves to the HardDriveCapacity DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityDto | null> {
		return await this.cache.getCachedData<HardDriveCapacityDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const hardDriveCapacity = await HardDriveCapacityModel.findByPk(id)
				return hardDriveCapacity ? hardDriveCapacity.get({ plain: true }) : null
			}
		})
	}
}
