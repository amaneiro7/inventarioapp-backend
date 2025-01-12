import { asClass, type AwilixContainer } from "awilix"
import { SequelizeVicepresidenciaEjecutivaRepository } from "../../../Contexts/employee/VicepresidenciaEjecutiva/infrastructure/sequelize/SequelizeVicepresidenciaEjecutivaRepository"
import { VicepresidenciaEjecutivaFinderAll } from "../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaFinderAll"
import { VicepresidenciaEjecutivaFinder } from "../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaFinder"
import { VicepresidenciaEjecutivaCreator } from "../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaCreator"
import { VicepresidenciaEjecutivaUpdater } from "../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaUpdater"
import { VicepresidenciaEjecutivaGetAllController } from "../../controllers/employee/vicepresidencia-ejecutiva.get-all.controller"
import { VicepresidenciaEjecutivaGetController } from "../../controllers/employee/vicepresidencia-ejecutiva.get.controller"
import { VicepresidenciaEjecutivaPostController } from "../../controllers/employee/vicepresidencia-ejecutiva.post.controller"
import { VicepresidenciaEjecutivaPatchController } from "../../controllers/employee/vicepresidencia-ejecutiva.patch.controller"

export enum VicepresidenciaEjecutivaDependencies {
    Repository = 'vicepresidenciaEjecutivaRepository',
    FinderAll = 'vicepresidenciaEjecutivaFinderAll',
    Finder = 'vicepresidenciaEjecutivaFinder',
    Creator = 'vicepresidenciaEjecutivaCreator',
    Updater = 'vicepresidenciaEjecutivaUpdater',
    GetAllController = 'vicepresidenciaEjecutivaGetAllController',
    GetController = 'vicepresidenciaEjecutivaGetController',
    PostController = 'vicepresidenciaEjecutivaPostController',
    PatchController = 'vicepresidenciaEjecutivaPatchController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        vicepresidenciaEjecutivaRepository: asClass(SequelizeVicepresidenciaEjecutivaRepository).singleton(),
        vicepresidenciaEjecutivaFinderAll: asClass(VicepresidenciaEjecutivaFinderAll),
        vicepresidenciaEjecutivaFinder: asClass(VicepresidenciaEjecutivaFinder),
        vicepresidenciaEjecutivaCreator: asClass(VicepresidenciaEjecutivaCreator),
        vicepresidenciaEjecutivaUpdater: asClass(VicepresidenciaEjecutivaUpdater),
        vicepresidenciaEjecutivaGetAllController: asClass(VicepresidenciaEjecutivaGetAllController),
        vicepresidenciaEjecutivaGetController: asClass(VicepresidenciaEjecutivaGetController),
        vicepresidenciaEjecutivaPostController: asClass(VicepresidenciaEjecutivaPostController),
        vicepresidenciaEjecutivaPatchController: asClass(VicepresidenciaEjecutivaPatchController),
    })
}

