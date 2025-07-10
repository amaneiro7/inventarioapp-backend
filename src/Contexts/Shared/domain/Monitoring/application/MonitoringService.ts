import pLimit from 'p-limit'
import { MonitoringStatuses } from '../domain/value-object/MonitoringStatus'
import { type Primitives } from '../../value-object/Primitives'
import { type PingResult, type PingService } from './PingService'
import { type Logger } from '../../Logger'
import { type MonitoringId } from '../domain/value-object/MonitoringId'
import { type PingLogger } from '../infra/PingLogger'
import { type MonitoringServiceConfig } from '../domain/entity/MonitoringConfig'

export interface GenericMonitoringRepository<DTO, Payload> {
	searchNotnullIpAddress: () => Promise<DTO[]>
	searchById: (id: Primitives<MonitoringId>) => Promise<DTO | null>
	save: (entity: Payload) => Promise<void>
}

export abstract class MonitoringService<DTO, Payload, Entity, R extends GenericMonitoringRepository<DTO, Payload>> {
	protected isRunning: boolean = false
	protected timeoutId: NodeJS.Timeout | null = null

	constructor(
		protected readonly repository: R,
		protected readonly pingService: PingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
	) {}
	protected abstract monitoringConfig: MonitoringServiceConfig

	public startMonitoringLoop({ showLogs = false }: { showLogs: boolean }): void {
		if (this.monitoringConfig.concurrencyLimit <= 0) {
			this.logger.info('Concurrency limit must be greater than 0. Defaulting to 1.')
			this.monitoringConfig.concurrencyLimit = 1
		}
		if (this.monitoringConfig.idleTimeMs < 0) {
			this.logger.info('Idle time cannot be negative. Defaulting to 0.')
			this.monitoringConfig.idleTimeMs = 0
		}
		if (this.isRunning) {
			this.logger.info(`${this.getMonitoringName()} monitoring loop is already running.`)
			return
		}

		this.isRunning = true
		this.logger.info(`Starting continuous ${this.getMonitoringName()} monitoring loop...`)
		this.runLoop({ showLogs })
	}

	public stopMonitoringLoop(): void {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info(`${this.getMonitoringName()} monitoring loop stopped.`)
	}

	protected async runLoop({ showLogs }: { showLogs: boolean }): Promise<void> {
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

		let shouldRun: boolean
		if (this.monitoringConfig.disableTimeChecks) {
			shouldRun = true
			this.logger.info(
				`[${formattedISOString}] Time checks are disabled. Running ${this.getMonitoringName()} ping scan.`
			)
		} else {
			shouldRun =
				currentDay >= this.monitoringConfig.startDayOfWeek &&
				currentDay <= this.monitoringConfig.endDayOfWeek &&
				currentHour >= this.monitoringConfig.startHour &&
				currentHour < this.monitoringConfig.endHour

			if (showLogs) {
				if (shouldRun) {
					this.logger.info(`[${formattedISOString}] Starting ${this.getMonitoringName()} ping scan...`)
				} else {
					this.logger.info(
						`[${formattedISOString}] ${this.getMonitoringName()} Skipping scan: Outside defined working hours (${
							this.monitoringConfig.startDayOfWeek
						}-${this.monitoringConfig.endDayOfWeek}, ${this.monitoringConfig.startHour}:00-${
							this.monitoringConfig.endHour
						}:00).`
					)
				}
			}
		}

		if (shouldRun) {
			await this.executePingScan({ showLogs })
		}
		const idleTimeMs = this.monitoringConfig.idleTimeMs * 60 * 1000
		this.timeoutId = setTimeout(() => this.runLoop({ showLogs }), idleTimeMs)
	}
	protected abstract getMonitoringName(): string
	protected abstract getIpAddress(item: DTO): Promise<string | null | undefined>
	protected abstract getExpectedHostname(item?: DTO): Promise<string | null | undefined>
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
	protected abstract validatePingResult(payload?: {
		expectedHostname: string | null | undefined
		pingResult: PingResult
	}): boolean

	protected async executePingScan({ showLogs = false }: { showLogs: boolean }): Promise<void> {
		try {
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Starting ${this.getMonitoringName()} ping scan.`
			}) // Log start of scan
			const itemsToMonitor = await this.repository.searchNotnullIpAddress()
			if (showLogs) {
				this.logger.info(`[INFO] Found ${itemsToMonitor.length} ${this.getMonitoringName()}s to monitor.`)
			}

			if (itemsToMonitor.length === 0) {
				if (showLogs) {
					this.logger.info(
						`[INFO] No ${this.getMonitoringName()}s with IP addresses to monitor. Skipping scan.`
					)
				}
				return
			}

			const limit = pLimit(this.monitoringConfig.concurrencyLimit)

			const pingPromises = itemsToMonitor.map(item =>
				limit(async () => {
					const ipAddress = await this.getIpAddress(item)
					const expectedHostname = await this.getExpectedHostname(item)
					const monitoringId = this.getMonitoringId(item)

					if (ipAddress) {
						await this.processPingJob({ monitoringId, ipAddress, expectedHostname })
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
			if (showLogs) {
				this.logger.info(`[INFO] All ping jobs for this scan have completed.`)
			}
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

	protected async processPingJob({
		ipAddress,
		monitoringId,
		expectedHostname
	}: {
		monitoringId: Primitives<MonitoringId>
		ipAddress: string
		expectedHostname?: string | null | undefined
	}): Promise<void> {
		let monitoringEntity: Entity | null = null
		let pingResult: PingResult | undefined
		try {
			const monitoringRecord = await this.repository.searchById(monitoringId)

			if (!monitoringRecord) {
				this.logger.info(
					`[WARN] ${this.getMonitoringName()}Monitoring record with ID ${monitoringId} not found for update.`
				)
				return
			}

			monitoringEntity = this.createMonitoringEntity(monitoringRecord)
			pingResult = await this.pingService.pingIp({ ipAddress, getHostName: expectedHostname ? true : false })

			const isValidHostname = this.validatePingResult({ expectedHostname, pingResult })

			if (isValidHostname) {
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.ONLINE,
					new Date(),
					null,
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - ONLINE (Hostname: ${
						pingResult.hostname ?? 'N/A'
					})`
				})
			} else {
				// Se revirtio el cambio porque genero muchos falsos positivos
				// el dominio tarda mucho en actualizarse y el hacer ping -a podria no devolver el nombre correcto
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.ONLINE,
					new Date(),
					null,
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - HOSTNAME_MISMATCH (Expected: ${
						expectedHostname ?? 'N/A'
					}, Received: ${pingResult.hostname ?? 'N/A'})`
				})
			}
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
