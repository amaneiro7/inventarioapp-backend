import { globSync } from 'node:fs'
import { join } from 'node:path'
import { AwilixContainer, createContainer } from 'awilix'

export const container = createContainer({ injectionMode: 'CLASSIC' })

export async function registerDI(container: AwilixContainer) {
    const routePath = join(process.cwd(), 'src/apps/di/*.di.*')
    const routes = globSync(routePath)
    routes.map(async (route) => await register(route, container))
}

async function register(routePath: string, container: AwilixContainer) {
    const dependencies = require(routePath)
    await dependencies.register(container)
}


registerDI(container)