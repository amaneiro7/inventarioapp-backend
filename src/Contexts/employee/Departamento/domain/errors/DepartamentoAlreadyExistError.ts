import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
/**
 * @description Error thrown when attempting to create a departamento that already exists.
 */
export class DepartamentoAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `El departamento '${value}' ya se encuentra registrada.`)
	}
}
