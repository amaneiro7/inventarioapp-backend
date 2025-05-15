import { exec } from 'node:child_process'
import { platform } from 'node:os'
export class PingService {
	async pingIp({ ipAddress }: { ipAddress: string }): Promise<string> {
		return new Promise((resolve, reject) => {
			let command = ''
			const osPlatform = platform()
			if (osPlatform.startsWith('win')) {
				command = `ping -n 1 -w 1000 ${ipAddress}` // Windows: 1 ping, 1000ms timeout
			} else {
				command = `ping -c 1 -W 1 ${ipAddress}` // Linux/macOS: 1 ping, 1 second timeout
			}

			exec(command, (error, stdout, stderr) => {
				if (error || stderr) {
					reject(error)
					return
				}
				return resolve(stdout)
			})
		})
	}
}
