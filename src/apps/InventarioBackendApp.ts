import { config } from '../Contexts/Shared/infrastructure/config'
import { Server } from './server'
import { sequelize } from '../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { initilizarModels } from '../Contexts/Shared/infrastructure/persistance/Sequelize/initSchemas'
import { container } from './di/container'
import { SharedDependencies } from './di/shared.di'
import { type PassportManager } from '../Contexts/Auth/infrastructure/passport'
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { type CacheRepository } from '../Contexts/Shared/domain/CacheRepository'


export class InventarioBackendApp {
  server?: Server
  private readonly logger: Logger = container.resolve(SharedDependencies.Logger)


  async start(): Promise<void> {
    const port = config.port
    this.server = new Server(port)

    const passportManager: PassportManager = container.resolve('passportManager')
    passportManager.initialize()

    await this.initializeDBStorage()
    await this.initializeCacheStorage()
    await this.server.listen()
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop(): Promise<void> {
    const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
    await sequelize.close()
    await cache.close()

    return await this.server?.stop()
  }

  private async initializeDBStorage() {
    try {
      await sequelize.authenticate()
      this.logger.info('Connection to database has been established successfully.')
      await initilizarModels(sequelize)
      this.logger.info('All models initilized.')
    } catch (error) {
      this.logger.error(`'Unable to connect to the database:', ${error}`)
    }
  }
  private async initializeCacheStorage() {
    const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
    await cache.connect()
  }
}
