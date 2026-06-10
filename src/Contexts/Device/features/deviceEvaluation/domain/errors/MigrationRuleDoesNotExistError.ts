import { ApiError } from '../../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a migration rule is not found.
 */
export class MigrationRuleDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `La regla de migración '${value}' no se encuentra registrada.`)
		this.name = this.constructor.name
	}
}
