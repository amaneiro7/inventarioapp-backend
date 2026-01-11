import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the AccessPolicyRemovedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type AccessPolicyRemovedDomainEventAttributes = {
	readonly accessPolicyId: string
}

/**
 * @description Represents the domain event that is triggered when a new permission is Removed.
 */
export class AccessPolicyRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access_policy.removed'

	readonly accessPolicyId: string

	constructor({
		aggregateId,
		accessPolicyId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		accessPolicyId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: AccessPolicyRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.accessPolicyId = accessPolicyId
	}

	toPrimitives(): AccessPolicyRemovedDomainEventAttributes {
		return {
			accessPolicyId: this.accessPolicyId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: AccessPolicyRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new AccessPolicyRemovedDomainEvent({
			aggregateId,
			accessPolicyId: attributes.accessPolicyId,
			eventId,
			occurredOn
		})
	}
}
