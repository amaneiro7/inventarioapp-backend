import { type DeviceEmployee } from '../../../../Device/Device/domain/DeviceEmployee'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class EmployeeDoesNotExistError extends ApiError {
	constructor(public readonly value: Primitives<DeviceEmployee>) {
		super(httpStatus.NOT_FOUND, `The employee ${value} does not exist`)
	}
}
