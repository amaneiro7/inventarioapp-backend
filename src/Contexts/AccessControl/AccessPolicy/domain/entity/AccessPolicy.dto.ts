import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'
import { type AccessPolicyName } from '../valueObject/AccessPolicyName'
import { type AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'

export type AccessPolicyRaw = {
	id: Primitives<AccessPolicyId>
	name: Primitives<AccessPolicyName>
	cargoId: Primitives<CargoId> | null
	departamentoId?: Primitives<DepartmentId> | null
	permissionGroupId: Primitives<PermissionGroupId>
	priority: Primitives<AccessPolicyPriority>
}

export type AccessPolicyPrimitives = AccessPolicyRaw

export type AccessPolicyParams = Omit<AccessPolicyRaw, 'id'>

export type AccessPolicyDto = AccessPolicyRaw
