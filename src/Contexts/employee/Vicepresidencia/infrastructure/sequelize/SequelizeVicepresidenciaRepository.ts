import { VicepresidenciaModel } from './VicepresidenciaSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type VicepresidenciaDto, type VicepresidenciaPrimitives } from '../../domain/Vicepresidencia.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @class SequelizeVicepresidenciaRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {DepartmentRepository<VicepresidenciaDto>}
 * @description Concrete implementation of the VicepresidenciaRepository using Sequelize.
 * Handles data persistence for Vicepresidencia entities, including caching mechanisms.
 */
export class SequelizeVicepresidenciaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<VicepresidenciaDto>
{
	private readonly cacheKey: string = 'vicepresidencia'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Vicepresidencia entities based on the provided criteria.
	 * Includes associated vicepresidenciaEjecutiva data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<VicepresidenciaDto>>} A promise that resolves to a paginated response containing Vicepresidencia DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaDto>> {
		const options = this.convert(criteria)

		options.include = ['vicepresidenciaEjecutiva']

		return await this.cache.getCachedData<ResponseDB<VicepresidenciaDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaModel.findAndCountAll(options)

				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Vicepresidencia entity by its unique identifier.
	 * Includes associated vicepresidenciaEjecutiva and cargos data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<DepartmentId>} id - The ID of the Vicepresidencia to search for.
	 * @returns {Promise<Nullable<VicepresidenciaDto>>} A promise that resolves to the Vicepresidencia DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaDto>> {
		return await this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findByPk(id, {
					include: [
						{
							association: 'vicepresidenciaEjecutiva',
							attributes: ['id', 'name'],
							include: [
								{
									association: 'directiva',
									attributes: ['id', 'name']
								}
							]
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return vicepresidencia ? vicepresidencia.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Vicepresidencia entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<DepartmentName>} name - The name of the Vicepresidencia to search for.
	 * @returns {Promise<Nullable<VicepresidenciaDto>>} A promise that resolves to the Vicepresidencia DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaDto>> {
		return await this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findOne({ where: { name } })
				return vicepresidencia ? vicepresidencia.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Vicepresidencia entity to the data store. Uses `upsert` for atomic creation or update.
	 * Handles associated `cargos` relationships.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {VicepresidenciaPrimitives} payload - The Vicepresidencia data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: VicepresidenciaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload

			// Use upsert for the main Vicepresidencia entry
			const [vicepresidenciaInstance, created] = await VicepresidenciaModel.upsert(restPayload, { transaction, returning: true, where: { id } })

			// Handle cargos association
			if (cargos && cargos.length > 0) {
				// Assuming setCargos expects an array of cargo IDs
				await vicepresidenciaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				// If an empty array is passed, clear existing associations
				await vicepresidenciaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${restPayload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Vicepresidencia.'
			if (error instanceof Error) {
				errorMessage = `Error saving Vicepresidencia: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Vicepresidencia: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a Vicepresidencia entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<DepartmentId>} id - The ID of the Vicepresidencia to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<DepartmentId>): Promise<void> {
		// Retrieve the entity to get its name for cache invalidation
		const vicepresidenciaToRemove = await VicepresidenciaModel.findByPk(id)

		await VicepresidenciaModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (vicepresidenciaToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${vicepresidenciaToRemove.name}` })
		}
	}
}

