import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the AccessPolicyCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type AccessPolicyCreatedDomainEventBody = {
	readonly name: string
	readonly accessPolicyId: string
}

/**
 * @description Represents the domain event that is triggered when a new permission is created.
 */
export class AccessPolicyCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'access_control.access_policy.created'

	readonly body: AccessPolicyCreatedDomainEventBody

	constructor({
		aggregateId,
		body,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		body: AccessPolicyCreatedDomainEventBody
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: AccessPolicyCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.body = body
	}

	toPrimitives(): AccessPolicyCreatedDomainEventBody {
		return this.body
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: AccessPolicyCreatedDomainEventBody
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new AccessPolicyCreatedDomainEvent({
			aggregateId,
			body: attributes,
			eventId,
			occurredOn
		})
	}
}
