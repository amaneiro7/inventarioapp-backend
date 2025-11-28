import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

interface ErrorOptions {
	permissionId: string
}

export class PermissionGroupDoesNotExistError extends ApiError {
	constructor(identifier?: string | ErrorOptions) {
		let message = 'El grupo de permisos no existe.'
		let ids = ''
		if (identifier) {
			// Caso 1: Es el objeto { permissionId: '...' }
			if (typeof identifier === 'object' && 'permissionId' in identifier) {
				ids = identifier.permissionId
			}
			// Caso 2: Es un string directo
			else if (typeof identifier === 'string') {
				ids = identifier
			}

			// Lógica para pluralizar el mensaje si hay múltiples IDs
			if (ids) {
				const isPlural = ids.includes(',')
				message = isPlural
					? `Los grupos de permisos con los ids '${ids}' no existen.`
					: `El grupo de permisos con id '${ids}' no existe.`
			}
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
