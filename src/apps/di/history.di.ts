import { asClass, type AwilixContainer } from "awilix"
import { SequelizeHistoryRepository } from "../../Contexts/History/infrastructure/sequelize/SequelizeHistoryRepository"
import { HistoryFinderAll } from "../../Contexts/History/application/HistoryFinderAll"
import { HistoryCreator } from "../../Contexts/History/application/HistoryCreator"
import { HistoryGetAllController } from "../controllers/history/history.get-all.controller"


export enum HistoryDependencies {
    Repository = 'historyRepository',
    FinderAll = 'historyFinderAll',
    Creator = 'historyCreator',
    GetAllController = 'historyGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        historyRepository: asClass(SequelizeHistoryRepository).singleton(),
        historyFinderAll: asClass(HistoryFinderAll),
        historyCreator: asClass(HistoryCreator),
        historyGetAllController: asClass(HistoryGetAllController),
    })
}

