import { HardDriveHealth } from './HardDriveHealth'
import { DeviceId } from '../../../../Device/Device/domain/DeviceId'
import { Device } from '../../../../Device/Device/domain/Device'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/ModelSeriesId'
import { BrandId } from '../../../../Brand/domain/BrandId'
import { StatusId } from '../../../../Device/Status/domain/StatusId'
import { DeviceActivo } from '../../../../Device/Device/domain/DeviceActivo'
import { DeviceSerial } from '../../../../Device/Device/domain/DeviceSerial'
import { DeviceEmployee } from '../../../../Device/Device/domain/DeviceEmployee'
import { DeviceObservation } from '../../../../Device/Device/domain/DeviceObservation'
import { HDDCapacity } from './HDDCapacity'
import { HDDType } from './HDDType'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { DeviceStocknumber } from '../../../../Device/Device/domain/DeviceStock'
import { DeviceLocation } from '../../../../Device/Device/domain/DeviceLocation'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type DeviceHardDriveParams, type DeviceHardDrivePrimitives } from './HardDrive.dto'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'

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
		employeeId: DeviceEmployee,
		locationId: DeviceLocation,
		observation: DeviceObservation,
		stockNumber: DeviceStocknumber,
		private health: HardDriveHealth,
		private hardDriveCapacityId: HDDCapacity,
		private hardDriveTypeId: HDDType
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
			throw new InvalidArgumentError('This device does not belong to the Hard Drive category')
		}
	}

	static create(params: DeviceHardDriveParams): DeviceHardDrive {
		return new DeviceHardDrive(
			DeviceId.random(),
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new StatusId(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new ModelSeriesId(params.modelId),
			new DeviceEmployee(params.employeeId, params.statusId),
			new DeviceLocation(params.locationId),
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber, params.statusId),
			new HardDriveHealth(params.health),
			new HDDCapacity(params.hardDriveCapacityId),
			new HDDType(params.hardDriveTypeId)
		)
	}

	static isHardDriveCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.HARDDRIVE
	}

	static fromPrimitives(primitives: DeviceHardDrivePrimitives): DeviceHardDrive {
		return new DeviceHardDrive(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new StatusId(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new ModelSeriesId(primitives.modelId),
			new DeviceEmployee(primitives.employeeId, primitives.statusId),
			new DeviceLocation(primitives.locationId),
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber, primitives.statusId),
			new HardDriveHealth(primitives.health),
			new HDDCapacity(primitives.hardDriveCapacityId),
			new HDDType(primitives.hardDriveTypeId)
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

	updateHealth(newHealth: Primitives<HardDriveHealth>): void {
		this.health = new HardDriveHealth(newHealth)
	}

	updateHardDriveCapacity(newHardDriveCapacityId: Primitives<HDDCapacity>): void {
		this.hardDriveCapacityId = new HDDCapacity(newHardDriveCapacityId)
	}

	updateHardDriveType(newHardDriveType: Primitives<HDDType>): void {
		this.hardDriveTypeId = new HDDType(newHardDriveType)
	}

	get healthValue(): Primitives<HardDriveHealth> {
		return this.health.value
	}

	get hardDriveCapacityValue(): Primitives<HDDCapacity> {
		return this.hardDriveCapacityId.value
	}

	get hardDriveTypeValue(): Primitives<HDDType> {
		return this.hardDriveTypeId.value
	}
}
