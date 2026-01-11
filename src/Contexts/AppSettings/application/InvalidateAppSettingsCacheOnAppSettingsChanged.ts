import { AppSettingsUpdaterDomainEvent } from '../domain/event/AppSettingsUpdaterDomainEvent'
import { AppSettingsCacheInvalidator } from '../domain/repository/AppSettingsCacheInvalidator'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'

export class InvalidateAppSettingsCacheOnAppSettingsChanged implements DomainEventSubscriber<AppSettingsUpdaterDomainEvent> {
	private readonly invalidator: AppSettingsCacheInvalidator

	constructor({ settingsRepository }: { settingsRepository: AppSettingsCacheInvalidator }) {
		this.invalidator = settingsRepository
	}

	async on(event: AppSettingsUpdaterDomainEvent): Promise<void> {
		const isAppSettingsEvent = event instanceof AppSettingsUpdaterDomainEvent

		// Si es AppSettings, invalidamos específico
		await this.invalidator.invalidate(isAppSettingsEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [AppSettingsUpdaterDomainEvent]
	}
}
