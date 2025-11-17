/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextFunction, type Request, type Response } from 'express'
import { PermissionGroup } from '../../Contexts/AccessControl/PermissionGroup/domain/entity/PermissionGroup'
import { PermissionId } from '../../Contexts/AccessControl/Permission/domain/valueObject/PermissionId'
import { container } from '../di/container'
import { PermissionDependencies } from '../di/access-control/permission.di'
import { PermissionGroupDependencies } from '../di/access-control/permission-group.di'
import { AuthenticationRequiredError } from '../../Contexts/AccessControl/Permission/domain/errors/AuthenticationRequiredError'
import { RoleRequiredError } from '../../Contexts/AccessControl/Permission/domain/errors/RoleRequiredError'
import { PermissionDoesNotExistError } from '../../Contexts/AccessControl/Permission/domain/errors/PermissionDoesNotExistError'
import { PermissionGroupDoesNotExistError } from '../../Contexts/AccessControl/PermissionGroup/domain/errors/PermissionGroupDoesNotExistError'
import { type PermissionGroupRepository } from '../../Contexts/AccessControl/PermissionGroup/domain/repository/PermissionGroupRepository'
import { type PermissionRepository } from '../../Contexts/AccessControl/Permission/domain/repository/PermissionRepository'

export const hasPermission = (requiredPermissionName: string) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			// 1. Asegurarse de que el usuario esta autenticado (Passport ya hizo esto)
			if (!req.user) {
				return next(new AuthenticationRequiredError())
			}

			// 2. Obtener el ID del grupo de permisos del usuario (anteriormente roleId).
			//    Esto debe estar en el payload del JWT.
			const permissionGroupId = (req.user as any).permissionGroupId
			if (!permissionGroupId) {
				return next(new RoleRequiredError())
			}

			// 3. Resolver los repositorios desde el contenedor de DI
			const permissionRepository: PermissionRepository = container.resolve(PermissionDependencies.Repository)
			const permissionGroupRepository: PermissionGroupRepository = container.resolve(
				PermissionGroupDependencies.Repository
			)

			// 4. Buscar el permiso requerido por su nombre para obtener su ID
			const requiredPermission = await permissionRepository.findByName(requiredPermissionName)
			if (!requiredPermission) {
				// Si el permiso definido en la ruta no existe en la BD, es un error de configuración.
				console.error(`Authorization Error: Permission '${requiredPermissionName}' not found in database.`)
				return next(new PermissionDoesNotExistError())
			}

			// 5. Buscar el grupo de permisos del usuario por su ID
			const userPermissionGroupDto = await permissionGroupRepository.findById(permissionGroupId)
			if (!userPermissionGroupDto) {
				// Si el grupo de permisos asignado al usuario no existe, es un problema de integridad de datos.
				return next(new PermissionGroupDoesNotExistError(permissionGroupId))
			}

			// 6. Rehidratar el DTO a una entidad de dominio y verificar si tiene el permiso
			const permissionGroupEntity = PermissionGroup.fromPrimitives(userPermissionGroupDto)
			const requiredPermissionId = new PermissionId(requiredPermission.id)

			if (permissionGroupEntity.hasPermission(requiredPermissionId)) {
				// ¡Éxito! El usuario tiene permiso, continuar a la siguiente función (el controlador de la ruta)
				return next()
			}
			// El usuario no tiene el permiso
			return res
				.status(403)
				.json({ message: `Forbidden: Missing required permission '${requiredPermissionName}'.` })
		} catch (error) {
			next(error) // Pasar el error al manejador de errores global
		}
	}
}
