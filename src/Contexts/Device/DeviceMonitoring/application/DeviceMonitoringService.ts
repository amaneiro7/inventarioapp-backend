import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { AppSettingDefaults, AppSettingKeys } from '../../../Shared/AppSettings/domain/entity/SettingsKeys'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type PingResult, type PingService } from '../../../Shared/domain/Monitoring/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'
import { type DeviceMonitoringDto, type DeviceMonitoringPrimitives } from '../domain/entity/DeviceMonitoring.dto'
import {
	type MonitoringConfigDefaults,
	type MonitoringConfigKeys
} from '../../../Shared/domain/Monitoring/domain/entity/MonitoringConfig'

/**
 * @description Service responsible for monitoring the status of devices by pinging them.
 * It extends a generic MonitoringService to handle the core logic of polling, status updates, and logging.
 */
export class DeviceMonitoringService extends MonitoringService<
	DeviceMonitoringDto,
	DeviceMonitoringPrimitives,
	DeviceMonitoring,
	DeviceMonitoringRepository
> {
	protected readonly deviceMonitoringRepository: DeviceMonitoringRepository
	protected readonly pingService: PingService
	protected readonly logger: Logger
	protected readonly pingLogger: PingLogger

	constructor({
		deviceMonitoringRepository,
		pingService,
		logger,
		pingLogger
	}: {
		deviceMonitoringRepository: DeviceMonitoringRepository
		pingService: PingService
		logger: Logger
		pingLogger: PingLogger
	}) {
		super(deviceMonitoringRepository, pingService, logger, pingLogger)
		this.deviceMonitoringRepository = deviceMonitoringRepository
		this.pingService = pingService
		this.logger = logger
		this.pingLogger = pingLogger
	}

	protected getMonitoringConfigKeys(): MonitoringConfigKeys {
		return {
			concurrencyLimit: AppSettingKeys.DEVICE_MONITORING.CONCURRENCY_LIMIT,
			idleTimeMs: AppSettingKeys.DEVICE_MONITORING.IDLE_TIME_MINUTES,
			startDayOfWeek: AppSettingKeys.DEVICE_MONITORING.START_DAY_OF_WEEK,
			endDayOfWeek: AppSettingKeys.DEVICE_MONITORING.END_DAY_OF_WEEK,
			startHour: AppSettingKeys.DEVICE_MONITORING.START_HOUR,
			endHour: AppSettingKeys.DEVICE_MONITORING.END_HOUR,
			disableTimeChecks: AppSettingKeys.DEVICE_MONITORING.DISABLE_TIME_CHECKS
		}
	}

	protected getMonitoringConfigDefaults(): MonitoringConfigDefaults {
		return {
			concurrencyLimit: AppSettingDefaults.DEVICE_MONITORING.CONCURRENCY_LIMIT,
			idleTimeMs: AppSettingDefaults.DEVICE_MONITORING.IDLE_TIME_MINUTES,
			startDayOfWeek: AppSettingDefaults.DEVICE_MONITORING.START_DAY_OF_WEEK,
			endDayOfWeek: AppSettingDefaults.DEVICE_MONITORING.END_DAY_OF_WEEK,
			startHour: AppSettingDefaults.DEVICE_MONITORING.START_HOUR,
			endHour: AppSettingDefaults.DEVICE_MONITORING.END_HOUR,
			disableTimeChecks: AppSettingDefaults.DEVICE_MONITORING.DISABLE_TIME_CHECKS
		}
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
		return item.device?.computer?.ipAddress
	}

	protected async getExpectedHostname(item: DeviceMonitoringDto): Promise<string | null | undefined> {
		return item.device?.computer?.computerName
	}

	protected validatePingResult({
		expectedHostname,
		pingResult
	}: {
		expectedHostname: string | null | undefined
		pingResult: PingResult
	}): boolean {
		const hostname = expectedHostname?.toLowerCase()
		const receivedHostname = pingResult.hostname?.toLowerCase()
		return hostname === receivedHostname
	}

	protected updateMonitoringEntityStatus(
		entity: DeviceMonitoring,
		status: MonitoringStatuses,
		lastSuccess: Date | null | undefined,
		lastFailed: Date | null | undefined,
		lastScan: Date | null
	): void {
		entity.updateStatus(status)
		entity.updateLastSuccess(lastSuccess)
		entity.updateLastFailed(lastFailed)
		entity.updateLastScan(lastScan)
	}
}
