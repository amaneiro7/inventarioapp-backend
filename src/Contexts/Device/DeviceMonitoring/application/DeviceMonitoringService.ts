import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { PingResult, type PingService } from '../../../Shared/domain/Monitoring/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../domain/entity/DeviceMonitoring.dto'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'

export class DeviceMonitoringService extends MonitoringService<
	DeviceMonitoringDto,
	DeviceMonitoringPrimitives,
	DeviceMonitoring,
	DeviceMonitoringRepository
> {
	constructor(
		protected readonly deviceMonitoringRepository: DeviceMonitoringRepository,
		protected readonly pingService: PingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
	) {
		super(deviceMonitoringRepository, pingService, logger, pingLogger)
	}

	protected getMonitoringName(): string {
		return 'Device'
	}

	protected getMonitoringId(item: DeviceMonitoringDto): Primitives<MonitoringId> {
		return item.id
	}

	protected createMonitoringEntity(item: DeviceMonitoringDto): DeviceMonitoring {
		return DeviceMonitoring.fromPrimitives(item)
	}
	protected createMonitoringPayload(item: DeviceMonitoring): DeviceMonitoringPrimitives {
		return item.toPrimitive()
	}
	protected async getIpAddress(item: DeviceMonitoringDto): Promise<string | null | undefined> {
		return item?.device?.computer?.ipAddress
	}
	protected async getExpectedHostname(item: DeviceMonitoringDto): Promise<string | null | undefined> {
		return item?.device?.computer?.computerName
	}
	protected validatePingResult(hostanme: string | null | undefined, pingResult: PingResult): boolean {
		const expectedHostname = hostanme?.toLowerCase()
		const receivedHostname = pingResult.hostname?.toLowerCase()
		return expectedHostname === receivedHostname
	}

	protected updateMonitoringEntityStatus(
		entity: DeviceMonitoring,
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
