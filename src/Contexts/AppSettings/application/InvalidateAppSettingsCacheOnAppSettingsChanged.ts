import { AppSettingsUpdaterDomainEvent } from '../domain/event/AppSettingsUpdaterDomainEvent'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../Shared/domain/repository/CacheInvalidator'

export class InvalidateAppSettingsCacheOnAppSettingsChanged implements DomainEventSubscriber<AppSettingsUpdaterDomainEvent> {
	private readonly invalidator: CacheInvalidator

	constructor({ settingsRepository }: { settingsRepository: CacheInvalidator }) {
		this.invalidator = settingsRepository
	}

	async on(event: AppSettingsUpdaterDomainEvent): Promise<void> {
		if (event instanceof AppSettingsUpdaterDomainEvent) {
			await this.invalidator.invalidate({
				key: event.aggregateId
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [AppSettingsUpdaterDomainEvent]
	}
}
