import { RabbitMQConsumer } from './RabbitMQConsumer'
import type { DomainEvent } from '../../../domain/event/DomainEvent'
import type { DomainEventSubscriber } from '../../../domain/event/DomainEventSubscriber'
import type { DomainEventDeserializer } from '../DomainEventDeserializer'
import type { RabbitMqConnection } from './RabbitMqConnection'

export class RabbitMQConsumerFactory {
	constructor(
		private deserializer: DomainEventDeserializer,
		private connection: RabbitMqConnection,
		private maxRetries: number
	) {}

	build(subscriber: DomainEventSubscriber<DomainEvent>, exchange: string, queueName: string) {
		return new RabbitMQConsumer({
			subscriber,
			deserializer: this.deserializer,
			connection: this.connection,
			queueName,
			exchange,
			maxRetries: this.maxRetries
		})
	}
}
