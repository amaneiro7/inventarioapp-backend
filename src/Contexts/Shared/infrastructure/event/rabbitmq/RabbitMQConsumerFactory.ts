import { RabbitMQConsumer } from './RabbitMQConsumer'
import type { DomainEvent } from '../../../domain/event/DomainEvent'
import type { DomainEventSubscriber } from '../../../domain/event/DomainEventSubscriber'
import type { DomainEventDeserializer } from '../DomainEventDeserializer'
import type { RabbitMqConnection } from './RabbitMqConnection'
import { Logger } from '../../../domain/Logger'

export class RabbitMQConsumerFactory {
	constructor(
		private deserializer: DomainEventDeserializer,
		private connection: RabbitMqConnection,
		private maxRetries: number
	) {}

	build(subscriber: DomainEventSubscriber<DomainEvent>, exchange: string, queueName: string, logger: Logger) {
		return new RabbitMQConsumer({
			subscriber,
			deserializer: this.deserializer,
			connection: this.connection,
			queueName,
			exchange,
			maxRetries: this.maxRetries,
			logger
		})
	}
}
