import { type Sequelize } from 'sequelize'
import { initModelSeriesModel } from '../../../../ModelSeries/ModelSeries/infraestructure/Sequelize/ModelSeriesSchema'
import { initCategoryModel } from '../../../../Category/SubCategory/infrastructure/Sequelize/CategorySchema'
import { initBrandModel } from '../../../../Brand/infrastructure/Sequelize/BrandSchema'
import { initDeviceModel } from '../../../../Device/Device/infrastructure/sequelize/DeviceSchema'
import { initUserModel } from '../../../../User/user/infrastructure/persistance/Sequelize/UserSchema'
import { initStatusModel } from '../../../../Device/Status/infrastructure/sequelize/StatusSchema'
import { initHardDriveCapacityModel } from '../../../../Features/HardDrive/HardDriveCapacity/infraestructure/sequelize/HardDriveCapacitySchema'
import { initHardDriveTypeModel } from '../../../../Features/HardDrive/HardDriveType/infraestructure/sequelize/HardDriveTypeSchema'
import { initProcessorModel } from '../../../../Features/Processor/Processor/infrastructure/sequelize/ProcessorSchema'
import { initMemoryRamTypeModel } from '../../../../Features/MemoryRam/MemoryRamType/infraestructure/sequelize/MemoryRamTypeSchema'
import { initOperatingSystemModel } from '../../../../Features/OperatingSystem/OperatingSystem/infraesructure/sequelize/OperatingSystemSchema'
import { initOperatingSystemArqModel } from '../../../../Features/OperatingSystem/OperatingSystemArq/infraestructure/sequelize/OperatingSystemArqSchema'
import { initRolesodel } from '../../../../User/Role/infrastructure/sequelize/RolesSchema'
import { initHistoryModel } from '../../../../History/infrastructure/sequelize/HistorySchema'
import { initComputerModels } from '../../../../ModelSeries/ModelCharacteristics/Computers/Computer/infrastructure/sequelize/ComputerModelsSchema'
import { initLaptopModels } from '../../../../ModelSeries/ModelCharacteristics/Computers/Laptops/infraestructure/sequelize/LaptopsModelsSchema'
import { initProcessorSocketModel } from '../../../../Features/Processor/ProcessorSocket/infrastructure/sequelize/ProcessorSocketSchema'
import { initMonitorModels } from '../../../../ModelSeries/ModelCharacteristics/Monitors/infraestructure/sequelize/MonitorModelSchema'
import { initModelPrinter } from '../../../../ModelSeries/ModelCharacteristics/Printers/infraestructure/sequelize/ModelPrinterSchema'
import { initStateModel } from '../../../../Location/State/infrastructure/sequelize/StateSchema'
import { initCityModel } from '../../../../Location/City/infrastructure/sequelize/CitySchema'
import { initTypeOfSiteModel } from '../../../../Location/TypeOfSite/infrastructure/sequelize/TypeOfSiteSchema'
import { initRegionModel } from '../../../../Location/Region/infrastrcuture/sequelize/RegionSchema'
import { initSiteModel } from '../../../../Location/Site/infrastructure/sequelize/SiteSchema'
import { initLocationModel } from '../../../../Location/Location/infrastructure/sequelize/LocationSchema'
import { initVicepresidenciaEjecutivaModel } from '../../../../employee/Area/VicepresidenciaEjecutiva/infrastructure/sequelize/VicepresidenciaEjecutivaSchema'
import { initGerenciaModel } from '../../../../employee/Area/Gerencia/infrastructure/sequelize/GerenciaSchema'
import { initCoordinacionModel } from '../../../../employee/Area/Coordinacion/infrastructure/sequelize/CoordinacionSchema'
import { initVicepresidenciaModel } from '../../../../employee/Area/VicePresidencia/infrastructure/sequelize/VicepresidenciaSchema'
import { initCargoModel } from '../../../../employee/Cargo/infrastructure/sequelize/CargoSchema'
import { initDeviceHardDriveModel } from '../../../../Features/HardDrive/HardDrive/infraestructure/sequelize/DeviceHardDriveSchema'
import { initDeviceComputerModel } from '../../../../Features/Computer/infraestructure/sequelize/DeviceComputerSchema'
import { initInputTypeModel } from '../../../../ModelSeries/InputType/infrastructure/sequelize/InputTypeSchema'
import { initKeyboardModels } from '../../../../ModelSeries/ModelCharacteristics/Keyboards/infraestructure/sequelize/KeyboardModelSchema'
import { initEmployeeModel } from '../../../../employee/Employee/infrastructure/sequelize/EmployeeSchema'
import { initDeviceMFPModel } from '../../../../Features/MFP/infraestructure/MFPSchema'
import { initMouseModels } from '../../../../ModelSeries/ModelCharacteristics/Mouses/infraestructure/MouseModelSchema'
import { initMainCategoryModel } from '../../../../Category/Category/infrastructure/Sequelize/MainCategorySchema'

export async function setupModels(sequelize: Sequelize): Promise<void> {
  await initCategoryModel(sequelize)
  await initMainCategoryModel(sequelize)
  await initBrandModel(sequelize)
  await initModelSeriesModel(sequelize)
  await initStatusModel(sequelize)
  await initCargoModel(sequelize)
  await initDeviceModel(sequelize)
  await initDeviceHardDriveModel(sequelize)
  await initRolesodel(sequelize)
  await initUserModel(sequelize)
  await initHardDriveCapacityModel(sequelize)
  await initHardDriveTypeModel(sequelize)
  await initProcessorModel(sequelize)
  await initProcessorSocketModel(sequelize)
  await initMemoryRamTypeModel(sequelize)
  await initOperatingSystemModel(sequelize)
  await initOperatingSystemArqModel(sequelize)
  await initDeviceComputerModel(sequelize)
  await initDeviceMFPModel(sequelize)
  await initHistoryModel(sequelize)
  await initComputerModels(sequelize)
  await initLaptopModels(sequelize)
  await initMonitorModels(sequelize)
  await initModelPrinter(sequelize)
  await initKeyboardModels(sequelize)
  await initMouseModels(sequelize)
  await initStateModel(sequelize)
  await initCityModel(sequelize)
  await initTypeOfSiteModel(sequelize)
  await initRegionModel(sequelize)
  await initSiteModel(sequelize)
  await initLocationModel(sequelize)
  await initVicepresidenciaEjecutivaModel(sequelize)
  await initVicepresidenciaModel(sequelize)
  await initGerenciaModel(sequelize)
  await initCoordinacionModel(sequelize)
  await initInputTypeModel(sequelize)
  await initEmployeeModel(sequelize)
}
