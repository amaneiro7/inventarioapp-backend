import { type Model, type ModelStatic, type Sequelize } from 'sequelize'
import { type CategoryDto } from '../../../../Category/Category/domain/Category.dto'
import { type MainCategoryDto } from '../../../../Category/MainCategory/domain/MainCategory.dto'
import { type BrandDto } from '../../../../Brand/domain/Brand.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/ModelSeries/domain/ModelSeries.dto'
import { type ComputerModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Computers/Computer/domain/ComputerModels.dto'
import { type LaptopModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Computers/Laptops/domain/LaptopsModels.dto'
import { type MonitorModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Monitors/domain/MonitoModels.dto'
import { type PrinteModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Printers/domain/ModelPrinters.dto'
import { type KeyboardModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Keyboards/domain/KeyboardModels.dto'
import { type MouseModelsDto } from '../../../../ModelSeries/ModelCharacteristics/Mouses/domain/MouseModels.dto'
import { type StatusDto } from '../../../../Device/Status/domain/Status.dto'
import { type DeviceDto } from '../../../../Device/Device/domain/Device.dto'
import { type DeviceMFPDto } from '../../../../Features/MFP/domain/MFP.dto'
import { type ProcessorDto } from '../../../../Features/Processor/Processor/domain/Processor.dto'
import { type ProcessorSocketDto } from '../../../../Features/Processor/ProcessorSocket/domain/ProcessorSocket.dto'
import { type HardDriveCapacityDto } from '../../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacity.dto'
import { type HardDriveTypeDto } from '../../../../Features/HardDrive/HardDriveType/domain/HardDriveType.dto'
import { type OperatingSystemDto } from '../../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystem.dto'
import { type OperatingSystemArqDto } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq.dto'
import { type UserDto } from '../../../../User/user/domain/User.dto'
import { type RoleDto } from '../../../../User/Role/domain/Role.dto'
import { type HistoryDto } from '../../../../History/domain/History.dto'
import { type StateDto } from '../../../../Location/State/domain/State.dto'
import { type CityDto } from '../../../../Location/City/domain/City.dto'
import { type TypeOfSiteDto } from '../../../../Location/TypeOfSite/domain/TypeOfSite.dto'
import { type RegionDto } from '../../../../Location/Region/domain/Region.dto'
import { type SiteDto } from '../../../../Location/Site/domain/Site.dto'
import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../../employee/VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../../employee/Vicepresidencia/domain/Vicepresidencia.dto'
import { type DepartamentoDto } from '../../../../employee/Departamento/domain/Departamento.dto'
import { type CargoDto } from '../../../../employee/Cargo/domain/Cargo.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type InputTypeDto } from '../../../../ModelSeries/InputType/domain/InputType.dto'
import { type CentroCostoDto } from '../../../../employee/CentroCosto/domain/CentroCosto.dto'
import { type CentroTrabajoDto } from '../../../../employee/CentroTrabajo/domain/CentroTrabajo.dto'
import { type DirectivaDto } from '../../../../employee/Directiva/domain/Directiva.dto'
import { type DeviceComputerDto } from '../../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveDto } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type MemoryRamTypeDto } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'

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
	VicepresidenciaEjecutiva: ModelStatic<Model<VicepresidenciaEjecutivaDto>>
	Vicepresidencia: ModelStatic<Model<VicepresidenciaDto>>
	Gerencia: ModelStatic<Model<DepartamentoDto>>
	Coordinacion: ModelStatic<Model<DepartamentoDto>>
	Cargo: ModelStatic<Model<CargoDto>>
	Employee: ModelStatic<Model<EmployeeDto>>
	InputType: ModelStatic<Model<InputTypeDto>>
	CentroCosto: ModelStatic<Model<CentroCostoDto>>
	CentroTrabajo: ModelStatic<Model<CentroTrabajoDto>>
	Directiva: ModelStatic<Model<DirectivaDto>>
}
