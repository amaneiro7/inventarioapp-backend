import { type Router } from 'express'
import { type OperatingSystemGetAllController } from '../controllers/operating-system/operating-system.get-all.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { OperatingSystemDependencies } from '../di/operating-system.di'

export const register = (router: Router) => {
    const getAllController: OperatingSystemGetAllController = container.resolve(OperatingSystemDependencies.GetAllController)

    router.get('/operatingsystems/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
