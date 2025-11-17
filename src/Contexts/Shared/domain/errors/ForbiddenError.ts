import { ApiError } from './ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ForbiddenError extends ApiError {
	constructor(message?: string) {
		super(httpStatus[403].statusCode, message ?? 'No tienes permiso para realizar esta acción.')
	}
}
