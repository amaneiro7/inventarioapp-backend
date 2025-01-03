import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCityRepository } from "../../Contexts/Location/City/infrastructure/sequelize/SequelizeCityRepository"
import { CityFinderAll } from "../../Contexts/Location/City/application/CityFinderAll"
import { CityGetAllController } from "../controllers/location/city.get-all.controller"

export enum CityDependencies {
    Repository = 'cityRepository',
    FinderAll = 'cityFinderAll',
    GetAllController = 'cityGetAllController',
}

export const register = (container: AwilixContainer) => {

    container.register({
        cityRepository: asClass(SequelizeCityRepository).singleton(),
        cityFinderAll: asClass(CityFinderAll),
        cityGetAllController: asClass(CityGetAllController),
    })
}

