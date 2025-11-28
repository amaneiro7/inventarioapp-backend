import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { AccessPolicyName } from '../valueObject/AccessPolicyName'
import { CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { DepartmentId } from '../../../../employee/IDepartment/DepartmentId' // Asumo que este es el path correcto
import { PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyId } from '../valueObject/AccessPolicyId'
import { AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { AccessPolicyRemovedDomainEvent } from './AccessPolicyRemovedDomainEvent'
import { AccessPolicyCreatedDomainEvent } from './AccessPolicyCreatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyParams, type AccessPolicyPrimitives } from './AccessPolicy.dto'
import { PermissionGroupAssignedToAccessPolicyDomainEvent } from './PermissionGroupAssignedToAccessPolicyDomainEvent'

export class AccessPolicy extends AggregateRoot {
	private permissionsGroups: Set<PermissionGroupId>
	constructor(
		private readonly id: AccessPolicyId,
		private name: AccessPolicyName,
		private cargoId: CargoId | null,
		private departamentoId: DepartmentId | null,
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
			params.cargoId ? new CargoId(params.cargoId) : null,
			params.departamentoId ? new DepartmentId(params.departamentoId) : null,
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
			primitives.cargoId ? new CargoId(primitives.cargoId) : null,
			primitives.departamentoId ? new DepartmentId(primitives.departamentoId) : null,
			uniquePermissionsGroups,
			new AccessPolicyPriority(primitives.priority)
		)
	}

	toPrimitives(): AccessPolicyPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargoId: this.cargoValue,
			departamentoId: this.departamentoValue,
			permissionsGroups: this.permissionGroupValue,
			priority: this.priorityValue
		}
	}

	// Lógica para determinar si una regla aplica a un empleado
	matches(employee: { cargoId?: string; departamentoId?: string }): boolean {
		const cargoMatch = !this.cargoId || this.cargoId.value === employee.cargoId
		const deptoMatch = !this.departamentoId || this.departamentoId.value === employee.departamentoId

		return cargoMatch && deptoMatch
	}

	get idValue(): Primitives<AccessPolicyId> {
		return this.id.value
	}

	get nameValue(): Primitives<AccessPolicyName> {
		return this.name.value
	}

	get cargoValue(): string | null {
		return this.cargoId?.value ?? null
	}

	get departamentoValue(): string | null {
		return this.departamentoId?.value ?? null
	}
	get permissionGroupValue(): Primitives<PermissionGroupId>[] {
		return Array.from(this.permissionsGroups).map(p => p.value)
	}

	get priorityValue(): number {
		return this.priority.value
	}

	updateCargo(newCargoId: Primitives<CargoId> | null): void {
		this.cargoId = newCargoId ? new CargoId(newCargoId) : null
	}

	updateName(newName: Primitives<AccessPolicyName>): void {
		this.name = new AccessPolicyName(newName)
	}

	updateDepartamento(newDepartamentoId: Primitives<DepartmentId> | null): void {
		this.departamentoId = newDepartamentoId ? new DepartmentId(newDepartamentoId) : null
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
