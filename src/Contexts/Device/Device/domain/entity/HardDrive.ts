import { Device } from './Device'
import { DeviceId } from '../valueObject/DeviceId'
import { StatusId } from '../../../Status/domain/valueObject/StatusId'
import { CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesId'
import { DeviceActivo } from '../valueObject/DeviceActivo'
import { DeviceSerial } from '../valueObject/DeviceSerial'
import { EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { DeviceObservation } from '../valueObject/DeviceObservation'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { DeviceStocknumber } from '../valueObject/DeviceStock'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { HardDriveHealth } from '../valueObject/HardDriveHealth'
import { HardDriveCapacityId } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { HardDriveTypeId } from '../../../../Features/HardDrive/HardDriveType/domain/valueObject/HardDriveTypeId'
import { DeviceCreatedDomainEvent } from '../event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../event/DeviceUpdatedDomainEvent'
import { HardDriveDoesNotExistError } from '../errors/HardDriveDoesNotExist'
import { type DeviceConsistencyValidator } from '../service/DeviceConsistencyValidator'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type DeviceDto } from '../dto/Device.dto'
import { type DeviceHardDriveParams, type DeviceHardDrivePrimitives } from '../dto/HardDrive.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents a hard drive device, extending the base Device class.
 */
export class DeviceHardDrive extends Device {
	constructor(
		id: DeviceId,
		serial: DeviceSerial,
		activo: DeviceActivo,
		statusId: StatusId,
		categoryId: CategoryId,
		brandId: BrandId,
		modelId: ModelSeriesId,
		employeeId: EmployeeId | null,
		locationId: LocationId | null,
		observation: DeviceObservation,
		stockNumber: DeviceStocknumber,
		private health: HardDriveHealth,
		private hardDriveCapacityId: HardDriveCapacityId,
		private hardDriveTypeId: HardDriveTypeId
	) {
		super(
			id,
			serial,
			activo,
			statusId,
			categoryId,
			brandId,
			modelId,
			employeeId,
			locationId,
			observation,
			stockNumber
		)
		if (!DeviceHardDrive.isHardDriveCategory({ categoryId: categoryId.value })) {
			throw new InvalidArgumentError('Este dispositivo no es de tipo disco duro.')
		}
	}

	static create(params: DeviceHardDriveParams): DeviceHardDrive {
		const deviceHardDrive = new DeviceHardDrive(
			DeviceId.random(),
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new StatusId(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new ModelSeriesId(params.modelId),
			params.employeeId ? new EmployeeId(params.employeeId) : null,
			params.locationId ? new LocationId(params.locationId) : null,
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber),
			new HardDriveHealth(params.health),
			new HardDriveCapacityId(params.hardDriveCapacityId),
			new HardDriveTypeId(params.hardDriveTypeId)
		)

		deviceHardDrive.record(
			new DeviceCreatedDomainEvent({
				aggregateId: deviceHardDrive.idValue,
				device: deviceHardDrive.toPrimitives()
			})
		)

		return deviceHardDrive
	}

	static isHardDriveCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.HARDDRIVE
	}

	static fromPrimitives(primitives: DeviceDto): DeviceHardDrive {
		const { hardDrive } = primitives
		if (!hardDrive) {
			throw new HardDriveDoesNotExistError(primitives?.serial ?? primitives.id)
		}
		return new DeviceHardDrive(
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
			new DeviceStocknumber(primitives.stockNumber),
			new HardDriveHealth(hardDrive.health),
			new HardDriveCapacityId(hardDrive.hardDriveCapacityId),
			new HardDriveTypeId(hardDrive.hardDriveTypeId)
		)
	}

	toPrimitives(): DeviceHardDrivePrimitives {
		return {
			...super.toPrimitives(),
			health: this.healthValue,
			hardDriveCapacityId: this.hardDriveCapacityValue,
			hardDriveTypeId: this.hardDriveTypeValue
		}
	}

	update(
		params: Partial<DeviceHardDriveParams>,
		context: {
			typeOfSite: Primitives<TypeOfSiteId> | null
			generic: Primitives<Generic>
		},
		validator: DeviceConsistencyValidator
	): Array<{ field: string; oldValue: unknown; newValue: unknown }> {
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.health !== undefined && this.healthValue !== params.health) {
			changes.push({
				field: 'health',
				oldValue: this.healthValue,
				newValue: params.health
			})
			this.updateHealth(params.health)
		}
		if (params.hardDriveCapacityId !== undefined && this.hardDriveCapacityValue !== params.hardDriveCapacityId) {
			changes.push({
				field: 'hardDriveCapacityId',
				oldValue: this.hardDriveCapacityValue,
				newValue: params.hardDriveCapacityId
			})
			this.updateHardDriveCapacity(params.hardDriveCapacityId)
		}

		if (params.hardDriveTypeId !== undefined && this.hardDriveTypeValue !== params.hardDriveTypeId) {
			changes.push({
				field: 'hardDriveTypeId',
				oldValue: this.hardDriveTypeValue,
				newValue: params.hardDriveTypeId
			})
			this.updateHardDriveType(params.hardDriveTypeId)
		}

		// Actualizar campos base y validar consistencia general
		const baseChanges = super.update(params, context, validator)

		if (changes.length > 0) {
			this.record(
				new DeviceUpdatedDomainEvent({
					aggregateId: this.idValue,
					changes
				})
			)
		}

		return [...changes, ...baseChanges]
	}

	updateHealth(newHealth: Primitives<HardDriveHealth>): void {
		this.health = new HardDriveHealth(newHealth)
	}

	updateHardDriveCapacity(newHardDriveCapacityId: Primitives<HardDriveCapacityId>): void {
		this.hardDriveCapacityId = new HardDriveCapacityId(newHardDriveCapacityId)
	}

	updateHardDriveType(newHardDriveType: Primitives<HardDriveTypeId>): void {
		this.hardDriveTypeId = new HardDriveTypeId(newHardDriveType)
	}

	get healthValue(): Primitives<HardDriveHealth> {
		return this.health.value
	}

	get hardDriveCapacityValue(): Primitives<HardDriveCapacityId> {
		return this.hardDriveCapacityId.value
	}

	get hardDriveTypeValue(): Primitives<HardDriveTypeId> {
		return this.hardDriveTypeId.value
	}
}
