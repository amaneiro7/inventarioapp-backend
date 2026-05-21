import pLimit from 'p-limit'
import { AppSettingsDependencies } from '../../../../../apps/di/app-settings/app-settings.di'
import { container } from '../../../../../apps/di/container'
import { MonitoringStatuses } from '../domain/value-object/MonitoringStatus'
import { type Primitives } from '../../value-object/Primitives' // prettier-ignore
import { type Logger } from '../../Logger'
import { type MonitoringId } from '../domain/value-object/MonitoringId'
import { type PingLogger } from '../infra/PingLogger'
import {
	type MonitoringConfigDefaults,
	type MonitoringConfigKeys,
	type MonitoringServiceConfig
} from '../domain/entity/MonitoringConfig'
import { type SettingsFinder } from '../../../../AppSettings/application/SettingsFinder'
import { type IPingService, type PingResult } from '../infra/IPingService'

export interface GenericMonitoringRepository<DTO, Payload> {
	searchNotNullIpAddress: ({ page, pageSize }: { page?: number; pageSize?: number }) => Promise<DTO[]>
	findById: (id: Primitives<MonitoringId>) => Promise<DTO | null>
	save: (entity: Payload) => Promise<void>
	saveAll: (entities: Payload[]) => Promise<void>
}

/**
 * @description Define las claves de configuración que un servicio de monitoreo debe proporcionar.
 */
