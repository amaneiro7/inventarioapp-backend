import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the AccessPolicyCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type AccessPolicyCreatedDomainEventAttributes = {
	readonly accessPolicyId: string
}

/**
 * @description Represents the domain event that is triggered when a new permission is created.
 */
export class AccessPolicyCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access_policy.created'

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
		super({ eventName: AccessPolicyCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.accessPolicyId = accessPolicyId
	}

	toPrimitives(): AccessPolicyCreatedDomainEventAttributes {
		return {
			accessPolicyId: this.accessPolicyId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: AccessPolicyCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new AccessPolicyCreatedDomainEvent({
			aggregateId,
			accessPolicyId: attributes.accessPolicyId,
			eventId,
			occurredOn
		})
	}
}
