import { MigrationRuleCreatedDomainEvent } from '../domain/event/MigrationRuleCreatedDomainEvent'
import { MigrationRuleUpdatedDomainEvent } from '../domain/event/MigrationRuleUpdatedDomainEvent'
import { MigrationRuleRemovedDomainEvent } from '../domain/event/MigrationRuleRemovedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../../../../Features/Processor/domain/event/ProcessorUpdatedDomainEvent'
import type { DomainEventClass } from '../../../../Shared/domain/event/DomainEvent'
import type { DomainEventSubscriber } from '../../../../Shared/domain/event/DomainEventSubscriber'
import type { CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateMigrationRuleCacheOnMigrationRuleChanged implements DomainEventSubscriber<
	| MigrationRuleCreatedDomainEvent
	| MigrationRuleUpdatedDomainEvent
	| MigrationRuleRemovedDomainEvent
	| ProcessorUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ migrationRuleRepository }: { migrationRuleRepository: CacheInvalidator }) {
		this.invalidator = migrationRuleRepository
	}

	async on(
		event:
			| MigrationRuleCreatedDomainEvent
			| MigrationRuleUpdatedDomainEvent
			| MigrationRuleRemovedDomainEvent
			| ProcessorUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof MigrationRuleUpdatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		} else if (
			event instanceof MigrationRuleCreatedDomainEvent ||
			event instanceof MigrationRuleRemovedDomainEvent
		) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [
			MigrationRuleCreatedDomainEvent,
			MigrationRuleUpdatedDomainEvent,
			MigrationRuleRemovedDomainEvent,
			ProcessorUpdatedDomainEvent
		]
	}
}
