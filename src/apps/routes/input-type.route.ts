import { type Router } from 'express'
import { type InputTypeGetAllController } from '../controllers/input-type/input-type.get-all.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { InputTypeDependencies } from '../di/input-type.di'

export const register = async (router: Router) => {
    const getAllController: InputTypeGetAllController = container.resolve(InputTypeDependencies.GetAllController)

    router.get('/inputtypes/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
