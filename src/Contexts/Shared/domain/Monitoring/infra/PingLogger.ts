import { Logger } from '../../Logger'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'

export class PingLogger {
	private readonly logDirectory: string = path.resolve(process.cwd(), 'logs', 'ping')
	private readonly MAX_LOG_DAYS = 3 // Keep logs for 3 days

	constructor(private readonly logger: Logger) {
		void this.ensureLogDirectoryExists()
		void this.cleanOldLogs()
	}

	private async ensureLogDirectoryExists(): Promise<void> {
		try {
			await fs.mkdir(this.logDirectory, { recursive: true })
		} catch (error) {
			this.logger.error(`Failed to create log directory: ${this.logDirectory}, ${error}`)
		}
	}

	private getLogFileName({ date, fileName }: { date: Date; fileName: string }): string {
		const year = date.getFullYear()
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const day = date.getDate().toString().padStart(2, '0')
		return `${fileName}-ping-log-${year}-${month}-${day}.log`
	}

	public async logPingResult({ fileName, message }: { fileName: string; message: string }): Promise<void> {
		const now = new Date()
		const logFileName = this.getLogFileName({ date: now, fileName })
		const logFilePath = path.join(this.logDirectory, logFileName)
		const timestamp = now.toISOString()
		const logEntry = `[${timestamp}] ${message}\n`

		try {
			await fs.appendFile(logFilePath, logEntry, 'utf8')
		} catch (error) {
			this.logger.error(`Failed to write ping log to ${logFilePath}, ${error}`)
		}
	}

	private async cleanOldLogs(): Promise<void> {
		try {
			const files = await fs.readdir(this.logDirectory)
			const now = new Date()

			for (const file of files) {
				if (file.startsWith('ping-log-') && file.endsWith('.log')) {
					const datePart = file.substring('ping-log-'.length, file.length - '.log'.length)
					const [year, month, day] = datePart.split('-').map(Number)
					const fileDate = new Date(year, month - 1, day)

					const diffTime = Math.abs(now.getTime() - fileDate.getTime())
					const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

					if (diffDays > this.MAX_LOG_DAYS) {
						const filePath = path.join(this.logDirectory, file)
						await fs.unlink(filePath)
						this.logger.info(`Deleted old ping log file: ${file}`)
					}
				}
			}
		} catch (error) {
			this.logger.error(`Failed to clean old ping logs: ${error}`)
		}
	}
}
