import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'

type UpdateAppSettingsDomainEventAttributes = {
	readonly key: string
	readonly value: string
}

export class AppSettingsUpdaterDomainEvent extends DomainEvent {
	static EVENT_NAME = 'app-settings:updated'
	static eventName = 'app-settings:updated'
	public readonly key: string
	public readonly value: string

	constructor({
		aggregateId,
		key,
		value,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		key: string
		value: string
		occurredOn?: Date
	}) {
		super({ eventName: AppSettingsUpdaterDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.key = key
		this.value = value
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: UpdateAppSettingsDomainEventAttributes
		eventId?: string
		occurredOn?: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new AppSettingsUpdaterDomainEvent({
			aggregateId,
			key: attributes.key,
			value: attributes.value,
			eventId,
			occurredOn
		})
	}

	toPrimitives(): UpdateAppSettingsDomainEventAttributes {
		const { key, value } = this
		return {
			key,
			value
		}
	}
}
