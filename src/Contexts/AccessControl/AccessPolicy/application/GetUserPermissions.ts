import { PermissionGroup } from '../../PermissionGroup/domain/entity/PermissionGroup'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { type AccessPolicyDto } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyResolver } from './AccessPolicyResolver'
import { RoleId } from '../../../User/Role/domain/RoleId'
import { ForbiddenError } from '../../../Shared/domain/errors/ForbiddenError'

export interface GetUserPermissionsParams {
	roleId?: Primitives<RoleId>
	cargoId?: AccessPolicyDto['cargoId']
	departamentoId?: AccessPolicyDto['departamentoId']
}

export class GetUserPermissions {
	private readonly permissionRepository: PermissionRepository
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly accessPolicyResolver: AccessPolicyResolver

	constructor({
		accessPolicyResolver,
		permissionGroupRepository,
		permissionRepository
	}: {
		permissionRepository: PermissionRepository
		permissionGroupRepository: PermissionGroupRepository
		accessPolicyResolver: AccessPolicyResolver
	}) {
		this.permissionRepository = permissionRepository
		this.permissionGroupRepository = permissionGroupRepository
		this.accessPolicyResolver = accessPolicyResolver
	}

	async run({ roleId, cargoId, departamentoId }: GetUserPermissionsParams): Promise<string[]> {
		// 1. BYPASS para 'admin'
		if (roleId === RoleId.Options.ADMIN) {
			// Si el rol es admin, devolver todos los nombres de permisos existentes
			const allPermissions = await this.permissionRepository.search()
			return allPermissions.map(p => p.name)
		}

		if (!cargoId || !departamentoId) {
			// Si no es admin y faltan atributos, no hay permisos.
			return []
		}

		// 2. RESOLVER EL GRUPO DE PERMISOS
		const permissionGroupId = await this.accessPolicyResolver.run({ cargoId, departamentoId })

		if (!permissionGroupId) {
			// Si no se encuentra una política de acceso (y por ende un grupo de permisos) para el usuario.
			const userFriendlyMessage =
				'Su cuenta no tiene los permisos necesarios para acceder a esta área. Por favor, contacte al administrador del sistema para que verifique la configuración de su perfil.'
			throw new ForbiddenError(userFriendlyMessage)
		}

		// 3. OBTENER EL GRUPO Y SUS PERMISOS
		const userPermissionGroupDto = await this.permissionGroupRepository.findByIds(permissionGroupId)

		if (!userPermissionGroupDto) {
			return [] // Grupo de permisos no encontrado
		}

		const permissionGroupEntities = userPermissionGroupDto.map(group => PermissionGroup.fromPrimitives(group))
		const permissionIds = permissionGroupEntities.flatMap(groupEntity => groupEntity.permissionsValue)

		const uniquePermissionIds = [...new Set(permissionIds)]

		// 4. Mapear IDs a nombres de permisos
		const permissionsDtos = await this.permissionRepository.findByIds(uniquePermissionIds)
		return permissionsDtos.map(p => p.name)
	}
}
