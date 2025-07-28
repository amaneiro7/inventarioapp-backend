import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type StateDto } from './State.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StateId } from './StateId'

/**
 * Abstract class defining the contract for State data access.
 * Implementations will provide methods for searching and retrieving states.
 */
export abstract class StateRepository {
	/**
	 * Searches for all states based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<StateDto>>} A promise that resolves to a paginated response of state DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<StateDto>>

	/**
	 * Searches for a single state by its unique identifier.
	 * @param {Primitives<StateId>} id - The ID of the state to search for.
	 * @returns {Promise<StateDto | null>} A promise that resolves to the state DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<StateId>): Promise<StateDto | null>
}
