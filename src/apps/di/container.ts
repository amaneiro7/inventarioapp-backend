import { sync } from 'fast-glob'
import { resolve } from 'node:path'
import { type AwilixContainer, createContainer } from 'awilix'
import { config } from '../../Contexts/Shared/infrastructure/config'

export const container = createContainer({ injectionMode: 'PROXY', strict: true })

export async function registerDI(container: AwilixContainer) {
	const routePath = config.isProd ? 'dist/src/**/*.di.*' : 'src/**/*.di.*'
	const routes = sync(routePath)
	routes.forEach(async route => {
		await register({ routePath: route, container })
	})
}

async function register({ routePath, container }: { routePath: string; container: AwilixContainer }) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const dependencies = require(resolve(routePath))

	// si el archivo exportado no contiene una funcion "register" se omite
	if (!dependencies.register) return
	await dependencies.register(container)
}

;(async () => await registerDI(container))()
