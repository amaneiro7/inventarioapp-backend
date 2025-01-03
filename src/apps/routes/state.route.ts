import { type Router } from 'express'
import { type StateGetAllController } from '../controllers/location/state.get-all.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { StateDependencies } from '../di/state.di'

export const register = async (router: Router) => {
    const getAllController: StateGetAllController = container.resolve(StateDependencies.GetAllController)

    router.get('/states/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
