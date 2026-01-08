import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { DeviceId } from '../valueObject/DeviceId'
import { DeviceSerial } from '../valueObject/DeviceSerial'
import { DeviceActivo } from '../valueObject/DeviceActivo'
import { StatusId } from '../../../Status/domain/valueObject/StatusId'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesId'
import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { DeviceObservation } from '../valueObject/DeviceObservation'
import { DeviceStocknumber } from '../valueObject/DeviceStock'
import { DeviceCreatedDomainEvent } from '../event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../event/DeviceUpdatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DevicePrimitives, type DeviceParams } from '../dto/Device.dto'

/**
 * @class Device
 * @description Represents the core Device domain entity. This class encapsulates the business logic
 * and ensures data integrity through the use of Value Objects.
 */
export class Device extends AggregateRoot {
	constructor(
		private readonly id: DeviceId,
		private readonly serial: DeviceSerial, // quizas modificar que no se pueda modificar, o que se pueda modificar si tienes permiso
		private activo: DeviceActivo,
		private statusId: StatusId,
		private readonly categoryId: CategoryId, // quizas modificar que no se pueda modificar, o que se pueda modificar si tienes permiso
		private readonly brandId: BrandId, // quizas modificar que no se pueda modificar, o que se pueda modificar si tienes permiso
		private readonly modelId: ModelSeriesId, // quizas modificar que no se pueda modificar, o que se pueda modificar si tienes permiso
		private employeeId: EmployeeId | null,
		private locationId: LocationId | null,
		private observation: DeviceObservation,
		private stockNumber: DeviceStocknumber
	) {
		super()
	}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Device` instance with a random ID.
	 * @param {DeviceParams} params The parameters for creating the device.
	 * @returns {Device} A new `Device` instance.
	 */
	static create(params: DeviceParams): Device {
		const id = DeviceId.random()
		const device = new Device(
			id,
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new StatusId(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new ModelSeriesId(params.modelId),
			params?.employeeId ? new EmployeeId(params.employeeId) : null,
			params?.locationId ? new LocationId(params.locationId) : null,
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber)
		)

		device.record(
			new DeviceCreatedDomainEvent({
				aggregateId: device.idValue,
				device: device.toPrimitives()
			})
		)

		return device
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Device` instance from its primitive representation.
	 * @param {DevicePrimitives} primitives The primitive data of the device.
	 * @returns {Device} A `Device` instance.
	 */
	static fromPrimitives(primitives: DevicePrimitives): Device {
		return new Device(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new StatusId(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new ModelSeriesId(primitives.modelId),
			new EmployeeId(primitives.employeeId, primitives.statusId),
			new LocationId(primitives.locationId),
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber, primitives.statusId)
		)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Device` instance into its primitive, serializable representation.
	 * @returns {DevicePrimitives} The primitive representation of the device.
	 */
	toPrimitives(): DevicePrimitives {
		return {
			id: this.idValue,
			serial: this.serialValue,
			activo: this.activoValue,
			statusId: this.statusValue,
			categoryId: this.categoryValue,
			brandId: this.brandValue,
			modelId: this.modelSeriesValue,
			employeeId: this.employeeValue,
			locationId: this.locationValue,
			observation: this.observationValue,
			stockNumber: this.stockNumberValue
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new DeviceUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateActivo(newActivo: Primitives<DeviceActivo>): void {
		this.activo = new DeviceActivo(newActivo)
	}

	updateStatus(newStatusId: Primitives<StatusId>): void {
		this.statusId = new StatusId(newStatusId)
	}

	updateEmployee(newEmployee: Primitives<EmployeeId>): void {
		this.employeeId = new EmployeeId(newEmployee)
	}

	updateLocation(newLocation: Primitives<LocationId>): void {
		this.locationId = new LocationId(newLocation)
	}

	updateObservation(observation: Primitives<DeviceObservation>): void {
		this.observation = new DeviceObservation(observation)
	}

	updateStockNumber(stockNumber: Primitives<DeviceStocknumber>): void {
		this.stockNumber = new DeviceStocknumber(stockNumber)
	}

	// --- Getters for primitive values ---
	get idValue(): Primitives<DeviceId> {
		return this.id.value
	}

	get serialValue(): Primitives<DeviceSerial> {
		return this.serial.value
	}

	get activoValue(): Primitives<DeviceActivo> {
		return this.activo.value
	}

	get statusValue(): Primitives<StatusId> {
		return this.statusId.value
	}

	get categoryValue(): Primitives<CategoryId> {
		return this.categoryId.value
	}

	get brandValue(): Primitives<BrandId> {
		return this.brandId.value
	}

	get modelSeriesValue(): Primitives<ModelSeriesId> {
		return this.modelId.value
	}

	get employeeValue(): Primitives<EmployeeId> {
		return this.employeeId.value
	}

	get locationValue(): Primitives<LocationId> {
		return this.locationId.value
	}

	get observationValue(): Primitives<DeviceObservation> {
		return this.observation.value
	}

	get stockNumberValue(): Primitives<DeviceStocknumber> {
		return this.stockNumber.value
	}
}
