import { DomainEvent } from '../../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the MigrationRuleRemoveDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type MigrationRuleRemovedDomainEventAttributes = {
	readonly minRamGb: number
	readonly minDiskGb: number
	readonly isActive: boolean
	readonly approvedProcessor: string[]
}

export class MigrationRuleRemovedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'migration_rule.removed'

	readonly minRamGb: number
	readonly minDiskGb: number
	readonly isActive: boolean
	readonly approvedProcessor: string[]

	constructor({
		aggregateId,
		minRamGb,
		minDiskGb,
		isActive,
		approvedProcessor,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		minRamGb: number
		minDiskGb: number
		isActive: boolean
		approvedProcessor: string[]
		eventId?: string
		occurredOn?: Date
	}) {
		super({ eventName: MigrationRuleRemovedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.minRamGb = minRamGb
		this.minDiskGb = minDiskGb
		this.isActive = isActive
		this.approvedProcessor = approvedProcessor
	}

	toPrimitives(): MigrationRuleRemovedDomainEventAttributes {
		return {
			minRamGb: this.minRamGb,
			minDiskGb: this.minDiskGb,
			isActive: this.isActive,
			approvedProcessor: this.approvedProcessor
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: MigrationRuleRemovedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new MigrationRuleRemovedDomainEvent({
			aggregateId,
			minRamGb: attributes.minRamGb,
			minDiskGb: attributes.minDiskGb,
			isActive: attributes.isActive,
			approvedProcessor: attributes.approvedProcessor,
			eventId,
			occurredOn
		})
	}
}
