import { DomainEvent } from '../../../domain/event/DomainEvent'

export class AppSettingsDomainEvent extends DomainEvent {
	static eventName = 'app-settings:updated'
	public readonly key: string
	public readonly value: string

	constructor(aggregateId: string, value: string, eventId?: string, occurredOn?: Date) {
		super(AppSettingsDomainEvent.eventName, aggregateId, eventId, occurredOn)
		this.key = aggregateId
		this.value = value
	}

	toPrimitives(): { [key: string]: unknown } {
		return { key: this.key, value: this.value }
	}
}
