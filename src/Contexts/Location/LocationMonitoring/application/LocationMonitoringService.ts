import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { convertSubnetToHostIp } from '../../../Shared/infrastructure/utils/convertSubnetToHostIp'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type PingService } from '../../../Device/Device/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../domain/entity/LocationMonitoring.dto'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'

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

	protected getMonitoringName(): string {
		return 'Location'
	}

	protected async getIpAddress(item: LocationMonitoringDto): Promise<string | null | undefined> {
		const subnet = item?.location?.subnet
		return await convertSubnetToHostIp(subnet)
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
