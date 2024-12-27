import { type ModelStatic, type Model } from 'sequelize'
import { type Repository } from '../../../domain/Repository'
import { type CacheRepository } from '../../../domain/CacheRepository'
import { initializeDatabase } from './SequelizeConfig'
import { SequelizeBrandRepository } from '../../../../Brand/infrastructure/Sequelize/SequelizeBrandRepository'
import { SequelizeCategoryRepository } from '../../../../Category/SubCategory/infrastructure/Sequelize/SequelizeCategoryRepository'
import { SequelizeDeviceRepository } from '../../../../Device/Device/infrastructure/sequelize/SequelizeDeviceRepository'
import { SequelizeStatusRepository } from '../../../../Device/Status/infrastructure/sequelize/SequelizeStatusRepository'
import { SequelizeHardDriveCapacityRepository } from '../../../../Features/HardDrive/HardDriveCapacity/infraestructure/sequelize/SequelizeHardDriveCapacity'
import { SequelizeHardDriveTypeRepository } from '../../../../Features/HardDrive/HardDriveType/infraestructure/sequelize/SequelizeHardDriveTypeRepository'
import { SequelizeMemoryRamTypeRepository } from '../../../../Features/MemoryRam/MemoryRamType/infraestructure/sequelize/SequelizeMemoryRamTypeRepository'
import { SequelizeOperatingSystemRepository } from '../../../../Features/OperatingSystem/OperatingSystem/infraesructure/sequelize/SequelizeOperatingSystemRepository'
import { SequelizeOperatingSystemArqRepository } from '../../../../Features/OperatingSystem/OperatingSystemArq/infraestructure/sequelize/SequelizeOperatingSystemArqRepository'
import { SequelizeProcessorRepository } from '../../../../Features/Processor/Processor/infrastructure/sequelize/SequelizeProcessorRepository'
import { SequelizeHistoryRepository } from '../../../../History/infrastructure/sequelize/SequelizeHistoryRepository'
import { SequelizeModelSeriesRepository } from '../../../../ModelSeries/ModelSeries/infraestructure/Sequelize/SequelizeModelSeriesRepository'
import { SequelizeRolesRepository } from '../../../../User/Role/infrastructure/sequelize/SequelizeRolesRepository'
import { SequelizeUserRepository } from '../../../../User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'
import { SequelizeProcessorSocketRepository } from '../../../../Features/Processor/ProcessorSocket/infrastructure/sequelize/SequelizeProcessorSocketRepository'
import { SequelizeStateRepository } from '../../../../Location/State/infrastructure/sequelize/SequelizeStateRepository'
import { SequelizeCityRepository } from '../../../../Location/City/infrastructure/sequelize/SequelizeCityRepository'
import { SequelizeTypeOfSiteRepository } from '../../../../Location/TypeOfSite/infrastructure/sequelize/SequelizeTypeOfSiteRepository'
import { SequelizeRegionRepository } from '../../../../Location/Region/infrastrcuture/sequelize/SequelizeCityRepository'
import { SequelizeSiteRepository } from '../../../../Location/Site/infrastructure/sequelize/SequelizeSiteRepository'
import { SequelizeLocationRepository } from '../../../../Location/Location/infrastructure/sequelize/SequelizeLocationRepository'
import { SequelizeCargoRepository } from '../../../../employee/Cargo/infrastructure/sequelize/SequelizeCargoRepository'
import { SequelizeCoordinacionRepository } from '../../../../employee/Area/Coordinacion/infrastructure/sequelize/SequelizeCoordinacionRepository'
import { SequelizeGerenciaRepository } from '../../../../employee/Area/Gerencia/infrastructure/sequelize/SequelizeGerenciaRepository'
import { SequelizeVicepresidenciaRepository } from '../../../../employee/Area/VicePresidencia/infrastructure/sequelize/SequelizeVicepresidenciaRepository'
import { SequelizeVicepresidenciaEjecutivaRepository } from '../../../../employee/Area/VicepresidenciaEjecutiva/infrastructure/sequelize/SequelizeVicepresidenciaEjecutivaRepository'
import { SequelizeEmployeeRepository } from '../../../../employee/Employee/infrastructure/sequelize/SequelizeEmployeeRepository'
import { SequelizeInputTypeRepository } from '../../../../ModelSeries/InputType/infrastructure/sequelize/SequelizeInputTypeRepository'
import { SequelizeDashboardRepository } from '../../../../Device/Inventroy/infra/sequelize/SequelizeDashboardRepository'
import { SequelizeMainCategoryRepository } from '../../../../Category/Category/infrastructure/Sequelize/SequelizeMainCategoryRepository'

