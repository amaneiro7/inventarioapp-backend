import type { Router } from 'express'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'

// import { type DeviceGetAllController } from '../controllers/device/device.getAll.controller'
import type { DevicePatchController } from '../../controllers/device/device.patch.controller'
import type { DeviceGetController } from '../../controllers/device/device.get.controller'
import type { DevicePostController } from '../../controllers/device/device.post.controller'
import type { DeviceSearchByCriteriaController } from '../../controllers/device/device.search-by-criteria.controller'
import type { DeviceDeleteController } from '../../controllers/device/device.delete.controller'
import type { DeviceDownloadExcelServiceController } from '../../controllers/device/device.download-excel-service.controller'
import type { ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'
import type { DevicePingStatusController } from '../../controllers/device/device-pingstatus.controller'
import type { DeviceMonitoringDashboardGetController } from '../../controllers/device/device-monitoring-dashboard.controller'
import type { DeviceMonitoringDashboardByStateGetController } from '../../controllers/device/device-monitoring-dashboard-by-state.controller'
import type { DeviceMonitoringDashboardByLocationGetController } from '../../controllers/device/device-monitoring-dashboard-by-location.controller'
import type { ComputerCountBrandDashboardGetController } from '../../controllers/device/device-compoter-count-brand-dashboard.controller'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

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
	const computerCountBrandDashboard: ComputerCountBrandDashboardGetController = container.resolve(
		ComputerDashboardDependencies.ComputerCountBrandDashboardGetController
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
	router.get(
		'/devices/',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ_LIST),
		criteriaConverterMiddleware,
		searchByCriteria.run.bind(searchByCriteria)
	)

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
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ_PING_STATUS),
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
	router.get(
		'/devices/download',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.DOWNLOAD),
		criteriaConverterMiddleware,
		download.run.bind(download)
	)

	/**
	 * @swagger
	 * /devices/dashboard/computer:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *       - Dispositivos
	 *     summary: Obtener datos de dashboard para computadoras
	 *     description: Devuelve un resumen de datos específico para los dispositivos de tipo computadora.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard de computadoras obtenidos con éxito.
	 */
	router.get(
		'/devices/dashboard/computer',
		...protectedRoute,
		hasPermission(PERMISSIONS.DASHBOARD.READ_COMPUTER_DASHBOARD),
		computerDashboard.run.bind(computerDashboard)
	)

	/**
	 * @swagger
	 * /devices/dashboard/computer-count-brand:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *       - Dispositivos
	 *     summary: Obtener conteo de computadoras por marca
	 *     description: Devuelve un resumen del conteo de computadoras agrupado por marca, modelo y tipo de sitio.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del conteo de computadoras por marca obtenidos con éxito.
	 */
	router.get(
		'/devices/dashboard/computer-count-brand',
		...protectedRoute,
		hasPermission(PERMISSIONS.DASHBOARD.READ_COMPUTER_DASHBOARD),
		criteriaConverterMiddleware,
		computerCountBrandDashboard.run.bind(computerCountBrandDashboard)
	)

	/**
	 * @swagger
	 * /devices/dashboard/monitoring:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *       - Dispositivos
	 *     summary: Obtener datos de monitoreo de dispositivos
	 *     description: Devuelve datos generales del dashboard de monitoreo de dispositivos.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard de monitoreo obtenidos con éxito.
	 */
	router.get(
		'/devices/dashboard/monitoring',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ_MONITORING_DASHBOARD),
		criteriaConverterMiddleware,
		deviceMonitoringDashboardGetController.run.bind(deviceMonitoringDashboardGetController)
	)

	/**
	 * @swagger
	 * /devices/dashboard/monitoringbystate:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *       - Dispositivos
	 *     summary: Obtener datos de monitoreo por estado
	 *     description: Devuelve datos del dashboard de monitoreo de dispositivos, agrupados por estado.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard de monitoreo por estado obtenidos con éxito.
	 */
	router.get(
		'/devices/dashboard/monitoringbystate',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ_MONITORING_BY_STATE_DASHBOARD),
		criteriaConverterMiddleware,
		deviceMonitoringDashboardByStateGetController.run.bind(deviceMonitoringDashboardByStateGetController)
	)

	/**
	 * @swagger
	 * /devices/dashboard/monitoringbylocation:
	 *   get:
	 *     tags:
	 *       - Dashboard
	 *       - Dispositivos
	 *     summary: Obtener datos de monitoreo por ubicación
	 *     description: Devuelve datos del dashboard de monitoreo de dispositivos, agrupados por ubicación.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard de monitoreo por ubicación obtenidos con éxito.
	 */
	router.get(
		'/devices/dashboard/monitoringbylocation',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ_MONITORING_BY_LOCATION_DASHBOARD),
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
	router.get(
		'/devices/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.READ),
		getController.run.bind(getController)
	)

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
	router.post(
		'/devices/',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.CREATE),
		postController.run.bind(postController)
	)

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
	router.patch(
		'/devices/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.UPDATE),
		patchController.run.bind(patchController)
	)

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
	router.delete(
		'devices/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.DEVICES.DELETE),
		deleteController.run.bind(deleteController)
	)
}
