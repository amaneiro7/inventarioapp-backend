import { type Router } from 'express'
import { type HardDriveCapacityGetAllController } from '../../controllers/hard-drive/hard-drive-capacity.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { HardDriveCapacityDependencies } from '../../di/hard-drive/hard-drive-capacity.di'

export const register = async (router: Router) => {
	const getAllController: HardDriveCapacityGetAllController = container.resolve(
		HardDriveCapacityDependencies.GetAllController
	)

	router.get('/harddrivecapacities/', authenticate, getAllController.run.bind(getAllController))
}
