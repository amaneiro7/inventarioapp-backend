import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { AccessPolicyName } from '../valueObject/AccessPolicyName'
import { CargoId } from '../../../../employee/Cargo/domain/valueObject/CargoId'
import { PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyId } from '../valueObject/AccessPolicyId'
import { AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { AccessPolicyRemovedDomainEvent } from '../event/AccessPolicyRemovedDomainEvent'
import { AccessPolicyCreatedDomainEvent } from '../event/AccessPolicyCreatedDomainEvent'
import { PermissionGroupAssignedToAccessPolicyDomainEvent } from '../event/PermissionGroupAssignedToAccessPolicyDomainEvent'
import { AccessPolicyUpdatedDomainEvent } from '../event/AccessPolicyUpdatedDomainEvent'
import { RoleId } from '../../../../User/Role/domain/valueObject/RoleId'
import { UnidadId } from '../../../../employee/Unidad/domain/valueObject/UnidadId'
import type { AccessPolicyFields, AccessPolicyParams, AccessPolicyPrimitives } from './AccessPolicy.dto'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class AccessPolicy extends AggregateRoot {
	private permissionsGroups: Set<PermissionGroupId>
	constructor(
		private readonly id: AccessPolicyId,
		private name: AccessPolicyName,
		private roleId: RoleId | null,
		private cargoId: CargoId | null,
		private unidadId: UnidadId | null,
		permissionsGroups: Set<PermissionGroupId>,
		private priority: AccessPolicyPriority
	) {
		super()
		this.permissionsGroups = permissionsGroups
	}

	static create(params: AccessPolicyParams): AccessPolicy {
		const permissionsGroups = new Set(params.permissionGroupIds.map(p => new PermissionGroupId(p)))
		const accessPolicy = new AccessPolicy(
			AccessPolicyId.random(),
			new AccessPolicyName(params.name),
			params.roleId ? new RoleId(params.roleId) : null,
			params.cargoId ? new CargoId(params.cargoId) : null,
			params.unidadId ? new UnidadId(params.unidadId) : null,
			permissionsGroups,
			new AccessPolicyPriority(params.priority)
		)
		accessPolicy.record(
			new AccessPolicyCreatedDomainEvent({
				aggregateId: accessPolicy.idValue,
				body: {
					accessPolicyId: accessPolicy.idValue,
					name: accessPolicy.nameValue
				}
			})
		)

		return accessPolicy
	}

	remove(): void {
		this.record(
			new AccessPolicyRemovedDomainEvent({
				aggregateId: this.idValue,
				accessPolicyId: this.idValue
			})
		)
	}

	static fromPrimitives(primitives: AccessPolicyPrimitives): AccessPolicy {
		const uniquePermissionsGroups = new Set(primitives.permissionsGroups.map(p => new PermissionGroupId(p)))
		return new AccessPolicy(
			new AccessPolicyId(primitives.id),
			new AccessPolicyName(primitives.name),
			primitives.roleId ? new RoleId(primitives.roleId) : null,
			primitives.cargoId ? new CargoId(primitives.cargoId) : null,
			primitives.unidadId ? new UnidadId(primitives.unidadId) : null,
			uniquePermissionsGroups,
			new AccessPolicyPriority(primitives.priority)
		)
	}

	toPrimitives(): AccessPolicyPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			roleId: this.roleValue,
			cargoId: this.cargoValue,
			unidadId: this.unidadValue,
			permissionsGroups: this.permissionGroupValue,
			priority: this.priorityValue
		}
	}

	// Lógica para determinar si una regla aplica a un empleado
	matches(employee: {
		roleId?: Primitives<RoleId> | null
		cargoId?: Primitives<CargoId> | null
		unidadId?: Primitives<UnidadId> | null
	}): boolean {
		const roleMatch = !this.roleId || String(this.roleValue) === String(employee.roleId)
		const cargoMatch = !this.cargoId || this.cargoValue === employee.cargoId
		const unidadMatch = !this.unidadId || this.unidadValue === employee.unidadId

		return cargoMatch && unidadMatch && roleMatch
	}

	get idValue(): Primitives<AccessPolicyId> {
		return this.id.value
	}

	get nameValue(): Primitives<AccessPolicyName> {
		return this.name.value
	}

	get roleValue(): Primitives<RoleId> | null {
		return this.roleId?.value ?? null
	}
	get cargoValue(): Primitives<CargoId> | null {
		return this.cargoId?.value ?? null
	}

	get unidadValue(): Primitives<UnidadId> | null {
		return this.unidadId?.value ?? null
	}
	get permissionGroupValue(): Primitives<PermissionGroupId>[] {
		return Array.from(this.permissionsGroups).map(p => p.value)
	}

	get priorityValue(): Primitives<AccessPolicyPriority> {
		return this.priority.value
	}

	registerUpdateEvent({
		changes
	}: {
		changes: Array<{ field: AccessPolicyFields; oldValue: unknown; newValue: unknown }>
	}): void {
		this.record(
			new AccessPolicyUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateRole(newRoleId: Primitives<RoleId> | null): void {
		this.roleId = newRoleId ? new RoleId(newRoleId) : null
	}
	updateCargo(newCargoId: Primitives<CargoId> | null): void {
		this.cargoId = newCargoId ? new CargoId(newCargoId) : null
	}

	updateName(newName: Primitives<AccessPolicyName>): void {
		this.name = new AccessPolicyName(newName)
	}

	updateUnidad(newUnidadId: Primitives<UnidadId> | null): void {
		this.unidadId = newUnidadId ? new UnidadId(newUnidadId) : null
	}

	assignPermissionGroup(permissionGroupId: PermissionGroupId): void {
		if (this.hasPermission(permissionGroupId)) {
			// Opcional: lanzar un error si ya lo tiene o simplemente no hacer nada.
			return
		}
		this.permissionsGroups.add(permissionGroupId)
		this.record(
			new PermissionGroupAssignedToAccessPolicyDomainEvent({
				aggregateId: this.id.value,
				body: { permissionGroupId: permissionGroupId.value }
			})
		)
	}

	revokePermissionGroup(permissionGroupId: PermissionGroupId): void {
		const permissionToRemove = [...this.permissionsGroups].find(p => p.equals(permissionGroupId))
		if (permissionToRemove) {
			this.permissionsGroups.delete(permissionToRemove)
			this.record(
				new PermissionGroupAssignedToAccessPolicyDomainEvent({
					aggregateId: this.id.value,
					body: { permissionGroupId: permissionGroupId.value }
				})
			)
		}
	}

	updatePriority(newPriority: Primitives<AccessPolicyPriority>): void {
		this.priority = new AccessPolicyPriority(newPriority)
	}

	hasPermission(permissionGroupId: PermissionGroupId): boolean {
		return [...this.permissionsGroups].some(p => p.equals(permissionGroupId))
	}
}
