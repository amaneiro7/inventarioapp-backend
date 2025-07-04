import { type Router } from 'express'
import { type RegionGetAllController } from '../../controllers/location/region.get-all.controller'
import { type RegionPatchController } from '../../controllers/location/region.patch.controller'
import { type RegionGetController } from '../../controllers/location/region.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { RegionDependencies } from '../../di/location/region.di'

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
	router.get('/regions/', authenticate, getAllController.run.bind(getAllController))

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
	router.get('/regions/:id', authenticate, getController.run.bind(getController))

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
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre de la región.
	 *                 example: "Región Central"
	 *     responses:
	 *       '200':
	 *         description: Región actualizada con éxito.
	 *       '404':
	 *         description: Región no encontrada.
	 */
	router.patch('/regions/:id', authenticate, patchController.run.bind(patchController))
}
