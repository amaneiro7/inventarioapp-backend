import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DeviceDependencies } from '../../di/device/device.di'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'

// import { type DeviceGetAllController } from '../controllers/device/device.getAll.controller'
import { type DevicePatchController } from '../../controllers/device/device.patch.controller'
import { type DeviceGetController } from '../../controllers/device/device.get.controller'
import { type DevicePostController } from '../../controllers/device/device.post.controller'
import { type DeviceSearchByCriteriaController } from '../../controllers/device/device.search-by-criteria.controller'
import { type DeviceDeleteController } from '../../controllers/device/device.delete.controller'
import { type DeviceDownloadExcelServiceController } from '../../controllers/device/device.download-excel-service.controller'
import { type ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'
import { type DevicePingStatusController } from '../../controllers/device/device-pingstatus.controller'
import { type DeviceMonitoringDashboardGetController } from '../../controllers/device/device-monitoring-dashboard.controller'
import { type DeviceMonitoringDashboardByStateGetController } from '../../controllers/device/device-monitoring-dashboard-by-state.controller'
import { type DeviceMonitoringDashboardByLocationGetController } from '../../controllers/device/device-monitoring-dashboard-by-location.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: DeviceGetController = container.resolve(DeviceDependencies.GetController)
	const postController: DevicePostController = container.resolve(DeviceDependencies.PostController)
	const patchController: DevicePatchController = container.resolve(DeviceDependencies.PatchController)
	const searchByCriteria: DeviceSearchByCriteriaController = container.resolve(
		DeviceDependencies.GetByCriteriaController
	)
	const deleteController: DeviceDeleteController = container.resolve(DeviceDependencies.DeleteController)
	const download: DeviceDownloadExcelServiceController = container.resolve(DeviceDependencies.ExcelDownloadController)
	const computerDashboard: ComputerDashboardGetController = container.resolve(
		ComputerDashboardDependencies.ComputerDashboardGetController
	)

	const devicePingStatusController: DevicePingStatusController = container.resolve(
		DeviceDependencies.DevicePingStatusController
	)

	const deviceMonitoringDashboardGetController: DeviceMonitoringDashboardGetController = container.resolve(
		ComputerDashboardDependencies.DeviceMonitoringDashboardGetController
	)
	const deviceMonitoringDashboardByStateGetController: DeviceMonitoringDashboardByStateGetController =
		container.resolve(ComputerDashboardDependencies.DeviceMonitoringDashboardByStateGetController)
	const deviceMonitoringDashboardByLocationGetController: DeviceMonitoringDashboardByLocationGetController =
		container.resolve(ComputerDashboardDependencies.DeviceMonitoringDashboardByLocationGetController)

	/**
	 * @swagger
	 * /devices:
	 *   get:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Buscar dispositivos por criterios
	 *     description: Devuelve una lista paginada de dispositivos que coinciden con los filtros de búsqueda.
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
	router.get('/devices/', authenticate, criteriaConverterMiddleware, searchByCriteria.run.bind(searchByCriteria))

	/**
	 * @swagger
	 * /devices/ping-status:
	 *   get:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Obtener estado de ping de dispositivos
	 *     description: Devuelve el estado de conexión (ping) de los dispositivos monitorizados.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Estado de ping obtenido.
	 */
	router.get(
		'/devices/ping-status',
		authenticate,
		criteriaConverterMiddleware,
		devicePingStatusController.run.bind(devicePingStatusController)
	)

	/**
	 * @swagger
	 * /devices/download:
	 *   get:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Descargar inventario en Excel
	 *     description: Genera y descarga un archivo Excel con la lista de dispositivos.
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
	router.get('/devices/download', authenticate, criteriaConverterMiddleware, download.run.bind(download))

	router.get('/devices/dashboard/computer', authenticate, computerDashboard.run.bind(computerDashboard))

	router.get(
		'/devices/dashboard/monitoring',
		authenticate,
		criteriaConverterMiddleware,
		deviceMonitoringDashboardGetController.run.bind(deviceMonitoringDashboardGetController)
	)

	router.get(
		'/devices/dashboard/monitoringbystate',
		authenticate,
		criteriaConverterMiddleware,
		deviceMonitoringDashboardByStateGetController.run.bind(deviceMonitoringDashboardByStateGetController)
	)

	router.get(
		'/devices/dashboard/monitoringbylocation',
		authenticate,
		criteriaConverterMiddleware,
		deviceMonitoringDashboardByLocationGetController.run.bind(deviceMonitoringDashboardByLocationGetController)
	)

	/**
	 * @swagger
	 * /devices/{id}:
	 *   get:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Obtener un dispositivo por ID
	 *     description: Devuelve los detalles completos de un dispositivo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del dispositivo.
	 *     responses:
	 *       '200':
	 *         description: Detalles del dispositivo.
	 *       '404':
	 *         description: Dispositivo no encontrado.
	 */
	router.get('/devices/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /devices:
	 *   post:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Crear un nuevo dispositivo
	 *     description: Añade un nuevo dispositivo al inventario.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Device'
	 *     responses:
	 *       '201':
	 *         description: Dispositivo creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/devices/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /devices/{id}:
	 *   patch:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Actualizar un dispositivo existente
	 *     description: Actualiza la información de un dispositivo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del dispositivo a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Device'
	 *     responses:
	 *       '200':
	 *         description: Dispositivo actualizado con éxito.
	 *       '404':
	 *         description: Dispositivo no encontrado.
	 */
	router.patch('/devices/:id', authenticate, patchController.run.bind(patchController))

	/**
	 * @swagger
	 * /devices/{id}:
	 *   delete:
	 *     tags:
	 *       - Dispositivos
	 *     summary: Eliminar un dispositivo
	 *     description: Elimina un dispositivo del inventario por su ID.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del dispositivo a eliminar.
	 *     responses:
	 *       '204':
	 *         description: Dispositivo eliminado con éxito.
	 *       '404':
	 *         description: Dispositivo no encontrado.
	 */
	router.delete('devices/:id', authenticate, deleteController.run.bind(deleteController))
}
