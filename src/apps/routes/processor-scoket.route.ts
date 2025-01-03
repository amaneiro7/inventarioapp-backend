import { type Router } from 'express'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { ProcessorSocketDependencies } from '../di/processor-socket.di'
import { ProcessorSocketGetAllController } from '../controllers/processor/processor-socket.get-all.controller'

export const register = (router: Router) => {
    const getAllController: ProcessorSocketGetAllController = container.resolve(ProcessorSocketDependencies.GetAllController)

    router.get('/processorsockets/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
