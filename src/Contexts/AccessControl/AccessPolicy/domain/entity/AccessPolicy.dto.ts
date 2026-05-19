import { type CargoId } from '../../../../employee/Cargo/domain/valueObject/CargoId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'
import { type AccessPolicyName } from '../valueObject/AccessPolicyName'
import { type AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'
import { type RoleId } from '../../../../User/Role/domain/valueObject/RoleId'
import { type UnidadId } from '../../../../employee/Unidad/domain/valueObject/UnidadId'

export type AccessPolicyRaw = {
	id: Primitives<AccessPolicyId>
	name: Primitives<AccessPolicyName>
	roleId: Primitives<RoleId> | null
	cargoId: Primitives<CargoId> | null
	unidadId: Primitives<UnidadId> | null
	priority: Primitives<AccessPolicyPriority>
}

export type AccessPolicyParams = Omit<AccessPolicyRaw, 'id'> & {
	permissionGroupIds: Primitives<PermissionGroupId>[]
}

export type AccessPolicyFields = keyof AccessPolicyParams

export type AccessPolicyPrimitives = AccessPolicyRaw & {
	permissionsGroups: Primitives<PermissionGroupId>[]
}

export type AccessPolicyDto = Omit<AccessPolicyRaw, 'permissionsGroups'> & {
	permissionsGroups: PermissionGroupDto[]
}
