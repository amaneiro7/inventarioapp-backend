import * as http from 'node:http' // Import the http module
import express, { json, urlencoded, type Request, type Response } from 'express' //
import Router from 'express-promise-router'
import compress from 'compression' // Comprime la respuesta de cada peticion
import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
import cors from 'cors'
import { options } from './Middleware/cors'
import helmet from 'helmet' // Protege contra ataques de seguridad

import { limiter } from './Middleware/rateLimit'  // Importa el middleware de limitacion de peticiones
import httpStatus from '../Contexts/Shared/infrastructure/utils/http-status' // Importa el modulo de status de http
import responseTime from 'response-time' // Mide el tiempo de respuesta de cada peticion
import { morganLog } from './Middleware/morgan'

import { config } from '../Contexts/Shared/infrastructure/config' // archivo donde se configurar las variables de entorno
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { registerRoutes } from './routes'

export class Server {
  private express: express.Express
  httpServer?: http.Server

  constructor(
    readonly port: string,
    private readonly logger: Logger
  ) {
    this.port = port
    this.express = express()

    // Middleware para parsear JSON
    this.express.use(json())

    // Middleware para parsear URL-encoded
    this.express.use(urlencoded({ extended: true }))

    // Middleware de seguridad con Helmet    
    this.express.use(helmet.xssFilter())
    this.express.use(helmet.noSniff())
    this.express.use(helmet.hidePoweredBy())
    this.express.use(helmet.frameguard({ action: 'deny' }))

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


    // Ruta para validar el funcionamiento del servidor
    this.express.get('/', (req: Request, res: Response) => {
      res.send("Servidor de Inventario funcionando correctamente")
    })

    // Configuración de rutas
    const router = Router()

    if (!config.isProd) {
      router.use(errorHandler())
    }

    this.express.use(router)
    this.express.use('/api/v1/', router);

    // Configuración de rutas
    (async () => {
      await registerRoutes(router)
    })()

    // Manejo de errores global
    router.use((err: Error, req: Request, res: Response, _next: () => void) => {
      const errorMessage = `name: ${err.name} - message: ${err.message}`
      this.logger.error(errorMessage)
      res.status(httpStatus.BAD_REQUEST).send(err.message)
    })
  }

  async listen(): Promise<void> {
    await new Promise<void>(resolve => {
      const env = this.express.get('env') as string
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(`  Inventario Backend app is running at http://localhost:${this.port} in ${env} mode`)
        this.logger.info('  Press CTRL-C to stop\n')
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
