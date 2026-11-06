import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeId } from '../valueObject/EmployeeId'

interface EmployeeDoesNotExistOptions {
	id?: Primitives<EmployeeId>
	username?: string
	employeeCode?: string
	message?: string
}

/**
 * @description Error thrown when an Employee is not found.
 */
export class EmployeeDoesNotExistError extends ApiError {
	constructor(options: EmployeeDoesNotExistOptions) {
		let errorMessage = options.message

		if (!errorMessage) {
			if (options.id !== undefined) {
				errorMessage = `El empleado con el ID '${options.id}' no existe.`
			} else if (options.username) {
				errorMessage = `El empleado con el username '${options.username}' no existe.`
			} else if (options.employeeCode) {
				errorMessage = `El empleado con el código '${options.employeeCode}' no existe.`
			} else {
				errorMessage = 'El empleado no existe.'
			}
		}
		super(httpStatus[404].statusCode, errorMessage)
		this.name = this.constructor.name
	}
}
