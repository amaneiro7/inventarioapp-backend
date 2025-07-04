import { type Router } from 'express'
import { type HistoryGetAllController } from '../../controllers/history/history.get-all.controller'
import { type HistoryDashboardGetController } from '../../controllers/history/history-dashboard.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { HistoryDependencies } from '../../di/history/history.di'

export const register = async (router: Router) => {
	const getAllController: HistoryGetAllController = container.resolve(HistoryDependencies.GetAllController)

	const historyDashboard: HistoryDashboardGetController = container.resolve(
		HistoryDependencies.HistoryDashboardGetController
	)

	/**
	 * @swagger
	 * /histories:
	 *   get:
	 *     tags:
	 *       - Historial
	 *     summary: Obtener todo el historial de cambios
	 *     description: Devuelve una lista de todos los registros de historial.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de historiales obtenida con éxito.
	 */
	router.get('/histories/', authenticate, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /histories/dashboard:
	 *   get:
	 *     tags:
	 *       - Historial
	 *     summary: Obtener datos del dashboard de historial
	 *     description: Devuelve un resumen de datos para el dashboard de historial.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get('/histories/dashboard/', authenticate, historyDashboard.run.bind(historyDashboard))
}
