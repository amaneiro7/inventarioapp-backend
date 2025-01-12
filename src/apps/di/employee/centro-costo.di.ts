import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCentroCostoRepository } from "../../../Contexts/employee/CentroCosto/infrastructure/sequelize/SequelizeCentroCostoRepository"
import { CentroCostoFinderAll } from "../../../Contexts/employee/CentroCosto/application/CentroCostoFinderAll"
import { CentroCostoFinder } from "../../../Contexts/employee/CentroCosto/application/CentroCostoFinder"
import { CentroCostoCreator } from "../../../Contexts/employee/CentroCosto/application/CentroCostoCreator"
import { CentroCostoUpdater } from "../../../Contexts/employee/CentroCosto/application/CentroCostoUpdater"
import { CentroCostoGetAllController } from "../../controllers/employee/centro-costo.get-all.controller"
import { CentroCostoGetController } from "../../controllers/employee/centro-costo.get.controller"
import { CentroCostoPostController } from "../../controllers/employee/centro-costo.post.controller"
import { CentroCostoPatchController } from "../../controllers/employee/centro-costo.patch.controller"

export enum CentroCostoDependencies {
    Repository = 'centroCostoRepository',
    FinderAll = 'centroCostoFinderAll',
    Finder = 'centroCostoFinder',
    Creator = 'centroCostoCreator',
    Updater = 'centroCostoUpdater',
    GetAllController = 'centroCostoGetAllController',
    GetController = 'centroCostoGetController',
    PostController = 'centroCostoPostController',
    PatchController = 'centroCostoPatchController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        centroCostoRepository: asClass(SequelizeCentroCostoRepository).singleton(),
        centroCostoFinderAll: asClass(CentroCostoFinderAll),
        centroCostoFinder: asClass(CentroCostoFinder),
        centroCostoCreator: asClass(CentroCostoCreator),
        centroCostoUpdater: asClass(CentroCostoUpdater),
        centroCostoGetAllController: asClass(CentroCostoGetAllController),
        centroCostoGetController: asClass(CentroCostoGetController),
        centroCostoPostController: asClass(CentroCostoPostController),
        centroCostoPatchController: asClass(CentroCostoPatchController),
    })
}

