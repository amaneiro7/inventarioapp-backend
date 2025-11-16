import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type PermissionRevokedFromPermissionGroupDomainEventBody = {
	readonly permissionId: string
}

export class PermissionRevokedFromPermissionGroupDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.permission_group.permission_revoked'

	readonly body: PermissionRevokedFromPermissionGroupDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: PermissionRevokedFromPermissionGroupDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({
			eventName: PermissionRevokedFromPermissionGroupDomainEvent.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn
		})
		this.body = body
	}

	toPrimitives(): PermissionRevokedFromPermissionGroupDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: PermissionRevokedFromPermissionGroupDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new PermissionRevokedFromPermissionGroupDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
