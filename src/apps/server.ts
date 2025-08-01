import express, { json, urlencoded, type Request, type Response } from 'express'
import * as http from 'node:http'
import * as https from 'node:https'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
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
	private readonly sslKeyPath: string = path.resolve('./src/apps/certificate/nginx.key')
	private readonly sslCertPath: string = path.resolve('./src/apps/certificate/nginx-certificate.crt')
	httpServer?: http.Server | https.Server

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

	private async startHTTPS(): Promise<void> {
		const hostname = os.hostname() // Obtener el hostname del sistema
		try {
			const privateKey = await fs.readFile(this.sslKeyPath, 'utf8')
			const certificate = await fs.readFile(this.sslCertPath, 'utf8')
			const credentials = { key: privateKey, cert: certificate }

			await new Promise<void>(resolve => {
				const env = this.express.get('env') as string
				this.httpServer = https.createServer(credentials, this.express).listen(this.port, () => {
					this.logger.info(
						`Aplicación Inventario Backend ejecutándose en https://${hostname}:${this.port} en modo ${env} (HTTPS)`
					)
					this.logger.info('Presione CTRL-C para detener')
					resolve()
				})
			})
		} catch (error) {
			this.logger.error(
				`Error al cargar los certificados HTTPS (${this.sslKeyPath}, ${this.sslCertPath}): ${error}. Iniciando servidor HTTP.`
			)
			await this.startHTTP()
		}
	}

	private async startHTTP(): Promise<void> {
		const hostname = os.hostname() // Obtener el hostname del sistema
		await new Promise<void>(resolve => {
			const env = this.express.get('env') as string
			this.httpServer = this.express.listen(this.port, () => {
				this.logger.info(
					`Aplicación Inventario Backend ejecutándose en http://${hostname}:${this.port} en modo ${env} (HTTP)`
				)
				this.logger.info('Presione CTRL-C para detener')
				resolve()
			})
		})
	}

	async listen(): Promise<void> {
		await this.startHTTPS()
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
