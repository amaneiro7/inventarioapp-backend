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
import { DeviceConsistencyValidator } from '../service/DeviceConsistencyValidator'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DevicePrimitives, type DeviceParams, type DeviceDto } from '../dto/Device.dto'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'

/**
 * @class Device
 * @description Represents the core Device domain entity. This class encapsulates the business logic
 * and ensures data integrity through the use of Value Objects.
 */
export class Device extends AggregateRoot {
	constructor(
		private readonly id: DeviceId,
		private serial: DeviceSerial,
		private activo: DeviceActivo,
		private statusId: StatusId,
		private categoryId: CategoryId,
		private brandId: BrandId,
		private modelId: ModelSeriesId,
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
		const device = new Device(
			DeviceId.random(),
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
	 * @param {DeviceDto} primitives The primitive data of the device.
	 * @returns {Device} A `Device` instance.
	 */
	static fromPrimitives(primitives: DeviceDto): Device {
		return new Device(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new StatusId(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new ModelSeriesId(primitives.modelId),
			primitives.employeeId ? new EmployeeId(primitives.employeeId) : null,
			primitives.locationId ? new LocationId(primitives.locationId) : null,
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber)
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

	update(
		params: Partial<DeviceParams>,
		context: {
			typeOfSite: Primitives<TypeOfSiteId> | null
			generic: Primitives<Generic>
		},
		validator: DeviceConsistencyValidator
	): Array<{ field: string; oldValue: unknown; newValue: unknown }> {
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.activo !== undefined && this.activoValue !== params.activo) {
			changes.push({
				field: 'activo',
				oldValue: this.activoValue,
				newValue: params.activo
			})
			this.updateActivo(params.activo)
		}

		if (params.statusId !== undefined && this.statusValue !== params.statusId) {
			changes.push({
				field: 'statusId',
				oldValue: this.statusValue,
				newValue: params.statusId
			})
			this.updateStatus(params.statusId)
		}

		if (params.employeeId !== undefined && this.employeeValue !== params.employeeId) {
			changes.push({
				field: 'employeeId',
				oldValue: this.employeeValue,
				newValue: params.employeeId
			})
			this.updateEmployee(params.employeeId)
		}

		if (params.locationId !== undefined && this.locationValue !== params.locationId) {
			changes.push({
				field: 'locationId',
				oldValue: this.locationValue,
				newValue: params.locationId
			})
			this.updateLocation(params.locationId)
		}

		if (params.observation !== undefined && this.observationValue !== params.observation) {
			changes.push({
				field: 'observation',
				oldValue: this.observationValue,
				newValue: params.observation
			})
			this.updateObservation(params.observation)
		}

		if (params.stockNumber !== undefined && this.stockNumberValue !== params.stockNumber) {
			changes.push({
				field: 'stockNumber',
				oldValue: this.stockNumberValue,
				newValue: params.stockNumber
			})
			this.updateStockNumber(params.stockNumber)
		}

		if (params.serial !== undefined && this.serialValue !== params.serial) {
			changes.push({
				field: 'serial',
				oldValue: this.serialValue,
				newValue: params.serial
			})
			this.updateSerial(params.serial)
		}

		if (params.modelId !== undefined && this.modelSeriesValue !== params.modelId) {
			changes.push({ field: 'modelId', oldValue: this.modelSeriesValue, newValue: params.modelId })
			this.updateModelId(params.modelId)
		}
		if (params.brandId !== undefined && this.brandValue !== params.brandId) {
			changes.push({ field: 'brandId', oldValue: this.brandValue, newValue: params.brandId })
			this.updateBrandId(params.brandId)
		}
		if (params.categoryId !== undefined && this.categoryValue !== params.categoryId) {
			changes.push({ field: 'categoryId', oldValue: this.categoryValue, newValue: params.categoryId })
			this.updateCategoryId(params.categoryId)
		}

		// Validar consistencia con el estado final de la entidad
		validator.validate({
			device: this,
			typeOfSite: context.typeOfSite,
			generic: context.generic
		})

		if (changes.length > 0) {
			this.registerUpdateEvent(changes)
		}

		return changes
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new DeviceUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateSerial(newSerial: Primitives<DeviceSerial>): void {
		this.serial = new DeviceSerial(newSerial)
	}

	updateModelId(newModelId: Primitives<ModelSeriesId>): void {
		this.modelId = new ModelSeriesId(newModelId)
	}

	updateBrandId(newBrandId: Primitives<BrandId>): void {
		this.brandId = new BrandId(newBrandId)
	}

	updateCategoryId(newCategoryId: Primitives<CategoryId>): void {
		this.categoryId = new CategoryId(newCategoryId)
	}

	updateActivo(newActivo: Primitives<DeviceActivo>): void {
		this.activo = new DeviceActivo(newActivo)
	}

	updateStatus(newStatusId: Primitives<StatusId>): void {
		this.statusId = new StatusId(newStatusId)
	}

	updateEmployee(newEmployee: Primitives<EmployeeId> | null): void {
		this.employeeId = newEmployee ? new EmployeeId(newEmployee) : null
	}

	updateLocation(newLocation: Primitives<LocationId> | null): void {
		this.locationId = newLocation ? new LocationId(newLocation) : null
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

	get employeeValue(): Primitives<EmployeeId> | null {
		return this.employeeId?.value ?? null
	}

	get locationValue(): Primitives<LocationId> | null {
		return this.locationId?.value ?? null
	}

	get observationValue(): Primitives<DeviceObservation> {
		return this.observation.value
	}

	get stockNumberValue(): Primitives<DeviceStocknumber> {
		return this.stockNumber.value
	}
}
