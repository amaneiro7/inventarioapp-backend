import amqplib from 'amqplib'
import { RabbitMQExchangeNameFormatter } from './RabbitMQExchangeNameFormatter'
import { config } from '../../config'
import type { ConsumeMessage, ConfirmChannel, ChannelModel } from 'amqplib'
import type { ConnectionSettings } from './ConnectionSettings'
import type { Logger } from '../../../domain/Logger'

const {
	rabbitmq: { host, password, port, user, secure, vhost }
} = config

export class RabbitMqConnection {
	private connectionSettings: ConnectionSettings = {
		username: user,
		password,
		vhost,
		connection: {
			secure,
			hostname: host,
			port
		}
	}
	private channel?: ConfirmChannel
	private connection?: ChannelModel
	private isClosingManually = false
	private retryDelay = 5000
	private logger: Logger
	constructor({ logger }: { logger: Logger }) {
		this.logger = logger
	}

	async connect() {
		try {
			this.isClosingManually = false
			this.connection = await this.amqpConnect()
			this.channel = await this.amqpChannel()
			this.logger.info('Connected to RabbitMQ')
		} catch (error) {
			this.logger.error(`Error occurred while connecting to RabbitMQ' ${error}`)
			setTimeout(() => this.connect(), this.retryDelay)
		}
	}

	private async amqpConnect(): Promise<ChannelModel> {
		const { hostname, port, secure } = this.connectionSettings.connection
		const { username, password, vhost } = this.connectionSettings
		const protocol = secure ? 'amqps' : 'amqp'

		const connection = await amqplib.connect({
			protocol,
			hostname,
			port,
			username,
			password,
			vhost
		})

		connection.on('error', err => {
			this.logger.error(`RabbitMQ connection error: ${err}`)
			if (!this.isClosingManually) {
				setTimeout(() => this.connect(), this.retryDelay)
			}
		})

		connection.on('close', () => {
			if (!this.isClosingManually) {
				this.logger.info('⚠️ RabbitMQ: Conexión perdida. Intentando reconectar...')
				setTimeout(() => this.connect(), this.retryDelay)
			}
			this.logger.info('RabbitMQ connection closed')
		})

		return connection
	}

	private async amqpChannel(): Promise<amqplib.ConfirmChannel> {
		if (!this.connection) throw new Error('No hay conexión establecida')
		const channel = await this.connection!.createConfirmChannel()
		await channel.prefetch(1)

		channel.on('error', err => {
			this.logger.error(`RabbitMQ channel error: ${err}`)
		})

		return channel
	}

	async exchange(params: { name: string }) {
		this.ensureConnection()
		return await this.channel?.assertExchange(params.name, 'topic', { durable: true })
	}

	async queue(params: {
		exchange: string
		name: string
		routingKeys: string[]
		deadLetterExchange?: string
		deadLetterQueue?: string
		messageTtl?: number
	}) {
		this.ensureConnection()

		const args = this.getQueueArguments(params)

		await this.channel?.assertQueue(params.name, {
			exclusive: false,
			durable: true,
			autoDelete: false,
			arguments: args
		})
		for (const routingKey of params.routingKeys) {
			await this.channel!.bindQueue(params.name, params.exchange, routingKey)
		}
	}

	private getQueueArguments(params: {
		exchange: string
		name: string
		routingKeys: string[]
		deadLetterExchange?: string
		deadLetterQueue?: string
		messageTtl?: number
	}): Record<string, string | number> {
		const args: Record<string, string | number> = {}
		if (params.deadLetterExchange) args['x-dead-letter-exchange'] = params.deadLetterExchange
		if (params.deadLetterQueue) args['x-dead-letter-routing-key'] = params.deadLetterQueue
		if (params.messageTtl) args['x-message-ttl'] = params.messageTtl
		return args
	}

	async deleteQueue(queue: string) {
		return await this.channel!.deleteQueue(queue)
	}
	async publish(params: {
		exchange: string
		routingKey: string
		content: Buffer
		options: {
			messageId: string
			contentType: string
			contentEncoding: string
			priority?: number
			headers?: unknown
		}
	}) {
		this.ensureConnection()

		return new Promise<void>((resolve, reject) => {
			this.channel!.publish(params.exchange, params.routingKey, params.content, params.options, error =>
				error ? reject(error) : resolve()
			)
		})
	}

	async consume(queue: string, onMessage: (message: ConsumeMessage) => void) {
		this.ensureConnection()
		await this.channel!.consume(queue, (message: ConsumeMessage | null) => {
			if (!message) {
				return
			}
			onMessage(message)
		})
	}

	ack(message: ConsumeMessage) {
		this.channel!.ack(message)
	}

	async retry(message: ConsumeMessage, queue: string, exchange: string) {
		const retryExchange = RabbitMQExchangeNameFormatter.retry(exchange)
		const options = this.getMessageOptions(message)

		return await this.publish({ exchange: retryExchange, routingKey: queue, content: message.content, options })
	}

	async deadLetter(message: ConsumeMessage, queue: string, exchange: string) {
		const deadLetterExchange = RabbitMQExchangeNameFormatter.deadLetter(exchange)
		const options = this.getMessageOptions(message)

		return await this.publish({
			exchange: deadLetterExchange,
			routingKey: queue,
			content: message.content,
			options
		})
	}

	private getMessageOptions(message: ConsumeMessage) {
		const { messageId, contentType, contentEncoding, priority } = message.properties
		const options = {
			messageId,
			headers: this.incrementRedeliveryCount(message),
			contentType,
			contentEncoding,
			priority
		}
		return options
	}

	private incrementRedeliveryCount(message: ConsumeMessage) {
		const headers = { ...message.properties.headers }
		const count = parseInt(headers['redelivery_count'] as string) || 0
		headers['redelivery_count'] = count + 1
		return headers
	}

	async close() {
		this.isClosingManually = true
		await this.channel?.close()
		return await this.connection?.close()
	}

	private ensureConnection() {
		if (!this.connection || !this.channel) {
			throw new Error('❌ Operación fallida: RabbitMQ no está conectado.')
		}
	}
}
