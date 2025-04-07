import { type Router } from 'express'
import { type RegionGetAllController } from '../../controllers/location/region.get-all.controller'
import { type RegionPatchController } from '../../controllers/location/region.patch.controller'
import { type RegionGetController } from '../../controllers/location/region.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { RegionDependencies } from '../../di/location/region.di'

export const register = async (router: Router) => {
	const getController: RegionGetController = container.resolve(RegionDependencies.GetController)
	const getAllController: RegionGetAllController = container.resolve(RegionDependencies.GetAllController)
	const patchController: RegionPatchController = container.resolve(RegionDependencies.PatchController)

	router.get('/regions/', authenticate, getAllController.run.bind(getAllController))
	router.get('/regions/:id', authenticate, getController.run.bind(getController))

	router.patch('/regions/:id', authenticate, patchController.run.bind(patchController))
}
