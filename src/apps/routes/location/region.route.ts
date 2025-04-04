import { type Router } from 'express'
import { type RegionGetAllController } from '../../controllers/location/region.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { RegionDependencies } from '../../di/location/region.di'

export const register = async (router: Router) => {
	const getAllController: RegionGetAllController = container.resolve(RegionDependencies.GetAllController)

	router.get('/regions/', authenticate, getAllController.run.bind(getAllController))
}
