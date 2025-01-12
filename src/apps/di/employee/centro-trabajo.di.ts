import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCentroTrabajoRepository } from "../../../Contexts/employee/CentroTrabajo/infrastructure/sequelize/SequelizeCentroTrabajoRepository"
import { CentroTrabajoFinderAll } from "../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoFinderAll"
import { CentroTrabajoFinder } from "../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoFinder"
import { CentroTrabajoCreator } from "../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoCreator"
import { CentroTrabajoUpdater } from "../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoUpdater"
import { CentroTrabajoGetAllController } from "../../controllers/employee/centro-trabajo.get-all.controller"
import { CentroTrabajoGetController } from "../../controllers/employee/centro-trabajo.get.controller"
import { CentroTrabajoPostController } from "../../controllers/employee/centro-trabajo.post.controller"
import { CentroTrabajoPatchController } from "../../controllers/employee/centro-trabajo.patch.controller"

export enum CentroTrabajoDependencies {
    Repository = 'centroTrabajoRepository',
    FinderAll = 'centroTrabajoFinderAll',
    Finder = 'centroTrabajoFinder',
    Creator = 'centroTrabajoCreator',
    Updater = 'centroTrabajoUpdater',
    GetAllController = 'centroTrabajoGetAllController',
    GetController = 'centroTrabajoGetController',
    PostController = 'centroTrabajoPostController',
    PatchController = 'centroTrabajoPatchController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        centroTrabajoRepository: asClass(SequelizeCentroTrabajoRepository).singleton(),
        centroTrabajoFinderAll: asClass(CentroTrabajoFinderAll),
        centroTrabajoFinder: asClass(CentroTrabajoFinder),
        centroTrabajoCreator: asClass(CentroTrabajoCreator),
        centroTrabajoUpdater: asClass(CentroTrabajoUpdater),
        centroTrabajoGetAllController: asClass(CentroTrabajoGetAllController),
        centroTrabajoGetController: asClass(CentroTrabajoGetController),
        centroTrabajoPostController: asClass(CentroTrabajoPostController),
        centroTrabajoPatchController: asClass(CentroTrabajoPatchController),
    })
}

