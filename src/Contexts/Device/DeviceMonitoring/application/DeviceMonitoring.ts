import { schedule } from 'node-cron'

import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { DeviceMonitoringStatuses } from '../domain/valueObject/DeviceMonitoringStatus'
import { PingService } from '../../Device/application/PingService'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'

// Define a type for the data that will be passed to each job in the queue
interface PingJobData {
	deviceMonitoringId: string
	ipAddress: string
}

export class DeviceMonitoringService {
	private pingQueue: QueueType<PingJobData> // Type the queue with PingJobData
	private readonly CRON_SCHEDULE = '*/5 * * * *' // Runs every 5 minutes
	constructor(
		private readonly deviceMonitoringRepository: DeviceMonitoringRepository,
		private readonly pingService: PingService = new PingService()
	) {
		config.redis.this.pingQueue = new Queue('devicePingQueue')
		// Process jobs from the queue
		this.pingQueue.process(1, this.pro)
	}

	// This method will be scheduled by node-cron
	public startMonitoringSchedule(): void {
		schedule(
			this.CRON_SCHEDULE,
			async () => {
				console.log(`[${new Date().toISOString()}] Starting scheduled device ping scan...`)
				await this.addDevicesToQueue()
			},
			{
				scheduled: true,
				timezone: 'America/Caracas' // Set your desired timezone
			}
		)
		console.log(`Device monitoring scheduled to run every 5 minutes.`)
	}

	async run() {
		const data = await this.deviceMonitoringRepository.searchNotnullIpAddress()
		await Promise.all(
			data.map(async device => {
				const ipAddress = device?.device?.computer?.ipAddress
				const deviceMonitoringId = device.id
				const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId)
				if (deviceMonitoring) {
					const entity = DeviceMonitoring.fromPrimitives(deviceMonitoring)
					if (ipAddress) {
						try {
							await this.pingService.pingIp({ ipAddress })
							entity.updateStatus(DeviceMonitoringStatuses.ONLINE)
							entity.updateLastSuccess(new Date())
						} catch (error) {
							entity.updateStatus(DeviceMonitoringStatuses.OFFLINE)
							entity.updateLastFailed(new Date())
						} finally {
							entity.updateLastScan(new Date())
							await this.deviceMonitoringRepository.save(entity.toPrimitive())
						}
					} else {
						console.warn(`Device ${device.id} has no IP address to ping.`)
					}
				}
			})
		)
	}
}
