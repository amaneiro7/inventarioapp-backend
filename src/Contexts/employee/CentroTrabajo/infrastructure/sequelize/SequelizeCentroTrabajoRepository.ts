import { type CentroTrabajoRepository } from '../../domain/CentroTrabajoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CentroTrabajoId } from '../../domain/CentroTrabajoId'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroTrabajoModel } from './CentroTrabajoSchema'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CentroTrabajoDto, type CentroTrabajoPrimitives } from '../../domain/CentroTrabajo.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class SequelizeCentroTrabajoRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {CentroTrabajoRepository}
 * @description Concrete implementation of the CentroTrabajoRepository using Sequelize.
 * Handles data persistence for CentroTrabajo entities, including caching mechanisms.
 */
export class SequelizeCentroTrabajoRepository extends CriteriaToSequelizeConverter implements CentroTrabajoRepository {
	private readonly cacheKey: string = 'CentroTrabajos'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of CentroTrabajo entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CentroTrabajoDto>>} A promise that resolves to a paginated response containing CentroTrabajo DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroTrabajoDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<CentroTrabajoDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CentroTrabajoModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<CentroTrabajoDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single CentroTrabajo entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<CentroTrabajoId>} id - The ID of the CentroTrabajo to search for.
	 * @returns {Promise<Nullable<CentroTrabajoDto>>} A promise that resolves to the CentroTrabajo DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<CentroTrabajoId>): Promise<Nullable<CentroTrabajoDto>> {
		return await this.cache.getCachedData<Nullable<CentroTrabajoDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroTrabajo = await CentroTrabajoModel.findByPk(id)
				return centroTrabajo ? (centroTrabajo.get({ plain: true }) as CentroTrabajoDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single CentroTrabajo entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CentroTrabajoName>} name - The name of the CentroTrabajo to search for.
	 * @returns {Promise<Nullable<CentroTrabajoDto>>} A promise that resolves to the CentroTrabajo DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<CentroTrabajoName>): Promise<Nullable<CentroTrabajoDto>> {
		return await this.cache.getCachedData<Nullable<CentroTrabajoDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroTrabajo = await CentroTrabajoModel.findOne({ where: { name } })
				return centroTrabajo ? (centroTrabajo.get({ plain: true }) as CentroTrabajoDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a CentroTrabajo entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {CentroTrabajoPrimitives} payload - The CentroTrabajo data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: CentroTrabajoPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await CentroTrabajoModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
	}

	/**
	 * @method remove
	 * @description Deletes a CentroTrabajo entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<CentroTrabajoId>} id - The ID of the CentroTrabajo to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<CentroTrabajoId>): Promise<void> {
		// Retrieve the CentroTrabajo to get its name for cache invalidation
		const centroTrabajoToRemove = await CentroTrabajoModel.findByPk(id)

		await CentroTrabajoModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (centroTrabajoToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${centroTrabajoToRemove.name}` })
		}
	}
}
