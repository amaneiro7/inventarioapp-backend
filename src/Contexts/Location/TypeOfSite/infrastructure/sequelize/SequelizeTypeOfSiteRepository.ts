import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TypeOfSiteModel } from './TypeOfSiteSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteDto } from '../../domain/entity/TypeOfSite.dto'
import { type TypeOfSiteId } from '../../domain/valueObject/TypeOfSiteId'
import { type TypeOfSiteRepository } from '../../domain/repository/TypeOfSiteRepository'

/**
 * @class SequelizeTypeOfSiteRepository
 * @extends SequelizeCriteriaConverter
 * @implements {TypeOfSiteRepository}
 * @description Concrete implementation of the TypeOfSiteRepository using Sequelize.
 * Handles data persistence for TypeOfSite entities, including caching mechanisms.
 */
export class SequelizeTypeOfSiteRepository extends SequelizeCriteriaConverter implements TypeOfSiteRepository {
	private readonly cacheKey: string = 'typeOfSite'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of TypeOfSite entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<TypeOfSiteDto>>} A promise that resolves to a paginated response containing TypeOfSite DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<TypeOfSiteDto>> {
		const options = this.convert(criteria)

		return await this.cache.getCachedData<ResponseDB<TypeOfSiteDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await TypeOfSiteModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single TypeOfSite entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<TypeOfSiteId>} id - The ID of the TypeOfSite to search for.
	 * @returns {Promise<TypeOfSiteDto | null>} A promise that resolves to the TypeOfSite DTO if found, or null otherwise.
	 */
	async findById(id: Primitives<TypeOfSiteId>): Promise<TypeOfSiteDto | null> {
		return await this.cache.getCachedData<TypeOfSiteDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const typeOfSite = await TypeOfSiteModel.findByPk(id)
				return typeOfSite ? typeOfSite.get({ plain: true }) : null
			}
		})
	}
}
