import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { LocationDependencies } from '../../di/location/location.di'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'
import { type LocationGetController } from '../../controllers/location/location.get.controller'
import { type LocationGetAllController } from '../../controllers/location/location.get-all.controller'
import { type LocationSearchByCriteriaController } from '../../controllers/location/location.search-by-criteria.controller'
import { type LocationPostController } from '../../controllers/location/location.post.controller'
import { type LocationPatchController } from '../../controllers/location/location.patch.controller'
import { type LocationPingStatusController } from '../../controllers/location/location-pingstatus.controller'
import { type LocationMonitoringDashboardGetController } from '../../controllers/location/location-monitoring-dashboard.controller'
import { type LocationMonitoringDashboardByStateGetController } from '../../controllers/location/location-monitoring-dashboard-by-state.controller'
import { type LocationMonitoringDashboardByLocationGetController } from '../../controllers/location/location-monitoring-dashboard-by-location.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: LocationGetController = container.resolve(LocationDependencies.GetController)
	const getAllController: LocationGetAllController = container.resolve(LocationDependencies.GetAllController)
	const searchByCriteria: LocationSearchByCriteriaController = container.resolve(
		LocationDependencies.GetByCriteriaController
	)
	const postController: LocationPostController = container.resolve(LocationDependencies.PostController)
	const patchController: LocationPatchController = container.resolve(LocationDependencies.PatchController)

	const locationPingStatusController: LocationPingStatusController = container.resolve(
		LocationMonitoringDependencies.LocationPingStatusController
	)

	const locationMonitoringDashboardGetController: LocationMonitoringDashboardGetController = container.resolve(
		LocationMonitoringDependencies.LocationMonitoringDashboardGetController
	)
	const locationMonitoringDashboardByStateGetController: LocationMonitoringDashboardByStateGetController =
		container.resolve(LocationMonitoringDependencies.LocationMonitoringDashboardByStateGetController)
	const locationMonitoringDashboardByLocationGetController: LocationMonitoringDashboardByLocationGetController =
		container.resolve(LocationMonitoringDependencies.LocationMonitoringDashboardByLocationGetController)

	/**
	 * @swagger
	 * /locations:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Buscar ubicaciones por criterios
	 *     description: Devuelve una lista paginada de ubicaciones que coinciden con los filtros de búsqueda.
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
	router.get('/locations/', authenticate, criteriaConverterMiddleware, searchByCriteria.run.bind(searchByCriteria))

	/**
	 * @swagger
	 * /locations/all:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener todas las ubicaciones
	 *     description: Devuelve una lista completa de todas las ubicaciones sin paginación.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de ubicaciones obtenida con éxito.
	 */
	router.get('/locations/all', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /locations/ping-status:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener estado de ping de ubicaciones
	 *     description: Devuelve el estado de conexión (ping) de las ubicaciones monitorizadas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Estado de ping obtenido.
	 */
	router.get(
		'/locations/ping-status',
		authenticate,
		criteriaConverterMiddleware,
		locationPingStatusController.run.bind(locationPingStatusController)
	)

	/**
	 * @swagger
	 * /locations/dashboard/monitoring:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener datos del dashboard de monitoreo de ubicaciones
	 *     description: Devuelve un resumen de datos para el dashboard de monitoreo de ubicaciones.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get(
		'/locations/dashboard/monitoring',
		authenticate,
		criteriaConverterMiddleware,
		locationMonitoringDashboardGetController.run.bind(locationMonitoringDashboardGetController)
	)

	/**
	 * @swagger
	 * /locations/dashboard/monitoringbystate:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener datos del dashboard de monitoreo de ubicaciones por estado
	 *     description: Devuelve un resumen de datos de monitoreo de ubicaciones agrupados por estado.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get(
		'/locations/dashboard/monitoringbystate',
		authenticate,
		criteriaConverterMiddleware,
		locationMonitoringDashboardByStateGetController.run.bind(locationMonitoringDashboardByStateGetController)
	)

	/**
	 * @swagger
	 * /locations/dashboard/monitoringbylocation:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener datos del dashboard de monitoreo de ubicaciones por ubicación
	 *     description: Devuelve un resumen de datos de monitoreo de ubicaciones agrupados por ubicación.
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard obtenidos con éxito.
	 */
	router.get(
		'/locations/dashboard/monitoringbylocation',
		criteriaConverterMiddleware,
		locationMonitoringDashboardByLocationGetController.run.bind(locationMonitoringDashboardByLocationGetController)
	)

	/**
	 * @swagger
	 * /locations/{id}:
	 *   get:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Obtener una ubicación por ID
	 *     description: Devuelve los detalles completos de una ubicación específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la ubicación.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la ubicación.
	 *       '404':
	 *         description: Ubicación no encontrada.
	 */
	router.get('/locations/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /locations:
	 *   post:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Crear una nueva ubicación
	 *     description: Añade una nueva ubicación al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Location'
	 *     responses:
	 *       '201':
	 *         description: Ubicación creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/locations/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /locations/{id}:
	 *   patch:
	 *     tags:
	 *       - Ubicaciones
	 *     summary: Actualizar una ubicación existente
	 *     description: Actualiza la información de una ubicación específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la ubicación a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Location'
	 *     responses:
	 *       '200':
	 *         description: Ubicación actualizada con éxito.
	 *       '404':
	 *         description: Ubicación no encontrada.
	 */
	router.patch('/locations/:id', authenticate, patchController.run.bind(patchController))
}
