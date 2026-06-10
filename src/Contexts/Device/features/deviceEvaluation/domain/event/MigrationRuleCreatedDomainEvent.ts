import { DomainEvent } from '../../../../../Shared/domain/event/DomainEvent'

/**
 * @description Defines the attributes for the MigrationRuleCreatedDomainEvent.
 * This type is used for serializing and deserializing the event data.
 */
type MigrationRuleCreatedDomainEventAttributes = {
	readonly minRamGb: number
	readonly minDiskGb: number
	readonly isActive: boolean
	readonly approvedProcessor: string[]
}

/**
 * @description Represents the domain event that is triggered when a new MigrationRule is created.
 */
export class MigrationRuleCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'migration_rule.created'

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
		super({ eventName: MigrationRuleCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.minRamGb = minRamGb
		this.minDiskGb = minDiskGb
		this.isActive = isActive
		this.approvedProcessor = approvedProcessor
	}

	toPrimitives(): MigrationRuleCreatedDomainEventAttributes {
		return {
			minRamGb: this.minRamGb,
			minDiskGb: this.minDiskGb,
			isActive: this.isActive,
			approvedProcessor: this.approvedProcessor
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: MigrationRuleCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, eventId, occurredOn } = params
		return new MigrationRuleCreatedDomainEvent({
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
