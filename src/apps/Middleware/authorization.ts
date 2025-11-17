import { type NextFunction, type Request, type Response } from 'express'
import { PermissionGroup } from '../../Contexts/AccessControl/PermissionGroup/domain/entity/PermissionGroup'
import { PermissionId } from '../../Contexts/AccessControl/Permission/domain/valueObject/PermissionId'
import { container } from '../di/container'
import { PermissionDependencies } from '../di/access-control/permission.di'
import { PermissionGroupDependencies } from '../di/access-control/permission-group.di'
import { AccessPolicyDependencies } from '../di/access-control/access-policy.di'
import { AuthenticationRequiredError } from '../../Contexts/AccessControl/Permission/domain/errors/AuthenticationRequiredError'
import { PermissionGroupDoesNotExistError } from '../../Contexts/AccessControl/PermissionGroup/domain/errors/PermissionGroupDoesNotExistError'
import { ForbiddenError } from '../../Contexts/Shared/domain/errors/ForbiddenError'
import { PermissionDoesNotExistError } from '../../Contexts/AccessControl/Permission/domain/errors/PermissionDoesNotExistError'
import { type PermissionGroupRepository } from '../../Contexts/AccessControl/PermissionGroup/domain/repository/PermissionGroupRepository'
import { type PermissionRepository } from '../../Contexts/AccessControl/Permission/domain/repository/PermissionRepository'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'
import { type AccessPolicyResolver } from '../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyResolver'

/**
 * @function hasPermission
 * @description Crea un middleware de Express que verifica si el usuario autenticado
 * tiene un permiso específico requerido para acceder a la ruta.
 *
 * @param {string} requiredPermissionName El nombre del permiso necesario (ej: 'user_create').
 * @returns {Function} Un middleware asíncrono (req, res, next).
 */
export const hasPermission = (requiredPermissionName: string) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			// 1. EXTRAER Y VALIDAR PAYLOAD DE USUARIO
			// Se extrae el payload de usuario del objeto de la solicitud (añadido por un middleware anterior de autenticación).
			const userPayload = req.user as JwtPayloadUser

			// Primera validación: se verifica que exista un payload del usuario (indicando autenticación).
			if (!userPayload) {
				// Si no hay payload, se lanza un error de autenticación requerida.
				return next(new AuthenticationRequiredError())
			}

			// Validar que el payload contenga la información requerida para resolver la política.
			const { cargoId, departamentoId } = userPayload
			if (!cargoId || !departamentoId) {
				// Si falta información clave para la política de acceso, se deniega el acceso.
				return next(new ForbiddenError('El token de usuario no contiene cargo o departamento.'))
			}

			// 2. RESOLVER LA POLÍTICA DE ACCESO DEL USUARIO
			// Se obtiene el caso de uso (AccessPolicyResolver) para encontrar el grupo de permisos.
			const accessPolicyResolver: AccessPolicyResolver = container.resolve(AccessPolicyDependencies.Resolver)

			// El Resolver utiliza el cargo y el departamento para encontrar el ID del grupo de permisos que aplica.
			const permissionGroupId = await accessPolicyResolver.run({ cargoId, departamentoId })

			if (!permissionGroupId) {
				// Si no se encuentra una política de acceso (y por ende un grupo de permisos) para el usuario.
				return next(new ForbiddenError('No se encontró una política de acceso para su cargo y departamento.'))
			}

			// 3. OBTENER REPOSITORIOS
			// Se resuelven las dependencias para interactuar con la capa de persistencia.
			const permissionRepository: PermissionRepository = container.resolve(PermissionDependencies.Repository)
			const permissionGroupRepository: PermissionGroupRepository = container.resolve(
				PermissionGroupDependencies.Repository
			)

			// 4. VERIFICAR PERMISO REQUERIDO

			// A. Buscar la entidad de Permiso por su nombre para obtener su ID.
			const requiredPermissionDto = await permissionRepository.findByName(requiredPermissionName)
			if (!requiredPermissionDto) {
				// Si el permiso requerido no existe en el sistema, se lanza un error.
				return next(new PermissionDoesNotExistError(requiredPermissionName))
			}
			// Creamos el VO del ID del permiso requerido.
			const requiredPermissionId = new PermissionId(requiredPermissionDto.id)

			// B. Buscar la entidad del Grupo de Permisos del usuario por el ID resuelto.
			const userPermissionGroupDto = await permissionGroupRepository.findById(permissionGroupId)
			if (!userPermissionGroupDto) {
				// Si el grupo de permisos del usuario no existe (error de configuración de DB).
				return next(new PermissionGroupDoesNotExistError(permissionGroupId))
			}

			// C. Rehidratar la entidad de dominio PermissionGroup a partir de sus primitivas.
			const permissionGroupEntity = PermissionGroup.fromPrimitives(userPermissionGroupDto)

			// D. Ejecutar la lógica de dominio: ¿El grupo del usuario tiene el permiso requerido?
			if (permissionGroupEntity.hasPermission(requiredPermissionId)) {
				// ¡Éxito! El usuario tiene permiso. Se invoca 'next()' para continuar con el controlador de la ruta.
				return next()
			}

			// 5. DENY BY DEFAULT
			// Si el permiso no fue encontrado en el grupo del usuario, se deniega el acceso.
			return next(new ForbiddenError(`Permiso requerido '${requiredPermissionName}' no asignado.`))
		} catch (error) {
			next(error) // Pasar el error al manejador de errores global
		}
	}
}
