import { DomainEvent } from '../../../Shared/domain/event/DomainEvent'
import { type HistoryPrimitives } from '../entity/History.dto'

export class HistoryCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'history.created'
	readonly history: HistoryPrimitives

	constructor({
		aggregateId,
		history,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		history: HistoryPrimitives
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: HistoryCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.history = history
	}

	toPrimitives(): Record<string, unknown> {
		return {
			history: this.history
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: Record<string, unknown>
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { history } = params.attributes
		return new HistoryCreatedDomainEvent({
			aggregateId: params.aggregateId,
			history: history as HistoryPrimitives,
			eventId: params.eventId,
			occurredOn: params.occurredOn
		})
	}
}
