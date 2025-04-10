import { type Router } from 'express'
import { type VicepresidenciaGetAllController } from '../../controllers/employee/vicepresidencia.get-all.controller'
import { type VicepresidenciaPostController } from '../../controllers/employee/vicepresidencia.post.controller'
import { type VicepresidenciaPatchController } from '../../controllers/employee/vicepresidencia.patch.controller'
import { type VicepresidenciaGetController } from '../../controllers/employee/vicepresidencia.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'

export const register = async (router: Router) => {
	const getAllController: VicepresidenciaGetAllController = container.resolve(
		VicepresidenciaDependencies.GetAllController
	)
	const getController: VicepresidenciaGetController = container.resolve(VicepresidenciaDependencies.GetController)
	const postController: VicepresidenciaPostController = container.resolve(VicepresidenciaDependencies.PostController)
	const patchController: VicepresidenciaPatchController = container.resolve(
		VicepresidenciaDependencies.PatchController
	)

	router.get('/vicepresidencias/', authenticate, getAllController.run.bind(getAllController))

	router.get('/vicepresidencias/:id', authenticate, getController.run.bind(getController))

	//post
	router.post('/vicepresidencias/', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/vicepresidencias/:id', authenticate, patchController.run.bind(patchController))
}