(async () => {
  try {
    await initializeDatabase()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
)()

export interface Models {
  Category: ModelStatic<Model<any>>
  MainCategory: ModelStatic<Model<any>>
  Brand: ModelStatic<Model<any>>
  Model: ModelStatic<Model<any>>
  ModelComputer: ModelStatic<Model<any>>
  ModelLaptop: ModelStatic<Model<any>>
  ModelMonitor: ModelStatic<Model<any>>
  ModelPrinter: ModelStatic<Model<any>>
  ModelKeyboard: ModelStatic<Model<any>>
  ModelMouse: ModelStatic<Model<any>>
  Status: ModelStatic<Model<any>>
  Device: ModelStatic<Model<any>>
  DeviceComputer: ModelStatic<Model<any>>
  DeviceHardDrive: ModelStatic<Model<any>>
  DeviceMFP: ModelStatic<Model<any>>
  Processor: ModelStatic<Model<any>>
  ProcessorSocket: ModelStatic<Model<any>>
  MemoryRamType: ModelStatic<Model<any>>
  HardDriveCapacity: ModelStatic<Model<any>>
  HardDriveType: ModelStatic<Model<any>>
  OperatingSystemVersion: ModelStatic<Model<any>>
  OperatingSystemArq: ModelStatic<Model<any>>
  User: ModelStatic<Model<any>>
  Role: ModelStatic<Model<any>>
  History: ModelStatic<Model<any>>
  State: ModelStatic<Model<any>>
  City: ModelStatic<Model<any>>
  TypeOfSite: ModelStatic<Model<any>>
  Region: ModelStatic<Model<any>>
  Site: ModelStatic<Model<any>>
  Location: ModelStatic<Model<any>>
  VicepresidenciaEjecutiva: ModelStatic<Model<any>>
  Vicepresidencia: ModelStatic<Model<any>>
  Gerencia: ModelStatic<Model<any>>
  Coordinacion: ModelStatic<Model<any>>
  Cargo: ModelStatic<Model<any>>
  Employee: ModelStatic<Model<any>>
  InputType: ModelStatic<Model<any>>
}

export const sequelizeRepository = async (cache: CacheRepository): Promise<Repository> => ({
  user: await new SequelizeUserRepository(cache),
  brand: await new SequelizeBrandRepository(cache),
  mainCategory: await new SequelizeMainCategoryRepository(cache),
  category: await new SequelizeCategoryRepository(cache),
  modelSeries: await new SequelizeModelSeriesRepository(cache),
  status: await new SequelizeStatusRepository(cache),
  device: await new SequelizeDeviceRepository(cache),
  processor: await new SequelizeProcessorRepository(cache),
  processorSocket: await new SequelizeProcessorSocketRepository(cache),
  hardDriveType: await new SequelizeHardDriveTypeRepository(cache),
  hardDriveCapacity: await new SequelizeHardDriveCapacityRepository(cache),
  memoryRamType: await new SequelizeMemoryRamTypeRepository(cache),
  operatingSystemVersion: await new SequelizeOperatingSystemRepository(cache),
  operatingSystemArq: await new SequelizeOperatingSystemArqRepository(cache),
  role: await new SequelizeRolesRepository(cache),
  history: await new SequelizeHistoryRepository(cache),
  state: await new SequelizeStateRepository(cache),
  city: await new SequelizeCityRepository(cache),
  typeOfSite: await new SequelizeTypeOfSiteRepository(cache),
  region: await new SequelizeRegionRepository(cache),
  site: await new SequelizeSiteRepository(cache),
  location: await new SequelizeLocationRepository(cache),
  cargo: await new SequelizeCargoRepository(cache),
  coordinacion: await new SequelizeCoordinacionRepository(cache),
  gerencia: await new SequelizeGerenciaRepository(cache),
  vicepresidencia: await new SequelizeVicepresidenciaRepository(cache),
  vicepresidenciaEjecutiva: await new SequelizeVicepresidenciaEjecutivaRepository(cache),
  employee: await new SequelizeEmployeeRepository(cache),
  inputType: await new SequelizeInputTypeRepository(cache),
  dashboard: await new SequelizeDashboardRepository(cache)
})
