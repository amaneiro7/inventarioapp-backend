import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationId } from '../../domain/LocationId'
import { type LocationRepository } from '../../domain/LocationRepository'
import { type LocationName } from '../../domain/LocationName'
import { LocationAssociation } from './LocationAssociation'
import { LocationModel } from './LocationSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type LocationDto, type LocationPrimitives } from '../../domain/Location.dto'

/**
 * @class SequelizeLocationRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {LocationRepository}
 * @description Concrete implementation of the LocationRepository using Sequelize.
 * Handles data persistence for Location entities, including caching mechanisms.
 */
export class SequelizeLocationRepository extends CriteriaToSequelizeConverter implements LocationRepository {
	private readonly cacheKey: string = 'locations'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Location entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationDto>>} A promise that resolves to a paginated response containing Location DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<LocationDto>> {
		const options = this.convert(criteria)
		const opt = LocationAssociation.convertFilter(criteria, options)

		return await this.cache.getCachedData<ResponseDB<LocationDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await LocationModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<LocationDto>
			}
		})
	}

	/**
	 * @method matching
	 * @description Retrieves a paginated list of Location entities that match specific criteria,
	 * often used for more complex filtering logic defined in LocationAssociation.
	 * Utilizes caching for improved performance.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<LocationDto>>} A promise that resolves to a paginated response containing Location DTOs.
	 */
	async matching(criteria: Criteria): Promise<ResponseDB<LocationDto>> {
		const options = this.convert(criteria)
		const opt = LocationAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<LocationDto>>({
			cacheKey: `${this.cacheKey}:matching:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await LocationModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<LocationDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Location entity by its unique identifier.
	 * Includes associated type of site, site, city, state, and region data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<LocationId>} id - The ID of the Location to search for.
	 * @returns {Promise<LocationDto | null>} A promise that resolves to the Location DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<LocationId>): Promise<LocationDto | null> {
		return await this.cache.getCachedData<LocationDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const location = await LocationModel.findByPk(id, {
					include: [
						'typeOfSite',
						{
							association: 'site',
							include: [
								{
									association: 'city',
									include: [
										{
											association: 'state',
											include: ['region']
										}
									]
								}
							]
						}
					]
				})
				return location ? (location.get({ plain: true }) as LocationDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Location entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<LocationName>} name - The name of the Location to search for.
	 * @returns {Promise<LocationDto | null>} A promise that resolves to the Location DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<LocationName>): Promise<LocationDto | null> {
		return await this.cache.getCachedData<LocationDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const location = await LocationModel.findOne({ where: { name } })
				return location ? (location.get({ plain: true }) as LocationDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Location entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {LocationPrimitives} payload - The Location data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: LocationPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await LocationModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
	}
}
