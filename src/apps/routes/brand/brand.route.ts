import { validateReqSchema } from '../index'
import { postBrandSchema, patchBrandSchema } from './brand.validator'
import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { type BrandGetFinderAllController } from '../../controllers/brand/brand.get-all.controller'
import { type BrandPostController } from '../../controllers/brand/brand.post.controller'
import { type BrandPatchController } from '../../controllers/brand/brand.patch.controller'
import { type BrandGetFinderController } from '../../controllers/brand/brand.get.controller'
import { BrandDependencies } from '../../di/brand/brand.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: BrandGetFinderController = container.resolve(BrandDependencies.GetController)
	const getAllController: BrandGetFinderAllController = container.resolve(BrandDependencies.GetAllController)
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
	router.get('/brands/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

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
	router.get('/brands/:id', authenticate, getController.run.bind(getController))

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
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nombre de la marca.
	 *                 example: "HP"
	 *     responses:
	 *       '201':
	 *         description: Marca creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/brands/', authenticate, postBrandSchema, validateReqSchema, postController.run.bind(postController))

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
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre de la marca.
	 *                 example: "Hewlett-Packard"
	 *     responses:
	 *       '200':
	 *         description: Marca actualizada con éxito.
	 *       '404':
	 *         description: Marca no encontrada.
	 */
	router.patch(
		'/brands/:id',
		authenticate,
		patchBrandSchema,
		validateReqSchema,
		patchController.run.bind(patchController)
	)
}
