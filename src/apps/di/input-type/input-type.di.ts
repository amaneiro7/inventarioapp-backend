import { asClass, type AwilixContainer } from "awilix"
import { SequelizeInputTypeRepository } from "../../../Contexts/ModelSeries/InputType/infrastructure/sequelize/SequelizeInputTypeRepository"
import { InputTypeFinderAll } from "../../../Contexts/ModelSeries/InputType/application/InputTypeFinder"
import { InputTypeGetAllController } from "../../controllers/input-type/input-type.get-all.controller"

export enum InputTypeDependencies {
    Repository = 'inputTypeRepository',
    FinderAll = 'inputTypeFinderAll',
    GetAllController = 'inputTypeGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        inputTypeRepository: asClass(SequelizeInputTypeRepository).singleton(),
        inputTypeFinderAll: asClass(InputTypeFinderAll),
        inputTypeGetAllController: asClass(InputTypeGetAllController),
    })
}

