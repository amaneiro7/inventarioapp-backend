import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/CargoId'
import { type CargoRepository } from '../../domain/CargoRepository'
import { type CargoName } from '../../domain/CargoName'
import { type CargoDto, type CargoPrimitives } from '../../domain/Cargo.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { CargoModel } from './CargoSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { CargoAssociation } from './CargoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @class SequelizeCargoRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {CargoRepository}
 * @description Concrete implementation of the CargoRepository using Sequelize.
 * Handles data persistence for Cargo entities, including caching mechanisms.
 */
export class SequelizeCargoRepository extends CriteriaToSequelizeConverter implements CargoRepository {
	private readonly cacheKey: string = 'cargos'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Cargo entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CargoDto>>} A promise that resolves to a paginated response containing Cargo DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>> {
		const options = this.convert(criteria)
		const opt = CargoAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<CargoDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CargoModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<CargoDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Cargo entity by its unique identifier.
	 * Includes associated departamentos, directivas, vicepresidencias ejecutivas, and vicepresidencias data.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<CargoId>} id - The ID of the Cargo to search for.
	 * @returns {Promise<Nullable<CargoDto>>} A promise that resolves to the Cargo DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>> {
		return await this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findByPk(id, {
					include: [
						{
							association: 'departamentos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single Cargo entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {Primitives<CargoName>} name - The name of the Cargo to search for.
	 * @returns {Promise<Nullable<CargoDto>>} A promise that resolves to the Cargo DTO if found, or null otherwise.
	 */
	async searchByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>> {
		return await this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findOne({ where: { name } })
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a Cargo entity to the data store. Uses `upsert` for atomic creation or update.
	 * Handles associated `departamentos`, `directivas`, `vicepresidenciasEjecutivas`, and `vicepresidencias` relationships.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {CargoPrimitives} payload - The Cargo data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails, it throws a detailed error.
	 */
	async save(payload: CargoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { departamentos, directivas, vicepresidenciasEjecutivas, vicepresidencias, ...restPayload } = payload

			// Use upsert for the main Cargo entry
			const [cargoInstance] = await CargoModel.upsert(restPayload, { transaction, returning: true })

			// Handle associations
			if (departamentos) {
				await cargoInstance.setDepartamentos(departamentos, { transaction })
			}
			if (directivas) {
				await cargoInstance.setDirectivas(directivas, { transaction })
			}
			if (vicepresidenciasEjecutivas) {
				await cargoInstance.setVicepresidenciaEjecutivas(vicepresidenciasEjecutivas, { transaction })
			}
			if (vicepresidencias) {
				await cargoInstance.setVicepresidencias(vicepresidencias, { transaction })
			}

			await transaction.commit()
			// Invalidate relevant cache entries
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${restPayload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${restPayload.name}` })
		} catch (error: unknown) {
			await transaction.rollback()
			let errorMessage = 'An unknown error occurred while saving the Cargo.'
			if (error instanceof Error) {
				errorMessage = `Error saving Cargo: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving Cargo: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a Cargo entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<CargoId>} id - The ID of the Cargo to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<CargoId>): Promise<void> {
		// Retrieve the entity to get its name for cache invalidation
		const cargoToRemove = await CargoModel.findByPk(id)

		await CargoModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (cargoToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${cargoToRemove.name}` })
		}
	}
}
