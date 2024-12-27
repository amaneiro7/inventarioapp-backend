import { BrandModel } from '../../../../Brand/infrastructure/Sequelize/BrandSchema'
import { MainCategoryModel } from '../../../../Category/Category/infrastructure/Sequelize/MainCategorySchema'
import { CategoryModel } from '../../../../Category/SubCategory/infrastructure/Sequelize/CategorySchema'
import { DeviceModel } from '../../../../Device/Device/infrastructure/sequelize/DeviceSchema'
import { StatusModel } from '../../../../Device/Status/infrastructure/sequelize/StatusSchema'
import { DeviceComputerModel } from '../../../../Features/Computer/infraestructure/sequelize/DeviceComputerSchema'
import { DeviceHardDriveModel } from '../../../../Features/HardDrive/HardDrive/infraestructure/sequelize/DeviceHardDriveSchema'
import { HardDriveCapacityModel } from '../../../../Features/HardDrive/HardDriveCapacity/infraestructure/sequelize/HardDriveCapacitySchema'
import { HardDriveTypeModel } from '../../../../Features/HardDrive/HardDriveType/infraestructure/sequelize/HardDriveTypeSchema'
import { DeviceMFPModel } from '../../../../Features/MFP/infraestructure/MFPSchema'
import { MemoryRamTypeModel } from '../../../../Features/MemoryRam/MemoryRamType/infraestructure/sequelize/MemoryRamTypeSchema'
import { OperatingSystemModel } from '../../../../Features/OperatingSystem/OperatingSystem/infraesructure/sequelize/OperatingSystemSchema'
import { OperatingSystemArqModel } from '../../../../Features/OperatingSystem/OperatingSystemArq/infraestructure/sequelize/OperatingSystemArqSchema'
import { ProcessorModel } from '../../../../Features/Processor/Processor/infrastructure/sequelize/ProcessorSchema'
import { ProcessorSocketModel } from '../../../../Features/Processor/ProcessorSocket/infrastructure/sequelize/ProcessorSocketSchema'
import { HistoryModel } from '../../../../History/infrastructure/sequelize/HistorySchema'
import { CityModel } from '../../../../Location/City/infrastructure/sequelize/CitySchema'
import { LocationModel } from '../../../../Location/Location/infrastructure/sequelize/LocationSchema'
import { RegionModel } from '../../../../Location/Region/infrastrcuture/sequelize/RegionSchema'
import { SiteModels } from '../../../../Location/Site/infrastructure/sequelize/SiteSchema'
import { StateModel } from '../../../../Location/State/infrastructure/sequelize/StateSchema'
import { TypeOfSiteModel } from '../../../../Location/TypeOfSite/infrastructure/sequelize/TypeOfSiteSchema'
import { InputTypeModel } from '../../../../ModelSeries/InputType/infrastructure/sequelize/InputTypeSchema'
import { ComputerModelsModel } from '../../../../ModelSeries/ModelCharacteristics/Computers/Computer/infrastructure/sequelize/ComputerModelsSchema'
import { LaptopModelsModel } from '../../../../ModelSeries/ModelCharacteristics/Computers/Laptops/infraestructure/sequelize/LaptopsModelsSchema'
import { KeyboardModelsModel } from '../../../../ModelSeries/ModelCharacteristics/Keyboards/infraestructure/sequelize/KeyboardModelSchema'
import { MonitorModelsModel } from '../../../../ModelSeries/ModelCharacteristics/Monitors/infraestructure/sequelize/MonitorModelSchema'

import { MouseModelsModel } from '../../../../ModelSeries/ModelCharacteristics/Mouses/infraestructure/MouseModelSchema'
import { ModelPrinterModel } from '../../../../ModelSeries/ModelCharacteristics/Printers/infraestructure/sequelize/ModelPrinterSchema'
import { ModelSeriesModel } from '../../../../ModelSeries/ModelSeries/infraestructure/Sequelize/ModelSeriesSchema'
import { RolesModel } from '../../../../User/Role/infrastructure/sequelize/RolesSchema'
import { UserModel } from '../../../../User/user/infrastructure/persistance/Sequelize/UserSchema'
import { CoordinacionModel } from '../../../../employee/Area/Coordinacion/infrastructure/sequelize/CoordinacionSchema'
import { GerenciaModel } from '../../../../employee/Area/Gerencia/infrastructure/sequelize/GerenciaSchema'
import { VicepresidenciaModel } from '../../../../employee/Area/VicePresidencia/infrastructure/sequelize/VicepresidenciaSchema'
import { VicepresidenciaEjecutivaModel } from '../../../../employee/Area/VicepresidenciaEjecutiva/infrastructure/sequelize/VicepresidenciaEjecutivaSchema'
import { CargoModel } from '../../../../employee/Cargo/infrastructure/sequelize/CargoSchema'
import { EmployeeModel } from '../../../../employee/Employee/infrastructure/sequelize/EmployeeSchema'
import { sequelize } from './SequelizeConfig'
import { type Models } from './SequelizeRepository'

// Define associations between different Sequelize models
export async function InitSequelizeAssociation(): Promise<void> {
  const models = sequelize.models as unknown as Models
  await CategoryModel.associate(models) // Sub Category Associations
  await MainCategoryModel.associate(models) // Main Category Associations
  await BrandModel.associate(models) // Brand Associations
  await ModelSeriesModel.associate(models) // Model Associations
  await ComputerModelsModel.associate(models) // Computer Models Associations
  await LaptopModelsModel.associate(models) // ModelLaptop Associations
  await MonitorModelsModel.associate(models) // ModelMonitor Associations
  await ModelPrinterModel.associate(models) // ModelPrinter Associations
  await KeyboardModelsModel.associate(models) // ModelKeyboard Associations
  await MouseModelsModel.associate(models) // ModelMouse Associations
  await StatusModel.associate(models) // Status Associations
  await DeviceModel.associate(models)// Device Associations
  await DeviceComputerModel.associate(models) // DeviceComputer Associations
  await DeviceHardDriveModel.associate(models) // DeviceHardDrive Associations
  await DeviceMFPModel.associate(models) // MFP Associations
  await HardDriveCapacityModel.associate(models) // HardDriveCapacity Associations
  await HardDriveTypeModel.associate(models) // HardDriveType Associations
  await ProcessorModel.associate(models) // Processor Associations
  await ProcessorSocketModel.associate(models) // ProcessorSocket Associations
  await MemoryRamTypeModel.associate(models) // MemoryRamType Associations
  await OperatingSystemModel.associate(models) // OperatingSystem Associations
  await OperatingSystemArqModel.associate(models) // OperatingSystemArq Associations
  await RolesModel.associate(models) // Role Associations
  await UserModel.associate(models)// User Associations
  await HistoryModel.associate(models)// History Associations
  await StateModel.associate(models)// State Associations
  await CityModel.associate(models) // City Associations
  await TypeOfSiteModel.associate(models) // TypeOfSite Associations
  await RegionModel.associate(models) // Region Associations
  await SiteModels.associate(models) // Site Associations
  await LocationModel.associate(models) // Location Associations
  await VicepresidenciaEjecutivaModel.associate(models) // VicepresidenciaEjecutiva Associations
  await VicepresidenciaModel.associate(models) // Vicepresidencia Associations
  await GerenciaModel.associate(models) // Gerencia Associations
  await CoordinacionModel.associate(models) // Coordinacion Associations
  await CargoModel.associate(models) // Cargo Associations
  await EmployeeModel.associate(models) // Employee Associations
  await InputTypeModel.associate(models) // InputType Associations
}