export abstract class MonitoringService<DTO, Payload, Entity, R extends GenericMonitoringRepository<DTO, Payload>> {
	protected isRunning: boolean = false
	protected wasRunningLastCycle: boolean = false
	protected timeoutId: NodeJS.Timeout | null = null
	private readonly dateFormatter = new Intl.DateTimeFormat('es-VE', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	})
	private readonly settingsFinder: SettingsFinder = container.resolve(AppSettingsDependencies.Finder)

	/**
	 * @description Caché local en memoria de los items a monitorear.
	 * Evita consultas constantes a la base de datos en cada ciclo.
	 */
	protected monitoredItems: Map<string, DTO> = new Map()

	/**
	 * @description Constructor del servicio de monitoreo.
	 * @param {R} repository - Repositorio para acceder a los datos de monitoreo.
	 * @param {IPingService} pingService - Servicio para realizar pings.
	 * @param {Logger} logger - Logger para registrar eventos generales.
	 * @param {PingLogger} pingLogger - Logger específico para resultados de ping.
	 */
	constructor(
		protected readonly repository: R,
		protected readonly pingService: IPingService,
		protected readonly logger: Logger,
		protected readonly pingLogger: PingLogger
	) {}

	/**
	 * @description Inicia el bucle de monitoreo continuo.
	 * Carga el estado inicial en memoria y comienza el ciclo de ejecución.
	 * @param {object} params - Parámetros de configuración.
	 * @param {boolean} [params.showLogs=false] - Indica si se deben mostrar logs detallados en consola.
	 * @returns {Promise<void>}
	 */
	public async startMonitoringLoop({ showLogs = false }: { showLogs: boolean }): Promise<void> {
		if (this.isRunning) {
			this.logger.info(`El bucle de monitoreo de ${this.getMonitoringName()} ya está en ejecución.`)
		}

		this.isRunning = true
		this.logger.info(`Iniciando el bucle de monitoreo continuo de ${this.getMonitoringName()}...`)

		// // Cargar estado inicial desde la BD antes de empezar el bucle
		// await this.hydrateLocalState()

		this.runLoop({ showLogs })
	}

	/**
	 * @description Detiene el bucle de monitoreo.
	 * Cancela el timeout activo y actualiza el estado de ejecución a detenido.
	 * @returns {Promise<void>}
	 */
	public async stopMonitoringLoop(): Promise<void> {
		this.isRunning = false
		if (this.timeoutId) {
			clearTimeout(this.timeoutId)
			this.timeoutId = null
		}
		this.logger.info(`El bucle de monitoreo de ${this.getMonitoringName()} se ha detenido.`)
	}

	protected checkIfShouldRun(config: MonitoringServiceConfig, currentHour: number, currentDay: number) {
		return (
			currentDay >= config.startDayOfWeek &&
			currentDay <= config.endDayOfWeek &&
			currentHour >= config.startHour &&
			currentHour < config.endHour
		)
	}

	/**
	 * @description Ejecuta una iteración del bucle de monitoreo.
	 * Verifica horarios permitidos, configuración y ejecuta el escaneo si corresponde.
	 * Se reprograma a sí mismo después de un tiempo de inactividad configurado.
	 * @param {object} params - Parámetros de ejecución.
	 * @param {boolean} params.showLogs - Indica si se deben mostrar logs.
	 * @returns {Promise<void>}
	 */
	protected async runLoop({ showLogs }: { showLogs: boolean }): Promise<void> {
		// Verificar si el servicio sigue en ejecución
		if (!this.isRunning) {
			this.logger.info('El bucle de monitoreo ha sido detenido.')
			return
		}
		const now = new Date()
		const formattedISOString = this.dateFormatter.format(now)
		const currentHour = now.getHours()
		const currentDay = now.getDay()

		// Cargar configuración actualizada
		const config = await this.loadMonitoringConfig()

		let shouldRun: boolean

		// Verificar si las comprobaciones de tiempo están deshabilitadas
		if (config.disableTimeChecks) {
			shouldRun = true
			this.logger.info(
				`[${formattedISOString}] Las comprobaciones de tiempo están deshabilitadas. Ejecutando escaneo de ping de ${this.getMonitoringName()}.`
			)
		} else {
			// Verificar si estamos dentro del horario permitido
			shouldRun = this.checkIfShouldRun(config, currentHour, currentDay)

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

		// Ejecutar el escaneo si corresponde
		if (shouldRun) {
			// Si en el ciclo anterior NO debíamos correr, pero en este SÍ, hidratamos.
			if (!this.wasRunningLastCycle) {
				await this.hydrateLocalState()
				this.wasRunningLastCycle = true
			}
			await this.executePingScan({ showLogs })
		} else {
			this.wasRunningLastCycle = false // Resetear para el próximo inicio de jornada
		}
		// Convertir minutos a milisegundos para el tiempo de espera
		const idleTimeMs = config.idleTimeMs * 60 * 1000

		// Repetir el ciclo después del tiempo de inactividad
		this.timeoutId = setTimeout(() => this.runLoop({ showLogs }), idleTimeMs)
	}

	/**
	 * @description Carga la configuración actual del servicio de monitoreo desde los ajustes de la aplicación.
	 * Recupera valores como límites de concurrencia, tiempos de espera y horarios permitidos.
	 * @returns {Promise<MonitoringServiceConfig>} La configuración cargada.
	 */
	protected async loadMonitoringConfig(): Promise<MonitoringServiceConfig> {
		const keys = this.getMonitoringConfigKeys()
		const defaults = this.getMonitoringConfigDefaults()

		// Obtener configuraciones desde el SettingsFinder
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

	/**f
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

	/**
	 * @description Carga todos los ítems monitoreables (dispositivos/ubicaciones con IP)
	 * desde el repositorio de persistencia a la caché local en memoria (`monitoredItems`).
	 * Este proceso de "hidratación" se realiza al iniciar el bucle de monitoreo
	 * y permite que los ciclos de escaneo posteriores operen sobre datos en memoria,
	 * reduciendo la carga en la base de datos y mejorando el rendimiento.
	 * Utiliza un enfoque paginado para recuperar grandes volúmenes de datos de manera eficiente.
	 * @returns {Promise<void>} Una promesa que se resuelve cuando todos los ítems han sido cargados en la caché.
	 */
	protected async hydrateLocalState(): Promise<void> {
		try {
			this.logger.info(`[CACHE] Hidratando estado local de ${this.getMonitoringName()}...`)
			this.wasRunningLastCycle = false
			this.monitoredItems.clear()

			const pageSize = 1000
			let page = 1
			let hasMore = true
			let totalLoaded = 0

			while (hasMore) {
				const items = await this.repository.searchNotNullIpAddress({ page, pageSize })
				for (const item of items) {
					const id = this.getMonitoringId(item)
					this.monitoredItems.set(id, item)
				}
				totalLoaded += items.length
				if (items.length < pageSize) hasMore = false
				else page++
			}
			this.wasRunningLastCycle = true
			this.logger.info(`[CACHE] ${totalLoaded} items cargados en memoria para ${this.getMonitoringName()}.`)
		} catch (error) {
			this.logger.error(`[CRITICAL] Error hidratando estado: ${error}`)
			// IMPORTANTE: Si la hidratación falla, NO deberías marcar wasRunningLastCycle = true
			this.wasRunningLastCycle = false
			throw error // Detén el ciclo para que no escanee con datos corruptos
		}
	}

	/**
	 * @description Método para ser llamado desde Eventos de Dominio (Created/Updated).
	 */
	public async upsertLocalItem(id: Primitives<MonitoringId>): Promise<void> {
		const item = await this.repository.findById(id)
		if (item) {
			this.monitoredItems.set(id, item)
		}
	}

	/**
	 * @description Método para ser llamado desde Eventos de Dominio (Deleted).
	 */
	public removeLocalItem(id: Primitives<MonitoringId>): void {
		this.monitoredItems.delete(id)
	}

	/**
	 * @description Ejecuta el escaneo de ping para todos los items monitoreados.
	 * Utiliza el caché local para obtener los items, ejecuta pings en paralelo (limitado)
	 * y guarda los resultados en lote.
	 * @param {object} params - Parámetros de ejecución.
	 * @param {boolean} [params.showLogs=false] - Indica si se deben mostrar logs.
	 * @returns {Promise<void>}
	 */
	protected async executePingScan({ showLogs = false }: { showLogs: boolean }): Promise<void> {
		// Al inicio del bucle dentro de executePingScan
		const currentItems = Array.from(this.monitoredItems.keys())
		this.logger.info(`[DEBUG] Escaneando ${currentItems.length} items de la caché.`)

		try {
			this.pingLogger.logPingResult({
				fileName: this.getMonitoringName(),
				message: `Iniciando escaneo de ping de ${this.getMonitoringName()}.`
			})

			const config = await this.loadMonitoringConfig()
			const limit = pLimit(config.concurrencyLimit)

			// Obtenemos los items y permitimos un ordenamiento opcional en la capa de aplicación
			const itemsToMonitor = await this.applyApplicationLevelSorting(Array.from(this.monitoredItems.values()))
			const totalMonitored = itemsToMonitor.length
			const chunkSize = 500 // Tamaño del lote

			if (showLogs) {
				this.logger.info(
					`[INFO] Procesando ${totalMonitored} ${this.getMonitoringName()}s en bloques de ${chunkSize}.`
				)
			}

			for (let index = 0; index < itemsToMonitor.length; index += chunkSize) {
				const chunk = itemsToMonitor.slice(index, index + chunkSize)
				const logBuffer: { fileName: string; message: string }[] = []

				if (showLogs) {
					this.logger.info(
						`[SCAN] Procesando bloque: ${index + 1} - ${Math.min(index + chunkSize, totalMonitored)}`
					)
				}

				// 1. Ejecutamos los pings del chunk actual con el límite de concurrencia
				const pingPromises = chunk.map(item =>
					limit(async () => {
						return await this.performPingCheck(item, logBuffer)
					})
				)

				const results = await Promise.allSettled(pingPromises)
				// 2. Filtramos payloads válidos de este chunk
				const payloadsToSave: Payload[] = []
				for (const result of results) {
					if (result.status === 'fulfilled' && result.value !== null) {
						payloadsToSave.push(result.value as Payload)
					}
				}

				// 3. Guardado masivo e invalidación (saveAll ya lo hace internamente)
				if (payloadsToSave.length > 0) {
					await this.repository.saveAll(payloadsToSave)
				}

				// 4. Liberamos logs de este chunk inmediatamente para no saturar RAM
				await Promise.all(logBuffer.map(log => this.pingLogger.logPingResult(log)))

				// Opcional: Pequeña pausa para permitir que el garbage collector actúe
				if (index + chunkSize < itemsToMonitor.length) await new Promise(res => setImmediate(res))
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

	/**
	 * @description Permite a las subclases aplicar un ordenamiento específico en memoria
	 * antes de iniciar el escaneo. Por defecto no hace nada.
	 * @param items Lista de items a monitorear.
	 * @returns Lista ordenada.
	 */
	protected async applyApplicationLevelSorting(items: DTO[]): Promise<DTO[]> {
		return items
	}

	/**
	 * @description Realiza la lógica de ping pura y retorna el payload para guardar, sin efectos secundarios en BD.
	 * @param {DTO} item - El item a monitorear.
	 * @returns {Promise<Payload | null>} El payload con el resultado para guardar, o null si no hay cambios/acción.
	 */
	protected async performPingCheck(
		item: DTO,
		logBuffer: { fileName: string; message: string }[]
	): Promise<Payload | null> {
		const ipAddress = await this.getIpAddress(item)
		const expectedHostname = await this.getExpectedHostname(item)
		const monitoringName = this.getMonitoringName()
		const monitoringEntity: Entity | null = this.createMonitoringEntity(item)

		// Si no hay IP, marcamos como NO DISPONIBLE
		if (!ipAddress) {
			// Nota: Aquí usamos el item de memoria, no consultamos findById de nuevo
			this.updateMonitoringEntityStatus(monitoringEntity, MonitoringStatuses.NOTAVAILABLE, null, null, null)
			return this.createMonitoringPayload(monitoringEntity)
		}
		try {
			// Ejecutar el ping
			const pingResult = await this.pingService.pingIp({ ipAddress, getHostName: !!expectedHostname })

			const isValidHostname = this.validatePingResult({ expectedHostname, pingResult })

			const statusMessage = isValidHostname
				? `EN LÍNEA (Hostname: ${pingResult.hostname ?? 'N/A'})`
				: `HOSTNAME_MISMATCH (Esperado: ${expectedHostname ?? 'N/A'}, Recibido: ${pingResult.hostname ?? 'N/A'})`

			this.updateMonitoringEntityStatus(
				monitoringEntity,
				MonitoringStatuses.ONLINE,
				new Date(),
				undefined,
				new Date()
			)

			logBuffer.push({
				fileName: monitoringName,
				message: `[${monitoringName}] ${ipAddress} - ${statusMessage}`
			})

			// if (isValidHostname) {
			// 	// Actualizar estado a ONLINE
			// 	this.updateMonitoringEntityStatus(
			// 		monitoringEntity,
			// 		MonitoringStatuses.ONLINE,
			// 		new Date(),
			// 		undefined,
			// 		new Date()
			// 	)
			// 	logBuffer.push({
			// 		fileName: monitoringName,
			// 		message: `[${monitoringName}] ${ipAddress} - EN LÍNEA (Hostname: ${pingResult.hostname ?? 'N/A'})`
			// 	})
			// } else {
			// 	// Se revirtio el cambio porque genero muchos falsos positivos
			// 	// el dominio tarda mucho en actualizarse y el hacer ping -a podria no devolver el nombre correcto
			// 	this.updateMonitoringEntityStatus(
			// 		monitoringEntity,
			// 		MonitoringStatuses.ONLINE,
			// 		new Date(),
			// 		undefined,
			// 		new Date()
			// 	)
			// 	logBuffer.push({
			// 		fileName: monitoringName,
			// 		message: `[${monitoringName}] ${ipAddress} - HOSTNAME_MISMATCH (Esperado: ${
			// 			expectedHostname ?? 'N/A'
			// 		}, Recibido: ${pingResult.hostname ?? 'N/A'})`
			// 	})
			// }
		} catch (error) {
			// Manejo de errores (OFFLINE)
			if (monitoringEntity) {
				this.updateMonitoringEntityStatus(
					monitoringEntity,
					MonitoringStatuses.OFFLINE,
					undefined,
					new Date(),
					new Date()
				)
				logBuffer.push({
					fileName: monitoringName,
					message: `[${monitoringName}] ${ipAddress} - FUERA DE LÍNEA: ${error instanceof Error ? error.message : error}`
				})
			}
		}

		return this.createMonitoringPayload(monitoringEntity)
	}
}
