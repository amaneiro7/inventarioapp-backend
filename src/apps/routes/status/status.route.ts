import { type Router } from 'express'
import { type StatusGetAllController } from '../../controllers/status/status.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { StatusDependencies } from '../../di/status/status.di'


export const register = async (router: Router) => {
    const getAllController: StatusGetAllController = container.resolve(StatusDependencies.GetAllController)


    router.get('/status/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
