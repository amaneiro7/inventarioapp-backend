import pLimit from 'p-limit'
import { MonitoringStatuses } from '../../domain/Monitoring/MonitoringStatus'
import { type PingService } from '../../../Device/Device/application/PingService'
import { type Logger } from '../../domain/Logger'
import { type Primitives } from '../../domain/value-object/Primitives'

export interface GenericMonitoringRepository<T> {
	searchNotnullIpAddress: () => Promise<T[]>
	searchById: (id: Primitives<any>) => Promise<T | null>
	save: (entity: T) => Promise<void>
}

export abstract class MonitoringService<T, R extends GenericMonitoringRepository<T>> {
	protected readonly CONCURRENCY_LIMIT = 2
	protected readonly IDLE_TIME_MS = 5 * 6 * 1000 // 5 minutes idle time between scans (adjust as needed)

	protected readonly START_HOUR = 7 // 7 AM
	protected readonly END_HOUR = 19 // 7 PM (19:00)

	protected readonly START_DAY_OF_WEEK = 1 // Lunes
	protected readonly END_DAY_OF_WEEK = 5 // Viernes

	protected isRunning: boolean = false
	protected timeoutId: NodeJS.Timeout | null = null

	constructor(
		protected readonly repository: R,
		protected readonly pingService: PingService,
		protected readonly logger: Logger
	) {}

	public startMonitoringLoop(): void {
		if (this.isRunning) {
			this.logger.info(`${this.getMonitoringName()} monitoring loop is already running.`)
			return
		}

		this.isRunning = true
		this.logger.info(`Starting continuous ${this.getMonitoringName()} monitoring loop...`)
		this.runLoop()
	}

	public stopMonitoringLoop(): void {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info(`${this.getMonitoringName()} monitoring loop stopped.`)
	}

	protected async runLoop(): Promise<void> {
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
		const currentDay = now.getDay()

		const shouldRun =
			currentDay >= this.START_DAY_OF_WEEK &&
			currentDay <= this.END_DAY_OF_WEEK &&
			currentHour >= this.START_HOUR &&
			currentHour < this.END_HOUR

		if (shouldRun) {
			this.logger.info(`[${formattedISOString}] Starting ${this.getMonitoringName()} ping scan...`)
			await this.executePingScan()
		} else {
			this.logger.info(`[${formattedISOString}] Skipping scan: Outside defined working hours.`)
		}
		this.timeoutId = setTimeout(() => this.runLoop(), this.IDLE_TIME_MS)
	}

	protected abstract getMonitoringName(): string
	protected abstract getIpAddress(item: T): Promise<string | null | undefined>
	protected abstract getMonitoringId(item: T): Primitives<any>
	protected abstract createMonitoringEntity(item: T): T
	protected abstract updateMonitoringEntityStatus(
		entity: T,
		status: MonitoringStatuses,
		lastSuccess: Date | null,
		lastFailed: Date | null,
		lastScan: Date | null
	): void

	protected async executePingScan(): Promise<void> {
		try {
			const itemsToMonitor = await this.repository.searchNotnullIpAddress()
			this.logger.info(`[INFO] Found ${itemsToMonitor.length} ${this.getMonitoringName()}s to monitor.`)

			if (itemsToMonitor.length === 0) {
				this.logger.info(`[INFO] No ${this.getMonitoringName()}s with IP addresses to monitor. Skipping scan.`)
				return
			}

			const limit = pLimit(this.CONCURRENCY_LIMIT)

			const pingPromises = itemsToMonitor.map(item =>
				limit(async () => {
					const ipAddress = await this.getIpAddress(item)
					const monitoringId = this.getMonitoringId(item)

					if (ipAddress) {
						await this.processPingJob(monitoringId, ipAddress)
					} else {
						const monitoringRecord = await this.repository.searchById(monitoringId)
						if (monitoringRecord) {
							this.updateMonitoringEntityStatus(
								monitoringRecord,
								MonitoringStatuses.NOTAVAILABLE,
								null,
								null,
								null
							)
							await this.repository.save(monitoringRecord)
						}
					}
				})
			)

			await Promise.allSettled(pingPromises)
			this.logger.info(`[INFO] All ping jobs for this scan have completed.`)
		} catch (error) {
			this.logger.error(`[ERROR] Failed to enqueue ${this.getMonitoringName()} pings: ${error}`)
		}
	}

	protected async processPingJob(monitoringId: Primitives<any>, ipAddress: string): Promise<void> {
		let monitoringEntity: T | null = null
		try {
			const monitoringRecord = await this.repository.searchById(monitoringId)

			if (!monitoringRecord) {
				this.logger.info(
					`[WARN] ${this.getMonitoringName()}Monitoring record with ID ${monitoringId} not found for update.`
				)
				return
			}

			monitoringEntity = this.createMonitoringEntity(monitoringRecord)
			await this.pingService.pingIp({ ipAddress, enableLogging: false })

			this.updateMonitoringEntityStatus(monitoringEntity, MonitoringStatuses.ONLINE, new Date(), null, new Date())
		} catch (error) {
			if (monitoringEntity) {
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.OFFLINE,
					null,
					new Date(),
					new Date()
				)
			}
		} finally {
			if (monitoringEntity) {
				await this.repository.save(monitoringEntity)
			}
		}
	}
}
