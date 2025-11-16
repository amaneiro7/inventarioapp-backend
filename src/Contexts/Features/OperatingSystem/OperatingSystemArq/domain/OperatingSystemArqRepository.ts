import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqDto } from './OperatingSystemArq.dto'
import { type OperatingSystemArqId } from './OperatingSystemArqID'

/**
 * @abstract
 * @class OperatingSystemArqRepository
 * @description Defines the contract for data persistence operations related to the OperatingSystemArq entity.
 */
export abstract class OperatingSystemArqRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of operating system architectures.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<OperatingSystemArqDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemArqDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single operating system architecture by its ID.
	 * @param {Primitives<OperatingSystemArqId>} id The ID of the architecture to search for.
	 * @returns {Promise<OperatingSystemArqDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<OperatingSystemArqId>): Promise<OperatingSystemArqDto | null>
}
