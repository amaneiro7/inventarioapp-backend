import pLimit from 'p-limit'
import { MonitoringStatuses } from '../domain/value-object/MonitoringStatus'
import { type Primitives } from '../../value-object/Primitives'
import { type PingService } from '../../../../Device/Device/application/PingService'
import { type Logger } from '../../Logger'
import { type MonitoringId } from '../domain/value-object/MonitoringId'
import { type PingLogger } from '../infra/PingLogger'

export interface GenericMonitoringRepository<DTO, Payload> {
	searchNotnullIpAddress: () => Promise<DTO[]>
	searchById: (id: Primitives<MonitoringId>) => Promise<DTO | null>
	save: (entity: Payload) => Promise<void>
}

export abstract class MonitoringService<DTO, Payload, Entity, R extends GenericMonitoringRepository<DTO, Payload>> {
	protected readonly CONCURRENCY_LIMIT = 2
	protected readonly IDLE_TIME_MS = 5 * 6 * 1000 // 5 minutes idle time between scans (adjust as needed)

	protected readonly START_HOUR = 0 // 7 AM
	protected readonly END_HOUR = 24 // 7 PM (19:00)

	protected readonly START_DAY_OF_WEEK = 1 // Lunes
	protected readonly END_DAY_OF_WEEK = 7 // Viernes

	protected isRunning: boolean = false
	protected timeoutId: NodeJS.Timeout | null = null

	constructor(
		protected readonly repository: R,
		protected readonly pingService: PingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
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
	protected abstract getIpAddress(item: DTO): Promise<string | null | undefined>
	protected abstract getMonitoringId(item: DTO): Primitives<MonitoringId>
	protected abstract createMonitoringEntity(item: DTO): Entity
	protected abstract updateMonitoringEntityStatus(
		entity: Entity,
		status: MonitoringStatuses,
		lastSuccess: Date | null,
		lastFailed: Date | null,
		lastScan: Date | null
	): void
	protected abstract createMonitoringPayload(item: Entity): Payload

	protected async executePingScan(): Promise<void> {
		try {
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Starting ${this.getMonitoringName()} ping scan.`
			}) // Log start of scan
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
							const monitoringEntity = this.createMonitoringEntity(monitoringRecord)
							this.updateMonitoringEntityStatus(
								monitoringEntity,
								MonitoringStatuses.NOTAVAILABLE,
								null,
								null,
								null
							)
							const monitoringPayload = this.createMonitoringPayload(monitoringEntity)
							await this.repository.save(monitoringPayload)
						}
					}
				})
			)

			await Promise.allSettled(pingPromises)
			this.logger.info(`[INFO] All ping jobs for this scan have completed.`)
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Completed ${this.getMonitoringName()} ping scan.`
			}) // Log end of scan
		} catch (error) {
			this.logger.error(`[ERROR] Failed to enqueue ${this.getMonitoringName()} pings: ${error}`)
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Error during ${this.getMonitoringName()} ping scan: ${error}`
			}) // Log error
		}
	}

	protected async processPingJob(monitoringId: Primitives<MonitoringId>, ipAddress: string): Promise<void> {
		let monitoringEntity: Entity | null = null
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
			await this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `[${this.getMonitoringName()}] ${ipAddress} - ONLINE`
			})
		} catch (error) {
			if (monitoringEntity) {
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.OFFLINE,
					null,
					new Date(),
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - OFFLINE: ${error}`
				})
			}
		} finally {
			if (monitoringEntity) {
				const monitoringPayload = this.createMonitoringPayload(monitoringEntity)
				await this.repository.save(monitoringPayload)
			}
		}
	}
}
