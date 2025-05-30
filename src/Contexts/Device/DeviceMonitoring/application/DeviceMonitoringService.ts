import { schedule } from 'node-cron'
import pLimit from 'p-limit'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { DeviceMonitoringStatuses } from '../domain/valueObject/DeviceMonitoringStatus'
import { DeviceId } from '../../Device/domain/DeviceId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type PingService } from '../../Device/application/PingService'
import { Logger } from '../../../Shared/domain/Logger'

export class DeviceMonitoringService {
	private readonly CONCURRENCY_LIMIT = 10
	private readonly SCAN_INTERVAL_MINUTES = 25 // Frecuencia de escaneo en minutos

	// Rango de horas para la ejecución
	private readonly START_HOUR = 7 // 7 AM
	private readonly END_HOUR = 19 // 7 PM (19:00)

	// Días de la semana para la ejecución (1=Lunes, 5=Viernes)
	private readonly START_DAY_OF_WEEK = 1 // Lunes
	private readonly END_DAY_OF_WEEK = 5 // Viernes
	// Schedule: Monday to Friday, between 7 AM and 7 PM (19:00), every 20 minutes
	private readonly CRON_SCHEDULE = `*/${this.SCAN_INTERVAL_MINUTES} ${this.START_HOUR}-${this.END_HOUR} * * ${this.START_DAY_OF_WEEK}-${this.END_DAY_OF_WEEK}`

	private readonly TIMEZONE = 'America/Caracas'
	constructor(
		private readonly deviceMonitoringRepository: DeviceMonitoringRepository,
		private readonly pingService: PingService,
		private readonly logger: Logger
	) {}

	// This method will be scheduled by node-cron
	public startMonitoringSchedule(): void {
		schedule(
			this.CRON_SCHEDULE,
			async ctx => {
				this.logger.info(`[${ctx.triggeredAt.toISOString()}] Starting scheduled device ping scan...`)
				const currentHour = ctx.triggeredAt.getHours()
				const currentDay = ctx.triggeredAt.getDay() // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
				if (
					currentDay >= this.START_DAY_OF_WEEK &&
					currentDay <= this.END_DAY_OF_WEEK &&
					currentHour >= this.START_HOUR &&
					currentHour < this.END_HOUR
				) {
					await this.executePingScan()
				} else {
					this.logger.info(`[${ctx.triggeredAt.toISOString()}] Skipping scan: Outside defined working hours.`)
				}
			},
			{
				noOverlap: true,
				name: 'device-monitoring-scan',
				timezone: this.TIMEZONE
			}
		)
		this.logger.info(
			`Device monitoring scheduled to run every ${this.SCAN_INTERVAL_MINUTES} minutes, ` +
				`Mon-Fri from ${this.START_HOUR} AM to ${
					this.END_HOUR > 12 ? this.END_HOUR - 12 + ' PM' : this.END_HOUR + ' AM'
				} (${this.TIMEZONE}).`
		)
	}

	async executePingScan() {
		try {
			const devicesToMonitor = await this.deviceMonitoringRepository.searchNotnullIpAddress()
			this.logger.info(`[INFO] Found ${devicesToMonitor.length} devices to monitor.`)

			// Initialize p-limit with the desired concurrency
			const limit = pLimit(this.CONCURRENCY_LIMIT)

			// Create an array of promises, each wrapped by the p-limit function
			const pingPromises = devicesToMonitor.map(device =>
				limit(async () => {
					const ipAddress = device?.device?.computer?.ipAddress
					const deviceMonitoringId = device.id

					if (ipAddress) {
						await this.processPingJob({ deviceMonitoringId, ipAddress })
					} else {
						// Consider updating status to 'no_ip_configured' if appropriate for your domain.
						// For simplicity, we'll just log and skip for now.
					}
				})
			)

			await Promise.allSettled(pingPromises)
			this.logger.info(`[INFO] All ping jobs for this scan have completed.`)

			// for (const device of devicesToMonitor) {
			// 	const ipAddress = device?.device?.computer?.ipAddress
			// 	const deviceMonitoringId = device.id

			// 	if (ipAddress) {
			// 		await this.processPingJob({ deviceMonitoringId, ipAddress })
			// 		enqueuedCount++
			// 	} else {
			// 		console.warn(
			// 			`[WARN] Device Monitoring ID ${deviceMonitoringId}: No IP address found for ping. Skipping.`
			// 		)
			// 		// Optionally, you might update the status to 'no_ip_configured'
			// 	}
			// }
		} catch (error) {
			// console.error('[ERROR] Failed to enqueue device pings:', error)
		}
	}

	/**
	 * Processes a single ping job, performs the ping, and updates the device's status.
	 * This method is called by the queue processor.
	 * @param deviceMonitoringId The ID of the DeviceMonitoring record.
	 * @param ipAddress The IP address to ping.
	 */
	private async processPingJob({
		deviceMonitoringId,
		ipAddress
	}: {
		deviceMonitoringId: Primitives<DeviceId>
		ipAddress: string
	}): Promise<void> {
		try {
			const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId)

			if (!deviceMonitoring) {
				this.logger.info(`[WARN] DeviceMonitoring record with ID ${deviceMonitoringId} not found for update.`)
				return
			}

			const deviceMonitoringEntity = DeviceMonitoring.fromPrimitives(deviceMonitoring)

			try {
				// PingService should throw an error if ping fails
				await this.pingService.pingIp({ ipAddress }) // Pass IPAddress value object
				deviceMonitoringEntity.updateStatus(DeviceMonitoringStatuses.ONLINE)
				deviceMonitoringEntity.updateLastSuccess(new Date())
			} catch (error) {
				deviceMonitoringEntity.updateStatus(DeviceMonitoringStatuses.OFFLINE)
				deviceMonitoringEntity.updateLastFailed(new Date())
			} finally {
				// Update last scan time regardless of ping success/failure
				deviceMonitoringEntity.updateLastScan(new Date())
				// Save the updated entity. Assuming save method accepts the entity directly.
				// If it expects primitives, you'd do .toPrimitive() here.

				await this.deviceMonitoringRepository.save(deviceMonitoringEntity.toPrimitive())
			}
		} catch (error) {
			// this.logger.error(
			// 	`[CRITICAL ERROR] Error during processing of device monitoring job for ID ${deviceMonitoringId} (${ipAddress}): ${error}`
			// )
			// Re-throw the error for the queue library to handle (e.g., retries, dead-letter queues)
			throw error
		}
	}
}
