import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { AccessPolicyName } from '../valueObject/AccessPolicyName'
import { CargoId } from '../../../../employee/Cargo/domain/valueObject/CargoId'

import { PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyId } from '../valueObject/AccessPolicyId'
import { AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { AccessPolicyRemovedDomainEvent } from './AccessPolicyRemovedDomainEvent'
import { AccessPolicyCreatedDomainEvent } from './AccessPolicyCreatedDomainEvent'
import { PermissionGroupAssignedToAccessPolicyDomainEvent } from './PermissionGroupAssignedToAccessPolicyDomainEvent'
import { RoleId } from '../../../../User/Role/domain/valueObject/RoleId'
import { DepartamentoId } from '../../../../employee/Departamento/domain/valueObject/DepartamentoId'
import { VicepresidenciaId } from '../../../../employee/Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { VicepresidenciaEjecutivaId } from '../../../../employee/VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { DirectivaId } from '../../../../employee/Directiva/domain/valueObject/DirectivaId'
import { type AccessPolicyParams, type AccessPolicyPrimitives } from './AccessPolicy.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class AccessPolicy extends AggregateRoot {
	private permissionsGroups: Set<PermissionGroupId>
	constructor(
		private readonly id: AccessPolicyId,
		private name: AccessPolicyName,
		private roleId: RoleId | null,
		private cargoId: CargoId | null,
		private departamentoId: DepartamentoId | null,
		private vicepresidenciaId: VicepresidenciaId | null,
		private vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId | null,
		private directivaId: DirectivaId | null,
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
			params.departamentoId ? new DepartamentoId(params.departamentoId) : null,
			params.vicepresidenciaId ? new VicepresidenciaId(params.vicepresidenciaId) : null,
			params.vicepresidenciaEjecutivaId
				? new VicepresidenciaEjecutivaId(params.vicepresidenciaEjecutivaId)
				: null,
			params.directivaId ? new DirectivaId(params.directivaId) : null,
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
			primitives.departamentoId ? new DepartamentoId(primitives.departamentoId) : null,
			primitives.vicepresidenciaId ? new VicepresidenciaId(primitives.vicepresidenciaId) : null,
			primitives.vicepresidenciaEjecutivaId
				? new VicepresidenciaEjecutivaId(primitives.vicepresidenciaEjecutivaId)
				: null,
			primitives.directivaId ? new DirectivaId(primitives.directivaId) : null,
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
			departamentoId: this.departamentoValue,
			vicepresidenciaId: this.vicepresidenciaValue,
			vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue,
			directivaId: this.directivaValue,
			permissionsGroups: this.permissionGroupValue,
			priority: this.priorityValue
		}
	}

	// Lógica para determinar si una regla aplica a un empleado
	matches(employee: {
		roleId?: Primitives<RoleId> | null
		cargoId?: Primitives<CargoId> | null
		departamentoId?: Primitives<DepartamentoId> | null
		vicepresidenciaId?: Primitives<VicepresidenciaId> | null
		vicepresidenciaEjecutivaId?: Primitives<VicepresidenciaEjecutivaId> | null
		directivaId?: Primitives<DirectivaId> | null
	}): boolean {
		const roleMatch = !this.roleId || String(this.roleValue) === String(employee.roleId)
		const cargoMatch = !this.cargoId || this.cargoValue === employee.cargoId
		const deptoMatch = !this.departamentoId || this.departamentoValue === employee.departamentoId
		const vicepresidenciaMatch = !this.vicepresidenciaId || this.vicepresidenciaValue === employee.vicepresidenciaId
		const vicepresidenciaEjecutivaMatch =
			!this.vicepresidenciaEjecutivaId ||
			this.vicepresidenciaEjecutivaValue === employee.vicepresidenciaEjecutivaId
		const directivaMatch = !this.directivaId || this.directivaValue === employee.directivaId

		return (
			cargoMatch &&
			deptoMatch &&
			vicepresidenciaMatch &&
			vicepresidenciaEjecutivaMatch &&
			directivaMatch &&
			roleMatch
		)
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

	get departamentoValue(): Primitives<DepartamentoId> | null {
		return this.departamentoId?.value ?? null
	}
	get vicepresidenciaValue(): Primitives<VicepresidenciaId> | null {
		return this.vicepresidenciaId?.value ?? null
	}
	get vicepresidenciaEjecutivaValue(): Primitives<VicepresidenciaEjecutivaId> | null {
		return this.vicepresidenciaEjecutivaId?.value ?? null
	}
	get directivaValue(): Primitives<DirectivaId> | null {
		return this.directivaId?.value ?? null
	}
	get permissionGroupValue(): Primitives<PermissionGroupId>[] {
		return Array.from(this.permissionsGroups).map(p => p.value)
	}

	get priorityValue(): Primitives<AccessPolicyPriority> {
		return this.priority.value
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

	updateDepartamento(newDepartamentoId: Primitives<DepartamentoId> | null): void {
		this.departamentoId = newDepartamentoId ? new DepartamentoId(newDepartamentoId) : null
	}
	updateVicepresidencia(newVicepresidenciaId: Primitives<VicepresidenciaId> | null): void {
		this.vicepresidenciaId = newVicepresidenciaId ? new VicepresidenciaId(newVicepresidenciaId) : null
	}
	updatevicepresidenciaEjecutiva(newvicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId> | null): void {
		this.vicepresidenciaEjecutivaId = newvicepresidenciaEjecutivaId
			? new VicepresidenciaEjecutivaId(newvicepresidenciaEjecutivaId)
			: null
	}
	updateDirectiva(newDirectivaId: Primitives<DirectivaId> | null): void {
		this.directivaId = newDirectivaId ? new DirectivaId(newDirectivaId) : null
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
