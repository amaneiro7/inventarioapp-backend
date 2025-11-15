import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class SettingValueTypeError extends ApiError {
	constructor(
		public readonly key: string,
		public readonly type: string,
		public readonly value: string,
		public readonly error: Error
	) {
		super(
			httpStatus[400].statusCode,
			`El valor '${value}' no es válido para el tipo '${type}' en la configuración '${key}' - ${error.message}`
		)
	}
}
