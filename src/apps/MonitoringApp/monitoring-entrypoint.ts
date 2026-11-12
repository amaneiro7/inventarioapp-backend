// src/apps/monitoring-entrypoint.ts
import 'reflect-metadata'
import { MonitoringApp } from './MonitoringApp'

const app = new MonitoringApp()

async function main() {
	try {
		await app.start()
	} catch (error) {
		console.error('Fallo fatal al iniciar MonitoringApp:', error)
		process.exit(1)
	}
}

// Manejo de señales de terminación para apagado limpio (Graceful Shutdown)
const handleShutdown = async (signal: string) => {
	console.log(`\nSeñal ${signal} recibida. Apagando MonitoringApp limpiamente...`)
	try {
		await app.stop()
		process.exit(0)
	} catch (error) {
		console.error('Error durante el apagado:', error)
		process.exit(1)
	}
}

process.on('SIGINT', () => void handleShutdown('SIGINT'))
process.on('SIGTERM', () => void handleShutdown('SIGTERM'))

process.on('uncaughtException', error => {
	console.error('Uncaught Exception en MonitoringApp:', error)
	process.exit(1)
})

process.on('unhandledRejection', reason => {
	console.error('Unhandled Rejection en MonitoringApp:', reason)
	process.exit(1)
})

void main()
