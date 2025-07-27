import { GenericRepository } from '../../Shared/domain/GenericRepository'
import { type Nullable } from '../../Shared/domain/Nullable'
import { type DepartmentId } from './DepartmentId'
import { type DepartmentName } from './DepartmentName'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'

/**
 * @abstract
 * @class DepartmentRepository
 * @description Defines the contract for data persistence operations related to department entities.
 */
export abstract class DepartmentRepository<T> extends GenericRepository<T> {
	/**
	 * @abstract
	 * @method searchByName
	 * @description Retrieves a single department entity by its name.
	 * @param {Primitives<DepartmentName>} name The name of the department to search for.
	 * @returns {Promise<Nullable<T>>} A promise that resolves to the department DTO if found, or null otherwise.
	 */
	abstract searchByName(name: Primitives<DepartmentName>): Promise<Nullable<T>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Retrieves a single department entity by its unique identifier.
	 * @param {Primitives<DepartmentId>} id The ID of the department to search for.
	 * @returns {Promise<Nullable<T>>} A promise that resolves to the department DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<DepartmentId>): Promise<Nullable<T>>
}
