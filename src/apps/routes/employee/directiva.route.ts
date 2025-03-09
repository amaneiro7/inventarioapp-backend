import { type Router } from 'express'
import { type DirectivaGetAllController } from '../../controllers/employee/directiva.get-all.controller'
import { type DirectivaPostController } from '../../controllers/employee/directiva.post.controller'
import { type DirectivaPatchController } from '../../controllers/employee/directiva.patch.controller'
import { type DirectivaGetController } from '../../controllers/employee/directiva.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export const register = async (router: Router) => {
	const getAllController: DirectivaGetAllController = container.resolve(DirectivaDependencies.GetAllController)
	const getController: DirectivaGetController = container.resolve(DirectivaDependencies.GetController)
	const postController: DirectivaPostController = container.resolve(DirectivaDependencies.PostController)
	const patchController: DirectivaPatchController = container.resolve(DirectivaDependencies.PatchController)

	router.get('/directivas/', authenticate, getAllController.run.bind(getAllController))

	router.get('/directivas/:id', authenticate, getController.run.bind(getController))

	//post
	router.post('/directivas/', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/directivas/:id', authenticate, patchController.run.bind(patchController))
}
