import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { PermissionId } from '../../../Permission/domain/valueObject/PermissionId'
import { PermissionGroupName } from '../valueObject/PermissionGroupName'

import { PermissionGroupId } from '../valueObject/PermissionGroupId'
import {
	PermissionGroupDto,
	PermissionGroupFields,
	PermissionGroupParams,
	PermissionGroupPrimitives
} from './PermissionGroup.dto'
import { PermissionGroupCreatedDomainEvent } from '../event/PermissionGroupCreatedDomainEvent'
import { PermissionRevokedFromPermissionGroupDomainEvent } from '../event/PermissionRevokedFromPermissionGroupDomainEvent'
import { PermissionAssignedToPermissionGroupDomainEvent } from '../event/PermissionAssignedToPermissionGroupDomainEvent'
import { PermissionGroupRemovedDomainEvent } from '../event/PermissionGroupRemovedDomainEvent'
import { PermissionGroupDescription } from './PermissionGroupDescription'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { PermissionGroupUpdatedDomainEvent } from '../event/PermissionGroupUpdatedDomainEvent'

export class PermissionGroup extends AggregateRoot {
	private permissions: Set<PermissionId>

	private constructor(
		private readonly id: PermissionGroupId,
		private name: PermissionGroupName,
		private description: PermissionGroupDescription,
		permissions: Set<PermissionId>
	) {
		super()
		this.permissions = permissions
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
			id: this.idValue,
			name: this.nameValue,
			description: this.descriptionValue,
			permissions: this.permissionsValue
		}
	}
	get idValue(): Primitives<PermissionGroupId> {
		return this.id.value
	}

	get nameValue(): Primitives<PermissionGroupName> {
		return this.name.value
	}

	get descriptionValue(): Primitives<PermissionGroupDescription> {
		return this.description.value
	}

	get permissionsValue(): Primitives<PermissionId>[] {
		return Array.from(this.permissions).map(p => p.value)
	}

	registerUpdateEvent({
		changes
	}: {
		changes: Array<{ field: PermissionGroupFields; oldValue: unknown; newValue: unknown }>
	}): void {
		this.record(
			new PermissionGroupUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateName(newName: string): void {
		this.name = new PermissionGroupName(newName)
	}

	updateDescription(newDescription: string): void {
		this.description = new PermissionGroupDescription(newDescription)
	}

	// Métodos que expresan la intención del negocio
	assignPermission(permissionId: PermissionId): void {
		if (this.hasPermission(permissionId)) {
			// Opcional: lanzar un error si ya lo tiene o simplemente no hacer nada.
			return
		}
		this.permissions.add(permissionId)
		this.record(
			new PermissionAssignedToPermissionGroupDomainEvent({
				aggregateId: this.id.value,
				body: { permissionId: permissionId.value }
			})
		)
	}

	revokePermission(permissionId: PermissionId): void {
		const permissionToRemove = [...this.permissions].find(p => p.equals(permissionId))
		if (permissionToRemove) {
			this.permissions.delete(permissionToRemove)
			this.record(
				new PermissionRevokedFromPermissionGroupDomainEvent({
					aggregateId: this.id.value,
					body: { permissionId: permissionId.value }
				})
			)
		}
	}

	hasPermission(permissionId: PermissionId): boolean {
		return [...this.permissions].some(p => p.equals(permissionId))
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
