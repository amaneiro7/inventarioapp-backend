import { EventEmitter } from 'events'
import { type DomainEvent } from '../../domain/event/DomainEvent'
// import { type DomainEventSubscriber } from '../../domain/event/DomainEventSubscriber'
import { type EventBus } from '../../domain/event/EventBus'
import { DomainEventSubscribers } from './DomainEventSubscribers'

export class InMemoryEventBus extends EventEmitter implements EventBus {
	// Cambiamos el constructor para que reciba un array de suscriptores directamente.
	// Esto simplifica la inyección de dependencias con Awilix, ya que no necesitamos la clase 'DomainEventSubscribers' aquí.
	constructor() {
		super({ captureRejections: true })

		this.on('error', err => {
			console.error('Error captured in Event Bus subscriber:', err)
		})
	}

	async publish(events: DomainEvent[]): Promise<void> {
		const promises = events.map(event => this.emit(event.eventName, event))
		await Promise.all(promises).catch(error => {
			console.error('Executing subscriptions:', error)
		})
	}

	// Ajustamos este método para que también trabaje con un array.
	async addSubscribers(subscribers: DomainEventSubscribers) {
		subscribers.items.forEach(subscriber => {
			subscriber.subscribedTo().forEach(event => {
				this.on(event.EVENT_NAME, subscriber.on.bind(subscriber))
			})
		})
	}
}
