import { DeviceCreatedDomainEvent } from '../../Device/Device/domain/event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../../Device/Device/domain/event/DeviceUpdatedDomainEvent'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'
import { type HistoryCreator } from './HistoryCreator'

export class CreateHistoryOnDeviceChanged implements DomainEventSubscriber<
	DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent
> {
	private readonly historyCreator: HistoryCreator

	constructor({ historyCreator }: { historyCreator: HistoryCreator }) {
		this.historyCreator = historyCreator
	}

	async on(event: DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent): Promise<void> {
		// Asumimos que el userId se inyectó en el evento antes de publicarlo
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const userId = (event as any).userId as string
		const aggregateId = event.aggregateId

		if (event instanceof DeviceCreatedDomainEvent) {
			const { device } = event
			await this.historyCreator.run({
				deviceId: aggregateId,
				userId,
				employeeId: device.employeeId,
				action: 'CREATE',
				newData: device as unknown as Record<string, unknown>,
				oldData: {},
				createdAt: new Date()
			})
		} else if (event instanceof DeviceUpdatedDomainEvent) {
			const { newEntity, oldEntity } = event
			await this.historyCreator.run({
				deviceId: aggregateId,
				userId,
				employeeId: newEntity.employeeId,
				action: 'UPDATE',
				newData: newEntity as unknown as Record<string, unknown>,
				oldData: oldEntity as unknown as Record<string, unknown>,
				createdAt: new Date()
			})
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [DeviceCreatedDomainEvent, DeviceUpdatedDomainEvent]
	}
}
