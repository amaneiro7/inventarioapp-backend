import { type MemoryRamTypeId } from '../valueObject/MemoryRamTypeId'
import { type MemoryRamTypeDto } from '../entity/MemoryRam.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'

/**
 * @abstract
 * @class MemoryRamTypeRepository
 * @description Defines the contract for data persistence operations related to the MemoryRamType entity.
 */
export abstract class MemoryRamTypeRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of memory RAM types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<MemoryRamTypeDto>>} A paginated response of memory RAM type DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<MemoryRamTypeDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single memory RAM type by its ID.
	 * @param {Primitives<MemoryRamTypeId>} id The ID of the type to search for.
	 * @returns {Promise<MemoryRamTypeDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypeDto | null>
}
