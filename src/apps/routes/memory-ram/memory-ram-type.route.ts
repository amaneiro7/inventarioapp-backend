import { type Router } from 'express'
import { type MemoryRamTypeGetAllController } from '../../controllers/memory-ram/memoryRam.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { MemoryRamTypeDependencies } from '../../di/memory-ram/memory-ram-type.di'

export const register = async (router: Router) => {
    const getAllController: MemoryRamTypeGetAllController = container.resolve(MemoryRamTypeDependencies.GetAllController)

    router.get('/memoryramtypes/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
