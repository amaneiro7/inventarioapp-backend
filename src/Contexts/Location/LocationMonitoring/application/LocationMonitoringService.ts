import { config } from '../../../Shared/infrastructure/config'
import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { convertSubnetToHostIp } from '../../../Shared/infrastructure/utils/convertSubnetToHostIp'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type PingService } from '../../../Shared/domain/Monitoring/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../domain/entity/LocationMonitoring.dto'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'
import { type MonitoringServiceConfig } from '../../../Shared/domain/Monitoring/domain/entity/MonitoringConfig'

export class LocationMonitoringService extends MonitoringService<
	LocationMonitoringDto,
	LocationMonitoringPrimitives,
	LocationMonitoring,
	LocationMonitoringRepository
> {
	constructor(
		protected readonly locationMonitoringRepository: LocationMonitoringRepository,
		protected readonly pingService: PingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
	) {
		super(locationMonitoringRepository, pingService, logger, pingLogger)
	}

	protected monitoringConfig: MonitoringServiceConfig = {
		concurrencyLimit: config.monitoring.location.locationMonitoringConcurrencyLimit,
		startDayOfWeek: config.monitoring.location.locationMonitoringStartDayOfWeek,
		endDayOfWeek: config.monitoring.location.locationMonitoringEndDayOfWeek,
		startHour: config.monitoring.location.locationMonitoringStartHour,
		endHour: config.monitoring.location.locationMonitoringEndHour,
		idleTimeMs: config.monitoring.location.locationMonitoringIdleTimeMs,
		disableTimeChecks: config.monitoring.location.isLocationMonitoringDisableTimeChecks
	}

	protected getMonitoringName(): string {
		return 'Location'
	}

	protected async getIpAddress(item: LocationMonitoringDto): Promise<string | null | undefined> {
		const subnet = item?.location?.subnet
		return await convertSubnetToHostIp(subnet)
	}
	protected async getExpectedHostname(): Promise<string | null | undefined> {
		// Hostname is not applicable for locations
		return undefined
	}

	protected getMonitoringId(item: LocationMonitoringDto): Primitives<MonitoringId> {
		return item.id
	}

	protected createMonitoringEntity(item: LocationMonitoringDto): LocationMonitoring {
		return LocationMonitoring.fromPrimitives(item)
	}
	protected createMonitoringPayload(item: LocationMonitoring): LocationMonitoringPrimitives {
		return item.toPrimitive()
	}
	protected validatePingResult(): boolean {
		// No hostname validation for locations, always return true

		return true
	}

	protected updateMonitoringEntityStatus(
		entity: LocationMonitoring,
		status: MonitoringStatuses,
		lastSuccess: Date | null,
		lastFailed: Date | null,
		lastScan: Date | null
	): void {
		entity.updateStatus(status)
		entity.updateLastSuccess(lastSuccess)
		entity.updateLastFailed(lastFailed)
		entity.updateLastScan(lastScan)
	}
}
