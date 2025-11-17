import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { CargoId } from '../../../../employee/Cargo/domain/CargoId'
import { DepartmentId } from '../../../../employee/IDepartment/DepartmentId' // Asumo que este es el path correcto
import { PermissionGroupId } from '../../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyId } from '../valueObject/AccessPolicyId'
import { AccessPolicyPriority } from '../valueObject/AccessPolicyPriority'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyParams, type AccessPolicyPrimitives } from './AccessPolicy.dto'
import { AccessPolicyRemovedDomainEvent } from './AccessPolicyRemovedDomainEvent'
import { AccessPolicyCreatedDomainEvent } from './AccessPolicyCreatedDomainEvent'

export class AccessPolicy extends AggregateRoot {
	constructor(
		private readonly id: AccessPolicyId,
		private cargoId: CargoId | null,
		private departamentoId: DepartmentId | null,
		private permissionGroupId: PermissionGroupId,
		private priority: AccessPolicyPriority
	) {
		super()
	}

	static create(params: AccessPolicyParams): AccessPolicy {
		const accessPolicy = new AccessPolicy(
			AccessPolicyId.random(),
			params.cargoId ? new CargoId(params.cargoId) : null,
			params.departamentoId ? new DepartmentId(params.departamentoId) : null,
			new PermissionGroupId(params.permissionGroupId),
			new AccessPolicyPriority(params.priority)
		)
		accessPolicy.record(
			new AccessPolicyCreatedDomainEvent({
				aggregateId: accessPolicy.idValue,
				accessPolicyId: accessPolicy.idValue
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
		return new AccessPolicy(
			new AccessPolicyId(primitives.id),
			primitives.cargoId ? new CargoId(primitives.cargoId) : null,
			primitives.departamentoId ? new DepartmentId(primitives.departamentoId) : null,
			new PermissionGroupId(primitives.permissionGroupId),
			new AccessPolicyPriority(primitives.priority)
		)
	}

	toPrimitives(): AccessPolicyPrimitives {
		return {
			id: this.id.value,
			cargoId: this.cargoId?.value,
			departamentoId: this.departamentoId?.value,
			permissionGroupId: this.permissionGroupId.value,
			priority: this.priority.value
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

	get cargoValue(): string | undefined {
		return this.cargoId?.value
	}

	get departamentoValue(): string | undefined {
		return this.departamentoId?.value
	}
	get permissionGroupValue(): string {
		return this.permissionGroupId.value
	}

	get priorityValue(): number {
		return this.priority.value
	}

	updateCargo(newCargoId: Primitives<CargoId> | null): void {
		this.cargoId = newCargoId ? new CargoId(newCargoId) : null
	}

	updateDepartamento(newDepartamentoId: Primitives<DepartmentId> | null): void {
		this.departamentoId = newDepartamentoId ? new DepartmentId(newDepartamentoId) : null
	}

	updatePermissionGroup(newPermissionGroupId: Primitives<PermissionGroupId>): void {
		this.permissionGroupId = new PermissionGroupId(newPermissionGroupId)
	}

	updatePriority(newPriority: Primitives<AccessPolicyPriority>): void {
		this.priority = new AccessPolicyPriority(newPriority)
	}
}
