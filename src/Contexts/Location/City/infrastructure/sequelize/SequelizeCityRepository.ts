import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CityPrimitives, type CityDto } from '../../domain/City.dto'
import { type CityId } from '../../domain/CityId'
import { type CityRepository } from '../../domain/CityRepository'
import { type CityName } from '../../domain/CityName'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CityModel } from './CitySchema'
import { CityAssociation } from './CityAssociation'

/**
 * @class SequelizeCityRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {CityRepository}
 * @description Concrete implementation of the CityRepository using Sequelize.
 * Handles data persistence for City entities, including caching mechanisms.
 */
export class SequelizeCityRepository extends CriteriaToSequelizeConverter implements CityRepository {
	private readonly cacheKey: string = 'cities'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of City entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CityDto>>} A promise that resolves to a paginated response containing City DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>> {
		const options = CityAssociation.converFilter(criteria, this.convert(criteria))
		return await this.cache.getCachedData<ResponseDB<CityDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CityModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<CityDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single City entity by its unique identifier.
	 * Includes associated state, region, and administrative region data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<CityId>} id - The ID of the City to search for.
	 * @returns {Promise<CityDto | null>} A promise that resolves to the City DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<CityId>): Promise<CityDto | null> {
		return await this.cache.getCachedData<CityDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const city = await CityModel.findByPk(id, {
					include: [
						{
							association: 'state',
							include: [
								{
									association: 'region',
									include: ['administrativeRegion']
								}
							]
						}
					]
				})
				return city ? (city.get({ plain: true }) as CityDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single City entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CityName>} name - The name of the City to search for.
	 * @returns {Promise<CityDto | null>} A promise that resolves to the City DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<CityName>): Promise<CityDto | null> {
		return await this.cache.getCachedData<CityDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const city = await CityModel.findOne({
					where: { name }
				})
				return city ? (city.get({ plain: true }) as CityDto) : null
			}
		})
	}

	/**
	 * @method remove
	 * @description Deletes a City entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the City to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		// Retrieve the city to get its name for cache invalidation
		const cityToRemove = await CityModel.findByPk(id)

		await CityModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (cityToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${cityToRemove.name}` })
		}
	}

	/**
	 * @method save
	 * @description Saves a City entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {CityPrimitives} payload - The City data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: CityPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await CityModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
	}
}
