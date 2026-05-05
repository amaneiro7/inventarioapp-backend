import { DeviceMonitoringCreator } from '../../../Device/DeviceMonitoring/application/DeviceMonitoringCreator'
import { DeviceCreatedDomainEvent } from '../../Device/domain/event/DeviceCreatedDomainEvent'
import { DeviceComputer } from '../../Device/domain/entity/Computer'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class CreateDeviceMonitoringOnDeviceCreated implements DomainEventSubscriber<DeviceCreatedDomainEvent> {
	private readonly creator: DeviceMonitoringCreator
	constructor({ deviceMonitoringCreator }: { deviceMonitoringCreator: DeviceMonitoringCreator }) {
		this.creator = deviceMonitoringCreator
	}

	async on(event: DeviceCreatedDomainEvent): Promise<void> {
		const deviceId = event.aggregateId
		const { categoryId } = event.device

		if (!DeviceComputer.isComputerCategory({ categoryId })) return

		await this.creator.run({ deviceId })
	}

	subscribedTo(): DomainEventClass[] {
		return [DeviceCreatedDomainEvent]
	}
}
