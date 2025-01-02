import { globSync } from 'node:fs'
import { join } from 'node:path'
import { asClass, AwilixContainer, createContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { type CacheRepository } from '../../Contexts/Shared/domain/CacheRepository'
import { type Logger } from '../../Contexts/Shared/domain/Logger'





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

container.register({
    logger: asClass(WinstonLogger),
    cache: asClass(RedisRepository).singleton(),
})
registerDI(container)



export const logger: Logger = container.resolve('logger')
export const cache: CacheRepository = container.resolve("cache")






