import { sync } from 'fast-glob'
import { resolve } from 'node:path'
import { type AwilixContainer, createContainer } from 'awilix'

export const container = createContainer({ injectionMode: 'CLASSIC' })

export async function registerDI(container: AwilixContainer) {
    const routePath = 'src/**/*.di.*'
    const routes = sync(routePath)
    routes.forEach(async (route) => {
        await register(route, container)
    })
}

async function register(routePath: string, container: AwilixContainer) {
    const dependencies = require(resolve(routePath))
    // si el archivo no contiene un funcion llamada register no se 
    if (!dependencies.register) return
    await dependencies.register(container)
};

(async () => await registerDI(container))()