import { MigrationRuleCreatedDomainEvent } from '../domain/event/MigrationRuleCreatedDomainEvent'
import { MigrationRuleUpdatedDomainEvent } from '../domain/event/MigrationRuleUpdatedDomainEvent'
import { MigrationRuleRemovedDomainEvent } from '../domain/event/MigrationRuleRemovedDomainEvent'
import { ProcessorUpdatedDomainEvent } from '../../../../Features/Processor/domain/event/ProcessorUpdatedDomainEvent'
import { DeviceCreatedDomainEvent } from '../../../Device/domain/event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../../../Device/domain/event/DeviceUpdatedDomainEvent'
import { DeviceRemovedDomainEvent } from '../../../Device/domain/event/DeviceRemovedDomainEvent'
import { BrandUpdatedDomainEvent } from '../../../../Brand/domain/event/BrandUpdatedDomainEvent'
import { EmployeeUpdatedDomainEvent } from '../../../../employee/Employee/domain/event/EmployeeUpdatedDomainEvent'
import { CargoUpdatedDomainEvent } from '../../../../employee/Cargo/domain/event/CargoUpdatedDomainEvent'
import { UnidadUpdatedDomainEvent } from '../../../../employee/Unidad/domain/event/UnidadUpdatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../../../../Location/Location/domain/event/LocationUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../../../Location/Site/domain/event/SiteUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../../../Location/City/domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../../../Location/Region/domain/events/RegionUpdatedDomainEvent'
import type { DomainEventClass } from '../../../../Shared/domain/event/DomainEvent'
import type { DomainEventSubscriber } from '../../../../Shared/domain/event/DomainEventSubscriber'
import type { CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateEvaluationHardwareDashboardCacheOnChanged implements DomainEventSubscriber<
	| MigrationRuleCreatedDomainEvent
	| MigrationRuleUpdatedDomainEvent
	| MigrationRuleRemovedDomainEvent
	| ProcessorUpdatedDomainEvent
	| DeviceCreatedDomainEvent
	| DeviceUpdatedDomainEvent
	| DeviceRemovedDomainEvent
	| BrandUpdatedDomainEvent
	| EmployeeUpdatedDomainEvent
	| CargoUpdatedDomainEvent
	| UnidadUpdatedDomainEvent
	| LocationUpdatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ hardwareEvaluationRepository }: { hardwareEvaluationRepository: CacheInvalidator }) {
		this.invalidator = hardwareEvaluationRepository
	}

	async on(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		event:
			| MigrationRuleCreatedDomainEvent
			| MigrationRuleUpdatedDomainEvent
			| MigrationRuleRemovedDomainEvent
			| ProcessorUpdatedDomainEvent
			| DeviceCreatedDomainEvent
			| DeviceUpdatedDomainEvent
			| DeviceRemovedDomainEvent
			| BrandUpdatedDomainEvent
			| EmployeeUpdatedDomainEvent
			| CargoUpdatedDomainEvent
			| UnidadUpdatedDomainEvent
			| LocationUpdatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		await this.invalidator.invalidate()
	}

	subscribedTo(): DomainEventClass[] {
		return [
			MigrationRuleCreatedDomainEvent,
			MigrationRuleUpdatedDomainEvent,
			MigrationRuleRemovedDomainEvent,
			ProcessorUpdatedDomainEvent,
			DeviceCreatedDomainEvent,
			DeviceUpdatedDomainEvent,
			DeviceRemovedDomainEvent,
			BrandUpdatedDomainEvent,
			EmployeeUpdatedDomainEvent,
			CargoUpdatedDomainEvent,
			UnidadUpdatedDomainEvent,
			LocationUpdatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
