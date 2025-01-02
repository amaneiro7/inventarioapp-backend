import { asClass, type AwilixContainer } from "awilix"
import { MainCategoriesFinder } from "../../Contexts/Category/MainCategory/application/MainCategoryFinder"
import { MainCategoriesFinderAll } from "../../Contexts/Category/MainCategory/application/MainCategoryFinderAll"
import { SequelizeMainCategoryRepository } from "../../Contexts/Category/MainCategory/infrastructure/Sequelize/SequelizeMainCategoryRepository"
import { MainCategoryGetAllController } from "../controllers/category/main-category.getAll.controller"
import { MainCategoryGetController } from "../controllers/category/main-category.get.controller"

export enum MainCategoryDependencies {
    Repository = 'mainCategoryRepository',
    Finder = 'mainCategoryFinder',
    FinderAll = 'mainCategoryFinderAll',
    GetController = 'mainCategoryGetController',
    GetAllController = 'mainCategoryGetAllController',
}

export const register = (container: AwilixContainer) => {
    container.register({
        mainCategoryRepository: asClass(SequelizeMainCategoryRepository).singleton(),
        mainCategoryFinder: asClass(MainCategoriesFinder),
        mainCategoryFinderAll: asClass(MainCategoriesFinderAll),
        mainCategoryGetController: asClass(MainCategoryGetController),
        mainCategoryGetAllController: asClass(MainCategoryGetAllController)
    })
}
