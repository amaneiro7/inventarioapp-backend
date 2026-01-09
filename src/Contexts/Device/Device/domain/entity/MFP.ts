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
import { DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { DeviceCreatedDomainEvent } from '../event/DeviceCreatedDomainEvent'
import { DeviceUpdatedDomainEvent } from '../event/DeviceUpdatedDomainEvent'
import { MFPDoesNotExistError } from '../errors/MFPDoesNotExistError'
import { type DeviceConsistencyValidator } from '../service/DeviceConsistencyValidator'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type DeviceDto } from '../dto/Device.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMFPParams, type DeviceMFPPrimitives } from '../dto/MFP.dto'

/**
 * @description Represents a Multifunctional Printer (MFP) device, extending the base Device class.
 */
export class MFP extends Device {
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
		private ipAddress: DeviceIPAddress
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
		const deviceMFP = new MFP(
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
			new DeviceIPAddress(params.ipAddress)
		)

		deviceMFP.record(
			new DeviceCreatedDomainEvent({
				aggregateId: deviceMFP.idValue,
				device: deviceMFP.toPrimitives()
			})
		)

		return deviceMFP
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

	static fromPrimitives(primitives: DeviceDto): MFP {
		const { mfp } = primitives
		if (!mfp) {
			throw new MFPDoesNotExistError(primitives?.serial ?? primitives.id)
		}
		return new MFP(
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
			new DeviceIPAddress(mfp.ipAddress)
		)
	}

	update(
		params: Partial<DeviceMFPParams>,
		context: {
			typeOfSite: Primitives<TypeOfSiteId> | null
			generic: Primitives<Generic>
		},
		validator: DeviceConsistencyValidator
	): Array<{ field: string; oldValue: unknown; newValue: unknown }> {
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.ipAddress !== undefined && this.ipAddressValue !== params.ipAddress) {
			changes.push({
				field: 'ipAddress',
				oldValue: this.ipAddressValue,
				newValue: params.ipAddress
			})
			this.updateIPAddress(params.ipAddress)
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

	updateIPAddress(newIPAddress: Primitives<DeviceIPAddress>): void {
		this.ipAddress = new DeviceIPAddress(newIPAddress)
	}

	get ipAddressValue(): Primitives<DeviceIPAddress> {
		return this.ipAddress.value
	}
}
