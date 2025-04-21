import { type Router } from 'express'
import { type GeneralDashboardGetController } from '../../controllers/dashboard/general-dashboard.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'

export const register = async (router: Router) => {
	const generalDashboard: GeneralDashboardGetController = container.resolve(
		ComputerDashboardDependencies.GeneralDashboardGetController
	)

	// get
	router.get('/dashboard/', authenticate, generalDashboard.run.bind(generalDashboard))
}
