import { exec } from 'node:child_process'
import { platform } from 'node:os'
import { promisify } from 'node:util'
import { type Logger } from '../../../Shared/domain/Logger'

// Promisify exec for easier async/await usage
const execPromise = promisify(exec)

interface PingResult {
	alive: boolean // Is the host reachable?
	time?: number // Round-trip time in milliseconds
	packetLoss?: number // Percentage of packets lost
	rawOutput: string // Original stdout for debugging if needed
}
export class PingService {
	constructor(private readonly logger: Logger) {}
	async pingIp({ ipAddress, enableLogging = false }: { ipAddress: string; enableLogging?: boolean }): Promise<void> {
		let command = ''
		let pingArgs: string[] = []
		const osPlatform = platform()

		if (osPlatform.startsWith('win')) {
			// Windows: -n 1 for 1 ping, -w 1000 for 1000ms timeout
			command = 'ping'
			pingArgs = ['-n', '1', '-w', '1000', ipAddress]
		} else {
			// Linux/macOS: -c 1 for 1 ping, -W 1 for 1 second timeout (in seconds)
			command = 'ping'
			pingArgs = ['-c', '1', '-W', '1', ipAddress]
		}

		try {
			// Use execPromise with a timeout for the command itself
			const { stdout, stderr } = await execPromise(`${command} ${pingArgs.join(' ')}`, { timeout: 2000 }) // Overall command timeout

			if (stderr) {
				this.logger.info(`Ping command stderr for ${ipAddress}: ${stderr.trim()}`)
			}

			const result = this.parsePingOutput(stdout, osPlatform)
			if (result.alive) {
				if (enableLogging) {
					this.logger.info(
						`Ping successful for ${ipAddress}. Time: ${result.time ?? 'N/A'}ms, Packet Loss: ${
							result.packetLoss ?? 0
						}%`
					)
				}
				// Resolve without a return value, as DeviceMonitoringService only needs success/failure
				return
			} else {
				// If not alive, reject with a specific error message
				throw new Error(
					`Host ${ipAddress} is unreachable. Packet loss: ${
						result.packetLoss ?? 'unknown'
					}%. Raw output: ${result.rawOutput.trim()}`
				)
			}
		} catch (error: any) {
			// Log the underlying error for debugging
			if (enableLogging) {
				this.logger.error(
					`Error during ping for ${ipAddress}: ${error.message}. Raw output: ${error.stdout?.trim() ?? ''} ${
						error.stderr?.trim() ?? ''
					}`
				)
			}

			// Re-throw a more user-friendly error for the caller (DeviceMonitoringService)
			if (error.killed && error.signal === 'SIGTERM') {
				throw new Error(`Ping to ${ipAddress} timed out after 2 seconds.`)
			} else if (error.code === 'ENOENT') {
				throw new Error(`Ping command not found. Is 'ping' installed and in your system's PATH?`)
			} else if (
				error.stdout &&
				(error.stdout.includes('Request timed out') || error.stdout.includes('Destination host unreachable'))
			) {
				// Specific checks for Windows or Linux/macOS "unreachable" messages in stdout
				throw new Error(`Host ${ipAddress} is unreachable. (Ping command output indicates failure)`)
			} else if (error.message.includes('100% packet loss')) {
				// Generic check if output contains 100% loss
				throw new Error(`Host ${ipAddress} is unreachable. (100% packet loss)`)
			} else {
				// Fallback for unexpected errors
				throw new Error(`Failed to execute ping command for ${ipAddress}: ${error.message}`)
			}
		}
	}

	private parsePingOutput(output: string, platform: NodeJS.Platform): PingResult {
		const result: PingResult = { alive: false, rawOutput: output }
		const lowerOutput = output.toLowerCase()

		if (platform.startsWith('win')) {
			// Windows output example:
			// Reply from 192.168.1.1: bytes=32 time=5ms TTL=64
			// Request timed out.
			// Packet statistics for 192.168.1.1: Packets: Sent = 1, Received = 0, Lost = 1 (100% loss),
			if (lowerOutput.includes('Reply from') || lowerOutput.includes('respuesta desde')) {
				result.alive = true
				const timeMatch = output.match(/time=(\d+)ms/i) // Case-insensitive for 'time='
				if (timeMatch && timeMatch[1]) {
					result.time = parseInt(timeMatch[1], 10)
				}
			}
			const lossMatch = output.match(/Lost = \d+ \((\d+)% loss\)/i)
			if (lossMatch && lossMatch[1]) {
				result.packetLoss = parseInt(lossMatch[1], 10)
			}
		} else {
			// Linux/macOS output example:
			// PING 8.8.8.8 (8.8.8.8): 56 data bytes
			// 64 bytes from 8.8.8.8: icmp_seq=0 ttl=117 time=10.370 ms
			// --- 8.8.8.8 ping statistics ---
			// 1 packets transmitted, 1 received, 0% packet loss, time 0ms
			if (
				output.includes('bytes from') &&
				!output.includes('Destination Host Unreachable') &&
				!output.includes('unknown host')
			) {
				result.alive = true
				const timeMatch = output.match(/time=(\d+\.?\d*)\s*ms/i)
				if (timeMatch && timeMatch[1]) {
					result.time = parseFloat(timeMatch[1])
				}
			}
			const lossMatch = output.match(/(\d+)% packet loss/i)
			if (lossMatch && lossMatch[1]) {
				result.packetLoss = parseInt(lossMatch[1], 10)
			}
		}
		return result
	}
}
