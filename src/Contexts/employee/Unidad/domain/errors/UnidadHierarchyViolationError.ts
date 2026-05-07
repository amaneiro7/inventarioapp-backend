import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a unit attempts to report to another unit of the same or lower hierarchical level.
 */
export class UnidadHierarchyViolationError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'Una unidad no puede reportar a alguien de su mismo nivel o inferior.')
		this.name = this.constructor.name
	}
}
