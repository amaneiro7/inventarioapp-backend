import express, { json, urlencoded, type Request, type Response } from 'express'
import * as http from 'node:http'
import * as os from 'node:os' // Importar el módulo os para obtener el hostname
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import responseTime from 'response-time'
import { options } from './Middleware/cors'
import { limiter } from './Middleware/rateLimit'
import { morganLog } from './Middleware/morgan'
import { security } from './Middleware/security'
import { errorHandler } from './Middleware/errorHandler'
import { registerRoutes } from './routes'
import { swaggerSpec } from './Middleware/swagger'
import { type Logger } from '../Contexts/Shared/domain/Logger'

export class Server {
	readonly port: string
	private readonly logger: Logger
	private express: express.Express
	httpServer?: http.Server

	constructor({ logger, port }: { port: string; logger: Logger }) {
		this.logger = logger
		this.port = port
		this.express = express()

		this.express.use(json())
		this.express.use(urlencoded({ extended: true }))

		// Middlewares de seguridad y rendimiento
		this.express.use(security)

		this.express.use(limiter)
		this.express.use(responseTime())
		this.express.use(morganLog)
		this.express.use(cors(options))
		this.express.use(cookieParser())

		this.express.get('/', (req: Request, res: Response) => {
			res.send('Servidor de Inventario funcionando correctamente')
		})

		this.express.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
		registerRoutes({ express: this.express })

		this.express.use(errorHandler(this.logger))
	}

	private async startHTTP(): Promise<void> {
		const hostname = os.hostname() // Obtener el hostname del sistema
		await new Promise<void>(resolve => {
			const env = this.express.get('env') as string
			this.httpServer = this.express.listen(this.port, () => {
				this.logger.info(
					`Aplicación Inventario Backend ejecutándose en http://${hostname}:${this.port} en modo ${env} (HTTP)`
				)
				this.logger.info(
					'El servidor está listo para recibir conexiones internas (detrás de un proxy inverso).'
				)
				this.logger.info('Presione CTRL-C para detener')
				resolve()
			})
		})
	}

	async listen(): Promise<void> {
		await this.startHTTP()
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
