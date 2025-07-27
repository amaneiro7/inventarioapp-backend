import { type DeviceEmployee } from '../../../../Device/Device/domain/DeviceEmployee'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when an Employee is not found.
 */
export class EmployeeDoesNotExistError extends ApiError {
	constructor(public readonly id: Primitives<DeviceEmployee>) {
		super(httpStatus[404].statusCode, `El empleado con el ID '${id}' no existe.`)
	}
}
