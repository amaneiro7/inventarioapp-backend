import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type LocationMonitoringCreatedDomainEventAttributes = {
	locationId: string
	status: string
}

export class LocationMonitoringCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'location_monitoring.created'

	readonly locationId: string
	readonly status: string

	constructor({
		aggregateId,
		locationId,
		status,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		locationId: string
		status: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: LocationMonitoringCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.locationId = locationId
		this.status = status
	}

	toPrimitives(): LocationMonitoringCreatedDomainEventAttributes {
		return {
			locationId: this.locationId,
			status: this.status
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: LocationMonitoringCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new LocationMonitoringCreatedDomainEvent({
			aggregateId,
			locationId: attributes.locationId,
			status: attributes.status,
			eventId,
			occurredOn
		})
	}
}
