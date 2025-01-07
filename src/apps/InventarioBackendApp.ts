import { config } from '../Contexts/Shared/infrastructure/config'
import { Server } from './server'
import { container } from './di/container'
import { SharedDependencies } from './di/shared.di'
import { AuthDependencies } from './di/auth/auth.di'
import { type PassportManager } from '../Contexts/Auth/infrastructure/passport'
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { type CacheRepository } from '../Contexts/Shared/domain/CacheRepository'
import { type Database } from '../Contexts/Shared/domain/Database'


export class InventarioBackendApp {
  server?: Server
  private readonly logger: Logger = container.resolve(SharedDependencies.Logger)


  async start(): Promise<void> {
    const port = config.port
    this.server = new Server(port, this.logger)

    const passportManager: PassportManager = container.resolve(AuthDependencies.PassportManager)
    await passportManager.initialize()

    await this.server.listen()
    await this.initializeDBStorage()
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop(): Promise<void> {
    const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
    const database: Database = container.resolve(SharedDependencies.Database)
    await database.close()
    await cache.close()

    return await this.server?.stop()
  }

  private async initializeDBStorage() {
    const database: Database = container.resolve(SharedDependencies.Database)
    const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
    await cache.connect()
    await database.connet()
  }
}
