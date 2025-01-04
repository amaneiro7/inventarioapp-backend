import { asClass, type AwilixContainer } from "awilix"
import { SequelizeProcessorSocketRepository } from "../../../Contexts/Features/Processor/ProcessorSocket/infrastructure/sequelize/SequelizeProcessorSocketRepository"
import { ProcessorSocketFinderAll } from "../../../Contexts/Features/Processor/ProcessorSocket/application/ProcessorSocketFinderAll"
import { ProcessorSocketGetAllController } from "../../controllers/processor/processor-socket.get-all.controller"


export enum ProcessorSocketDependencies {
    Repository = 'processorSocketRepository',
    FinderAll = 'processorSocketFinderAll',
    GetAllController = 'processorSocketGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        processorSocketRepository: asClass(SequelizeProcessorSocketRepository).singleton(),
        processorSocketFinderAll: asClass(ProcessorSocketFinderAll),
        processorSocketGetAllController: asClass(ProcessorSocketGetAllController),
    })
}

