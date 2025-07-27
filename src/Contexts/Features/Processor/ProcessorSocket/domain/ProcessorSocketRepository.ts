import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketDto } from './ProcessorSocket.dto'
import { type ProcessorSocketId } from './ProcessorSocketId'

/**
 * @abstract
 * @class ProcessorSocketRepository
 * @description Defines the contract for data persistence operations related to the ProcessorSocket entity.
 */
export abstract class ProcessorSocketRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of processor sockets.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<ProcessorSocketDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorSocketDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Finds a single processor socket by its ID.
	 * @param {Primitives<ProcessorSocketId>} id The ID of the socket to search for.
	 * @returns {Promise<ProcessorSocketDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<ProcessorSocketId>): Promise<ProcessorSocketDto | null>
}
