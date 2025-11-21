import { type Router } from 'express'
import { type AdministrativeRegionGetAllController } from '../../controllers/location/administrative-region.get-all.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { AdministrativeRegionDependencies } from '../../di/location/administrative-region.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'
import { hasPermission } from '../../Middleware/authorization'

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
	router.get(
		'/administrativeregions/',
		...protectedRoute,
		hasPermission(PERMISSIONS.ADMINISTRATIVE_REGIONS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}
