import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type OperatingSystemDto } from '../entity/OperatingSystem.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../valueObject/OperatingSystemId'

/**
 * @abstract
 * @class OperatingSystemRepository
 * @description Defines the contract for data persistence operations related to the OperatingSystem entity.
 */
export abstract class OperatingSystemRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of operating systems.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<OperatingSystemDto>>} A paginated response of operating system DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<OperatingSystemDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single operating system by its ID.
	 * @param {Primitives<OperatingSystemId>} id The ID of the OS to search for.
	 * @returns {Promise<OperatingSystemDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<OperatingSystemId>): Promise<OperatingSystemDto | null>
	abstract findByIds: (ids: Array<Primitives<OperatingSystemId>>) => Promise<OperatingSystemDto[]>
}
