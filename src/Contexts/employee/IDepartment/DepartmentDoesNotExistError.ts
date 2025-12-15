import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a department is not found.
 */
export class DepartmentDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `El departamento '${value}' no se encuentra registrado.`) // Improved error message
		this.name = this.constructor.name
	}
}
