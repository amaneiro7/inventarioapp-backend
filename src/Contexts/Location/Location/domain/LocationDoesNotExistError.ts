import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from './LocationId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class LocationDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<LocationId>) {
		super(httpStatus[404].statusCode, `The location ${value} does not exist`)
	}
}
