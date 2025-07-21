import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DirectivaModel } from './DirectivaSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DirectivaDto, type DirectivaPrimitives } from '../../domain/Directiva.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class SequelizeDirectivaRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {DepartmentRepository<DirectivaDto>}
 * @description Concrete implementation of the DirectivaRepository using Sequelize.
 * Handles data persistence for Directiva entities, including caching mechanisms.
 */
export class SequelizeDirectivaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<DirectivaDto>
{
	private readonly cacheKey: string = 'directiva'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Directiva entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DirectivaDto>>} A promise that resolves to a paginated response containing Directiva DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<DirectivaDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<DirectivaDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await DirectivaModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<DirectivaDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Directiva entity by its unique identifier.
	 * Includes associated cargos data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<DepartmentId>} id - The ID of the Directiva to search for.
	 * @returns {Promise<Nullable<DirectivaDto>>} A promise that resolves to the Directiva DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DirectivaDto>> {
		return await this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Directiva entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<DepartmentName>} name - The name of the Directiva to search for.
	 * @returns {Promise<Nullable<DirectivaDto>>} A promise that resolves to the Directiva DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<DirectivaDto>> {
		return await this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findOne({ where: { name } })
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Directiva entity to the data store. Uses `upsert` for atomic creation or update.
	 * Handles associated `cargos` relationships.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {DirectivaPrimitives} payload - The Directiva data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: DirectivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			// Use upsert for the main Directiva entry
			const [directivaInstance] = await DirectivaModel.upsert(restPayload, { transaction, returning: true })

			// Handle cargos association
			if (cargos && cargos.length > 0) {
				// Assuming setCargos expects an array of cargo IDs
				await directivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				// If an empty array is passed, clear existing associations
				await directivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${restPayload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${restPayload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Directiva.'
			if (error instanceof Error) {
				errorMessage = `Error saving Directiva: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Directiva: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a Directiva entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<DepartmentId>} id - The ID of the Directiva to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<DepartmentId>): Promise<void> {
		// Retrieve the entity to get its name for cache invalidation
		const directivaToRemove = await DirectivaModel.findByPk(id)

		await DirectivaModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (directivaToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${directivaToRemove.name}` })
		}
	}
}
