import { type Router } from 'express'
import { type MainCategoryGetAllController } from '../controllers/category/main-category.getAll.controller'
import { type MainCategoryGetController } from '../controllers/category/main-category.get.controller'
import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { MainCategoryDependencies } from '../di/main-category.di'


export const register = (router: Router) => {
    const getController: MainCategoryGetController = container.resolve(MainCategoryDependencies.GetController)
    const getAllController: MainCategoryGetAllController = container.resolve(MainCategoryDependencies.GetAllController)


    router.get('/maincategories/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
    router.get('/maincategories/:id',
        authenticate,
        getController.run.bind(getController)
    )
}
