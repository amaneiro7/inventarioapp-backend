import { type AwilixContainer, asClass } from "awilix"
import { SequelizeProcessorRepository } from "../../Contexts/Features/Processor/Processor/infrastructure/sequelize/SequelizeProcessorRepository"
import { ProcessorsFinder } from "../../Contexts/Features/Processor/Processor/application/ProcessorFinder"
import { ProcessorsFinderAll } from "../../Contexts/Features/Processor/Processor/application/ProcessorFinderAll"
import { ProcessorCreator } from "../../Contexts/Features/Processor/Processor/application/ProcessorCreator"
import { ProcessorUpdater } from "../../Contexts/Features/Processor/Processor/application/ProcessorUpdater"
import { ProcessorRemover } from "../../Contexts/Features/Processor/Processor/application/ProcessorRemover"
import { ProcessorGetController } from "../controllers/processor/processor.get.controller"
import { ProcessorGetAllController } from "../controllers/processor/processor.get-all.controller"
import { ProcessorPatchController } from "../controllers/processor/processor.patch.controller"
import { ProcessorDeleteController } from "../controllers/processor/processor.delete.controller"
import { ProcessorPostController } from "../controllers/processor/processor.post.controller"

export enum ProcessorDependencies {
    Repository = 'processorRepository',
    Finder = 'processorFinder',
    FinderAll = 'processorFinderAll',
    Creator = 'processorCreator',
    Updater = 'processorUpdater',
    Remover = 'processorRemover',
    GetController = 'processorGetController',
    GetAllController = 'processorGetAllController',
    PostController = 'processorPostController',
    PatchController = 'processorPatchController',
    DeleteController = 'processorDeleteController',
}

export const register = (container: AwilixContainer) => {
    container.register({
        processorRepository: asClass(SequelizeProcessorRepository).singleton(),
        processorFinder: asClass(ProcessorsFinder),
        processorFinderAll: asClass(ProcessorsFinderAll),
        processorCreator: asClass(ProcessorCreator),
        processorUpdater: asClass(ProcessorUpdater),
        processorRemover: asClass(ProcessorRemover),
        processorGetController: asClass(ProcessorGetController),
        processorGetAllController: asClass(ProcessorGetAllController),
        processorPostController: asClass(ProcessorPostController),
        processorPatchController: asClass(ProcessorPatchController),
        processorDeleteController: asClass(ProcessorDeleteController),
    })
}