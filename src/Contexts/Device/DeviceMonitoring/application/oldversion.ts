import pLimit from 'p-limit'
import { DeviceMonitoring } from '../domain/entity/DeviceMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceId } from '../../Device/domain/DeviceId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoringRepository } from '../domain/repository/DeviceMonitoringRepository'
import { type PingService } from '../../Device/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'

interface PingJobData {
	deviceMonitoringId: Primitives<DeviceId>
	ipAddress: string
}

export class DeviceMonitoringService {
	private readonly CONCURRENCY_LIMIT = 2
	//private readonly SCAN_INTERVAL_MINUTES = 25 // Frecuencia de escaneo en minutos
	private readonly IDLE_TIME_MS = 5 * 6 * 1000 // 5 minutes idle time between scans (adjust as needed)

	// Rango de horas para la ejecución
	private readonly START_HOUR = 7 // 7 AM
	private readonly END_HOUR = 19 // 7 PM (19:00)

	// Días de la semana para la ejecución (1=Lunes, 5=Viernes)
	private readonly START_DAY_OF_WEEK = 1 // Lunes
	private readonly END_DAY_OF_WEEK = 5 // Viernes
	// Schedule: Monday to Friday, between 7 AM and 7 PM (19:00), every 20 minutes
	// private readonly CRON_SCHEDULE = `*/${this.SCAN_INTERVAL_MINUTES} ${this.START_HOUR}-${this.END_HOUR} * * ${this.START_DAY_OF_WEEK}-${this.END_DAY_OF_WEEK}`
	// private readonly TIMEZONE = 'America/Caracas'

	private isRunning: boolean = false // Flag to control the loop
	private timeoutId: NodeJS.Timeout | null = null // To store the timeout reference

	constructor(
		private readonly deviceMonitoringRepository: DeviceMonitoringRepository,
		private readonly pingService: PingService,
		private readonly logger: Logger
	) {}

	public startMonitoringLoop(): void {
		if (this.isRunning) {
			this.logger.info('Device monitoring loop is already running.')
			return
		}

		this.isRunning = true
		this.logger.info('Starting continuous device monitoring loop...')
		this.runLoop() // Start the first execution
	}

	public stopMonitoringLoop(): void {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info('Device monitoring loop stopped.')
	}

	private async runLoop(): Promise<void> {
		if (!this.isRunning) {
			this.logger.info('Monitoring loop has been stopped.')
			return
		}
		const now = new Date()
		const formattedDate = now.toLocaleDateString()
		const formattedHour = now.toLocaleTimeString()
		const formattedISOString = `${formattedDate} ${formattedHour}`
		const currentHour = now.getHours()
		const currentDay = now.getDay() // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

		const shouldRun =
			currentDay >= this.START_DAY_OF_WEEK &&
			currentDay <= this.END_DAY_OF_WEEK &&
			currentHour >= this.START_HOUR &&
			currentHour < this.END_HOUR

		if (shouldRun) {
			this.logger.info(`[${formattedISOString}] Starting device ping scan...`)
			await this.executePingScan()
		} else {
			this.logger.info(`[${formattedISOString}] Skipping scan: Outside defined working hours.`)
		}
		// Schedule the next run after a short idle time
		this.timeoutId = setTimeout(() => this.runLoop(), this.IDLE_TIME_MS)
	}

	async executePingScan() {
		try {
			const devicesToMonitor = await this.deviceMonitoringRepository.searchNotnullIpAddress()
			this.logger.info(`[INFO] Found ${devicesToMonitor.length} devices to monitor.`)

			if (devicesToMonitor.length === 0) {
				this.logger.info('[INFO] No devices with IP addresses to monitor. Skipping scan.')
				return
			}

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
						const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId)
						if (deviceMonitoring) {
							const deviceMonitoringEntity = DeviceMonitoring.fromPrimitives(deviceMonitoring)
							deviceMonitoringEntity.updateStatus(MonitoringStatuses.NOTAVAILABLE)
							deviceMonitoringEntity.updateLastSuccess(null)
							deviceMonitoringEntity.updateLastFailed(null)
							deviceMonitoringEntity.updateLastScan(null)
							await this.deviceMonitoringRepository.save(deviceMonitoringEntity.toPrimitive())
						}
					}
				})
			)

			await Promise.allSettled(pingPromises)
			this.logger.info(`[INFO] All ping jobs for this scan have completed.`)
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
	private async processPingJob(data: PingJobData): Promise<void> {
		const { deviceMonitoringId, ipAddress } = data
		let deviceMonitoringEntity: DeviceMonitoring | null = null
		try {
			const deviceMonitoring = await this.deviceMonitoringRepository.searchById(deviceMonitoringId)

			if (!deviceMonitoring) {
				this.logger.info(`[WARN] DeviceMonitoring record with ID ${deviceMonitoringId} not found for update.`)
				return
			}

			deviceMonitoringEntity = DeviceMonitoring.fromPrimitives(deviceMonitoring)
			await this.pingService.pingIp({ ipAddress, enableLogging: false }) // Pass IPAddress value object
			// PingService should throw an error if ping fails
			deviceMonitoringEntity.updateStatus(MonitoringStatuses.ONLINE)
			deviceMonitoringEntity.updateLastSuccess(new Date())
		} catch (error) {
			if (deviceMonitoringEntity) {
				deviceMonitoringEntity.updateStatus(MonitoringStatuses.OFFLINE)
				deviceMonitoringEntity.updateLastFailed(new Date())
			}
		} finally {
			if (deviceMonitoringEntity) {
				deviceMonitoringEntity.updateLastScan(new Date())
				await this.deviceMonitoringRepository.save(deviceMonitoringEntity.toPrimitive())
			}
		}
	}
}
