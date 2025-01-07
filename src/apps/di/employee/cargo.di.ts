import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCargoRepository } from "../../../Contexts/employee/Cargo/infrastructure/sequelize/SequelizeCargoRepository"
import { CargoFinderAll } from "../../../Contexts/employee/Cargo/application/CargoFinderAll"
import { CargoGetAllController } from "../../controllers/employee/cargo.get-all.controller"

export enum CargoDependencies {
    Repository = 'cargoRepository',
    FinderAll = 'cargoFinderAll',
    GetAllController = 'cargoGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        cargoRepository: asClass(SequelizeCargoRepository).singleton(),
        cargoFinderAll: asClass(CargoFinderAll),
        cargoGetAllController: asClass(CargoGetAllController),
    })
}

