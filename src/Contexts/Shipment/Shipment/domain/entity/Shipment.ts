import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { ShipmentId } from '../valueObject/ShipmentId'
import { DeliveryDate } from '../valueObject/DeliveryDate'
import { ShipmentCancelledDomainEvent } from '../event/ShipmentCancelledDomainEvent'
import { ShipmentCreatedDomainEvent } from '../event/ShipmentCreatedDomainEvent'
import { ShipmentDeliveredDomainEvent } from '../event/ShipmentDeliveredDomainEvent'
import { ShipmentStatusChangedDomainEvent } from '../event/ShipmentStatusChangedDomainEvent'
import { ShipmentCode } from '../valueObject/ShipmentCode'
import { TrackingNumber } from '../valueObject/Trackingnumber'
import { StatusEnum, ShipmentStatus } from '../valueObject/ShipmentStatus'
import { ShipmentReason } from '../valueObject/ShipmentReason'
import { Origin } from '../valueObject/Origin'
import { Destination } from '../valueObject/Destinaton'
import { ShipmentDate } from '../valueObject/ShipmentDate'
import { SentBy } from '../valueObject/SentBy'
import { Observation } from '../valueObject/Observation'
import { ReceivedBy } from '../valueObject/ReceivedBy'
import { ShipmentDevice } from '../../../ShipmentDevice/domain/entity/ShipmentDevice'
import { ShipmentModificationError } from '../errors/ShipmentModificationError'
import { InvalidShipmentStatusTransitionError } from '../errors/InvalidShipmentStatusTransitionError'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ShipmentDevicePrimitives } from '../../../ShipmentDevice/domain/entity/ShipmentDevice.dto'
import { type ShipmentCreatorParams, type ShipmentDto, type ShipmentPrimitives } from './Shipment.dto'

export class Shipment extends AggregateRoot {
	constructor(
		private readonly id: ShipmentId,
		private readonly shipmentCode: ShipmentCode,
		private readonly origin: Origin,
		private destination: Destination,
		private readonly shipmentDate: ShipmentDate,
		private deliveryDate: DeliveryDate,
		private readonly sentBy: SentBy,
		private receivedBy: ReceivedBy,
		private trackingNumber: TrackingNumber,
		private observation: Observation,
		private status: ShipmentStatus,
		private readonly reason: ShipmentReason,
		private shipmentDevices: ShipmentDevice[]
	) {
		super()
	}

	static create(params: ShipmentCreatorParams): Shipment {
		// --- Business Rules for Creation ---
		if (params.status !== StatusEnum.PENDING && params.status !== StatusEnum.IN_TRANSIT) {
			throw new InvalidArgumentError(
				`Un envío solo puede crearse con el estado PENDIENTE o EN TRÁNSITO, pero se recibió '${params.status}'.`
			)
		}
		if (params.origin === params.destination) {
			throw new InvalidArgumentError('El origen y el destino no pueden ser el mismo.')
		}
		if (params.deliveryDate !== null) {
			throw new InvalidArgumentError('Un envío nuevo no puede tener una fecha de entrega.')
		}

		if (params.devices.length < 1 && !params.observation) {
			throw new InvalidArgumentError(
				'Un envío debe contener al menos un dispositivo o tener una observación obligatoria si no se envía ninguno.'
			)
		}
		// --- End of Rules ---

		const id = ShipmentId.random()

		const shipment = new Shipment(
			id,
			new ShipmentCode(params.shipmentCode),
			new Origin(params.origin),
			new Destination(params.destination),
			new ShipmentDate(params.shipmentDate),
			new DeliveryDate(params.deliveryDate), // Will be null, checked above
			new SentBy(params.sentBy),
			new ReceivedBy(params.receivedBy),
			new TrackingNumber(params.trackingNumber),
			new Observation(params.observation),
			new ShipmentStatus(params.status),
			new ShipmentReason(params.reason),
			[] // Initialize shipmentDevices as empty
		)

		const shipmentDevices = (params.devices || []).map(deviceDto =>
			ShipmentDevice.create({
				shipmentId: id.value,
				deviceId: deviceDto.id,
				device: deviceDto
			})
		)

		shipment.shipmentDevices = shipmentDevices

		shipment.record(
			new ShipmentCreatedDomainEvent({
				aggregateId: shipment.idValue,
				shipmentCode: shipment.shipmentCodeValue,
				origin: shipment.originValue,
				destination: shipment.destinationValue,
				status: shipment.statusValue,
				sentBy: shipment.sentByValue
			})
		)

		return shipment
	}

	static fromPrimitives(primitives: ShipmentDto): Shipment {
		const shipmentDevices = (primitives.shipmentDevice || []).map(devicePrimitive =>
			ShipmentDevice.fromPrimitives(devicePrimitive)
		)
		return new Shipment(
			new ShipmentId(primitives.id),
			new ShipmentCode(primitives.shipmentCode),
			new Origin(primitives.origin),
			new Destination(primitives.destination),
			new ShipmentDate(primitives.shipmentDate),
			new DeliveryDate(primitives.deliveryDate),
			new SentBy(primitives.sentBy),
			new ReceivedBy(primitives.receivedBy),
			new TrackingNumber(primitives.trackingNumber),
			new Observation(primitives.observation),
			new ShipmentStatus(primitives.status),
			new ShipmentReason(primitives.reason),
			shipmentDevices
		)
	}

