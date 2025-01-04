import { asClass, type AwilixContainer } from "awilix"
import { SequelizeCategoryRepository } from "../../../Contexts/Category/Category/infrastructure/Sequelize/SequelizeCategoryRepository"
import { CategoriesFinderAll } from "../../../Contexts/Category/Category/application/CategoryFinderAll"
import { CategoriesFinder } from "../../../Contexts/Category/Category/application/CategoryFinder"
import { CategoryGetController } from "../../controllers/category/category.get.controller"
import { CategoryGetAllController } from "../../controllers/category/category.get-all.controller"

export enum CategoryDependencies {
    Repository = 'categoryRepository',
    Finder = 'categoryFinder',
    FinderAll = 'categoryFinderAll',
    GetController = 'categoryGetController',
    GetAllController = 'categoryGetAllController',
}

export const register = (container: AwilixContainer) => {
    container.register({
        categoryRepository: asClass(SequelizeCategoryRepository).singleton(),
        categoryFinder: asClass(CategoriesFinder),
        categoryFinderAll: asClass(CategoriesFinderAll),
        categoryGetController: asClass(CategoryGetController),
        categoryGetAllController: asClass(CategoryGetAllController)

    })
}
