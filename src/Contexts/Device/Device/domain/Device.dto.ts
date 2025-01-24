import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from './DeviceId'
import { type DeviceActivo } from './DeviceActivo'
import { type DeviceSerial } from './DeviceSerial'
import { type CategoryId } from '../../../Category/Category/domain/CategoryId'
import { type BrandId } from '../../../Brand/domain/BrandId'
import { type DeviceEmployee } from './DeviceEmployee'
import { type DeviceObservation } from './DeviceObservation'
import { type DeviceLocation } from './DeviceLocation'
import { type DeviceModelSeries } from './DeviceModelSeries'
import { type DeviceStatus } from './DeviceStatus'
import { type DeviceStocknumber } from './DeviceStock'
import { type StatusDto } from '../../Status/domain/Status.dto'
import { type CategoryDto } from '../../../Category/Category/domain/Category.dto'
import { type BrandDto } from '../../../Brand/domain/Brand.dto'
import { type ModelSeriesDto } from '../../../ModelSeries/ModelSeries/domain/ModelSeries.dto'
import { type EmployeeDto } from '../../../employee/Employee/domain/entity/Employee.dto'
import { type LocationDto } from '../../../Location/Location/domain/Location.dto'
import { DeviceComputerDto } from '../../../Features/Computer/domain/Computer.dto'
import { MFPDto } from '../../../Features/MFP/domain/MFP.dto'
import { DeviceHardDriveDto } from '../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { HistoryDto } from '../../../History/domain/History.dto'

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

export type DevicePrimitives = Device

export type DeviceParams = Omit<Device, 'id'>

export type DeviceDto = Device & {
	status: StatusDto
	category: CategoryDto
	brand: BrandDto
	model: ModelSeriesDto
	employee: EmployeeDto
	location: LocationDto
	computer: DeviceComputerDto | null
	hardDrive: DeviceHardDriveDto | null
	mfp: MFPDto | null
	history: HistoryDto
}
