import { type AwilixContainer, asClass } from "awilix"
import { SequelizeLocationRepository } from "../../Contexts/Location/Location/infrastructure/sequelize/SequelizeLocationRepository"
import { LocationFinder } from "../../Contexts/Location/Location/application/LocationFinder"
import { LocationFinderAll } from "../../Contexts/Location/Location/application/LocationFinderAll"
import { LocationCreator } from "../../Contexts/Location/Location/application/LocationCreator"
import { LocationUpdater } from "../../Contexts/Location/Location/application/LocationUpdater"
import { LocationSearchByCriteria } from "../../Contexts/Location/Location/application/LocationSearchByCriteria"
import { LocationGetAllController } from "../controllers/location/location.get-all.controller"
import { LocationGetController } from "../controllers/location/location.get.controller"
import { LocationPostController } from "../controllers/location/location.post.controller"
import { LocationPatchController } from "../controllers/location/location.patch.controller"
import { LocationSearchByCriteriaController } from "../controllers/location/location.search-by-criteria.controller"


export enum LocationDependencies {
    Repository = 'locationRepository',

    Finder = 'locationFinder',
    FinderAll = 'locationFinderAll',
    SearchByCriteria = 'locationSearchByCriteria',
    Creator = 'locationCreator',
    Updater = 'locationUpdater',

    GetController = 'locationGetController',
    GetAllController = 'locationGetAllController',
    GetByCriteriaController = 'locationGetByCriteria',
    PostController = 'locationPostController',
    PatchController = 'locationPatchController',
}

export const register = (container: AwilixContainer) => {
    container.register({
        locationRepository: asClass(SequelizeLocationRepository).singleton(),
        locationFinder: asClass(LocationFinder),
        locationFinderAll: asClass(LocationFinderAll),
        locationSearchByCriteria: asClass(LocationSearchByCriteria),
        locationCreator: asClass(LocationCreator),
        locationUpdater: asClass(LocationUpdater),
        locationGetController: asClass(LocationGetController),
        locationGetAllController: asClass(LocationGetAllController),
        locationPostController: asClass(LocationPostController),
        locationPatchController: asClass(LocationPatchController),
        locationGetByCriteria: asClass(LocationSearchByCriteriaController),
    })
}