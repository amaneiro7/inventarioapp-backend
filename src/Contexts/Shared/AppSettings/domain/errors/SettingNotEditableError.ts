import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class SettingNotEditableError extends ApiError {
	constructor(public readonly key: string) {
		super(httpStatus[400].statusCode, `La configuración con la clave '${key}' no es editable.`)
	}
}
