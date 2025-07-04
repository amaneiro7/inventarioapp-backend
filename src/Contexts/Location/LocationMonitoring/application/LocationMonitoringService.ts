// import { schedule } from 'node-cron'
import pLimit from 'p-limit'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/MonitoringStatus'
import { LocationId } from '../../Location/domain/LocationId'
import { PingService } from '../../../Device/Device/application/PingService'
import { convertSubnetToHostIp } from '../../../Shared/infrastructure/utils/convertSubnetToHostIp'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type Logger } from '../../../Shared/domain/Logger'

interface PingJobData {
	locationMonitoringId: Primitives<LocationId>
	ipAddress: string
}

export class LocationMonitoringService {
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
		private readonly locationMonitoringRepository: LocationMonitoringRepository,
		private readonly pingService: PingService,
		private readonly logger: Logger
	) {}

	public startMonitoringLoop(): void {
		if (this.isRunning) {
			this.logger.info('Location monitoring loop is already running.')
			return
		}

		this.isRunning = true
		this.logger.info('Starting continuous location monitoring loop...')
		this.runLoop() // Start the first execution
	}

	public stopMonitoringLoop(): void {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info('Location monitoring loop stopped.')
	}

	private async runLoop(): Promise<void> {
		if (!this.isRunning) {
			this.logger.info('Monitoring loop has been stopped.')
			return
		}
		const now = new Date()
		const formattedISOString = new Intl.DateTimeFormat('es-VE', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		}).format(now)
		const currentHour = now.getHours()
		const currentDay = now.getDay() // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

		const shouldRun =
			currentDay >= this.START_DAY_OF_WEEK &&
			currentDay <= this.END_DAY_OF_WEEK &&
			currentHour >= this.START_HOUR &&
			currentHour < this.END_HOUR

		if (shouldRun) {
			this.logger.info(`[${formattedISOString}] Starting location ping scan...`)
			await this.executePingScan()
		} else {
			this.logger.info(`[${formattedISOString}] Skipping scan: Outside defined working hours.`)
		}
		// Schedule the next run after a short idle time
		this.timeoutId = setTimeout(() => this.runLoop(), this.IDLE_TIME_MS)
	}

	async executePingScan() {
		try {
			const locationsToMonitor = await this.locationMonitoringRepository.searchNotnullIpAddress()
			this.logger.info(`[INFO] Found ${locationsToMonitor.length} locations to monitor.`)

			if (locationsToMonitor.length === 0) {
				this.logger.info('[INFO] No locations with IP addresses to monitor. Skipping scan.')
				return
			}

			// Initialize p-limit with the desired concurrency
			const limit = pLimit(this.CONCURRENCY_LIMIT)

			// Create an array of promises, each wrapped by the p-limit function
			const pingPromises = locationsToMonitor.map(location => {
				return limit(async () => {
					const subnet = location?.location?.subnet
					const locationMonitoringId = location.id
					const ipAddress = await convertSubnetToHostIp(subnet)

					if (ipAddress) {
						await this.processPingJob({ locationMonitoringId, ipAddress })
					} else {
						// Consider updating status to 'no_ip_configured' if appropriate for your domain.
						// For simplicity, we'll just log and skip for now.
						const locationMonitoring = await this.locationMonitoringRepository.searchById(
							locationMonitoringId
						)
						if (locationMonitoring) {
							const locationMonitoringEntity = LocationMonitoring.fromPrimitives(locationMonitoring)
							locationMonitoringEntity.updateStatus(MonitoringStatuses.NOTAVAILABLE)
							locationMonitoringEntity.updateLastSuccess(null)
							locationMonitoringEntity.updateLastFailed(null)
							locationMonitoringEntity.updateLastScan(null)
							await this.locationMonitoringRepository.save(locationMonitoringEntity.toPrimitive())
						}
					}
				})
			})

			await Promise.allSettled(pingPromises)
			this.logger.info(`[INFO] All ping jobs for this scan have completed.`)
		} catch (error) {
			this.logger.error(`'[ERROR] Failed to enqueue location pings:', ${error}`)
		}
	}

	/**
	 * Processes a single ping job, performs the ping, and updates the location's status.
	 * This method is called by the queue processor.
	 * @param locationMonitoringId The ID of the LocationMonitoring record.
	 * @param ipAddress The IP address to ping.
	 */
	private async processPingJob(data: PingJobData): Promise<void> {
		const { locationMonitoringId, ipAddress } = data
		let locationMonitoringEntity: LocationMonitoring | null = null
		try {
			const locationMonitoring = await this.locationMonitoringRepository.searchById(locationMonitoringId)

			if (!locationMonitoring) {
				this.logger.info(
					`[WARN] LocationMonitoring record with ID ${locationMonitoringId} not found for update.`
				)
				return
			}

			locationMonitoringEntity = LocationMonitoring.fromPrimitives(locationMonitoring)
			await this.pingService.pingIp({ ipAddress, enableLogging: false }) // Pass IPAddress value object
			// PingService should throw an error if ping fails
			locationMonitoringEntity.updateStatus(MonitoringStatuses.ONLINE)
			locationMonitoringEntity.updateLastSuccess(new Date())
		} catch (error) {
			if (locationMonitoringEntity) {
				locationMonitoringEntity.updateStatus(MonitoringStatuses.OFFLINE)
				locationMonitoringEntity.updateLastFailed(new Date())
			}
		} finally {
			if (locationMonitoringEntity) {
				locationMonitoringEntity.updateLastScan(new Date())
				await this.locationMonitoringRepository.save(locationMonitoringEntity.toPrimitive())
			}
		}
	}
}
