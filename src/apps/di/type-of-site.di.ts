import { asClass, type AwilixContainer } from "awilix"
import { SequelizeTypeOfSiteRepository } from "../../Contexts/Location/TypeOfSite/infrastructure/sequelize/SequelizeTypeOfSiteRepository"
import { TypeOfSiteFinderAll } from "../../Contexts/Location/TypeOfSite/application/TypeOfSiteFinderAll"
import { TypeOfSiteGetAllController } from "../controllers/location/type-of-site.get-all.controller"

export enum TypeOfSiteDependencies {
    Repository = 'typeOfSiteRepository',
    FinderAll = 'typeOfSiteFinderAll',
    GetAllController = 'typeOfSiteGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        typeOfSiteRepository: asClass(SequelizeTypeOfSiteRepository).singleton(),
        typeOfSiteFinderAll: asClass(TypeOfSiteFinderAll),
        typeOfSiteGetAllController: asClass(TypeOfSiteGetAllController),
    })
}

