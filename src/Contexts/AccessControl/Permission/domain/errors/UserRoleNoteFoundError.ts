import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class UserRoleNoteFoundError extends ApiError {
	constructor() {
		super(httpStatus[403].statusCode, 'Prohibido: El rol del usuario no fue encontrado')
		this.name = 'UserRoleNoteFoundError'
	}
}
