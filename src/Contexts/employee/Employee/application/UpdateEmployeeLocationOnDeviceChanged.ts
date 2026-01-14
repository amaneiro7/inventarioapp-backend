import { DeviceCreatedDomainEvent } from '../../../Device/Device/domain/event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../../../Device/Device/domain/event/DeviceUpdatedDomainEvent'
import { Employee } from '../domain/entity/Employee'
import { DeviceComputer } from '../../../Device/Device/domain/entity/Computer'
import { StatusOptions } from '../../../Device/Status/domain/StatusOptions'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @class UpdateEmployeeLocationOnDeviceChanged
 * @implements {DomainEventSubscriber}
 * @description Subscriber that listens to device changes to automatically update the assigned employee's location.
 *
 * This subscriber handles the synchronization of an employee's physical location based on the device assigned to them.
 * It specifically targets "Computer" type devices (Laptops, Desktops, AIOs) that are in an "In Use" status.
 *
 * Edge Cases Handled:
 * 1. Initial Assignment (Created/Updated): A new device is created and assigned to "John" at "Site A". -> Action: John's location is updated to "Site A".
 * 2. Device Movement (Updated): John's laptop is administratively moved from "Floor 1" to "Floor 2". -> Action: John's location is updated to "Floor 2".
 * 3. Reassignment (Updated): A laptop is reassigned from "John" to "Peter". -> Action: Peter's location is updated to the laptop's location. Note: John remains at his last known location.
 * 4. Activation (Updated): A device in "Storage" is changed to "In Use" and assigned to "Mary". -> Action: Mary's location is updated to the device's location.
 */
export class UpdateEmployeeLocationOnDeviceChanged implements DomainEventSubscriber<
	DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent
> {
	private readonly employeeRepository: EmployeeRepository
	private readonly eventBus: EventBus

	constructor({ employeeRepository, eventBus }: { employeeRepository: EmployeeRepository; eventBus: EventBus }) {
		this.employeeRepository = employeeRepository
		this.eventBus = eventBus
	}

	/**
	 * @method on
	 * @description Handles the domain event and triggers the employee location update if conditions are met.
	 * @param {DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent} event - The domain event triggered by a device change.
	 */
	async on(event: DeviceCreatedDomainEvent | DeviceUpdatedDomainEvent): Promise<void> {
		let shouldUpdate = false
		let targetEmployeeId: string | null = null
		let targetLocationId: string | null = null

		if (event instanceof DeviceCreatedDomainEvent) {
			const { device } = event
			const { statusId, categoryId, employeeId, locationId } = device

			if (
				statusId === StatusOptions.INUSE &&
				DeviceComputer.isComputerCategory({ categoryId }) &&
				employeeId &&
				locationId
			) {
				shouldUpdate = true
				targetEmployeeId = employeeId
				targetLocationId = locationId
			}
		} else if (event instanceof DeviceUpdatedDomainEvent) {
			const { newEntity, changes } = event
			const { statusId, categoryId, employeeId, locationId } = newEntity
			// Verificamos condiciones base: Es computadora, está en uso, tiene empleado y ubicación
			const isValidContext: boolean =
				statusId === StatusOptions.INUSE &&
				DeviceComputer.isComputerCategory({ categoryId }) &&
				!!employeeId &&
				!!locationId

			// Verificamos si el cambio fue relevante (Cambió el empleado, la ubicación o el estatus)
			const isRelevantChange = changes.some(change =>
				['employeeId', 'locationId', 'statusId'].includes(change.field)
			)

			if (isValidContext && isRelevantChange) {
				shouldUpdate = true
				targetEmployeeId = employeeId
				targetLocationId = locationId
			}
		}

		if (shouldUpdate && targetEmployeeId && targetLocationId) {
			const employeePrimitves = await this.employeeRepository.findById(targetEmployeeId)
			if (employeePrimitves) {
				const employee = Employee.fromPrimitives(employeePrimitves)
				// Solo actualizamos si la ubicación es diferente para evitar escrituras redundantes
				if (employee.locationValue !== targetLocationId) {
					const oldValue = employee.locationValue
					employee.updateLocation(targetLocationId)
					employee.registerUpdateEvent([
						{
							field: 'locationId',
							oldValue,
							newValue: targetLocationId
						}
					])
					await this.employeeRepository.save(employee.toPrimitives())
					await this.eventBus.publish(employee.pullDomainEvents())
				}
			}
		}
	}

	/**
	 * @method subscribedTo
	 * @description Returns the list of domain events this subscriber listens to.
	 */
	subscribedTo(): DomainEventClass[] {
		return [DeviceCreatedDomainEvent, DeviceUpdatedDomainEvent]
	}
}
