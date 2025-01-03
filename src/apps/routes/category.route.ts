import { type Router } from 'express'
import { type CategoryGetAllController } from '../controllers/category/category.getAll.controller'
import { type CategoryGetController } from '../controllers/category/category.get.controller'
import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { CategoryDependencies } from '../di/category.di'


export const register = async (router: Router) => {
    const getController: CategoryGetController = container.resolve(CategoryDependencies.GetController)
    const getAllController: CategoryGetAllController = container.resolve(CategoryDependencies.GetAllController)


    router.get('/categories/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
    router.get('/categories/:id',
        authenticate,
        getController.run.bind(getController)
    )
}
