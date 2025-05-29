import { schedule } from 'node-cron'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { DeviceMonitoringStatuses } from '../domain/valueObject/DeviceMonitoringStatus'
import { DeviceId } from '../../Device/domain/DeviceId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type PingService } from '../../Device/application/PingService'

export class DeviceMonitoringService {
	private readonly minutesSchedule = 20 // Runs every 20 minutes
	private readonly CRON_SCHEDULE = `*/${this.minutesSchedule} * * * *`
	constructor(
		private readonly deviceMonitoringRepository: DeviceMonitoringRepository,
		private readonly pingService: PingService
	) {}

	// This method will be scheduled by node-cron
	public startMonitoringSchedule(): void {
		schedule(
			this.CRON_SCHEDULE,
			async ctx => {
				console.log(`[${ctx.triggeredAt.toISOString()}] Starting scheduled device ping scan...`)
				await this.enqueueDevicesForPing()
			},
			{
				noOverlap: true,
				name: 'device-monitoring-scan',
				timezone: 'America/Caracas'
			}
		)
		console.log(`Device monitoring scheduled to run every ${this.minutesSchedule} minutes.`)
	}

	async enqueueDevicesForPing() {
		try {
			const devicesToMonitor = await this.deviceMonitoringRepository.searchNotnullIpAddress()
			let enqueuedCount = 0

			for (const device of devicesToMonitor) {
				const ipAddress = device?.device?.computer?.ipAddress
				const deviceMonitoringId = device.id

				if (ipAddress) {
					await this.processPingJob({ deviceMonitoringId, ipAddress })
					enqueuedCount++
				} else {
					console.warn(
						`[WARN] Device Monitoring ID ${deviceMonitoringId}: No IP address found for ping. Skipping.`
					)
					// Optionally, you might update the status to 'no_ip_configured'
				}
			}
		} catch (error) {
			console.error('[ERROR] Failed to enqueue device pings:', error)
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
				console.warn(`[WARN] DeviceMonitoring record with ID ${deviceMonitoringId} not found for update.`)
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
				await this.deviceMonitoringRepository.save(deviceMonitoringEntity.toPrimitive()) // Save the updated entity
			}
		} catch (error) {
			console.error(
				`[CRITICAL ERROR] Error during processing of device monitoring job for ID ${deviceMonitoringId} (${ipAddress}):`,
				error
			)
			// Re-throw the error for the queue library to handle (e.g., retries, dead-letter queues)
			throw error
		}
	}
}
