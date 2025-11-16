import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { PermissionId } from '../valueObject/PermissionId'
import { PermissionName } from '../valueObject/PermissionName'
import { PermissionCreatedDomainEvent } from './PermissionCreatedDomainEvent'
import { PermissionRemovedDomainEvent } from './PermissionRemovedDomainEvent'
import { type PermissionParams, type PermissionPrimitives } from './Permission.dto'

export class Permission extends AggregateRoot {
	constructor(
		private readonly id: PermissionId,
		private readonly name: PermissionName
	) {
		super()
	}

	static create(params: PermissionParams): Permission {
		const id = PermissionId.random()
		const name = new PermissionName(params.name)
		const permission = new Permission(id, name)

		// Registramos un evento de dominio para notificar que se ha creado un nuevo permiso.
		// Esto permite que otras partes del sistema reaccionen de forma desacoplada.
		permission.record(new PermissionCreatedDomainEvent({ aggregateId: id.value, name: name.value }))

		return permission
	}

	remove(): void {
		this.record(
			new PermissionRemovedDomainEvent({
				aggregateId: this.idValue,
				name: this.nameValue
			})
		)
	}

	toPrimitives(): PermissionPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	static fromPrimitives(primitives: PermissionPrimitives): Permission {
		return new Permission(new PermissionId(primitives.id), new PermissionName(primitives.name))
	}

	get idValue(): string {
		return this.id.value
	}

	get nameValue(): string {
		return this.name.value
	}
}
