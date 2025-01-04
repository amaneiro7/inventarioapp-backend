import { asClass, type AwilixContainer } from "awilix"
import { SequelizeStateRepository } from "../../../Contexts/Location/State/infrastructure/sequelize/SequelizeStateRepository"
import { StateFinderAll } from "../../../Contexts/Location/State/application/StateFinderAll"
import { StateGetAllController } from "../../controllers/location/state.get-all.controller"

export enum StateDependencies {
    Repository = 'stateRepository',
    FinderAll = 'stateFinderAll',
    GetAllController = 'stateGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        stateRepository: asClass(SequelizeStateRepository).singleton(),
        stateFinderAll: asClass(StateFinderAll),
        stateGetAllController: asClass(StateGetAllController),
    })
}

