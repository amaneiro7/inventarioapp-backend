import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type InputTypeDto } from '../entity/InputType.dto'
import { type InputTypeId } from '../valueObject/InputTypeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @abstract
 * @class InputTypeRepository
 * @description Defines the contract for data persistence operations related to the InputType entity.
 */
export abstract class InputTypeRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of input types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<InputTypeDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<InputTypeDto>>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single input type by its ID.
	 * @param {Primitives<InputTypeId>} id The ID of the input type to search for.
	 * @returns {Promise<InputTypeDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<InputTypeId>): Promise<InputTypeDto | null>
}
