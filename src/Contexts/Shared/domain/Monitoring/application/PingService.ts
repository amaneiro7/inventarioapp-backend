import { exec } from 'node:child_process'
import { platform } from 'node:os'
import { promisify } from 'node:util'
import { type Logger } from '../../Logger'

// Promisify exec for easier async/await usage
const execPromise = promisify(exec)

export interface PingResult {
	alive: boolean // Is the host reachable?
	time?: number // Round-trip time in milliseconds
	packetLoss?: number // Percentage of packets lost
	rawOutput: string // Original stdout for debugging if needed
	hostname?: string // Resolved hostname from ping output
}
export class PingService {
	constructor(private readonly logger: Logger) {}
	async pingIp({ ipAddress, getHostName }: { ipAddress: string; getHostName?: boolean }): Promise<PingResult> {
		let command = ''
		const getHostNameArg = getHostName ? '-a' : ''
		let pingArgs: string[] = []
		const osPlatform = platform()

		if (osPlatform.startsWith('win')) {
			// Windows: -n 1 for 1 ping, -w 1000 for 1000ms timeout
			command = 'ping'
			pingArgs = ['-n', '1', '-w', '1000', getHostNameArg, ipAddress]
		} else {
			// Linux/macOS: -c 1 for 1 ping, -W 1 for 1 second timeout (in seconds)
			command = 'ping'
			pingArgs = ['-c', '1', '-W', '1', getHostNameArg, ipAddress]
		}

		try {
			// Use execPromise with a timeout for the command itself
			const { stdout, stderr } = await execPromise(`${command} ${pingArgs.join(' ')}`, { timeout: 8000 })

			if (stderr) {
				this.logger.info(`Ping command stderr for ${ipAddress}: ${stderr.trim()}`)
			}

			const result = this.parsePingOutput(stdout, osPlatform)
			if (result.alive) {
				return result // Return the full PingResult
			} else {
				// If not alive, throw an error with details
				throw new Error(
					`Host ${ipAddress} is unreachable. Packet loss: ${
						result.packetLoss ?? 'unknown'
					}%. Raw output: ${result.rawOutput.trim()}`
				)
			}
		} catch (rawError: unknown) {
			// Handle errors from execPromise. The caught object is 'unknown' by default in modern TS.
			// We inspect it to provide a more specific error message.
			if (rawError instanceof Error) {
				// The error from execPromise has additional properties. We can cast it to access them safely.
				const error = rawError as Error & {
					killed?: boolean
					signal?: string
					code?: string
					stdout?: string
					stderr?: string
				}

				if (error.killed && error.signal === 'SIGTERM') {
					throw new Error(`Ping to ${ipAddress} timed out after 2 seconds.`)
				} else if (error.code === 'ENOENT') {
					throw new Error(`Ping command not found. Is 'ping' installed and in your system's PATH?`)
				} else if (
					error.stdout &&
					(error.stdout.includes('Request timed out') ||
						error.stdout.includes('Destination host unreachable'))
				) {
					throw new Error(`Host ${ipAddress} is unreachable. (Ping command output indicates failure)`)
				} else if (error.message.includes('100% packet loss')) {
					throw new Error(`Host ${ipAddress} is unreachable. (100% packet loss)`)
				} else {
					throw new Error(`Failed to execute ping command for ${ipAddress}: ${error.message}`)
				}
			}
			// Fallback for cases where a non-Error was thrown
			throw new Error(`Failed to execute ping command for ${ipAddress}: ${String(rawError)}`)
		}
	}

	private parsePingOutput(output: string, osPlatform: NodeJS.Platform): PingResult {
		const result: PingResult = { alive: false, rawOutput: output }
		const lowerOutput = output.toLowerCase()

		if (osPlatform.startsWith('win')) {
			// Windows output patterns
			if (lowerOutput.includes('reply from') || lowerOutput.includes('respuesta desde')) {
				result.alive = true
			}
			const timeMatch = output.match(/time=(\d+)ms/i)
			if (timeMatch && timeMatch[1]) {
				result.time = parseInt(timeMatch[1], 10)
			}
			const lossMatch = output.match(/\((\d+)% loss\)/i)
			if (lossMatch && lossMatch[1]) {
				result.packetLoss = parseInt(lossMatch[1], 10)
			}
			// Extract hostname for Windows
			const hostnameMatch =
				output.match(/Reply from ([a-zA-Z0-9\-.]+)/i) || output.match(/Haciendo ping a ([a-zA-Z0-9\-.]+)/i)
			if (hostnameMatch && hostnameMatch[1]) {
				let fullHostname = hostnameMatch[1]
				const domainToRemove = '.corp.bnc.com'
				if (fullHostname.toLowerCase().endsWith(domainToRemove)) {
					// Use slice to get the part before the domain
					// fullHostname.length - domainToRemove.length will give you the starting index of the domain
					fullHostname = fullHostname.slice(0, fullHostname.length - domainToRemove.length)
				}
				result.hostname = fullHostname
			}
		} else {
			// Linux/macOS output patterns
			if (
				lowerOutput.includes('bytes from') &&
				!lowerOutput.includes('unreachable') &&
				!lowerOutput.includes('unknown host')
			) {
				result.alive = true
			}
			const timeMatch = output.match(/time=(\d+\.?\d*)\s*ms/i)
			if (timeMatch && timeMatch[1]) {
				result.time = parseFloat(timeMatch[1])
			}
			const lossMatch = output.match(/(\d+)% packet loss/i)
			if (lossMatch && lossMatch[1]) {
				result.packetLoss = parseInt(lossMatch[1], 10)
			}
			// Extract hostname for Linux/macOS
			const hostnameMatch = output.match(/PING ([a-zA-Z0-9\-.]+)\s*\(/i)
			if (hostnameMatch && hostnameMatch[1]) {
				result.hostname = hostnameMatch[1]
			}
		}
		return result
	}
}
