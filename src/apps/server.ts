import * as http from 'node:http' // Import the http module
import express, { json, urlencoded, type Request, type Response } from 'express' //
import Router from 'express-promise-router'
import compress from 'compression' // Comprime la respuesta de cada peticion
import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
import cors from 'cors'
import { options } from './Shared/Middleware/cors'
import helmet from 'helmet' // Protege contra ataques de seguridad

import { limiter } from './Shared/Middleware/rateLimit'  // Importa el middleware de limitacion de peticiones
import httpStatus from '../Contexts/Shared/infrastructure/utils/http-status' // Importa el modulo de status de http
import responseTime from 'response-time' // Mide el tiempo de respuesta de cada peticion
import { morganLog } from './Shared/Middleware/morgan'


import { routerApi } from './Shared/Routes'
import { config } from '../Contexts/Shared/infrastructure/config' // archivo donde se configurar las variables de entorno

export class Server {
  private readonly express: express.Express
  private readonly port: string
  private httpServer?: http.Server

  constructor(port: string) {
    this.port = port
    this.express = express()

    // Middlewares
    this.setupMiddlewares()

    // Ruta para validar el funcionamiento del servidor
    this.express.get('/', (req: Request, res: Response) => {
      res.send("Servidor de Inventario funcionando correctamente")
    })

    // Configuración de rutas
    this.setupRoutes()
  }

  private setupMiddlewares(): void {
    // Middleware para parsear JSON
    this.express.use(json())
    // Middleware para parsear URL-encoded
    this.express.use(urlencoded({ extended: true }))
    // Middleware de seguridad con Helmet    
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))
    // Middleware para el rate limit
    this.express.use(limiter)

    // Middlware para medir el tiempo de respuesta
    this.express.use(responseTime())

    // Middleware para logging con Morgan
    this.express.use(morganLog)

    // Middleware para CORS
    this.express.use(cors(options))

    // Middleware para cookies firmadas
    this.express.use(cookieParser())

    // Middleware para comprimir las respuestas
    this.express.use(compress({
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          // don't compress responses with this request header
          return false
        }
        // fallback to standard filter function
        return compress.filter(req, res)
      }
    }))

    // Middlewares opcionales de cache
    // this.express.use(cacheMiddleware)
    // this.express.use(expiresMiddleware)
    // this.express.use(lastModifiedMiddleware)
    // this.express.use(etagMiddleware)
  }

  private setupRoutes(): void {
    const router = Router()

    if (!config.isProd) {
      router.use(errorHandler())
    }

    this.express.use(router)

    // Configuración de rutas
    routerApi({ app: this.express, repository })

    // Manejo de errores global
    router.use((err: Error, req: Request, res: Response, _next: () => void) => {
      res.status(httpStatus.BAD_REQUEST).send(err.message)
    })
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      const env = this.express.get('env') as string
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`  Inventario Backend app is running at http://localhost:${this.port} in ${env} mode`)
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
