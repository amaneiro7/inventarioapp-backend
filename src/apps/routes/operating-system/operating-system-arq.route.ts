import { type Router } from 'express'
import { type OperatingSystemArqGetAllController } from '../../controllers/operating-system/operating-system-arq.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { OperatingSystemArqDependencies } from '../../di/operating-system/operating-system-arq.di'

export const register = async (router: Router) => {
	const getAllController: OperatingSystemArqGetAllController =
		container.resolve(OperatingSystemArqDependencies.GetAllController)

	router.get(
		'/operatingsystemarqs/',
		authenticate,
		getAllController.run.bind(getAllController)
	)
}
