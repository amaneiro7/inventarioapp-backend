import { asClass, type AwilixContainer } from "awilix";
import { SequelizeMemoryRamTypeRepository } from "../../../Contexts/Features/MemoryRam/MemoryRamType/infraestructure/sequelize/SequelizeMemoryRamTypeRepository";
import { MemoryRamTypeFinderAll } from "../../../Contexts/Features/MemoryRam/MemoryRamType/application/SearchAllMemoryRamType";
import { MemoryRamTypeGetAllController } from "../../controllers/memory-ram/memoryRam.get-all.controller";

export enum MemoryRamTypeDependencies {
    Repository = 'memoryRamTypeRepository',
    FinderAll = 'memoryRamTypeFinderAll',
    GetAllController = 'memoryRamTypeGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        memoryRamTypeRepository: asClass(SequelizeMemoryRamTypeRepository).singleton(),
        memoryRamTypeFinderAll: asClass(MemoryRamTypeFinderAll),
        memoryRamTypeGetAllController: asClass(MemoryRamTypeGetAllController),
    })
}

