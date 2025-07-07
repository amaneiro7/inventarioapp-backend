import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

export class BrandDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `La marca con el ID ${value} no existe`)
	}
}
