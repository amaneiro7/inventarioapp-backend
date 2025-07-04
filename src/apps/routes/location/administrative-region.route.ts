import { type Router } from 'express'
import { type AdministrativeRegionGetAllController } from '../../controllers/location/administrative-region.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { AdministrativeRegionDependencies } from '../../di/location/administrative-region.di'

export const register = async (router: Router) => {
	const getAllController: AdministrativeRegionGetAllController = container.resolve(
		AdministrativeRegionDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /administrativeregions:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Regiones Administrativas
	 *     summary: Obtener todas las regiones administrativas
	 *     description: Devuelve una lista de todas las regiones administrativas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de regiones administrativas obtenida con éxito.
	 */
	router.get('/administrativeregions/', authenticate, getAllController.run.bind(getAllController))
}
