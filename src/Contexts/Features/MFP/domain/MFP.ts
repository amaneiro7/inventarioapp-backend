import { Device } from '../../../Device/Device/domain/Device'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { BrandId } from '../../../Brand/domain/BrandId'
import { CategoryId } from '../../../Category/Category/domain/CategoryId'
import { DeviceActivo } from '../../../Device/Device/domain/DeviceActivo'
import { DeviceEmployee } from '../../../Device/Device/domain/DeviceEmployee'
import { DeviceId } from '../../../Device/Device/domain/DeviceId'
import { DeviceModelSeries } from '../../../Device/Device/domain/DeviceModelSeries'
import { DeviceObservation } from '../../../Device/Device/domain/DeviceObservation'
import { DeviceSerial } from '../../../Device/Device/domain/DeviceSerial'
import { DeviceStatus } from '../../../Device/Device/domain/DeviceStatus'
import { MFPIPAddress } from './MFPIPAddress'
import { DeviceLocation } from '../../../Device/Device/domain/DeviceLocation'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { DeviceStocknumber } from '../../../Device/Device/domain/DeviceStock'
import { type DeviceMFPParams, type DeviceMFPPrimitives } from './MFP.dto'
import { CategoryValues } from '../../../Category/Category/domain/CategoryOptions'

/**
 * @description Represents a Multifunctional Printer (MFP) device, extending the base Device class.
 */
export class MFP extends Device {
	constructor(
		id: DeviceId,
		serial: DeviceSerial,
		activo: DeviceActivo,
		statusId: DeviceStatus,
		categoryId: CategoryId,
		brandId: BrandId,
		modelId: DeviceModelSeries,
		employeeId: DeviceEmployee,
		locationId: DeviceLocation,
		observation: DeviceObservation,
		stockNumber: DeviceStocknumber,
		private ipAddress: MFPIPAddress
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
		if (!MFP.isMFPCategory({ categoryId: categoryId.value })) {
			throw new InvalidArgumentError('This device does not belong to the MFP category')
		}
	}

	static create(params: DeviceMFPParams): MFP {
		return new MFP(
			DeviceId.random(),
			new DeviceSerial(params.serial),
			new DeviceActivo(params.activo),
			new DeviceStatus(params.statusId),
			new CategoryId(params.categoryId),
			new BrandId(params.brandId),
			new DeviceModelSeries(params.modelId),
			new DeviceEmployee(params.employeeId, params.statusId),
			new DeviceLocation(params.locationId),
			new DeviceObservation(params.observation),
			new DeviceStocknumber(params.stockNumber, params.statusId),
			new MFPIPAddress(params.ipAddress, params.statusId)
		)
	}

	static isMFPCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		return categoryId === CategoryValues.MFP
	}

	toPrimitives(): DeviceMFPPrimitives {
		return {
			...super.toPrimitives(),
			ipAddress: this.ipAddressValue
		}
	}

	static fromPrimitives(primitives: DeviceMFPPrimitives): MFP {
		return new MFP(
			new DeviceId(primitives.id),
			new DeviceSerial(primitives.serial),
			new DeviceActivo(primitives.activo),
			new DeviceStatus(primitives.statusId),
			new CategoryId(primitives.categoryId),
			new BrandId(primitives.brandId),
			new DeviceModelSeries(primitives.modelId),
			new DeviceEmployee(primitives.employeeId, primitives.statusId),
			new DeviceLocation(primitives.locationId),
			new DeviceObservation(primitives.observation),
			new DeviceStocknumber(primitives.stockNumber, primitives.statusId),
			new MFPIPAddress(primitives.ipAddress, primitives.statusId)
		)
	}

	updateIPAddress(newIPAddress: Primitives<MFPIPAddress>, status: Primitives<DeviceStatus>): void {
		this.ipAddress = new MFPIPAddress(newIPAddress, status)
	}

	get ipAddressValue(): Primitives<MFPIPAddress> {
		return this.ipAddress.value
	}
}
