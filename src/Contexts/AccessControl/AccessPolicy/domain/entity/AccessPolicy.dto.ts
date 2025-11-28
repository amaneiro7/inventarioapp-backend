import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'
import { type AccessPolicyName } from '../valueObject/AccessPolicyName'
import { type AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { type PermissionGroupDto } from '../../../PermissionGroup/domain/entity/PermissionGroup.dto'

export type AccessPolicyRaw = {
	id: Primitives<AccessPolicyId>
	name: Primitives<AccessPolicyName>
	cargoId: Primitives<CargoId> | null
	departamentoId?: Primitives<DepartmentId> | null
	priority: Primitives<AccessPolicyPriority>
}

export type AccessPolicyParams = Omit<AccessPolicyRaw, 'id'> & {
	permissionGroupIds: Primitives<PermissionGroupId>[]
}

export type AccessPolicyPrimitives = AccessPolicyRaw & {
	permissionsGroups: Primitives<PermissionGroupId>[]
}

export type AccessPolicyDto = Omit<AccessPolicyRaw, 'permissionsGroups'> & {
	permissionsGroups: PermissionGroupDto[]
}
