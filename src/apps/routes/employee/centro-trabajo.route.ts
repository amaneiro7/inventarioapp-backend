import { type Router } from 'express'
import { type CentroTrabajoGetAllController } from '../../controllers/employee/centro-trabajo.get-all.controller'
import { type CentroTrabajoPostController } from '../../controllers/employee/centro-trabajo.post.controller'
import { type CentroTrabajoPatchController } from '../../controllers/employee/centro-trabajo.patch.controller'
import { type CentroTrabajoGetController } from '../../controllers/employee/centro-trabajo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CentroTrabajoDependencies } from '../../di/employee/centro-trabajo.di'

export const register = async (router: Router) => {
	const getAllController: CentroTrabajoGetAllController = container.resolve(
		CentroTrabajoDependencies.GetAllController
	)
	const getController: CentroTrabajoGetController = container.resolve(CentroTrabajoDependencies.GetController)
	const postController: CentroTrabajoPostController = container.resolve(CentroTrabajoDependencies.PostController)
	const patchController: CentroTrabajoPatchController = container.resolve(CentroTrabajoDependencies.PatchController)

	router.get('/centrotrabajos/', authenticate, getAllController.run.bind(getAllController))

	router.get('/centrotrabajos/:id', authenticate, getController.run.bind(getController))

	//post
	router.post('/centrotrabajos/', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/centrotrabajos/:id', authenticate, patchController.run.bind(patchController))
}
