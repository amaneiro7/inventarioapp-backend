import { Shipment } from '../domain/entity/Shipment'
import { ShipmentId } from '../domain/valueObject/ShipmentId'
import { StatusEnum } from '../domain/valueObject/ShipmentStatus'
import { ShipmentDoesNotExistError } from '../domain/errors/ShipmentDoesNotExistError'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'

import { type ShipmentRepository } from '../domain/repository/ShipmentRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ShipmentParams } from '../domain/entity/Shipment.dto'
import { type SiteRepository } from '../../../Location/Site/domain/SiteRepository'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'
import { SiteDoesNotExistError } from '../../../Location/Site/domain/SiteDoesNotExistError'

export class ShipmentUpdater {
	private readonly shipmentRepository: ShipmentRepository
	private readonly siteRepository: SiteRepository
	private readonly employeeRepository: EmployeeRepository

	constructor({
		shipmentRepository,
		siteRepository,
		employeeRepository
	}: {
		shipmentRepository: ShipmentRepository
		siteRepository: SiteRepository
		employeeRepository: EmployeeRepository
	}) {
		this.shipmentRepository = shipmentRepository
		this.siteRepository = siteRepository
		this.employeeRepository = employeeRepository
	}

	async run({ id, params }: { id: Primitives<ShipmentId>; params: Partial<ShipmentParams> }): Promise<void> {
		const shipmentId = new ShipmentId(id)
		const shipment = await this.shipmentRepository.searchById(shipmentId.value)

		if (!shipment) {
			throw new ShipmentDoesNotExistError(id)
		}

		const shipmentEntity = Shipment.fromPrimitives(shipment)
		let hasChanges = false

		if (params.status !== undefined && shipmentEntity.statusValue !== params.status) {
			if (params.status === StatusEnum.DELIVERED) {
				if (!params.deliveryDate || !params.receivedBy) {
					throw new InvalidArgumentError(
						'La fecha de entrega y quien recibe son obligatorios para entregar un envio'
					)
				}
				const employee = await this.employeeRepository.searchById(params?.receivedBy)
				if (employee === null) {
					throw new EmployeeDoesNotExistError(params.receivedBy)
				}
				shipmentEntity.deliver({ deliveryDate: params?.deliveryDate, receivedById: params.receivedBy })
			} else {
				shipmentEntity.changeStatus(params.status as StatusEnum)
			}
			hasChanges = true
		}
		if (params.destination !== undefined && shipmentEntity.destinationValue !== params.destination) {
			const destinationLocation = await this.siteRepository.searchById(params.destination)
			if (destinationLocation === null) {
				throw new SiteDoesNotExistError(params.destination)
			}
			shipmentEntity.changeDestination(params.destination)
			hasChanges = true
		}

		if (params.trackingNumber !== undefined && shipmentEntity.trackingNumberValue !== params.trackingNumber) {
			shipmentEntity.updateTrackingNumber(params.trackingNumber)
			hasChanges = true
		}

		if (params.observation !== undefined && shipmentEntity.observationValue !== params.observation) {
			shipmentEntity.updateObservation(params.observation)
			hasChanges = true
		}

		if (hasChanges) {
			await this.shipmentRepository.save(shipmentEntity)
		}
	}
}
