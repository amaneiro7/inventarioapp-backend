import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ISPLinkModel } from './ISPLinkSchema'
import { ISPLinkAssociation } from './ISPLinkAssociation'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { Op } from 'sequelize'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ISPLinkRepository } from '../../domain/repository/ISPLinkRepository'
import { type ISPLinkName } from '../../domain/valueObject/ISPLinkName'
import { type ISPLinkDto, type ISPLinkPrimitives } from '../../domain/entity/ISPLink.dto'
import { type ISPLinkId } from '../../domain/valueObject/ISPLinkId'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @class SequelizeISPLinkRepository
 * @extends SequelizeCriteriaConverter
 * @implements {ISPLinkRepository}
 * @description Concrete implementation of the ISPLinkRepository using Sequelize.
 * Handles data persistence for ISPLink entities, including caching mechanisms.
 */
export class SequelizeISPLinkRepository
	extends SequelizeCriteriaConverter
	implements ISPLinkRepository, CacheInvalidator
{
	private readonly cacheKey: string = 'ispLinks'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of ISPLink entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ISPLinkDto>>} A promise that resolves to a paginated response containing ISPLink DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<ISPLinkDto>> {
		const options = ISPLinkAssociation.converFilter(criteria, this.convert(criteria))
		return await this.cache.getCachedData<ResponseDB<ISPLinkDto>>({
			cacheKey: `${this.cacheKey}:lists:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await ISPLinkModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<ISPLinkDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single ISPLink entity by its unique identifier.
	 * Includes associated locations data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<ISPLinkId>} id - The ID of the ISPLink to search for.
	 * @returns {Promise<ISPLinkDto | null>} A promise that resolves to the ISPLink DTO if found, or null otherwise.
	 */
	async findById(id: Primitives<ISPLinkId>): Promise<ISPLinkDto | null> {
		return await this.cache.getCachedData<ISPLinkDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const ispLink = await ISPLinkModel.findByPk(id, {
					include: [
						{
							association: 'locations',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return ispLink ? (ispLink.get({ plain: true }) as ISPLinkDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple ispLink by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<ISPLinkDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<ISPLinkDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKey}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<ISPLinkDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const ispLink = await ISPLinkModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return ispLink.map(link => link.get({ plain: true })) as ISPLinkDto[]
			}
		})
	}

	/**
	 * @method findByName
	 * @description Retrieves a single ISPLink entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<ISPLinkName>} name - The name of the ISPLink to search for.
	 * @returns {Promise<ISPLinkDto | null>} A promise that resolves to the ISPLink DTO if found, or null otherwise.
	 */
	async findByName(name: Primitives<ISPLinkName>): Promise<ISPLinkDto | null> {
		return await this.cache.getCachedData<ISPLinkDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const ispLink = await ISPLinkModel.findOne({
					where: { name }
				})
				return ispLink ? (ispLink.get({ plain: true }) as ISPLinkDto) : null
			}
		})
	}

	/**
	 * @method remove
	 * @description Deletes a ISPLink entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the ISPLink to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		await ISPLinkModel.destroy({ where: { id } })
	}

	/**
	 * @method save
	 * @description Saves a ISPLink entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {ISPLinkPrimitives} payload - The ISPLink data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: ISPLinkPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await ISPLinkModel.upsert(payload)
	}

	/**
	 * @method invalidateISPLinkCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements ISPLinkCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<ISPLinkId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}
