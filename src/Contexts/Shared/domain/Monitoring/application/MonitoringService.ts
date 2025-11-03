import pLimit from 'p-limit'
import { AppSettingsDependencies } from '../../../../../apps/di/app-settings/app-settings.di'
import { container } from '../../../../../apps/di/container'
import { MonitoringStatuses } from '../domain/value-object/MonitoringStatus'
import { type Primitives } from '../../value-object/Primitives'
import { type PingResult, type PingService } from './PingService'
import { type Logger } from '../../Logger'
import { type MonitoringId } from '../domain/value-object/MonitoringId'
import { type PingLogger } from '../infra/PingLogger'
import {
	type MonitoringConfigDefaults,
	type MonitoringConfigKeys,
	type MonitoringServiceConfig
} from '../domain/entity/MonitoringConfig'
import { type SettingsFinder } from '../../../AppSettings/application/SettingsFinder'

export interface GenericMonitoringRepository<DTO, Payload> {
	searchNotNullIpAddress: ({ page, pageSize }: { page?: number; pageSize?: number }) => Promise<DTO[]>
	searchById: (id: Primitives<MonitoringId>) => Promise<DTO | null>
	save: (entity: Payload) => Promise<void>
}

/**
 * @description Define las claves de configuración que un servicio de monitoreo debe proporcionar.
 */
export abstract class MonitoringService<DTO, Payload, Entity, R extends GenericMonitoringRepository<DTO, Payload>> {
	protected isRunning: boolean = false
	protected timeoutId: NodeJS.Timeout | null = null
	private readonly settingsFinder: SettingsFinder = container.resolve(AppSettingsDependencies.Finder)
	constructor(
		protected readonly repository: R,
		protected readonly pingService: PingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
	) {}

	public async startMonitoringLoop({ showLogs = false }: { showLogs: boolean }): Promise<void> {
		if (this.isRunning) {
			this.logger.info(`El bucle de monitoreo de ${this.getMonitoringName()} ya está en ejecución.`)
		}

		this.isRunning = true
		this.logger.info(`Iniciando el bucle de monitoreo continuo de ${this.getMonitoringName()}...`)
		this.runLoop({ showLogs })
	}

	public async stopMonitoringLoop(): Promise<void> {
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

		const config = await this.loadMonitoringConfig()

		let shouldRun: boolean
		if (config.disableTimeChecks) {
			shouldRun = true
			this.logger.info(
				`[${formattedISOString}] Las comprobaciones de tiempo están deshabilitadas. Ejecutando escaneo de ping de ${this.getMonitoringName()}.`
			)
		} else {
			shouldRun =
				currentDay >= config.startDayOfWeek &&
				currentDay <= config.endDayOfWeek &&
				currentHour >= config.startHour &&
				currentHour < config.endHour

			if (showLogs) {
				if (shouldRun) {
					this.logger.info(
						`[${formattedISOString}] Iniciando escaneo de ping de ${this.getMonitoringName()}...`
					)
				} else {
					this.logger.info(
						`[${formattedISOString}] ${this.getMonitoringName()} Saltando escaneo: Fuera del horario de trabajo definido (${config.startDayOfWeek}-${
							config.endDayOfWeek
						}, ${config.startHour}:00-${config.endHour}:00).`
					)
				}
			}
		}

		if (shouldRun) {
			await this.executePingScan({ showLogs })
		}
		const idleTimeMs = config.idleTimeMs * 60 * 1000
		this.timeoutId = setTimeout(() => this.runLoop({ showLogs }), idleTimeMs)
	}

	protected async loadMonitoringConfig(): Promise<MonitoringServiceConfig> {
		const keys = this.getMonitoringConfigKeys()
		const defaults = this.getMonitoringConfigDefaults()

		const concurrencyLimit = await this.settingsFinder.findAsNumber({
			key: keys.concurrencyLimit,
			fallback: defaults.concurrencyLimit
		})
		const idleTimeMs = await this.settingsFinder.findAsNumber({
			key: keys.idleTimeMs,
			fallback: defaults.idleTimeMs
		})
		const startDayOfWeek = await this.settingsFinder.findAsNumber({
			key: keys.startDayOfWeek,
			fallback: defaults.startDayOfWeek
		})
		const endDayOfWeek = await this.settingsFinder.findAsNumber({
			key: keys.endDayOfWeek,
			fallback: defaults.endDayOfWeek
		})
		const startHour = await this.settingsFinder.findAsNumber({ key: keys.startHour, fallback: defaults.startHour })
		const endHour = await this.settingsFinder.findAsNumber({ key: keys.endHour, fallback: defaults.endHour })
		const disableTimeChecks = await this.settingsFinder.findAsBoolean({
			key: keys.disableTimeChecks,
			fallback: defaults.disableTimeChecks
		})

		return {
			concurrencyLimit: concurrencyLimit > 0 ? concurrencyLimit : 1,
			idleTimeMs: idleTimeMs >= 0 ? idleTimeMs : 0,
			startDayOfWeek,
			endDayOfWeek,
			startHour,
			endHour,
			disableTimeChecks
		}
	}

	/**
	 * @description Las clases hijas deben implementar este método para proporcionar las claves de configuración específicas.
	 */
	protected abstract getMonitoringConfigKeys(): MonitoringConfigKeys

	/**
	 * @description Las clases hijas deben implementar este método para proporcionar los valores por defecto de la configuración.
	 */
	protected abstract getMonitoringConfigDefaults(): MonitoringConfigDefaults

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

			const config = await this.loadMonitoringConfig()
			const limit = pLimit(config.concurrencyLimit)
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
