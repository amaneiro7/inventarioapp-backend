import { type Router } from 'express'
import { type TypeOfSiteGetAllController } from '../../controllers/location/type-of-site.get-all.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { TypeOfSiteDependencies } from '../../di/location/type-of-site.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getAllController: TypeOfSiteGetAllController = container.resolve(TypeOfSiteDependencies.GetAllController)

	/**
	 * @swagger
	 * /typeofsites:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Tipos de Sitio
	 *     summary: Obtener todos los tipos de sitio
	 *     description: Devuelve una lista de todos los tipos de sitio (ej. Agencia, Oficina Central).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de tipos de sitio obtenida con éxito.
	 */
	router.get(
		'/typeofsites/',
		...protectedRoute,
		hasPermission(PERMISSIONS.TYPE_OF_SITES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}
