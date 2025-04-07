import { type Router } from 'express'
import { type AdministrativeRegionGetAllController } from '../../controllers/location/administrative-region.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { AdministrativeRegionDependencies } from '../../di/location/administrative-region.di'

export const register = async (router: Router) => {
	const getAllController: AdministrativeRegionGetAllController = container.resolve(
		AdministrativeRegionDependencies.GetAllController
	)

	router.get('/administrativeregions/', authenticate, getAllController.run.bind(getAllController))
}
