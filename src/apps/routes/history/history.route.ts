import { type Router } from 'express'
import { type HistoryGetAllController } from '../../controllers/history/history.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { HistoryDependencies } from '../../di/history/history.di'

export const register = async (router: Router) => {
	const getAllController: HistoryGetAllController = container.resolve(HistoryDependencies.GetAllController)

	router.get('/histories/', authenticate, getAllController.run.bind(getAllController))
}
