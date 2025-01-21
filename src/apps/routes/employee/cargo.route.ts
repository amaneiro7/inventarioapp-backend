import { type Router } from 'express'
import { type CargoGetAllController } from '../../controllers/employee/cargo.get-all.controller'
import { type CargoPostController } from '../../controllers/employee/cargo.post.controller'
import { type CargoPatchController } from '../../controllers/employee/cargo.patch.controller'
import { type CargoGetController } from '../../controllers/employee/cargo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CargoDependencies } from '../../di/employee/cargo.di'

export const register = async (router: Router) => {
	const getAllController: CargoGetAllController = container.resolve(
		CargoDependencies.GetAllController
	)
	const getController: CargoGetController = container.resolve(
		CargoDependencies.GetController
	)
	const postController: CargoPostController = container.resolve(
		CargoDependencies.PostController
	)
	const patchController: CargoPatchController = container.resolve(
		CargoDependencies.PatchController
	)

	router.get(
		'/cargos/',
		authenticate,
		getAllController.run.bind(getAllController)
	)

	router.get(
		'/cargos/:id',
		authenticate,
		getController.run.bind(getController)
	)

	//post
	router.post(
		'/cargos/',
		authenticate,
		postController.run.bind(postController)
	)

	// patch
	router.patch(
		'/cargos/:id',
		authenticate,
		patchController.run.bind(patchController)
	)
}
