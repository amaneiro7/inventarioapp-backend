import { DomainEvent } from '../../../../../Shared/domain/event/DomainEvent'

type MigrationRuleChange = {
	field: string
	oldValue: unknown
	newValue: unknown
}

type MigrationRuleUpdatedDomainEventAttributes = {
	readonly changes: MigrationRuleChange[]
}

export class MigrationRuleUpdatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'migration_rule.updated'

	readonly changes: MigrationRuleChange[]

	constructor({
		aggregateId,
		changes,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		changes: MigrationRuleChange[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: MigrationRuleUpdatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.changes = changes
	}

	toPrimitives(): MigrationRuleUpdatedDomainEventAttributes {
		return {
			changes: this.changes
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: MigrationRuleUpdatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new MigrationRuleUpdatedDomainEvent({
			aggregateId,
			changes: attributes.changes,
			eventId,
			occurredOn
		})
	}
}
