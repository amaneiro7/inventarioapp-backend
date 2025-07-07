import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class LocationNameAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus.BAD_REQUEST, `El nombre de ubicación ${name} ya existe`)
	}
}
