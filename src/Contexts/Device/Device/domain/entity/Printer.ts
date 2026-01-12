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
import { DeviceCategoryMismatchError } from '../errors/DeviceCategoryMismatchError'
import { DeviceStocknumber } from '../valueObject/DeviceStock'
import { CategoryValues } from '../../../../Category/Category/domain/CategoryOptions'
import { DeviceIPAddress } from '../valueObject/DeviceIPAddress'
import { DeviceCreatedDomainEvent } from '../event/DeviceCreatedDomainEvent'
import { PrinterDoesNotExistError } from '../errors/PrinterDoesNotExistError'
import { type DeviceConsistencyValidator } from '../service/DeviceConsistencyValidator'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type DeviceDto } from '../dto/Device.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DevicePrinterParams, type DevicePrinterPrimitives } from '../dto/Printer.dto'
import { type DeviceChangeFields } from '../dto/DeviceFields'
import { CategoryDefault } from '../../../../Category/Category/domain/CategoryDefaultValues'

/**
 * @description Represents a Multifunctional Printer (MFP) device, extending the base Device class.
 */
export class DevicePrinter extends Device {
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
		if (!DevicePrinter.isPrinterCategory({ categoryId: categoryId.value })) {
			throw new DeviceCategoryMismatchError(
				`${CategoryDefault.MFP}, ${CategoryDefault.LASERPRINTER} o ${CategoryDefault.INKJETPRNTER}`
			)
		}
	}

	static create(params: DevicePrinterParams): DevicePrinter {
		const devicePrinter = new DevicePrinter(
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

		devicePrinter.record(
			new DeviceCreatedDomainEvent({
				aggregateId: devicePrinter.idValue,
				device: devicePrinter.toPrimitives()
			})
		)

		return devicePrinter
	}

	static isPrinterCategory({ categoryId }: { categoryId: Primitives<CategoryId> }): boolean {
		const acceptedCategories: string[] = [
			CategoryValues.MFP,
			CategoryValues.LASERPRINTER,
			CategoryValues.INKPRINTER
		]
		return acceptedCategories.includes(categoryId)
	}

	toPrimitives(): DevicePrinterPrimitives {
		return {
			...super.toPrimitives(),
			ipAddress: this.ipAddressValue
		}
	}

	static fromPrimitives(primitives: DeviceDto): DevicePrinter {
		const { printer } = primitives
		if (!printer) {
			throw new PrinterDoesNotExistError(primitives?.serial ?? primitives.id)
		}
		return new DevicePrinter(
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
			new DeviceIPAddress(printer.ipAddress)
		)
	}

	update(
		params: Partial<DevicePrinterParams>,
		context: {
			typeOfSite: Primitives<TypeOfSiteId> | null
			generic: Primitives<Generic>
		},
		validator: DeviceConsistencyValidator
	): DeviceChangeFields {
		const changes: DeviceChangeFields = []

		super.update(params, context, validator)

		if (params.ipAddress !== undefined && this.ipAddressValue !== params.ipAddress) {
			changes.push({
				field: 'ipAddress',
				oldValue: this.ipAddressValue,
				newValue: params.ipAddress
			})
			this.updateIPAddress(params.ipAddress)
		}

		return changes
	}

	updateIPAddress(newIPAddress: Primitives<DeviceIPAddress>): void {
		this.ipAddress = new DeviceIPAddress(newIPAddress)
	}

	get ipAddressValue(): Primitives<DeviceIPAddress> {
		return this.ipAddress.value
	}
}
