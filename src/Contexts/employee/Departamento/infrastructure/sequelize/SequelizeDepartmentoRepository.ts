import { DepartamentoModel } from './DepartamentoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DepartamentoAssociation } from './DepartamentoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoName } from '../../../Cargo/domain/CargoName'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DepartamentoDto, type DepartamentoPrimitives } from '../../domain/Departamento.dto'

/**
 * @class SequelizeDepartamentoRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {DepartmentRepository<DepartamentoDto>}
 * @description Concrete implementation of the DepartamentoRepository using Sequelize.
 * Handles data persistence for Departamento entities, including caching mechanisms.
 */
export class SequelizeDepartamentoRepository
	extends CriteriaToSequelizeConverter
	implements DepartmentRepository<DepartamentoDto>
{
	private readonly cacheKey: string = 'departamento'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Departamento entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<DepartamentoDto>>} A promise that resolves to a paginated response containing Departamento DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<DepartamentoDto>> {
		const options = this.convert(criteria)
		const opt = DepartamentoAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<DepartamentoDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await DepartamentoModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Departamento entity by its unique identifier.
	 * Includes associated vicepresidencia, vicepresidenciaEjecutiva, directiva, and cargos data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<DepartmentId>} id - The ID of the Departamento to search for.
	 * @returns {Promise<Nullable<DepartamentoDto>>} A promise that resolves to the Departamento DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<DepartmentId>): Promise<Nullable<DepartamentoDto>> {
		return await this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findByPk(id, {
					include: [
						{
							association: 'vicepresidencia',
							attributes: ['id', 'name'],
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
								}
							]
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
						// 'employee'
					]
				})
				return departamento ? departamento.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Departamento entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CargoName>} name - The name of the Departamento to search for.
	 * @returns {Promise<Nullable<DepartamentoDto>>} A promise that resolves to the Departamento DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<CargoName>): Promise<Nullable<DepartamentoDto>> {
		return await this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findOne({ where: { name } })
				return departamento ? departamento.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Departamento entity to the data store. Uses `upsert` for atomic creation or update.
	 * Handles associated `cargos` relationships.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {DepartamentoPrimitives} payload - The Departamento data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: DepartamentoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { id, cargos, ...restPayload } = payload

			// Use upsert for the main Departamento entry
			const [departamentoInstance, created] = await DepartamentoModel.upsert(restPayload, { transaction, returning: true, where: { id } })

			// Handle cargos association
			if (cargos && cargos.length > 0) {
				// Assuming setCargos expects an array of cargo IDs
				await departamentoInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				// If an empty array is passed, clear existing associations
				await departamentoInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${restPayload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Departamento.'
			if (error instanceof Error) {
				errorMessage = `Error saving Departamento: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Departamento: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a Departamento entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<DepartmentId>} id - The ID of the Departamento to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<DepartmentId>): Promise<void> {
		// Retrieve the entity to get its name for cache invalidation
		const departamentoToRemove = await DepartamentoModel.findByPk(id)

		await DepartamentoModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (departamentoToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${departamentoToRemove.name}` })
		}
	}
}
