import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StatusId } from './StatusId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class StatusDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<StatusId>) {
		super(httpStatus[404].statusCode, `The status ${value} does not exist`)
	}
}
