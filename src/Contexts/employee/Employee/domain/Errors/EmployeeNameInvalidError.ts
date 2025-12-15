import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @description Error thrown when an EmployeeName fails validation.
 * It aggregates multiple validation failures into a single error.
 */
export class EmployeeNameInvalidError extends InvalidArgumentError {
	constructor(value: string | null, errors: string[]) {
		const errorMessage = `El nombre del empleado '${value ?? ''}' no es válido: ${errors.join(' ')}`
		super(errorMessage)
	}
}
