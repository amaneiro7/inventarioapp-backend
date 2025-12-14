import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoParams, type CargoDto } from '../entity/Cargo.dto'
import { type CargoId } from '../valueObject/CargoId'
import { type CargoName } from '../valueObject/CargoName'

/**
 * @abstract
 * @class CargoRepository
 * @description Defines the contract for data persistence operations related to the Cargo entity.
 */
export abstract class CargoRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of Cargo entities based on the provided criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CargoDto>>} A promise that resolves to a paginated response containing Cargo DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Retrieves a single Cargo entity by its unique identifier.
	 * @param {Primitives<CargoId>} id The ID of the Cargo to search for.
	 * @returns {Promise<Nullable<CargoDto>>} A promise that resolves to the Cargo DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>>

	/**
	 * @abstract
	 * @method findByName
	 * @description Retrieves a single Cargo entity by its name.
	 * @param {Primitives<CargoName>} name The name of the Cargo to search for.
	 * @returns {Promise<Nullable<CargoDto>>} A promise that resolves to the Cargo DTO if found, or null otherwise.
	 */
	abstract findByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>>

	/**
	 * @abstract
	 * @method save
	 * @description Saves a Cargo entity to the data store. This method should handle both creation and updates.
	 * @param {CargoParams} cargo The Cargo data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(cargo: CargoParams): Promise<void>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a Cargo entity from the data store by its unique identifier.
	 * @param {Primitives<CargoId>} id The ID of the Cargo to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	abstract remove(id: Primitives<CargoId>): Promise<void>
}
