import { type Router } from 'express'
import { type LocationStatusGetAllController } from '../../controllers/location/location-status.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { LocationStatusDependencies } from '../../di/location/operational-status.di'

export const register = async (router: Router) => {
	const getAllController: LocationStatusGetAllController = container.resolve(
		LocationStatusDependencies.GetAllController
	)

	router.get('/operationalstatus/', authenticate, getAllController.run.bind(getAllController))
}
