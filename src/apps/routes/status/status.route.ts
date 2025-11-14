import { type Router } from 'express'
import { type StatusGetAllController } from '../../controllers/status/status.get-all.controller'
import { type StatusDashboardGetController } from '../../controllers/status/status-dashboard.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { StatusDependencies } from '../../di/status/status.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: StatusGetAllController = container.resolve(StatusDependencies.GetAllController)
	const statusDashboard: StatusDashboardGetController = container.resolve(
		StatusDependencies.StatusDashboardGetController
	)

	/**
	 * @swagger
	 * /status:
	 *   get:
	 *     tags:
	 *       - Estados
	 *     summary: Obtener todos los estados
	 *     description: Devuelve una lista de todos los estados posibles de un dispositivo o elemento.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de estados obtenida con éxito.
	 */
	router.get('/status/', ...protectedRoute, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /status/dashboard:
	 *   get:
	 *     tags:
	 *       - Estados
	 *     summary: Obtener datos del dashboard de estados
	 *     description: Devuelve un resumen de datos para el dashboard de estados.
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get('/status/dashboard/', statusDashboard.run.bind(statusDashboard))
}
