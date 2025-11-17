import { type CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { type DepartmentId } from '../../../../employee/IDepartment/DepartmentId'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'
import { type AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'

export interface AccessPolicy {
	id: Primitives<AccessPolicyId>
	cargoId: Nullable<Primitives<CargoId>>
	departamentoId?: Nullable<Primitives<DepartmentId>>
	permissionGroupId: Primitives<PermissionGroupId>
	priority: Primitives<AccessPolicyPriority>
}

export type AccessPolicyPrimitives = AccessPolicy

export type AccessPolicyParams = Omit<AccessPolicyPrimitives, 'id'>

export type AccessPolicyDto = AccessPolicy
