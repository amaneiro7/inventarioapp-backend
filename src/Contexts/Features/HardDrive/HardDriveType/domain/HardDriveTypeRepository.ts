import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type HardDriveTypeDto } from './HardDriveType.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeId } from './HardDriveTypeId'

/**
 * @abstract
 * @class HardDriveTypeRepository
 * @description Defines the contract for data persistence operations related to the HardDriveType entity.
 */
export abstract class HardDriveTypeRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of hard drive types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<HardDriveTypeDto>>} A paginated response of hard drive type DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<HardDriveTypeDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Finds a single hard drive type by its ID.
	 * @param {Primitives<HardDriveTypeId>} id The ID of the type to search for.
	 * @returns {Promise<HardDriveTypeDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<HardDriveTypeId>): Promise<HardDriveTypeDto | null>
}
