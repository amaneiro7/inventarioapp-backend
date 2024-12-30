import { config } from '../Contexts/Shared/infrastructure/config'
import { createPassportInstance } from '../Contexts/User/user/infrastructure/auth/passport'
import { Server } from './server'

export class InventarioBackendApp {
  server?: Server

  async start(): Promise<void> {
    const port = config.port
    this.server = new Server(port)

    await createPassportInstance({ repository: this.repository })

    await this.server.listen()
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer()
  }

  async stop(): Promise<void> {
    return await this.server?.stop()
  }
}
