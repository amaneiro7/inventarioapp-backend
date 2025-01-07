import { type Router } from 'express'
import { type TypeOfSiteGetAllController } from '../../controllers/location/type-of-site.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { TypeOfSiteDependencies } from '../../di/location/type-of-site.di'

export const register = async (router: Router) => {
    const getAllController: TypeOfSiteGetAllController = container.resolve(TypeOfSiteDependencies.GetAllController)

    router.get('/typeofsites/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
