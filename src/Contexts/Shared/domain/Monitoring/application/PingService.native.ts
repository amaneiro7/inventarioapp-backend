import * as ping from 'net-ping'
import { reverse } from 'node:dns/promises'
import { type Logger } from '../../Logger'
import { type IPingService, type PingResult } from '../infra/IPingService'

/**
 * Implementación de PingService que utiliza la librería `net-ping` para enviar
 * paquetes ICMP directamente desde Node.js, evitando la creación de procesos hijos.
 * Esto resuelve problemas de rendimiento con antivirus y es más eficiente.
 */
export class NativePingService implements IPingService {
	private readonly logger: Logger
	private readonly pingSession: ping.Session

	constructor({ logger }: { logger: Logger }) {
		this.logger = logger
		// Se crea una única sesión de ping que se reutilizará para todas las operaciones.
		this.pingSession = ping.createSession({
			retries: 0, // No reintentar en caso de fallo.
			timeout: 2000 // Timeout de 2000ms (2 segundos).
		})
	}

	/**
	 * Realiza un ping a una dirección IP y opcionalmente resuelve su hostname.
	 * @param {object} params - Parámetros de la operación.
	 * @param {string} params.ipAddress - La dirección IP a la que hacer ping.
	 * @param {boolean} [params.getHostName=false] - Si es true, intenta resolver el hostname.
	 * @returns {Promise<PingResult>} - Una promesa que resuelve con el resultado del ping.
	 */
	public async pingIp({
		ipAddress,
		getHostName = false
	}: {
		ipAddress: string
		getHostName?: boolean
	}): Promise<PingResult> {
		const pingPromise = new Promise<PingResult>((resolve, reject) => {
			this.pingSession.pingHost(ipAddress, (error, target, sent, rcvd) => {
				if (error) {
					// El error puede ser un timeout u otro problema de red.
					if (error instanceof ping.RequestTimedOutError) {
						// Rechazamos la promesa con un error claro.
						return reject(new Error(`Ping a ${ipAddress} agotó el tiempo de espera.`))
					}
					return reject(new Error(`Fallo al hacer ping a ${ipAddress}: ${error.message}`))
				}

				// Si no hay error, el host está vivo.
				const roundTripTime = rcvd.getTime() - sent.getTime()
				resolve({
					alive: true, // packetLoss no es proporcionado por esta librería, pero es opcional en la interfaz.
					time: roundTripTime,
					rawOutput: `Respuesta desde ${target} en ${roundTripTime}ms`
				})
			})
		})

		try {
			const result = await pingPromise

			// Si se solicita el hostname, lo resolvemos por separado usando el módulo DNS de Node.
			if (getHostName) {
				const dnsTimeout = 1500 // 1.5 segundos para la resolución DNS
				const timeoutPromise = new Promise<never>((_, reject) =>
					setTimeout(() => reject(new Error('DNS reverse lookup timed out')), dnsTimeout)
				)

				const reverseLookupPromise = reverse(ipAddress)

				await Promise.race([reverseLookupPromise, timeoutPromise])
					.then(hostnames => {
						// Asignamos el primer hostname encontrado.
						if (hostnames.length > 0) {
							result.hostname = hostnames[0]
						}
					})
					.catch(dnsError => {
						// Es común que la resolución inversa falle, no lo tratamos como un error crítico.
						const errorMessage = dnsError instanceof Error ? dnsError.message : String(dnsError)
						// Logueamos solo si el error es informativo (ej. ENOTFOUND o timeout), no para otros errores.
						this.logger.info(
							`No se pudo resolver el hostname para la IP ${ipAddress}. Motivo: ${errorMessage}`
						)
					})
			}

			return result
		} catch (error) {
			// Si la promesa de ping fue rechazada (ej. por timeout), la capturamos aquí.
			// Creamos un resultado que indica que el host está offline.
			return {
				alive: false,
				rawOutput: error instanceof Error ? error.message : String(error)
			}
		}
	}

	public close(): void {
		this.pingSession.close()
	}
}
