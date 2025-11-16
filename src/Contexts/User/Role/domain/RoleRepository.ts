import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type RoleDto } from './Role.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from './RoleId'

/**
 * @abstract
 * @class RoleRepository
 * @description Defines the contract for data persistence operations related to the Role entity.
 */
export abstract class RoleRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of roles.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<RoleDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<RoleDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single role by its ID.
	 * @param {Primitives<RoleId>} id The ID of the role to search for.
	 * @returns {Promise<RoleDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<RoleId>): Promise<RoleDto | null>
}
