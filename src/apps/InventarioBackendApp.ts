import { config } from '../Contexts/Shared/infrastructure/config'
import { Server } from './server'
import { sequelize } from '../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { initilizarModels } from '../Contexts/Shared/infrastructure/persistance/Sequelize/initSchemas'
import { cache, container, logger } from './di/container'
// import { passportManager } from './di/auth.di'
import { type PassportManager } from '../Contexts/Auth/infrastructure/passport'

export class InventarioBackendApp {
  server?: Server
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
    await sequelize.close()
    await cache.close()

    return await this.server?.stop()
  }

  private async initializeDBStorage() {
    try {
      await sequelize.authenticate()
      logger.info('Connection to database has been established successfully.')
      await initilizarModels(sequelize)
      logger.info('All models initilized.')
    } catch (error) {
      logger.error(`'Unable to connect to the database:', ${error}`)
    }
  }
  private async initializeCacheStorage() {
    await cache.connect()
  }
}
