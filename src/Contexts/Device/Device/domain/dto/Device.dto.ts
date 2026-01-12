import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../valueObject/DeviceId'
import { type DeviceActivo } from '../valueObject/DeviceActivo'
import { type DeviceSerial } from '../valueObject/DeviceSerial'
import { type CategoryId } from '../../../../Category/Category/domain/valueObject/CategoryId'
import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type DeviceObservation } from '../valueObject/DeviceObservation'
import { type DeviceStocknumber } from '../valueObject/DeviceStock'
import { type StatusDto } from '../../../Status/domain/entity/Status.dto'
import { type CategoryDto } from '../../../../Category/Category/domain/entity/Category.dto'
import { type BrandDto } from '../../../../Brand/domain/entity/Brand.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/ModelSeries/domain/dto/ModelSeries.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import { type DeviceComputerDto } from './Computer.dto'
import { type HistoryDto } from '../../../../History/domain/entity/History.dto'
import { type StatusId } from '../../../Status/domain/valueObject/StatusId'
import { type ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/valueObject/ModelSeriesId'
import { type EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { type LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { type DeviceHardDriveDto } from './HardDrive.dto'
import { type DevicePrinterDto } from './Printer.dto'

/**
 * @interface Device
 * @description Defines the core properties of a Device entity.
 */
export interface Device {
	id: Primitives<DeviceId>
	serial: Primitives<DeviceSerial>
	activo: Primitives<DeviceActivo>
	statusId: Primitives<StatusId>
	categoryId: Primitives<CategoryId>
	brandId: Primitives<BrandId>
	modelId: Primitives<ModelSeriesId>
	employeeId: Primitives<EmployeeId> | null
	locationId: Primitives<LocationId> | null
	observation: Primitives<DeviceObservation>
	stockNumber: Primitives<DeviceStocknumber>
}

/**
 * @type DevicePrimitives
 * @description Represents the primitive, serializable state of a Device entity.
 */
export type DevicePrimitives = Device

/**
 * @type DeviceParams
 * @description Represents the set of parameters required to create a new Device.
 * The 'id' is omitted as it is generated automatically.
 */
export type DeviceParams = Omit<Device, 'id'>

export type DeviceFields = keyof Omit<DevicePrimitives, 'id'>

/**
 * @type DeviceDto
 * @description Represents a Data Transfer Object (DTO) for the Device entity,
 * including all its related data for comprehensive client-side display.
 */
export type DeviceDto = Device & {
	status: StatusDto
	category: CategoryDto
	brand: BrandDto
	model: ModelSeriesDto
	employee: EmployeeDto
	location: LocationDto
	computer: DeviceComputerDto | null
	hardDrive: DeviceHardDriveDto | null
	printer: DevicePrinterDto | null
	history: HistoryDto[]
	updatedAt: Date
	createdAt: Date
}
