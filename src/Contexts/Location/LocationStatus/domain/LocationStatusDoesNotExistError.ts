import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from './LocationStatusId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class LocationStatusIdDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<LocationStatusId>) {
		super(httpStatus[404].statusCode, `El estatus no existe`)
	}
}
