import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { PermissionGroupName } from '../valueObject/PermissionGroupName'

import { PermissionGroupId } from '../valueObject/PermissionGroupId'
import { PermissionGroupDto, PermissionGroupParams, PermissionGroupPrimitives } from './PermissionGroup.dto'
import { PermissionGroupCreatedDomainEvent } from './PermissionGroupCreatedDomainEvent'
import { PermissionRevokedFromPermissionGroupDomainEvent } from './PermissionRevokedFromPermissionGroupDomainEvent'
import { PermissionAssignedToPermissionGroupDomainEvent } from './PermissionAssignedToPermissionGroupDomainEvent'
import { PermissionGroupRemovedDomainEvent } from './PermissionGroupRemovedDomainEvent'
import { PermissionGroupDescription } from './PermissionGroupDescription'

export class PermissionGroup extends AggregateRoot {
	private _permissions: Set<PermissionId>

	private constructor(
		readonly id: PermissionGroupId,
		public name: PermissionGroupName,
		public description: PermissionGroupDescription,
		permissions: Set<PermissionId>
	) {
		super()
		this._permissions = permissions
	}

	static create(params: PermissionGroupParams): PermissionGroup {
		const permissionGroupId = PermissionGroupId.random()
		const permissionGroupName = new PermissionGroupName(params.name)
		const permissionGroupDescription = new PermissionGroupDescription(params.description ?? '')
		const permissions = new Set(params.permissions?.map(p => new PermissionId(p)) ?? [])

		const permissionGroup = new PermissionGroup(
			permissionGroupId,
			permissionGroupName,
			permissionGroupDescription,
			permissions
		)

		permissionGroup.record(
			new PermissionGroupCreatedDomainEvent({
				aggregateId: permissionGroupId.value,
				body: {
					name: permissionGroupName.value,
					description: permissionGroupDescription.value,
					permissions: Array.from(permissions).map(p => p.value)
				}
			})
		)

		return permissionGroup
	}

	static fromPrimitives(primitives: PermissionGroupDto): PermissionGroup {
		const uniquePermissions = new Set(primitives.permissions.map(p => new PermissionId(p.id)))
		return new PermissionGroup(
			new PermissionGroupId(primitives.id),
			new PermissionGroupName(primitives.name),
			new PermissionGroupDescription(primitives.description),
			uniquePermissions
		)
	}

	toPrimitives(): PermissionGroupPrimitives {
		return {
			id: this.id.value,
			name: this.name.value,
			description: this.description.value,
			permissions: Array.from(this._permissions).map(p => p.value)
		}
	}

	updateName(newName: string): void {
		this.name = new PermissionGroupName(newName)
	}

	updateDescription(newDescription: string): void {
		this.description = new PermissionGroupDescription(newDescription)
	}

	get permissions(): ReadonlySet<PermissionId> {
		return this._permissions
	}

	// Métodos que expresan la intención del negocio
	assignPermission(permissionId: PermissionId): void {
		if (this.hasPermission(permissionId)) {
			// Opcional: lanzar un error si ya lo tiene o simplemente no hacer nada.
			return
		}
		this._permissions.add(permissionId)
		this.record(
			new PermissionAssignedToPermissionGroupDomainEvent({
				aggregateId: this.id.value,
				body: { permissionId: permissionId.value }
			})
		)
	}

	revokePermission(permissionId: PermissionId): void {
		if (!this.hasPermission(permissionId)) {
			return
		}
		this._permissions.delete(permissionId)
		this.record(
			new PermissionRevokedFromPermissionGroupDomainEvent({
				aggregateId: this.id.value,
				body: { permissionId: permissionId.value }
			})
		)
	}

	hasPermission(permissionId: PermissionId): boolean {
		return [...this._permissions].some(p => p.equals(permissionId))
	}

	remove(): void {
		this.record(
			new PermissionGroupRemovedDomainEvent({
				aggregateId: this.id.value,
				body: { name: this.name.value }
			})
		)
	}
}
