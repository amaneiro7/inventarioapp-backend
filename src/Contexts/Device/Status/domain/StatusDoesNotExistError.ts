import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StatusId } from './StatusId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class StatusDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a status that is not found.
 */
export class StatusDoesNotExistError extends ApiError {
	/**
	 * @param {Primitives<StatusId>} id The ID of the status that was not found.
	 */
	constructor(public readonly id: Primitives<StatusId>) {
		super(httpStatus[404].statusCode, `El estatus con el ID '${id}' no existe.`)
	}
}
