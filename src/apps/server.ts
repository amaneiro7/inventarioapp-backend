import http from 'node:http' // Import the http module
import express, { type NextFunction, json, urlencoded, type Request, type Response } from 'express' //
import Router from 'express-promise-router'
import compress from 'compression' // Comprime la respuesta de cada peticion
import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
import cors from 'cors'
import helmet from 'helmet' // Protege contra ataques de seguridad
// manejo de error en consola
import { limiter } from './Shared/Middleware/rateLimit'  // Importa el middleware de limitacion de peticiones
import httpStatus from './Shared/utils/http-status' // Importa el modulo de status de http
import responseTime from 'response-time' // Mide el tiempo de respuesta de cada peticion
import notifier from 'node-notifier'  // Notifica al usuario de cambios en la aplicacion

import { routerApi } from './Shared/Routes'
import { options } from './Shared/Middleware/cors'
import { logger } from './Shared/Middleware/winstonError' // Manejo de error en un archivo
import { config } from '../../config/env.file' // archivo donde se configurar las variables de entorno

import { type Repository } from '../Contexts/Shared/domain/Repository'
import { morganLog } from './Shared/Middleware/morgan'
import { helmetConfig } from './Shared/Middleware/helmet'

// import { etagMiddleware } from './Shared/Middleware/etagMiddleware'
// import { lastModifiedMiddleware } from './Shared/Middleware/lastModifiedMiddleware'
// import { expiresMiddleware } from './Shared/Middleware/expiresMiddleware'



export class Server {
  private readonly app: express.Express
  private readonly port: string
  private httpServer?: http.Server

  constructor({ port, repository }: { port: string, repository: Repository }) {
    this.port = port
    this.app = express()


    // Middlewares
    this.setupMiddlewares()

    this.app.get('/', (req: Request, res: Response) => {
      res.send("Servidor de Inventario funcionando correctamente")
    })

    // Configuración de rutas
    this.setupRoutes(repository)

  }

  private setupMiddlewares(): void {
    this.app.use(limiter)

    // Middlware para medir el tiempo de respuesta
    this.app.use(responseTime())

    // Middleware para logging con Morgan
    this.app.use(morganLog)


    // Middleware de seguridad con Helmet
    this.app.use(helmetConfig)
    // this.app.use(helmet.xssFilter())
    // this.app.use(helmet.noSniff())
    // this.app.use(helmet.hidePoweredBy())
    // this.app.use(helmet.frameguard({ action: 'deny' }))

    // Middleware para CORS
    this.app.use(cors(options))

    // Middleware para parsear JSON
    this.app.use(json())

    // Middleware para parsear URL-encoded
    this.app.use(urlencoded({ extended: true }))

    // Middleware para cookies firmadas
    this.app.use(cookieParser())

    // Middleware para comprimir las respuestas
    this.app.use(compress({
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          // don't compress responses with this request header
          return false
        }
        // fallback to standard filter function
        return compress.filter(req, res)
      }
    }))

    // Middleare para manejo de errores
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
      logger.error('Error;', err.message)
      next(err)
    })

    // Middlewares opcionales de cache
    // this.app.use(cacheMiddleware)
    // this.app.use(expiresMiddleware)
    // this.app.use(lastModifiedMiddleware)
    // this.app.use(etagMiddleware)
  }

  private setupRoutes(repository: Repository): void {
    const router = Router()

    if (!config.isProd) {
      router.use(errorHandler())
    }

    // Configuración de rutas
    routerApi({ app: this.app, repository })

    // Manejo de errores global
    router.use((err: Error, req: Request, res: Response, _next: () => void) => {
      res.status(httpStatus.BAD_REQUEST).send(err.message)
    })
    this.app.use(router)
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      const env = this.app.get('env') as string
      this.httpServer = this.app.listen(this.port, () => {
        console.log(`  Inventario Backend App is running at http://localhost:${this.port} in ${env} mode`)
        console.log('  Press CTRL-C to stop\n')
        resolve()
      })
    })
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      if (this.httpServer != null) {
        this.httpServer.close(error => {
          if (error != null) {
            reject(error)

            return
          }

          resolve()
        })
      }

      resolve()
    })
  }
}
