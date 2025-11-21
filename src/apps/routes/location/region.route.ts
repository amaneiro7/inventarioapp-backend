import { type Router } from 'express'
import { type RegionGetAllController } from '../../controllers/location/region.get-all.controller'
import { type RegionPatchController } from '../../controllers/location/region.patch.controller'
import { type RegionGetController } from '../../controllers/location/region.get.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { RegionDependencies } from '../../di/location/region.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getController: RegionGetController = container.resolve(RegionDependencies.GetController)
	const getAllController: RegionGetAllController = container.resolve(RegionDependencies.GetAllController)
	const patchController: RegionPatchController = container.resolve(RegionDependencies.PatchController)

	/**
	 * @swagger
	 * /regions:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Regiones
	 *     summary: Obtener todas las regiones
	 *     description: Devuelve una lista de todas las regiones geográficas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de regiones obtenida con éxito.
	 */
	router.get(
		'/regions/',
		...protectedRoute,
		hasPermission(PERMISSIONS.REGIONS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /regions/{id}:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Regiones
	 *     summary: Obtener una región por ID
	 *     description: Devuelve los detalles de una región específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la región.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la región.
	 *       '404':
	 *         description: Región no encontrada.
	 */
	router.get(
		'/regions/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.REGIONS.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /regions/{id}:
	 *   patch:
	 *     tags:
	 *       - Ubicaciones - Regiones
	 *     summary: Actualizar una región existente
	 *     description: Actualiza el nombre de una región específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la región a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/GenericName'
	 *     responses:
	 *       '200':
	 *         description: Región actualizada con éxito.
	 *       '404':
	 *         description: Región no encontrada.
	 */
	router.patch(
		'/regions/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.REGIONS.UPDATE),
		patchController.run.bind(patchController)
	)
}
