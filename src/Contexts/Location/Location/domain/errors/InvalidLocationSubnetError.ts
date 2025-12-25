import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class InvalidLocationSubnetError extends ApiError {
	constructor(value: string) {
		super(httpStatus[404].statusCode, `La subred <${value}> no es válida`)
		this.name = 'InvalidLocationSubnetError'
	}
}
