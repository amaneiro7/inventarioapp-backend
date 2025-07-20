import morgan from 'morgan'
import fs from 'node:fs'
import path from 'node:path'

// Create a write stream (in append mode) for logging
const logDirectory = path.resolve(process.cwd(), 'logs')

// Ensure the log directory exists
if (!fs.existsSync(logDirectory)) {
	fs.mkdirSync(logDirectory, { recursive: true })
}

// Create a write stream (in append mode) for the access log file
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' })

/**
 * @description Morgan middleware configured to log HTTP requests to a file.
 * It uses the 'combined' format, which includes information like the remote IP address, user agent,
 * and the time taken to process the request.
 */
export const morganLog = morgan('combined', { stream: accessLogStream })
