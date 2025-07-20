import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class CityDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La ciudad ${value} no existe`)
	}
}
