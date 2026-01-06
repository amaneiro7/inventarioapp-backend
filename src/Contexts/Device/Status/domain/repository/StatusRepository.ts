import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusDto } from '../entity/Status.dto'
import { type StatusId } from '../valueObject/StatusId'

/**
 * @abstract
 * @class StatusRepository
 * @description Defines the contract for data persistence operations related to the Status entity.
 */
export abstract class StatusRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of statuses based on a set of criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<StatusDto>>} A promise that resolves to a paginated response of status DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<StatusDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single status by its unique identifier.
	 * @param {Primitives<StatusId>} id The ID of the status to search for.
	 * @returns {Promise<StatusDto | null>} A promise that resolves to the status DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<StatusId>): Promise<StatusDto | null>
}
