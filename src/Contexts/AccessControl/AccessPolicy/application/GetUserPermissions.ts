import { PermissionGroup } from '../../PermissionGroup/domain/entity/PermissionGroup'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { type AccessPolicyDto } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyResolver } from './AccessPolicyResolver'
import { type RoleId } from '../../../User/Role/domain/RoleId'
import { ADMIN_ROLE_ID } from '../../../User/Role/domain/RoleOptions'

export interface GetUserPermissionsParams {
	roleId?: Primitives<RoleId>
	cargoId?: AccessPolicyDto['cargoId']
	departamentoId?: AccessPolicyDto['departamentoId']
	vicepresidenciaId?: AccessPolicyDto['vicepresidenciaId']
	vicepresidenciaEjecutivaId?: AccessPolicyDto['vicepresidenciaEjecutivaId']
	directivaId?: AccessPolicyDto['directivaId']
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

	async run({
		roleId,
		cargoId,
		departamentoId,
		directivaId,
		vicepresidenciaEjecutivaId,
		vicepresidenciaId
	}: GetUserPermissionsParams): Promise<string[]> {
		// 1. Bypass para el rol de Administrador
		if (String(roleId) === String(ADMIN_ROLE_ID)) {
			// Si el rol es admin, devolver todos los nombres de permisos existentes
			const allPermissions = await this.permissionRepository.search()
			return allPermissions.map(p => p.name)
		}

		// 2. Resolver las políticas de acceso para obtener los grupos de permisos aplicables
		const permissionGroupIds = await this.accessPolicyResolver.run({
			roleId,
			cargoId,
			departamentoId,
			directivaId,
			vicepresidenciaEjecutivaId,
			vicepresidenciaId
		})
		// Si no hay políticas coincidentes, el usuario simplemente no tiene permisos.
		if (!permissionGroupIds || permissionGroupIds.length === 0) {
			return []
		}

		// 3. Obtener los grupos de permisos y sus permisos asociados
		const userPermissionGroupDtos = await this.permissionGroupRepository.findByIds(permissionGroupIds)
		if (!userPermissionGroupDtos || userPermissionGroupDtos.length === 0) {
			return [] // Grupo de permisos no encontrado
		}

		const permissionGroupEntities = userPermissionGroupDtos.map(group => PermissionGroup.fromPrimitives(group))

		const permissionIds = permissionGroupEntities.flatMap(groupEntity => groupEntity.permissionsValue)

		const uniquePermissionIds = [...new Set(permissionIds)]

		// 4. Mapear IDs a nombres de permisos
		const permissionsDtos = await this.permissionRepository.findByIds(uniquePermissionIds)
		return permissionsDtos.map(p => p.name)
	}
}
