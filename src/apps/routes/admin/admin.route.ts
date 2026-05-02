import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { SharedDependencies } from '../../di/shared.di'
import type { CacheClearController } from '../../controllers/shared/cache_clear.controller'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = (router: Router) => {
	const cacheClearController: CacheClearController = container.resolve(SharedDependencies.ClearCacheController)

	/**
	 * @swagger
	 * /admin/cache/clear:
	 *   post:
	 *     tags:
	 *       - Admin
	 *     summary: Limpiar el caché de Redis
	 *     description: Elimina todas las llaves de Redis o aquellas que coincidan con un patrón específico (ej. "devices:*").
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               pattern:
	 *                 type: string
	 *                 example: "devices:*"
	 *                 description: Patrón opcional para eliminar llaves específicas. Si no se envía, se ejecuta un flushall.
	 *     responses:
	 *       '200':
	 *         description: Caché eliminado correctamente.
	 *       '401':
	 *         description: No autorizado (Token faltante o inválido).
	 *       '403':
	 *         description: Prohibido (Faltan permisos de administrador).
	 *       '500':
	 *         description: Error interno del servidor al interactuar con Redis.
	 */
	router.post(
		'/admin/cache/clear',
		...protectedRoute, // Asegura que el usuario esté autenticado
		hasPermission(PERMISSIONS.ADMIN.CLEARCACHE),
		cacheClearController.run.bind(cacheClearController)
	)
}
