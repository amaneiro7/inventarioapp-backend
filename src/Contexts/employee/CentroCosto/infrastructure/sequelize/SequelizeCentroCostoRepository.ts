import { type CentroCostoRepository } from '../../domain/CentroCostoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroCostoModel } from './CentroCostoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CentroCostoPrimitives, type CentroCostoDto } from '../../domain/CentroCosto.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeCentroCostoRepository
 * @extends SequelizeCriteriaConverter
 * @implements {CentroCostoRepository}
 * @description Concrete implementation of the CentroCostoRepository using Sequelize.
 * Handles data persistence for CentroCosto entities, including caching mechanisms.
 */
export class SequelizeCentroCostoRepository extends SequelizeCriteriaConverter implements CentroCostoRepository {
	private readonly cacheKey: string = 'CentroCostos'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of CentroCosto entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CentroCostoDto>>} A promise that resolves to a paginated response containing CentroCosto DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroCostoDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<CentroCostoDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CentroCostoModel.findAndCountAll(options)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single CentroCosto entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<CodCentroCosto>} id - The ID of the CentroCosto to search for.
	 * @returns {Promise<Nullable<CentroCostoDto>>} A promise that resolves to the CentroCosto DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<CodCentroCosto>): Promise<Nullable<CentroCostoDto>> {
		return await this.cache.getCachedData<Nullable<CentroCostoDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroCosto = await CentroCostoModel.findByPk(id)
				return centroCosto ? centroCosto.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single CentroCosto entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CentroCostoName>} name - The name of the CentroCosto to search for.
	 * @returns {Promise<Nullable<CentroCostoDto>>} A promise that resolves to the CentroCosto DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<CentroCostoName>): Promise<Nullable<CentroCostoDto>> {
		return await this.cache.getCachedData<Nullable<CentroCostoDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroCosto = await CentroCostoModel.findOne({ where: { name } })
				return centroCosto ? centroCosto.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a CentroCosto entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {CentroCostoPrimitives} payload - The CentroCosto data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: CentroCostoPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await CentroCostoModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
	}

	/**
	 * @method remove
	 * @description Deletes a CentroCosto entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<CodCentroCosto>} id - The ID of the CentroCosto to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<CodCentroCosto>): Promise<void> {
		// Retrieve the CentroCosto to get its name for cache invalidation
		const centroCostoToRemove = await CentroCostoModel.findByPk(id)

		await CentroCostoModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (centroCostoToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${centroCostoToRemove.name}` })
		}
	}
}
