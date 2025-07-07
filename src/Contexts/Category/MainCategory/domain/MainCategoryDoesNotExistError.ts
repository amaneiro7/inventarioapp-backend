import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class MainCategoryDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `La categoria no existe`)
	}
}
