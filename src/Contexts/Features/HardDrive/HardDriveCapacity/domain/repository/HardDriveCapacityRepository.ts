import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto } from '../entity/HardDriveCapacity.dto'
import { type HardDriveCapacityId } from '../valueObject/HardDriveCapacityId'

/**
 * @abstract
 * @class HardDriveCapacityRepository
 * @description Defines the contract for data persistence operations related to the HardDriveCapacity entity.
 */
export abstract class HardDriveCapacityRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of hard drive capacities.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<HardDriveCapacityDto>>} A paginated response of hard drive capacity DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveCapacityDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single hard drive capacity by its ID.
	 * @param {Primitives<HardDriveCapacityId>} id The ID of the capacity to search for.
	 * @returns {Promise<HardDriveCapacityDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityDto | null>
}
