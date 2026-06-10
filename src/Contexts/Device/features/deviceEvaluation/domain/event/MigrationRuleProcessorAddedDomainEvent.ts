import { DomainEvent } from '../../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the MigrationRuleProcessorAddedDomainEvent.
 */
type MigrationRuleProcessorAddedDomainEventAttributes = {
	readonly processorId: string
}

/**
 * @description Represents the domain event triggered when a Processor is added to a MigrationRule.
 */
export class MigrationRuleProcessorAddedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'migration_rule.processor_added'

	readonly processorId: string

	constructor({
		aggregateId,
		processorId,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		processorId: string
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: MigrationRuleProcessorAddedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.processorId = processorId
	}

	toPrimitives(): MigrationRuleProcessorAddedDomainEventAttributes {
		return {
			processorId: this.processorId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: MigrationRuleProcessorAddedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new MigrationRuleProcessorAddedDomainEvent({
			aggregateId,
			processorId: attributes.processorId,
			eventId,
			occurredOn
		})
	}
}
