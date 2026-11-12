import 'reflect-metadata'
import { InventarioBackendApp } from './InventarioBackendApp'

const app = new InventarioBackendApp()

async function main() {
	try {
		await app.start().catch(handleError)
	} catch (e) {
		handleError(e)
	}
}

process.on('uncaughtException', err => {
	console.error('uncaughtException', err)
	process.exit(1)
})

function handleError(e: unknown) {
	console.log(e)
	process.exit(1)
}

void main()
