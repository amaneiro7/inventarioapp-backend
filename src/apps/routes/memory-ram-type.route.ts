import { type Router } from 'express'
import { type MemoryRamTypeGetAllController } from '../controllers/memory-ram/memoryRam.getAll.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { MemoryRamTypeDependencies } from '../di/memory-ram-type.di'

export const register = async (router: Router) => {
    const getAllController: MemoryRamTypeGetAllController = container.resolve(MemoryRamTypeDependencies.GetAllController)

    router.get('/memoryramtypes/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
