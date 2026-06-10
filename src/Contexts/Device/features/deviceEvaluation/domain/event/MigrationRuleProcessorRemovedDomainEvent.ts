import { DomainEvent } from '../../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the MigrationRuleProcessorRemovedDomainEvent.
 */
type MigrationRuleProcessorRemovedDomainEventAttributes = {
	readonly processorId: string
}

/**
 * @description Represents the domain event triggered when a Processor is removed from a MigrationRule.
 */
export class MigrationRuleProcessorRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'migration_rule.processor_removed'

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
		super({ eventName: MigrationRuleProcessorRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.processorId = processorId
	}

	toPrimitives(): MigrationRuleProcessorRemovedDomainEventAttributes {
		return {
			processorId: this.processorId
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: MigrationRuleProcessorRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new MigrationRuleProcessorRemovedDomainEvent({
			aggregateId,
			processorId: attributes.processorId,
			eventId,
			occurredOn
		})
	}
}
