import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class SettingDoesNotExistError extends ApiError {
	constructor(public readonly key: string) {
		super(httpStatus[404].statusCode, `No se encontró la configuración con la clave '${key}'.`)
	}
}
