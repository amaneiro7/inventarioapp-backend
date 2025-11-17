import { type Router } from 'express'
import { container } from '../../di/container'
import { type BrandGetAllController } from '../../controllers/brand/brand.get-all.controller'
import { type BrandPostController } from '../../controllers/brand/brand.post.controller'
import { type BrandPatchController } from '../../controllers/brand/brand.patch.controller'
import { type BrandGetController } from '../../controllers/brand/brand.get.controller'
import { BrandDependencies } from '../../di/brand/brand.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'

export const register = async (router: Router) => {
	const getController: BrandGetController = container.resolve(BrandDependencies.GetController)
	const getAllController: BrandGetAllController = container.resolve(BrandDependencies.GetAllController)
	const postController: BrandPostController = container.resolve(BrandDependencies.PostController)
	const patchController: BrandPatchController = container.resolve(BrandDependencies.PatchController)

	/**
	 * @swagger
	 * /brands:
	 *   get:
	 *     tags:
	 *       - Marcas
	 *     summary: Obtener todas las marcas
	 *     description: Devuelve una lista de todas las marcas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de marcas obtenida con éxito.
	 */
	router.get('/brands/', ...protectedRoute, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /brands/{id}:
	 *   get:
	 *     tags:
	 *       - Marcas
	 *     summary: Obtener una marca por ID
	 *     description: Devuelve los detalles de una marca específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la marca.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la marca.
	 *       '404':
	 *         description: Marca no encontrada.
	 */
	router.get('/brands/:id', ...protectedRoute, getController.run.bind(getController))

	/**
	 * @swagger
	 * /brands:
	 *   post:
	 *     tags:
	 *       - Marcas
	 *     summary: Crear una nueva marca
	 *     description: Añade una nueva marca al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Brand'
	 *     responses:
	 *       '201':
	 *         description: Marca creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/brands/', ...protectedRoute, postController.run.bind(postController))

	/**
	 * @swagger
	 * /brands/{id}:
	 *   patch:
	 *     tags:
	 *       - Marcas
	 *     summary: Actualizar una marca existente
	 *     description: Actualiza el nombre de una marca específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la marca a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Brand'
	 *     responses:
	 *       '200':
	 *         description: Marca actualizada con éxito.
	 *       '404':
	 *         description: Marca no encontrada.
	 */
	router.patch('/brands/:id', ...protectedRoute, patchController.run.bind(patchController))
}
