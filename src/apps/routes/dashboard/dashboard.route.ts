import { type Router } from 'express'
import { type GeneralDashboardGetController } from '../../controllers/dashboard/general-dashboard.controller'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'
import { protectedRoute } from '../../Middleware/protectedRoute'

export const register = async (router: Router) => {
	const generalDashboard: GeneralDashboardGetController = container.resolve(
		ComputerDashboardDependencies.GeneralDashboardGetController
	)

	/**
	 * @swagger
	 * /dashboard:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *     summary: Obtener datos generales del dashboard
	 *     description: Devuelve un resumen de datos para el dashboard principal, como contadores de dispositivos, etc.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get('/dashboard/', ...protectedRoute, generalDashboard.run.bind(generalDashboard))
}
