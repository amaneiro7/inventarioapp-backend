import { type Router } from 'express'
import { type HardDriveTypeGetAllController } from '../controllers/hard-drive/hardDriveType.getAll.controller'

import { container } from '../di/container'
import { authenticate } from '../Shared/Middleware/authenticate'
import { HardDriveTypeDependencies } from '../di/hard-drive-type.di'

export const register = async (router: Router) => {
    const getAllController: HardDriveTypeGetAllController = container.resolve(HardDriveTypeDependencies.GetAllController)

    router.get('/harddrivetypes/',
        authenticate,
        getAllController.run.bind(getAllController)
    )
}
