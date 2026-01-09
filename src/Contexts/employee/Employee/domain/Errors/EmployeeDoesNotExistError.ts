import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeId } from '../valueObject/EmployeeId'

/**
 * @description Error thrown when an Employee is not found.
 */
export class EmployeeDoesNotExistError extends ApiError {
	constructor(public readonly id: Primitives<EmployeeId>) {
		super(httpStatus[404].statusCode, `El empleado con el ID '${id}' no existe.`)
		this.name = this.constructor.name
	}
}
