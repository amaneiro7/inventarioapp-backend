import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentName } from '../../../IDepartment/DepartmentName'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaPrimitives
} from '../../domain/VicepresidenciaEjecutiva.dto'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * @class SequelizeVicepresidenciaEjecutivaRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {DepartmentRepository<VicepresidenciaEjecutivaDto>}
 * @description Concrete implementation of the VicepresidenciaEjecutivaRepository using Sequelize.
 * Handles data persistence for VicepresidenciaEjecutiva entities, including caching mechanisms.
 */
export class SequelizeVicepresidenciaEjecutivaRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<VicepresidenciaEjecutivaDto>
{
	private readonly cacheKey: string = 'vicepresidenciaEjecutiva'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of VicepresidenciaEjecutiva entities based on the provided criteria.
	 * Includes associated directiva data.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<VicepresidenciaEjecutivaDto>>} A promise that resolves to a paginated response containing VicepresidenciaEjecutiva DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaEjecutivaDto>> {
		const options = this.convert(criteria)

		options.include = ['directiva']

		return await this.cache.getCachedData<ResponseDB<VicepresidenciaEjecutivaDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaEjecutivaModel.findAndCountAll(options)

				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<VicepresidenciaEjecutivaDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single VicepresidenciaEjecutiva entity by its unique identifier.
	 * Includes associated cargos and employee data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<DepartmentId>} id - The ID of the VicepresidenciaEjecutiva to search for.
	 * @returns {Promise<Nullable<VicepresidenciaEjecutivaDto>>} A promise that resolves to the VicepresidenciaEjecutiva DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		return await this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single VicepresidenciaEjecutiva entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<DepartmentName>} name - The name of the VicepresidenciaEjecutiva to search for.
	 * @returns {Promise<Nullable<VicepresidenciaEjecutivaDto>>} A promise that resolves to the VicepresidenciaEjecutiva DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		return await this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findOne({ where: { name } })
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a VicepresidenciaEjecutiva entity to the data store. Uses `upsert` for atomic creation or update.
	 * Handles associated `cargos` relationships.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {VicepresidenciaEjecutivaPrimitives} payload - The VicepresidenciaEjecutiva data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload
			// Use upsert for the main VicepresidenciaEjecutiva entry
			const [vicepresidenciaEjecutivaInstance] = await VicepresidenciaEjecutivaModel.upsert(restPayload, {
				transaction,
				returning: true
			})

			// Handle cargos association
			if (cargos && cargos.length > 0) {
				// Assuming setCargos expects an array of cargo IDs
				await vicepresidenciaEjecutivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				// If an empty array is passed, clear existing associations
				await vicepresidenciaEjecutivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${restPayload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${restPayload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Vicepresidencia Ejecutiva.'
			if (error instanceof Error) {
				errorMessage = `Error saving Vicepresidencia Ejecutiva: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Vicepresidencia Ejecutiva: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a VicepresidenciaEjecutiva entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<DepartmentId>} id - The ID of the VicepresidenciaEjecutiva to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<DepartmentId>): Promise<void> {
		// Retrieve the entity to get its name for cache invalidation
		const vicepresidenciaEjecutivaToRemove = await VicepresidenciaEjecutivaModel.findByPk(id)

		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (vicepresidenciaEjecutivaToRemove) {
			await this.cache.removeCachedData({
				cacheKey: `${this.cacheKey}:name:${vicepresidenciaEjecutivaToRemove.name}`
			})
		}
	}
}
