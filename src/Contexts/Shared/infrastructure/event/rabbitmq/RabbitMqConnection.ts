// import amqplib from 'amqplib'
// import { type Logger } from '../../../domain/Logger'
// import { config } from '../../config'

// export type Settings = {
// 	username: string
// 	password: string
// 	vhost: string
// 	connection: {
// 		hostname: string
// 		port: number
// 	}
// }

// export class RabbitMqConnection {
// 	private amqpConnection?: amqplib.Connection
// 	private amqpChannel?: amqplib.ConfirmChannel
// 	private readonly settings: Settings
// 	private readonly logger: Logger

// 	constructor({ logger }: { logger: Logger }) {
// 		this.settings = config.rabbitmq
// 		this.logger = logger
// 	}

// 	async connect(): Promise<void> {
// 		if (this.amqpConnection) return
// 		this.amqpConnection = await this.amqpConnect()
// 		this.amqpChannel = await this.amqpChannelConnect()
// 	}

// 	async close(): Promise<void> {
// 		await this.channel().close()

// 		if (this.amqpConnection) {
// 			await this.amqpConnection.close()
// 		}
// 	}

// 	channel(): amqplib.ConfirmChannel {
// 		if (!this.amqpChannel) {
// 			throw new Error('RabbitMQ channel not connected')
// 		}

// 		return this.amqpChannel
// 	}

// 	async publish(
// 		exchange: string,
// 		routingKey: string,
// 		content: Buffer,
// 		options: {
// 			messageId: string
// 			contentType: string
// 			contentEncoding: string
// 			priority?: number
// 			headers?: unknown
// 		}
// 	): Promise<void> {
// 		if (!this.amqpChannel) {
// 			await this.connect()
// 		}

// 		const channel = this.channel()
// 		// El método publish en un ConfirmChannel devuelve un booleano.
// 		// Para esperar la confirmación del broker, debemos usar `waitForConfirms`.
// 		channel.publish(exchange, routingKey, content, options)
// 		await channel.waitForConfirms()
// 	}

// 	// --- Métodos privados ---
// 	private connection(): amqplib.Connection {
// 		if (!this.amqpConnection) {
// 			throw new Error('RabbitMQ not connected')
// 		}

// 		return this.amqpConnection
// 	}

// 	private async amqpConnect(): Promise<amqplib.Connection> {
// 		const connection = await amqplib.connect({
// 			protocol: 'amqp',
// 			hostname: this.settings.connection.hostname,
// 			port: this.settings.connection.port,
// 			username: this.settings.username,
// 			password: this.settings.password,
// 			vhost: this.settings.vhost
// 		})

// 		connection.on('error', (error: unknown) => {
// 			this.logger.error('[RabbitMqConnection] Connection error')
// 			this.logger.error(error as Error)
// 		})

// 		return connection
// 	}

// 	private async amqpChannelConnect(): Promise<amqplib.ConfirmChannel> {
// 		const channel = await this.connection().
// 		await channel.prefetch(1)

// 		return channel
// 	}
// }