	toPrimitives(): ShipmentPrimitives {
		return {
			id: this.idValue,
			shipmentCode: this.shipmentCodeValue,
			origin: this.originValue,
			destination: this.destinationValue,
			shipmentDate: this.shipmentDateValue,
			deliveryDate: this.deliveryDateValue,
			sentBy: this.sentByValue,
			receivedBy: this.receivedByValue,
			trackingNumber: this.trackingNumberValue,
			observation: this.observationValue,
			status: this.statusValue,
			reason: this.reasonValue,
			shipmentDevices: this.shipmentDevicePrimitives
		}
	}

	// --- Getters ---
	get idValue(): ShipmentId['value'] {
		return this.id.value
	}

	get shipmentCodeValue(): ShipmentCode['value'] {
		return this.shipmentCode.value
	}

	get originValue(): Origin['value'] {
		return this.origin.value
	}

	get destinationValue(): Destination['value'] {
		return this.destination.value
	}

	get shipmentDateValue(): ShipmentDate['value'] {
		return this.shipmentDate.value
	}

	get deliveryDateValue(): DeliveryDate['value'] {
		return this.deliveryDate.value
	}

	get sentByValue(): SentBy['value'] {
		return this.sentBy.value
	}

	get receivedByValue(): ReceivedBy['value'] {
		return this.receivedBy.value
	}

	get trackingNumberValue(): TrackingNumber['value'] {
		return this.trackingNumber.value
	}

	get observationValue(): Observation['value'] {
		return this.observation.value
	}

	get statusValue(): ShipmentStatus['value'] {
		return this.status.value
	}

	get reasonValue(): ShipmentReason['value'] {
		return this.reason.value
	}

	get shipmentDevicePrimitives(): ShipmentDevicePrimitives[] {
		return this.shipmentDevices.map(device => device.toPrimitive())
	}

	// --- Private Guard Methods ---
	private ensureIsNotFinalized(): void {
		if (this.status.value === StatusEnum.DELIVERED || this.status.value === StatusEnum.CANCELLED) {
			throw new ShipmentModificationError(
				`El envío con ID '${this.id.value}' ya ha sido finalizado y no puede ser modificado.`
			)
		}
	}

	// --- Public Methods with Business Logic ---
	public changeDestination(newdestination: Destination['value']): void {
		this.ensureIsNotFinalized()
		if (this.status.value === StatusEnum.IN_TRANSIT) {
			throw new ShipmentModificationError('No se puede cambiar el destino de un envío que ya está en tránsito.')
		}
		this.destination = new Destination(newdestination)
	}

	public changeStatus(newStatus: StatusEnum): void {
		this.ensureIsNotFinalized()
		const oldStatus = this.statusValue
		switch (newStatus) {
			case StatusEnum.IN_TRANSIT:
				if (this.statusValue !== StatusEnum.PENDING) {
					throw new InvalidShipmentStatusTransitionError(
						'Solo un envio pendiente puede pasar a estar en tránsito'
					)
				}
				this.status = new ShipmentStatus(StatusEnum.IN_TRANSIT)
				this.record(
					new ShipmentStatusChangedDomainEvent({
						aggregateId: this.idValue,
						oldStatus,
						newStatus: this.statusValue
					})
				)
				break
			case StatusEnum.CANCELLED:
				this.cancel()
				break
			case StatusEnum.DELIVERED:
				throw new InvalidShipmentStatusTransitionError('Para entregar un envio, use el método "deliver"')
			default:
				throw new InvalidShipmentStatusTransitionError(`El estado ${newStatus} no es una transición válida`)
		}
	}

	public updateTrackingNumber(newTrackingNumber: TrackingNumber['value']): void {
		this.ensureIsNotFinalized()
		this.trackingNumber = new TrackingNumber(newTrackingNumber)
	}

	public updateObservation(newObservation: Observation['value']): void {
		this.ensureIsNotFinalized()
		this.observation = new Observation(newObservation)
	}

	public deliver({
		deliveryDate,
		receivedById
	}: {
		deliveryDate: Primitives<DeliveryDate>
		receivedById: Primitives<ReceivedBy>
	}): void {
		if (this.status.value !== StatusEnum.IN_TRANSIT && this.status.value !== StatusEnum.PENDING) {
			throw new InvalidShipmentStatusTransitionError(
				'Solo se puede entregar un envío que está "en tránsito" o "pendiente".'
			)
		}
		const deliverDate = deliveryDate ? new Date(deliveryDate) : new Date()
		if (deliverDate < this.shipmentDate.value) {
			throw new InvalidArgumentError('La fecha de entrega no puede ser anterior a la fecha de envío.')
		}
		if (!receivedById) {
			throw new InvalidArgumentError(
				'Para marcar un envío como entregado, el campo "recibido por" es obligatorio.'
			)
		}
		this.status = new ShipmentStatus(StatusEnum.DELIVERED)
		this.deliveryDate = new DeliveryDate(deliverDate)
		this.receivedBy = new ReceivedBy(receivedById)

		this.record(
			new ShipmentDeliveredDomainEvent({
				aggregateId: this.idValue,
				receivedBy: this.receivedByValue,
				deliveryDate: this.deliveryDateValue
			})
		)
	}

	public cancel(): void {
		if (this.status.value === StatusEnum.DELIVERED) {
			throw new InvalidShipmentStatusTransitionError('No se puede cancelar un envío que ya fue entregado.')
		}
		if (this.status.value === StatusEnum.CANCELLED) {
			return // Already cancelled, do nothing
		}
		this.status = new ShipmentStatus(StatusEnum.CANCELLED)
		this.record(new ShipmentCancelledDomainEvent({ aggregateId: this.idValue, reason: this.reasonValue }))
	}
}
