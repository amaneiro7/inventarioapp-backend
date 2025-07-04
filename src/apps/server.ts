import * as http from 'node:http' // Import the http module
import * as https from 'node:https' // Import the http module
import express, { json, urlencoded, type Request, type Response } from 'express' //
import compress from 'compression' // Comprime la respuesta de cada peticion
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { options } from './Middleware/cors'
import helmet from 'helmet' // Protege contra ataques de seguridad
import { limiter } from './Middleware/rateLimit' // Importa el middleware de limitacion de peticiones
import responseTime from 'response-time' // Mide el tiempo de respuesta de cada peticion
import { morganLog } from './Middleware/morgan'
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { registerRoutes } from './routes'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from '../Contexts/Shared/infrastructure/documentation/swagger'
import fs from 'node:fs/promises' // Importa el módulo fs para leer archivos de forma asíncrona
import path from 'node:path' // Importa el módulo path para construir rutas

export class Server {
	private express: express.Express
	private readonly sslKeyPath: string = path.resolve('./src/apps/certificate/nginx.key') // Ruta por defecto a la clave privada
	private readonly sslCertPath: string = path.resolve('./src/apps/certificate/nginx-certificate.crt') // Ruta por defecto al certificado
	httpServer?: http.Server | https.Server

	constructor(readonly port: string, private readonly logger: Logger) {
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
		this.express.use(
			compress({
				filter: (req, res) => {
					if (req.headers['x-no-compression']) {
						// don't compress responses with this request header
						return false
					}
					// fallback to standard filter function
					return compress.filter(req, res)
				}
			})
		)

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
			res.send('Servidor de Inventario funcionando correctamente')
		})

		this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

		// Configuración de rutas
		registerRoutes(this.express, this.logger)
	}

	private async startHTTPS(): Promise<void> {
		try {
			const privateKey = await fs.readFile(this.sslKeyPath, 'utf8')
			const certificate = await fs.readFile(this.sslCertPath, 'utf8')
			const credentials = { key: privateKey, cert: certificate }

			await new Promise<void>(resolve => {
				const env = this.express.get('env') as string
				this.httpServer = https.createServer(credentials, this.express).listen(this.port, () => {
					this.logger.info(
						`  Inventario Backend app is running at https://localhost:${this.port} in ${env} mode (HTTPS)`
					)
					this.logger.info('  Press CTRL-C to stop\n')
					resolve()
				})
			})
		} catch (error) {
			this.logger.error(`Error al cargar los certificados HTTPS: ${error}. Iniciando servidor HTTP.`)
			await this.startHTTP()
		}
	}

	private async startHTTP(): Promise<void> {
		await new Promise<void>(resolve => {
			const env = this.express.get('env') as string
			this.httpServer = this.express.listen(this.port, () => {
				this.logger.info(
					`  Inventario Backend app is running at http://localhost:${this.port} in ${env} mode (HTTP)`
				)
				this.logger.info('  Press CTRL-C to stop\n')
				resolve()
			})
		})
	}

	async listen(): Promise<void> {
		// Intenta iniciar con HTTPS primero
		await this.startHTTPS()
		// await new Promise<void>(resolve => {
		// 	const env = this.express.get('env') as string
		// 	this.httpServer = this.express.listen(this.port, () => {
		// 		this.logger.info(`  Inventario Backend app is running at http://localhost:${this.port} in ${env} mode`)
		// 		this.logger.info('  Press CTRL-C to stop\n')
		// 		resolve()
		// 	})
		// })
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
