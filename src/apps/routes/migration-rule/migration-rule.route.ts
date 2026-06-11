import type { Router } from 'express'
import type { MigrationRuleDeleteController } from '../../controllers/migration-rule/migration-rule.delete.controller'
import type { MigrationRulePatchController } from '../../controllers/migration-rule/migration-rule.patch.controller'
import type { MigrationRulePostController } from '../../controllers/migration-rule/migration-rule.post.controller'
import type { MigrationRuleGetController } from '../../controllers/migration-rule/migration-rule.get.controller'
import type { MigrationRuleGetAllController } from '../../controllers/migration-rule/migration-rule.get-all.controller'
import type { EvaluationHardwareDashboardGetController } from '../../controllers/migration-rule/evaluation-hardware-dashboard.controller'
import type { EvaluationHardwareDownloadExcelServiceController } from '../../controllers/migration-rule/evaluation-hardware.download-excel-service.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'
import { hasPermission } from '../../Middleware/authorization'

export const register = async (router: Router) => {
	const getAllController: MigrationRuleGetAllController = container.resolve(
		MigrationRuleDependencies.GetAllController
	)
	const getController: MigrationRuleGetController = container.resolve(MigrationRuleDependencies.GetController)
	const postController: MigrationRulePostController = container.resolve(MigrationRuleDependencies.PostController)
	const patchController: MigrationRulePatchController = container.resolve(MigrationRuleDependencies.PatchController)
	const dashboardController: EvaluationHardwareDashboardGetController = container.resolve(
		MigrationRuleDependencies.EvaluationHardwareDashboardGetController
	)
	const deleteController: MigrationRuleDeleteController = container.resolve(
		MigrationRuleDependencies.DeleteController
	)
	const download: EvaluationHardwareDownloadExcelServiceController = container.resolve(
		MigrationRuleDependencies.ExcelDownloadController
	)

	/**
	 * @swagger
	 * /migration-rules:
	 *   get:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Obtener todas las reglas de migración
	 *     description: Devuelve una lista de todas las reglas de migración.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de reglas de migración obtenida con éxito.
	 */
	router.get(
		'/migration-rules/',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /migration-rules/download:
	 *   get:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Descargar reporte de evaluación de hardware en Excel
	 *     description: Genera y descarga un archivo Excel con la evaluación de compatibilidad de los dispositivos pendientes basándose en la regla de migración activa.
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
		'/migration-rules/download',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.READ_LIST),
		criteriaConverterMiddleware,
		download.run.bind(download)
	)

	/**
	 * @swagger
	 * /migration-rules/{id}:
	 *   get:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Obtener una regla de migración por ID
	 *     description: Devuelve los detalles de una regla de migración específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la regla de migración.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la regla de migración.
	 *       '404':
	 *         description: Regla de migración no encontrada.
	 */
	router.get(
		'/migration-rules/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /migration-rules:
	 *   post:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Crear una nueva regla de migración
	 *     description: Añade una nueva regla de migración al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/MigrationRule'
	 *     responses:
	 *       '201':
	 *         description: Regla de migración creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/migration-rules/',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /migration-rules/{id}:
	 *   patch:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Actualizar una regla de migración existente
	 *     description: Actualiza los detalles de una regla de migración específica (nombre, jerarquía, cargos, etc).
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la regla de migración a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/MigrationRule'
	 *     responses:
	 *       '200':
	 *         description: Regla de migración actualizada con éxito.
	 *       '404':
	 *         description: Regla de migración no encontrada.
	 */
	router.patch(
		'/migration-rules/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.UPDATE),
		patchController.run.bind(patchController)
	)

	/**
	 * @swagger
	 * /migration-rules/dashboard/pending-devices:
	 *   get:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Dashboard de dispositivos pendientes de migración
	 *     description: Obtiene la lista de computadoras con versiones obsoletas de Windows (XP, 7, 8, 8.1) y determina si su hardware es apto para migrar basándose en la regla de migración activa.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: query
	 *         name: filters
	 *         schema:
	 *           type: string
	 *         description: Filtros de búsqueda opcionales (ej. `location.name,contains,Sede`).
	 *     responses:
	 *       '200':
	 *         description: Datos del dashboard generados con éxito.
	 *       '401':
	 *         description: No autorizado.
	 */
	router.get(
		'/migration-rules/dashboard/pending-devices',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.READ_LIST),
		criteriaConverterMiddleware,
		dashboardController.run.bind(dashboardController)
	)

	/**
	 * @swagger
	 * /migration-rules/{id}:
	 *   delete:
	 *     tags:
	 *       - Migration Rules
	 *     summary: Eliminar una regla de migración
	 *     description: Elimina una regla de migración del sistema por su ID y dispara eventos de dominio para limpieza de caché.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la regla de migración a eliminar.
	 *     responses:
	 *       '204':
	 *         description: Regla de migración eliminada con éxito.
	 *       '400':
	 *         description: Error en la validación del ID.
	 *       '404':
	 *         description: Regla de migración no encontrada.
	 *       '401':
	 *         description: No autorizado.
	 */
	router.delete(
		'/migration-rules/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.MIGRATION_RULES.DELETE),
		deleteController.run.bind(deleteController)
	)
}
