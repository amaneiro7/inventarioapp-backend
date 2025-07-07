import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class RegionDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `La región ${value} no existe`)
	}
}
