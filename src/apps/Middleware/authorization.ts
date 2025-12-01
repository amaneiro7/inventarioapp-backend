import { type NextFunction, type Request, type Response } from 'express'
import { PermissionGroup } from '../../Contexts/AccessControl/PermissionGroup/domain/entity/PermissionGroup'
import { PermissionId } from '../../Contexts/AccessControl/Permission/domain/valueObject/PermissionId'
import { container } from '../di/container'
import { PermissionDependencies } from '../di/access-control/permission.di'
import { PermissionGroupDependencies } from '../di/access-control/permission-group.di'
import { AccessPolicyDependencies } from '../di/access-control/access-policy.di'
import { AuthenticationRequiredError } from '../../Contexts/AccessControl/Permission/domain/errors/AuthenticationRequiredError'
import { ForbiddenError } from '../../Contexts/Shared/domain/errors/ForbiddenError'
import { PermissionDoesNotExistError } from '../../Contexts/AccessControl/Permission/domain/errors/PermissionDoesNotExistError'
import { ADMIN_ROLE_ID } from '../../Contexts/User/Role/domain/RoleOptions'
import { type PermissionGroupRepository } from '../../Contexts/AccessControl/PermissionGroup/domain/repository/PermissionGroupRepository'
import { type PermissionRepository } from '../../Contexts/AccessControl/Permission/domain/repository/PermissionRepository'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'
import { type AccessPolicyResolver } from '../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyResolver'

/**
 * @function hasPermission
 * @description Crea un middleware de Express que verifica si el usuario autenticado
 * tiene un permiso específico requerido para acceder a la ruta.
 *
 * @param {string} requiredPermissionName El nombre del permiso necesario (ej: 'user:create').
 * @returns {Function} Un middleware asíncrono (req, res, next).
 */
export const hasPermission = (requiredPermissionName: string) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			// 1. VALIDACIÓN DE AUTENTICACIÓN
			const userPayload = req.user as JwtPayloadUser
			if (!userPayload) {
				return next(new AuthenticationRequiredError())
			}

			// 2. CASO SIN PERMISO ESPECÍFICO (Solo requiere estar logueado)
			if (!requiredPermissionName) {
				return next()
			}
			// ----------------------------------------------------------------------

			// 3. BYPASS PARA ADMIN
			if (userPayload.roleId === String(ADMIN_ROLE_ID)) {
				return next()
			}

			// 4. VALIDAR DATOS PARA RESOLVER POLÍTICA
			const { roleId, cargoId, departamentoId, directivaId, vicepresidenciaEjecutivaId, vicepresidenciaId } =
				userPayload
			if (!roleId) {
				return next(new ForbiddenError('Falta el rol para resolver la política de acceso.'))
			}

			// 5. RESOLVER POLÍTICA DE ACCESO
			const accessPolicyResolver: AccessPolicyResolver = container.resolve(AccessPolicyDependencies.Resolver)
			const permissionGroupIds = await accessPolicyResolver.run({
				roleId,
				cargoId,
				departamentoId,
				directivaId,
				vicepresidenciaEjecutivaId,
				vicepresidenciaId
			})
			if (!permissionGroupIds || permissionGroupIds.length === 0) {
				const userFriendlyMessage = 'Su perfil no tiene grupos de permisos asignados.'
				return next(new ForbiddenError(userFriendlyMessage))
			}

			/// 6. PREPARAR REPOSITORIOS
			const permissionRepository: PermissionRepository = container.resolve(PermissionDependencies.Repository)
			const permissionGroupRepository: PermissionGroupRepository = container.resolve(
				PermissionGroupDependencies.Repository
			)
			// 7. CONSULTAS EN PARALELO (Optimización de rendimiento)
			// Buscamos el ID del permiso y los Grupos del usuario al mismo tiempo.
			const [requiredPermissionDto, userPermissionGroupDto] = await Promise.all([
				permissionRepository.findByName(requiredPermissionName),
				permissionGroupRepository.findByIds(permissionGroupIds)
			])

			// A. Validar existencia del permiso en el sistema
			if (!requiredPermissionDto) {
				// Si el permiso requerido no existe en el sistema, se lanza un error.
				return next(new PermissionDoesNotExistError({ permissionName: requiredPermissionName }))
			}

			// B. Si no se encontraron los grupos en BD (aunque el resolver diera IDs)
			if (!userPermissionGroupDto || userPermissionGroupDto.length === 0) {
				return next(new ForbiddenError('Error de integridad: Grupos de permisos no encontrados.'))
			}

			// Creamos el VO del ID del permiso requerido.
			const requiredPermissionId = new PermissionId(requiredPermissionDto.id)

			/// 8. VERIFICACIÓN: ¿ALGUNO DE LOS GRUPOS TIENE EL PERMISO?
			// Iteramos sobre los grupos traídos de BD
			for (const permissionGroup of userPermissionGroupDto) {
				// Hidratamos la entidad
				const permissionGroupEntity = PermissionGroup.fromPrimitives(permissionGroup)
				// Chequeamos si este grupo tiene el permiso
				if (permissionGroupEntity.hasPermission(requiredPermissionId)) {
					// ¡Éxito! El usuario tiene permiso. Se invoca 'next()' para continuar con el controlador de la ruta.
					return next()
				}
			}

			// 9. DENEGAR SI NINGÚN GRUPO COINCIDIÓ
			return next(new ForbiddenError(`No tienes el permiso '${requiredPermissionName}' requerido.`))
		} catch (error) {
			next(error) // Pasar el error al manejador de errores global
		}
	}
}
