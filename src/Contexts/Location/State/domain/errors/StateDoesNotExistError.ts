import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateId } from '../valueObject/StateId'
import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a State does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class StateDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of StateDoesNotExistError.
	 * @param {Primitives<StateId>} value - The ID of the type of site that does not exist.
	 */
	constructor(public readonly value: Primitives<StateId>) {
		super(httpStatus[404].statusCode, `El tipo de sitio no existe`)
		this.name = this.constructor.name
	}
}
