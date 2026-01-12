import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class DeviceCategoryMismatchError extends ApiError {
	constructor(expectedCategory: string) {
		super(httpStatus[404].statusCode, `La categoría debe ser de tipo ${expectedCategory}.`)
		this.name = 'DeviceCategoryMismatchError'
	}
}
