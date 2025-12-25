import { type Model, type ModelStatic, type Sequelize } from 'sequelize'
import { type CategoryDto } from '../../../../Category/Category/domain/entity/Category.dto'
import { type MainCategoryDto } from '../../../../Category/MainCategory/domain/entity/MainCategory.dto'
import { type BrandDto } from '../../../../Brand/domain/entity/Brand.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/ModelSeries/domain/dto/ModelSeries.dto'
import { type StatusDto } from '../../../../Device/Status/domain/Status.dto'
import { type DeviceDto } from '../../../../Device/Device/domain/Device.dto'
import { type DeviceMFPDto } from '../../../../Features/MFP/domain/MFP.dto'
import { type ProcessorDto } from '../../../../Features/Processor/Processor/domain/Processor.dto'
import { type ProcessorSocketDto } from '../../../../Features/Processor/ProcessorSocket/domain/ProcessorSocket.dto'
import { type HardDriveCapacityDto } from '../../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../../../Features/HardDrive/HardDriveType/domain/HardDriveType.dto'
import { type OperatingSystemDto } from '../../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystem.dto'
import { type OperatingSystemArqDto } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq.dto'
import { type UserDto } from '../../../../User/user/domain/entity/User.dto'
import { type RoleDto } from '../../../../User/Role/domain/Role.dto'
import { type HistoryDto } from '../../../../History/domain/History.dto'
import { type StateDto } from '../../../../Location/State/domain/entity/State.dto'
import { type CityDto } from '../../../../Location/City/domain/entity/City.dto'
import { type TypeOfSiteDto } from '../../../../Location/TypeOfSite/domain/entity/TypeOfSite.dto'
import { type RegionDto } from '../../../../Location/Region/domain/entity/Region.dto'
import { type SiteDto } from '../../../../Location/Site/domain/entity/Site.dto'
import { type LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../../employee/VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../../employee/Vicepresidencia/domain/Vicepresidencia.dto'
import { type DepartamentoDto } from '../../../../employee/Departamento/domain/Departamento.dto'
import { type CargoDto } from '../../../../employee/Cargo/domain/entity/Cargo.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type InputTypeDto } from '../../../../ModelSeries/InputType/domain/entity/InputType.dto'
import { type CentroCostoDto } from '../../../../employee/CentroCosto/domain/CentroCosto.dto'
import { type CentroTrabajoDto } from '../../../../employee/CentroTrabajo/domain/CentroTrabajo.dto'
import { type DirectivaDto } from '../../../../employee/Directiva/domain/Directiva.dto'
import { type DeviceComputerDto } from '../../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveDto } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type MemoryRamTypeDto } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { type ShipmentDto } from '../../../../Shipment/Shipment/domain/entity/Shipment.dto'
import { type ShipmentDeviceDto } from '../../../../Shipment/ShipmentDevice/domain/entity/ShipmentDevice.dto'
import { type PermissionDto } from '../../../../AccessControl/Permission/domain/entity/Permission.dto'
import { type PermissionGroupDto } from '../../../../AccessControl/PermissionGroup/domain/entity/PermissionGroup.dto'
import { type AccessPolicyDto } from '../../../../AccessControl/AccessPolicy/domain/entity/AccessPolicy.dto'
import { type ComputerModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/ComputerModels.dto'
import { type LaptopModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/LaptopsModels.dto'
import { type MonitorModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/MonitoModels.dto'
import { type PrinteModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/ModelPrinters.dto'
import { type KeyboardModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/KeyboardModels.dto'
import { type MouseModelsDto } from '../../../../ModelSeries/ModelSeries/domain/dto/MouseModels.dto'

export type SequelizeModels = Sequelize['models'] & {
	Category: ModelStatic<Model<CategoryDto>>
	MainCategory: ModelStatic<Model<MainCategoryDto>>
	Brand: ModelStatic<Model<BrandDto>>
	Model: ModelStatic<Model<ModelSeriesDto>>
	ModelComputer: ModelStatic<Model<ComputerModelsDto>>
	ModelLaptop: ModelStatic<Model<LaptopModelsDto>>
	ModelMonitor: ModelStatic<Model<MonitorModelsDto>>
	ModelPrinter: ModelStatic<Model<PrinteModelsDto>>
	ModelKeyboard: ModelStatic<Model<KeyboardModelsDto>>
	ModelMouse: ModelStatic<Model<MouseModelsDto>>
	Status: ModelStatic<Model<StatusDto>>
	Device: ModelStatic<Model<DeviceDto>>
	DeviceComputer: ModelStatic<Model<DeviceComputerDto>>
	DeviceHardDrive: ModelStatic<Model<DeviceHardDriveDto>>
	DeviceMFP: ModelStatic<Model<DeviceMFPDto>>
	Processor: ModelStatic<Model<ProcessorDto>>
	ProcessorSocket: ModelStatic<Model<ProcessorSocketDto>>
	MemoryRamType: ModelStatic<Model<MemoryRamTypeDto>>
	HardDriveCapacity: ModelStatic<Model<HardDriveCapacityDto>>
	HardDriveType: ModelStatic<Model<HardDriveTypeDto>>
	OperatingSystemVersion: ModelStatic<Model<OperatingSystemDto>>
	OperatingSystemArq: ModelStatic<Model<OperatingSystemArqDto>>
	User: ModelStatic<Model<UserDto>>
	Role: ModelStatic<Model<RoleDto>>
	History: ModelStatic<Model<HistoryDto>>
	State: ModelStatic<Model<StateDto>>
	City: ModelStatic<Model<CityDto>>
	TypeOfSite: ModelStatic<Model<TypeOfSiteDto>>
	Region: ModelStatic<Model<RegionDto>>
	Site: ModelStatic<Model<SiteDto>>
	Location: ModelStatic<Model<LocationDto>>
	Directiva: ModelStatic<Model<DirectivaDto>>
	VicepresidenciaEjecutiva: ModelStatic<Model<VicepresidenciaEjecutivaDto>>
	Vicepresidencia: ModelStatic<Model<VicepresidenciaDto>>
	Departamento: ModelStatic<Model<DepartamentoDto>>
	Cargo: ModelStatic<Model<CargoDto>>
	Employee: ModelStatic<Model<EmployeeDto>>
	InputType: ModelStatic<Model<InputTypeDto>>
	CentroCosto: ModelStatic<Model<CentroCostoDto>>
	CentroTrabajo: ModelStatic<Model<CentroTrabajoDto>>
	Shipment: ModelStatic<Model<ShipmentDto>>
	ShipmentDevice: ModelStatic<Model<ShipmentDeviceDto>>
	Permission: ModelStatic<Model<PermissionDto>>
	PermissionGroup: ModelStatic<Model<PermissionGroupDto>>
	AccessPolicy: ModelStatic<Model<AccessPolicyDto>>
}
