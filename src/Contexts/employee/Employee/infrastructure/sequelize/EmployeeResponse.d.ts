import { type LocationPrimitives } from '../../../../Location/Location/domain/Location'
import { type ModelApiresponse } from '../../../../Device/Device/infrastructure/sequelize/DeviceResponse'
import { type BrandPrimitives } from '../../../../Brand/domain/Brand'
import { type EmployeePrimitives } from '../../domain/Employee.ts.old'
import { type DevicePrimitives } from '../../../../Device/Device/domain/Device'
import { type CategoryPrimitives } from '../../../../Category/Category/domain/Category'
import { type StatusPrimitives } from '../../../../Device/Status/domain/Status'
import { type DeviceComputerPrimitives } from '../../../../Features/Computer/domain/Computer'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type DeviceHardDrivePrimitives } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive'
import { type HardDriveCapacityPrimitives } from '../../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacity'
import { type HardDriveTypePrimitives } from '../../../../Features/HardDrive/HardDriveType/domain/HardDriveType'
import { type OperatingSystemPrimitives } from '../../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystem'
import { type OperatingSystemArqPrimitives } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq'
import { type ProcessorPrimitives } from '../../../../Features/Processor/Processor/domain/Processor'

export interface DevicesApiResponse extends DevicePrimitives {
	createdAt: string
	updatedAt: string
	category: CategoryPrimitives
	brand: BrandPrimitives
	model: ModelApiresponse
	location: LocationPrimitives
	status: StatusPrimitives
	employee: Nullable<EmployeePrimitives>
	computer: Nullable<
		DeviceComputerPrimitives & {
			processor: ProcessorPrimitives
			hardDriveCapacity: HardDriveCapacityPrimitives
			hardDriveType: HardDriveTypePrimitives
			operatingSystem: OperatingSystemPrimitives
			operatingSystemArq: OperatingSystemArqPrimitives
		}
	>
	hardDrive: Nullable<
		DeviceHardDrivePrimitives & {
			hardDriveCapacity: HardDriveCapacityPrimitives
			hardDriveType: HardDriveTypePrimitives
		}
	>
}
