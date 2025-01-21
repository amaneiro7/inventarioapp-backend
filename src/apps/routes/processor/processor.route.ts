import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { ProcessorDependencies } from '../../di/processor/processor.di'
import { type ProcessorPatchController } from '../../controllers/processor/processor.patch.controller'
import { type ProcessorPostController } from '../../controllers/processor/processor.post.controller'
import { type ProcessorGetController } from '../../controllers/processor/processor.get.controller'
import { type ProcessorGetAllController } from '../../controllers/processor/processor.get-all.controller'
import { type ProcessorDeleteController } from '../../controllers/processor/processor.delete.controller'

export const register = async (router: Router) => {
	const getController: ProcessorGetController = container.resolve(
		ProcessorDependencies.GetController
	)
	const getAllController: ProcessorGetAllController = container.resolve(
		ProcessorDependencies.GetAllController
	)
	const postController: ProcessorPostController = container.resolve(
		ProcessorDependencies.PostController
	)
	const patchController: ProcessorPatchController = container.resolve(
		ProcessorDependencies.PatchController
	)
	const deleteController: ProcessorDeleteController = container.resolve(
		ProcessorDependencies.DeleteController
	)

	router.get(
		'/processors/',
		authenticate,
		getAllController.run.bind(getAllController)
	)
	router.get(
		'/processors/:id',
		authenticate,
		getController.run.bind(getController)
	)

	router.post(
		'/processors/',
		authenticate,
		postController.run.bind(postController)
	)

	router.patch(
		'/processors/:id',
		authenticate,
		patchController.run.bind(patchController)
	)
	router.delete(
		'/processors/:id',
		authenticate,
		deleteController.run.bind(deleteController)
	)
}
