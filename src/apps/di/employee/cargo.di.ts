import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCargoRepository } from "../../../Contexts/employee/Cargo/infrastructure/sequelize/SequelizeCargoRepository"
import { CargoFinderAll } from "../../../Contexts/employee/Cargo/application/CargoFinderAll"
import { CargoGetAllController } from "../../controllers/employee/cargo.get-all.controller"
import { CargoFinder } from "../../../Contexts/employee/Cargo/application/CargoFinder"
import { CargoCreator } from "../../../Contexts/employee/Cargo/application/CargoCreator"
import { CargoUpdater } from "../../../Contexts/employee/Cargo/application/CargoUpdater"
import { CargoGetController } from "../../controllers/employee/cargo.get.controller"
import { CargoPostController } from "../../controllers/employee/cargo.post.controller"
import { CargoPatchController } from "../../controllers/employee/cargo.patch.controller"

export enum CargoDependencies {
    Repository = 'cargoRepository',
    FinderAll = 'cargoFinderAll',
    Finder = 'cargoFinder',
    Creator = 'cargoCreator',
    Updater = 'cargoUpdater',
    GetAllController = 'cargoGetAllController',
    GetController = 'cargoGetController',
    PostController = 'cargoPostController',
    PatchController = 'cargoPatchController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        cargoRepository: asClass(SequelizeCargoRepository).singleton(),
        cargoFinderAll: asClass(CargoFinderAll),
        cargoFinder: asClass(CargoFinder),
        cargoCreator: asClass(CargoCreator),
        cargoUpdater: asClass(CargoUpdater),
        cargoGetAllController: asClass(CargoGetAllController),
        cargoGetController: asClass(CargoGetController),
        cargoPostController: asClass(CargoPostController),
        cargoPatchController: asClass(CargoPatchController),
    })
}

