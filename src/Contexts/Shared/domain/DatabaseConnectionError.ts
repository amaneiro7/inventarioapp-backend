export class DatabaseConnectionError extends Error {
	constructor(message: string, cause?: unknown) {
		super(`${message} - Cause: ${cause instanceof Error ? cause.message : String(cause)}`)
		this.name = 'DatabaseConnectionError'
	}
}
