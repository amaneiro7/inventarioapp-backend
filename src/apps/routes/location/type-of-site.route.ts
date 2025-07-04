import { type Router } from 'express'
import { type TypeOfSiteGetAllController } from '../../controllers/location/type-of-site.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { TypeOfSiteDependencies } from '../../di/location/type-of-site.di'

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
	router.get('/typeofsites/', authenticate, getAllController.run.bind(getAllController))
}
