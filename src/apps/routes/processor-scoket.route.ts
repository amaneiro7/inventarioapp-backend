import { type Router } from 'express'
import { type ProcessorSocketGetAllController } from '../controllers/processor/processor-socket.get-all.controller'

import { container } from '../di/container'
import { authenticate } from '../Middleware/authenticate'
import { ProcessorSocketDependencies } from '../di/processor/processor-socket.di'

export const register = async (router: Router) => {
    const getAllController: ProcessorSocketGetAllController = container.resolve(ProcessorSocketDependencies.GetAllController)

    router.get('/processorsockets/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
