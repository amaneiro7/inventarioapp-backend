import { Model, ModelStatic } from "sequelize"
import { SequelizeClientFactory } from "./SequelizeConfig"

export type SequelizeModels = SequelizeClientFactory['models'] & {
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