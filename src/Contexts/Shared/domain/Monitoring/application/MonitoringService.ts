import pLimit from 'p-limit'
import { MonitoringStatuses } from '../domain/value-object/MonitoringStatus'
import { type Primitives } from '../../value-object/Primitives'
import { type PingResult, type PingService } from './PingService'
import { type Logger } from '../../Logger'
import { type MonitoringId } from '../domain/value-object/MonitoringId'
import { type PingLogger } from '../infra/PingLogger'
import { type MonitoringServiceConfig } from '../domain/entity/MonitoringConfig'

export interface GenericMonitoringRepository<DTO, Payload> {
	searchNotNullIpAddress: ({ page, pageSize }: { page?: number; pageSize?: number }) => Promise<DTO[]>
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
			this.logger.info('El límite de concurrencia debe ser mayor que 0. Se establecerá en 1 por defecto.')
			this.monitoringConfig.concurrencyLimit = 1
		}
		if (this.monitoringConfig.idleTimeMs < 0) {
			this.logger.info('El tiempo de inactividad no puede ser negativo. Se establecerá en 0 por defecto.')
			this.monitoringConfig.idleTimeMs = 0
		}
		if (this.isRunning) {
			this.logger.info(`El bucle de monitoreo de ${this.getMonitoringName()} ya está en ejecución.`)
		}

		this.isRunning = true
		this.logger.info(`Iniciando el bucle de monitoreo continuo de ${this.getMonitoringName()}...`)
		this.runLoop({ showLogs })
	}

	public stopMonitoringLoop(): void {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info(`El bucle de monitoreo de ${this.getMonitoringName()} se ha detenido.`)
	}
	protected async runLoop({ showLogs }: { showLogs: boolean }): Promise<void> {
		if (!this.isRunning) {
			this.logger.info('El bucle de monitoreo ha sido detenido.')
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
				`[${formattedISOString}] Las comprobaciones de tiempo están deshabilitadas. Ejecutando escaneo de ping de ${this.getMonitoringName()}.`
			)
		} else {
			shouldRun =
				currentDay >= this.monitoringConfig.startDayOfWeek &&
				currentDay <= this.monitoringConfig.endDayOfWeek &&
				currentHour >= this.monitoringConfig.startHour &&
				currentHour < this.monitoringConfig.endHour

			if (showLogs) {
				if (shouldRun) {
					this.logger.info(
						`[${formattedISOString}] Iniciando escaneo de ping de ${this.getMonitoringName()}...`
					)
				} else {
					this.logger.info(
						`[${formattedISOString}] ${this.getMonitoringName()} Saltando escaneo: Fuera del horario de trabajo definido (${
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
		lastSuccess: Date | null | undefined,
		lastFailed: Date | null | undefined,
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
				message: `Iniciando escaneo de ping de ${this.getMonitoringName()}.`
			}) // Log start of scan

			const limit = pLimit(this.monitoringConfig.concurrencyLimit)
			// const pageSize = this.monitoringConfig?. ?? 1000 // Default to 1000 if not set
			const pageSize = 1000 // Default to 1000 if not set
			let page = 1
			let hasMore = true
			let totalMonitored = 0

			while (hasMore) {
				const itemsToMonitor = await this.repository.searchNotNullIpAddress({ page, pageSize })
				totalMonitored += itemsToMonitor.length

				if (showLogs) {
					this.logger.info(
						`[INFO] Procesando lote ${page} con ${itemsToMonitor.length} ${this.getMonitoringName()}s.`
					)
				}

				if (itemsToMonitor.length === 0) {
					hasMore = false
					continue
				}

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

				if (itemsToMonitor.length < pageSize) {
					hasMore = false
				} else {
					page++
				}
			}

			if (showLogs) {
				this.logger.info(
					`[INFO] Todos los trabajos de ping para este escaneo han sido completados. Total monitoreado: ${totalMonitored}`
				)
			}
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Escaneo de ping de ${this.getMonitoringName()} completado.`
			}) // Log end of scan
		} catch (error) {
			this.logger.error(`[ERROR] Fallo al encolar pings de ${this.getMonitoringName()}: ${error}`)
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Error durante el escaneo de ping de ${this.getMonitoringName()}: ${error}`
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
					`[WARN] Registro de monitoreo de ${this.getMonitoringName()} con ID ${monitoringId} no encontrado para actualizar.`
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
					undefined,
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - EN LÍNEA (Hostname: ${
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
					undefined,
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - HOSTNAME_MISMATCH (Esperado: ${
						expectedHostname ?? 'N/A'
					}, Recibido: ${pingResult.hostname ?? 'N/A'})`
				})
			}
		} catch (error) {
			if (monitoringEntity) {
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.OFFLINE,
					undefined,
					new Date(),
					new Date()
				)
				await this.pingLogger.logPingResult({
					fileName: this.getMonitoringName(),
					message: `[${this.getMonitoringName()}] ${ipAddress} - FUERA DE LÍNEA: ${error}`
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
