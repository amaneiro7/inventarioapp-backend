import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type AdministrativeRegionDto } from '../../domain/AdministrativeRegion.dto'
import { type AdministrativeRegionId } from '../../domain/AdministrativeRegionId'
import { type AdministrativeRegionRepository } from '../../domain/AdministrativeRegionRepository'
import { AdministrativeRegionModel } from './AdministrativeRegionSchema'

/**
 * @class SequelizeAdministrativeRegionRepository
 * @extends SequelizeCriteriaConverter
 * @implements {AdministrativeRegionRepository}
 * @description Concrete implementation of the AdministrativeRegionRepository using Sequelize.
 * Handles data persistence for AdministrativeRegion entities, including caching mechanisms.
 */
export class SequelizeAdministrativeRegionRepository
	extends SequelizeCriteriaConverter
	implements AdministrativeRegionRepository
{
	private readonly cacheKey: string = 'administrativeRegions'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of AdministrativeRegion entities based on the provided criteria.
	 * Includes associated region data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<AdministrativeRegionDto>>} A promise that resolves to a paginated response containing AdministrativeRegion DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<AdministrativeRegionDto>> {
		const options = this.convert(criteria)
		options.include = ['region']
		return await this.cache.getCachedData<ResponseDB<AdministrativeRegionDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await AdministrativeRegionModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single AdministrativeRegion entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<AdministrativeRegionId>} id - The ID of the AdministrativeRegion to search for.
	 * @returns {Promise<AdministrativeRegionDto | null>} A promise that resolves to the AdministrativeRegion DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<AdministrativeRegionId>): Promise<AdministrativeRegionDto | null> {
		return await this.cache.getCachedData<AdministrativeRegionDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const administrativeRegion = await AdministrativeRegionModel.findByPk(id)
				return administrativeRegion ? administrativeRegion.get({ plain: true }) : null
			}
		})
	}
}
