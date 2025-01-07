import { type Router } from 'express'
import { type CargoGetAllController } from '../../controllers/employee/cargo.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CargoDependencies } from '../../di/employee/cargo.di'

export const register = async (router: Router) => {
    const getAllController: CargoGetAllController = container.resolve(CargoDependencies.GetAllController)

    router.get('/cargos/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
