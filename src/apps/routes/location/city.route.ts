import { type Router } from 'express'
import { type CityGetAllController } from '../../controllers/location/city.get-all.controller'
import { type CityPostController } from '../../controllers/location/city.post.controller'
import { type CityPatchController } from '../../controllers/location/city.patch.controller'
import { type CityGetController } from '../../controllers/location/city.get.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CityDependencies } from '../../di/location/city.di'

export const register = async (router: Router) => {
	const getController: CityGetController = container.resolve(CityDependencies.GetController)
	const getAllController: CityGetAllController = container.resolve(CityDependencies.GetAllController)
	const postController: CityPostController = container.resolve(CityDependencies.PostController)
	const patchController: CityPatchController = container.resolve(CityDependencies.PatchController)

	router.get('/cities/', authenticate, getAllController.run.bind(getAllController))
	router.get('/cities/:id', authenticate, getController.run.bind(getController))

	router.post('/cities/', authenticate, postController.run.bind(postController))

	router.patch('/cities/:id', authenticate, patchController.run.bind(patchController))
}
