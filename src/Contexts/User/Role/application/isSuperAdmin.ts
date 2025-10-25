import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { User } from '../../user/domain/entity/User'

/**
 * @description Checks if the provided user has super admin privileges.
 * @param {{ user?: JwtPayloadUser }} params The user payload to check.
 * @throws {InvalidArgumentError} If the user payload is missing or invalid, or if the user does not have super admin permissions.
 */
export function isSuperAdmin({ user }: { user?: JwtPayloadUser }): void {
	if (user === undefined) {
		throw new InvalidArgumentError('Esta operación requiere de un usuario autenticado.')
	}

	if (user.roleId === undefined) {
		throw new InvalidArgumentError('Error con el payload del usuario: rol no definido.')
	}

	if (!User.isSuperAdmin({ roleId: user.roleId })) {
		throw new InvalidArgumentError('No tiene permisos para realizar esta operación.')
	}
}
