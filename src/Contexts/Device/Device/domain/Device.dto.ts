import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from './DeviceId'
import { type DeviceActivo } from './DeviceActivo'
import { type DeviceSerial } from './DeviceSerial'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type BrandId } from '../../../Brand/domain/valueObject/BrandId'
import { type DeviceEmployee } from './DeviceEmployee'
import { type DeviceObservation } from './DeviceObservation'
import { type DeviceLocation } from './DeviceLocation'
import { type DeviceModelSeries } from './DeviceModelSeries'
import { type DeviceStatus } from './DeviceStatus'
import { type DeviceStocknumber } from './DeviceStock'
import { type StatusDto } from '../../Status/domain/Status.dto'
import { type CategoryDto } from '../../../Category/Category/domain/Category.dto'
import { type BrandDto } from '../../../Brand/domain/entity/Brand.dto'
import { type ModelSeriesDto } from '../../../ModelSeries/ModelSeries/domain/entity/ModelSeries.dto'
import { type EmployeeDto } from '../../../employee/Employee/domain/entity/Employee.dto'
import { type LocationDto } from '../../../Location/Location/domain/Location.dto'
import { type DeviceComputerDto } from '../../../Features/Computer/domain/Computer.dto'
import { type DeviceMFPDto } from '../../../Features/MFP/domain/MFP.dto'
import { type DeviceHardDriveDto } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type HistoryDto } from '../../../History/domain/History.dto'

/**
 * @interface Device
 * @description Defines the core properties of a Device entity.
 */
export interface Device {
	id: Primitives<DeviceId>
	serial: Primitives<DeviceSerial>
	activo: Primitives<DeviceActivo>
	statusId: Primitives<DeviceStatus>
	categoryId: Primitives<CategoryId>
	brandId: Primitives<BrandId>
	modelId: Primitives<DeviceModelSeries>
	employeeId: Primitives<DeviceEmployee>
	locationId: Primitives<DeviceLocation>
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
	mfp: DeviceMFPDto | null
	history: HistoryDto[]
	updatedAt: Date
	createdAt: Date
}
