import { DomainEventDeserializer } from '../DomainEventDeserializer'
import { RabbitMQConsumerFactory } from './RabbitMQConsumerFactory'
import { DomainEventJsonSerializer } from '../DomainEventjsonSerializer'
import type { DomainEvent } from '../../../domain/event/DomainEvent'
import type { EventBus } from '../../../domain/event/EventBus'
import type { DomainEventFailoverPublisher } from '../DomainEventFailoverPublisher/DomainEventFailoverPublisher'
import type { DomainEventSubscribers } from '../DomainEventSubscribers'
import type { RabbitMqConnection } from './RabbitMqConnection'
import type { RabbitMQqueueFormatter } from './RabbitMQqueueFormatter'

export class RabbitMqEventBus implements EventBus {
	private failoverPublisher: DomainEventFailoverPublisher
	private rabbitMqConnection: RabbitMqConnection
	private exchange: string
	private queueNameFormatter: RabbitMQqueueFormatter
	private maxRetries: number

	constructor({
		failoverPublisher,
		rabbitMqConnection,
		exchange,
		queueNameFormatter,
		maxRetries
	}: {
		failoverPublisher: DomainEventFailoverPublisher
		rabbitMqConnection: RabbitMqConnection
		exchange: string
		queueNameFormatter: RabbitMQqueueFormatter
		maxRetries: number
	}) {
		this.rabbitMqConnection = rabbitMqConnection
		this.failoverPublisher = failoverPublisher
		this.exchange = exchange
		this.queueNameFormatter = queueNameFormatter
		this.maxRetries = maxRetries
	}

	async publish(events: Array<DomainEvent>): Promise<void> {
		for (const event of events) {
			try {
				const routingKey = event.eventName
				const content = this.toBuffer(event)
				const options = this.options(event)

				await this.rabbitMqConnection.publish({ exchange: this.exchange, routingKey, content, options })
			} catch {
				await this.failoverPublisher.publish(event)
			}
		}
	}

	async addSubscribers(subscribers: DomainEventSubscribers): Promise<void> {
		const deserializer = DomainEventDeserializer.configure(subscribers)
		const consumerFactory = new RabbitMQConsumerFactory(deserializer, this.rabbitMqConnection, this.maxRetries)

		for (const subscriber of subscribers.items) {
			const queueName = this.queueNameFormatter.format(subscriber)
			const rabbitMQConsumer = consumerFactory.build(subscriber, this.exchange, queueName)

			await this.rabbitMqConnection.consume(queueName, rabbitMQConsumer.onMessage.bind(rabbitMQConsumer))
		}
	}

	private options(event: DomainEvent) {
		return {
			messageId: event.eventId,
			contentType: 'application/json',
			contentEncoding: 'utf-8'
		}
	}

	private toBuffer(event: DomainEvent): Buffer {
		const eventPrimitives = DomainEventJsonSerializer.serialize(event)

		return Buffer.from(eventPrimitives)
	}
}
