import { asClass, type AwilixContainer } from "awilix"
import { SequelizeDepartamentoRepository } from "../../../Contexts/employee/Departamento/infrastructure/sequelize/SequelizeDepartmentoRepository"
import { DepartamentoUpdater } from "../../../Contexts/employee/Departamento/application/DepartamentoUpdater"
import { DepartamentoCreator } from "../../../Contexts/employee/Departamento/application/DepartamentoCreator"
import { DepartamentoFinder } from "../../../Contexts/employee/Departamento/application/DepartamentoFinder"
import { DepartamentoFinderAll } from "../../../Contexts/employee/Departamento/application/DepartamentoFinderAll"
import { DepartamentoGetAllController } from "../../controllers/employee/departamento.get-all.controller"
import { DepartamentoGetController } from "../../controllers/employee/departamento.get.controller"
import { DepartamentoPostController } from "../../controllers/employee/departamento.post.controller"
import { DepartamentoPatchController } from "../../controllers/employee/departamento.patch.controller"

export enum DepartamentoDependencies {
    Repository = 'departamentoRepository',
    FinderAll = 'departamentoFinderAll',
    Finder = 'departamentoFinder',
    Creator = 'departamentoCreator',
    Updater = 'departamentoUpdater',
    GetAllController = 'departamentoGetAllController',
    GetController = 'departamentoGetController',
    PostController = 'departamentoPostController',
    PatchController = 'departamentoPatchController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        departamentoRepository: asClass(SequelizeDepartamentoRepository).singleton(),
        departamentoFinderAll: asClass(DepartamentoFinderAll),
        departamentoFinder: asClass(DepartamentoFinder),
        departamentoCreator: asClass(DepartamentoCreator),
        departamentoUpdater: asClass(DepartamentoUpdater),
        departamentoGetAllController: asClass(DepartamentoGetAllController),
        departamentoGetController: asClass(DepartamentoGetController),
        departamentoPostController: asClass(DepartamentoPostController),
        departamentoPatchController: asClass(DepartamentoPatchController),
    })
}

