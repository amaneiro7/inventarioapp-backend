import { type BrandPrimitives } from '../../../../Brand/domain/Brand'
import { type BrandId } from '../../../../Brand/domain/BrandId'
import { type CategoryId } from '../../../../Category/domain/CategoryId'
import { type CategoryPrimitives } from '../../../../Category/SubCategory/domain/Category'
import { type EmployeePrimitives } from '../../../../employee/Employee/domain/Employee'
import { type DeviceComputerPrimitives } from '../../../../Features/Computer/domain/Computer'
import { type ComputerHardDriveCapacity } from '../../../../Features/Computer/domain/ComputerHardDriveCapacity'
import { type ComputerHardDriveType } from '../../../../Features/Computer/domain/ComputerHardDriveType'
import { type ComputerMemoryRamCapacity } from '../../../../Features/Computer/domain/ComputerMemoryRamCapacity'
import { type ComputerName } from '../../../../Features/Computer/domain/ComputerName'
import { type ComputerOperatingSystem } from '../../../../Features/Computer/domain/ComputerOperatingSystem'
import { type ComputerOperatingSystemArq } from '../../../../Features/Computer/domain/ComputerOperatingSystemArq'
import { type ComputerProcessor } from '../../../../Features/Computer/domain/ComputerProcessor'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type MACAddress } from '../../../../Features/Computer/domain/MACAddress'
import { type HardDriveCapacityPrimitives } from '../../../../Features/HardDrive/HardDriveCapacity/domain/HardDriveCapacity'
import { type HardDriveTypePrimitives } from '../../../../Features/HardDrive/HardDriveType/domain/HardDriveType'
import { type MemoryRamTypePrimitives } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamType'
import { type OperatingSystemPrimitives } from '../../../../Features/OperatingSystem/OperatingSystem/domain/OperatingSystem'
import { type OperatingSystemArqPrimitives } from '../../../../Features/OperatingSystem/OperatingSystemArq/domain/OperatingSystemArq'
import { type ProcessorPrimitives } from '../../../../Features/Processor/Processor/domain/Processor'
import { type HistoryPrimitives } from '../../../../History/domain/History'
import { type CityPrimitives } from '../../../../Location/City/domain/City'
import { type LocationPrimitives } from '../../../../Location/Location/domain/Location'
import { type SitePrimitives } from '../../../../Location/Site/domain/Site'
import { type TypeOfSitePrimitives } from '../../../../Location/TypeOfSite/domain/TypeOfSite'
import { type InputTypePrimitives } from '../../../../ModelSeries/InputType/domain/InputType'
import { type ComputerModelsPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { type LaptopsModelsPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { type KeyboardModelsPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { type MonitorModelsPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Monitors/domain/MonitorModels'
import { type MouseModelsPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Mouses/domain/MouseModels'
import { type ModelPrintersPrimitives } from '../../../../ModelSeries/ModelCharacteristics/Printers/domain/ModelPrinters'
import { type ModelSeriesPrimitives } from '../../../../ModelSeries/ModelSeries/domain/ModelSeries'
import { type ModelSeriesId } from '../../../../ModelSeries/ModelSeries/domain/ModelSeriesId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UserPrimitives } from '../../../../User/user/domain/User'
import { type StatusPrimitives } from '../../../Status/domain/Status'
import { type DevicePrimitives } from '../../domain/Device'
import { type DeviceActivo } from '../../domain/DeviceActivo'
import { type DeviceEmployee } from '../../domain/DeviceEmployee'
import { type DeviceId } from '../../domain/DeviceId'
import { type DeviceLocation } from '../../domain/DeviceLocation'
import { type DeviceObservation } from '../../domain/DeviceObservation'
import { type DeviceSerial } from '../../domain/DeviceSerial'
import { type DeviceStatus } from '../../domain/DeviceStatus'

export interface DevicesApiResponse extends DevicePrimitives {
  createdAt: string
  updatedAt: string
  category: CategoryPrimitives
  brand: BrandPrimitives
  model: ModelApiresponse
  location: LocationApiResponse
  employee: EmployeePrimitives | null
  status: StatusPrimitives
  computer: Computer | null
  hardDrive: HardDrive | null
  history: HistoryApiResponse[]
}

export interface HistoryApiResponse extends HistoryPrimitives {
  employee: EmployeePrimitives
  user: Pick<UserPrimitives, 'email' | 'name' | 'lastName'>
  createdAt: string
  updatedAt: string
}

export interface LocationApiResponse extends LocationPrimitives {
  typeOfSite: TypeOfSitePrimitives
  site: SiteApiResponse
}

export interface SiteApiResponse extends SitePrimitives {
  city: CityPrimitives
}

export interface Computer extends DeviceComputerPrimitives {
  id: Primitives<DeviceId>
  categoryId: Primitives<CategoryId>
  deviceId: Primitives<DeviceId>
  createdAt: Date
  updatedAt: Date
  processor: ProcessorPrimitives
  hardDriveCapacity: HardDriveCapacityPrimitives
  hardDriveType: HardDriveTypePrimitives
  operatingSystem: OperatingSystemPrimitives
  operatingSystemArq: OperatingSystemArqPrimitives
}

export interface ModelApiresponse extends ModelSeriesPrimitives {
  createdAt: Date
  updatedAt: Date
  category: Status
  brand: BrandPrimitives
  modelComputer: ModelComputer
  modelLaptop: ModelLaptop
  modelKeyboard: ModelKeyboard
  modelMouse: ModelKeyboard
  modelMonitor: ModelMonitor
  modelPrinter: ModelPrinter
}

export interface ModelComputer extends ComputerModelsPrimitives {
  memoryRamType: MemoryRamTypePrimitives
}
export interface ModelLaptop extends LaptopsModelsPrimitives {
  memoryRamType: MemoryRamTypePrimitives
}

export interface ModelKeyboard extends KeyboardModelsPrimitives {
  inputType: InputTypePrimitives
}
export interface ModelMouse extends MouseModelsPrimitives {
  inputType: InputTypePrimitives
}

export interface ModelMonitor extends MonitorModelsPrimitives { }

export interface ModelPrinter extends ModelPrintersPrimitives { }

export type ClearComputerDataset = {
  id: string
  Usuario: string
  "Ubicación": string
  "Direccion IP"?: string
  Serial: string
  Activo: string
  Estatus: string
  Categoria: string
  Marca: string
  Modelo: string
  "Nombre de Equipo"?: string
  Procesador?: string
  "Memoria Ram Total"?: number
  "Slot de Memoria Ram"?: string
  "Tipo de Memoria Ram"?: string | null
  "Disco Duro Total"?: string | number
  "Tipo de Disco Duro"?: string
  "Sistema Operativo"?: string
  "Arquitectura"?: string
  Observación: string | null
  "Actualizado por"?: string
  "Fecha de Modificacion": string
}

export type ClearDefaultDataset = {
  id: string
  Usuario: string
  "Ubicación": string
  Serial: string
  Activo: string
  Estatus: string
  Categoria: string
  Marca: string
  Modelo: string
  Observación: string | null
  "Actualizado por"?: string
  "Fecha de Modificacion": string
}
