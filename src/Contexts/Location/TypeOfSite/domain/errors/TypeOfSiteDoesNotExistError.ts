import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type TypeOfSiteId } from '../valueObject/TypeOfSiteId'
import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a TypeOfSite does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class TypeOfSiteDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of TypeOfSiteDoesNotExistError.
	 * @param {Primitives<TypeOfSiteId>} value - The ID of the type of site that does not exist.
	 */
	constructor(public readonly value: Primitives<TypeOfSiteId>) {
		super(httpStatus[404].statusCode, `El tipo de sitio no existe`)
	}
}
