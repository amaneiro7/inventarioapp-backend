import 'reflect-metadata'
import { InventarioBackendApp } from './InventarioBackendApp'
;(async () => {
	try {
		await new InventarioBackendApp().start().catch(handleError)
	} catch (e) {
		handleError(e)
	}
})()

process.on('uncaughtException', err => {
	console.error('uncaughtException', err)
	process.exit(1)
})

function handleError(e: unknown) {
	console.log(e)
	process.exit(1)
}
