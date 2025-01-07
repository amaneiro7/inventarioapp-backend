import { type Router } from 'express'
import { type CityGetAllController } from '../../controllers/location/city.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CityDependencies } from '../../di/location/city.di'

export const register = async (router: Router) => {
    const getAllController: CityGetAllController = container.resolve(CityDependencies.GetAllController)

    router.get('/cities/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
