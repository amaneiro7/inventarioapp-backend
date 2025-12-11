// import { sync } from 'fast-glob'
import { globSync } from 'glob'
import { resolve } from 'node:path'
import { type AwilixContainer, createContainer } from 'awilix'
import { config } from '../../Contexts/Shared/infrastructure/config'

export const container = createContainer({ injectionMode: 'PROXY', strict: true })

export async function registerDI(container: AwilixContainer) {
	const routePath = config.isProd ? 'dist/src/**/*.di.*' : 'src/**/*.di.*'
	// Unimos las rutas de dependencias y las del event bus. El event bus se añade al final.
	const allRoutes = [...globSync(routePath)]

	allRoutes.forEach(async route => {
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
