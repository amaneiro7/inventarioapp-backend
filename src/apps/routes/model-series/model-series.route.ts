import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'
import { hasPermission } from '../../Middleware/authorization'
import { type ModelSeriesGetAllController } from '../../controllers/model-series/model-series.get-all.controller'
import { type ModelSeriesGetController } from '../../controllers/model-series/model-series.get.controller'
import { type ModelSeriesPostController } from '../../controllers/model-series/model-series.post.controller'
import { type ModelSeriesPatchController } from '../../controllers/model-series/model-series.patch.controller'
import { type ModelSeriesSearchByCriteriaController } from '../../controllers/model-series/model-series.search-by-criteria.controller'
import { type ModelSeriesDownloadExcelServiceController } from '../../controllers/model-series/model-series.download-excel-service.controller'

export const register = async (router: Router) => {
	const getController: ModelSeriesGetController = container.resolve(ModelSeriesDependencies.GetController)
	const getAllController: ModelSeriesGetAllController = container.resolve(ModelSeriesDependencies.GetAllController)
	const postController: ModelSeriesPostController = container.resolve(ModelSeriesDependencies.PostController)
	const patchController: ModelSeriesPatchController = container.resolve(ModelSeriesDependencies.PatchController)
	const searchByCriteria: ModelSeriesSearchByCriteriaController = container.resolve(
		ModelSeriesDependencies.GetByCriteriaController
	)

	const download: ModelSeriesDownloadExcelServiceController = container.resolve(
		ModelSeriesDependencies.ExcelDownloadController
	)

	/**
	 * @swagger
	 * /models:
	 *   get:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Buscar modelos/series por criterios
	 *     description: Devuelve una lista paginada de modelos/series que coinciden con los filtros de búsqueda.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: query
	 *         name: filters
	 *         schema:
	 *           type: string
	 *         description: Filtros de búsqueda (ej. `field,operator,value`).
	 *       - in: query
	 *         name: orderBy
	 *         schema:
	 *           type: string
	 *         description: Campo por el cual ordenar.
	 *       - in: query
	 *         name: orderType
	 *         schema:
	 *           type: string
	 *         description: Tipo de orden (asc, desc).
	 *       - in: query
	 *         name: limit
	 *         schema:
	 *           type: integer
	 *         description: Número de resultados por página.
	 *       - in: query
	 *         name: offset
	 *         schema:
	 *           type: integer
	 *         description: Número de resultados a saltar.
	 *     responses:
	 *       '200':
	 *         description: Búsqueda exitosa.
	 */
	router.get(
		'/models/',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.READ_LIST),
		criteriaConverterMiddleware,
		searchByCriteria.run.bind(searchByCriteria)
	)

	/**
	 * @swagger
	 * /models/all:
	 *   get:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Obtener todos los modelos/series
	 *     description: Devuelve una lista completa de todos los modelos/series sin paginación.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de modelos/series obtenida con éxito.
	 */
	router.get(
		'/models/all',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /models/download:
	 *   get:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Descargar modelos/series en Excel
	 *     description: Genera y descarga un archivo Excel con la lista de modelos/series.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Archivo Excel generado.
	 *         content:
	 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
	 *             schema:
	 *               type: string
	 *               format: binary
	 */
	router.get(
		'/models/download',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.DOWNLOAD),
		criteriaConverterMiddleware,
		download.run.bind(download)
	)

	/**
	 * @swagger
	 * /models/{id}:
	 *   get:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Obtener un modelo/serie por ID
	 *     description: Devuelve los detalles completos de un modelo/serie específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del modelo/serie.
	 *     responses:
	 *       '200':
	 *         description: Detalles del modelo/serie.
	 *       '404':
	 *         description: Modelo/serie no encontrado.
	 */
	router.get(
		'/models/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /models:
	 *   post:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Crear un nuevo modelo/serie
	 *     description: Añade un nuevo modelo/serie al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ModelSeries'
	 *     responses:
	 *       '201':
	 *         description: Modelo/serie creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/models/',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /models/{id}:
	 *   patch:
	 *     tags:
	 *       - Modelos/Series
	 *     summary: Actualizar un modelo/serie existente
	 *     description: Actualiza la información de un modelo/serie específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del modelo/serie a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ModelSeries'
	 *     responses:
	 *       '200':
	 *         description: Modelo/serie actualizado con éxito.
	 *       '404':
	 *         description: Modelo/serie no encontrado.
	 */
	router.patch(
		'/models/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.MODELS.UPDATE),
		patchController.run.bind(patchController)
	)
}
