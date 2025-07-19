import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from '../../domain/HardDriveTypeId'
import { type HardDriveTypeRepository } from '../../domain/HardDriveTypeRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { HardDriveTypeModel } from './HardDriveTypeSchema'
import { type HardDriveTypeDto } from '../../domain/HardDriveType.dto'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeHardDriveTypeRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {HardDriveTypeRepository}
 * @description Concrete implementation of the HardDriveTypeRepository using Sequelize.
 * Handles data persistence for HardDriveType entities, including caching mechanisms.
 */
export class SequelizeHardDriveTypeRepository extends CriteriaToSequelizeConverter implements HardDriveTypeRepository {
	private readonly cacheKey: string = 'hardDriveType'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of HardDriveType entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<HardDriveTypeDto>>} A promise that resolves to a paginated response containing HardDriveType DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<HardDriveTypeDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await HardDriveTypeModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single HardDriveType entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<HardDriveTypeId>} id - The ID of the HardDriveType to search for.
	 * @returns {Promise<HardDriveTypeDto | null>} A promise that resolves to the HardDriveType DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<HardDriveTypeId>): Promise<HardDriveTypeDto | null> {
		return await this.cache.getCachedData<HardDriveTypeDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const hardDriveType = await HardDriveTypeModel.findByPk(id)
				return hardDriveType ? hardDriveType.get({ plain: true }) : null
			}
		})
	}
}
