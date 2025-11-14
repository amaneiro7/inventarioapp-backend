import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { type EmployeeSearchByCriteriaController } from '../../controllers/employee/employee.searchByCriteria.controller'
import { type EmployeeGetController } from '../../controllers/employee/employee.get.controller'
import { type EmployeePostController } from '../../controllers/employee/employee.post.controller'
import { type EmployeePatchController } from '../../controllers/employee/employee.patch.controller'
import { type EmployeeDeleteController } from '../../controllers/employee/employee.delete.controller'
import { type EmployeeGetAllController } from '../../controllers/employee/employee.get-all.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: EmployeeGetController = container.resolve(EmployeeDependencies.GetController)
	const getAllController: EmployeeGetAllController = container.resolve(EmployeeDependencies.GetAllController)
	const postController: EmployeePostController = container.resolve(EmployeeDependencies.PostController)
	const patchController: EmployeePatchController = container.resolve(EmployeeDependencies.PatchController)
	const searchByCriteria: EmployeeSearchByCriteriaController = container.resolve(
		EmployeeDependencies.GetByCriteriaController
	)
	const deleteController: EmployeeDeleteController = container.resolve(EmployeeDependencies.DeleteController)

	/**
	 * @swagger
	 * /employees:
	 *   get:
	 *     tags:
	 *       - Empleados
	 *     summary: Buscar empleados por criterios
	 *     description: Devuelve una lista paginada de empleados que coinciden con los filtros de búsqueda.
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
		'/employees/',
		...protectedRoute,
		criteriaConverterMiddleware,
		searchByCriteria.run.bind(searchByCriteria)
	)

	/**
	 * @swagger
	 * /employees/all:
	 *   get:
	 *     tags:
	 *       - Empleados
	 *     summary: Obtener todos los empleados
	 *     description: Devuelve una lista completa de todos los empleados sin paginación.
	 *     responses:
	 *       '200':
	 *         description: Lista de empleados obtenida con éxito.
	 */
	router.get('/employees/all', criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /employees/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados
	 *     summary: Obtener un empleado por ID
	 *     description: Devuelve los detalles completos de un empleado específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del empleado.
	 *     responses:
	 *       '200':
	 *         description: Detalles del empleado.
	 *       '404':
	 *         description: Empleado no encontrado.
	 */
	router.get('/employees/:id', ...protectedRoute, getController.run.bind(getController))

	/**
	 * @swagger
	 * /employees:
	 *   post:
	 *     tags:
	 *       - Empleados
	 *     summary: Crear un nuevo empleado
	 *     description: Añade un nuevo empleado al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Employee'
	 *     responses:
	 *       '201':
	 *         description: Empleado creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/employees/', ...protectedRoute, postController.run.bind(postController))

	/**
	 * @swagger
	 * /employees/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados
	 *     summary: Actualizar un empleado existente
	 *     description: Actualiza la información de un empleado específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del empleado a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Employee'
	 *     responses:
	 *       '200':
	 *         description: Empleado actualizado con éxito.
	 *       '404':
	 *         description: Empleado no encontrado.
	 */
	router.patch('/employees/:id', ...protectedRoute, patchController.run.bind(patchController))

	/**
	 * @swagger
	 * /employees/{id}:
	 *   delete:
	 *     tags:
	 *       - Empleados
	 *     summary: Eliminar un empleado
	 *     description: Elimina un empleado del sistema por su ID.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del empleado a eliminar.
	 *     responses:
	 *       '204':
	 *         description: Empleado eliminado con éxito.
	 *       '404':
	 *         description: Empleado no encontrado.
	 */
	router.delete('employees/:id', ...protectedRoute, deleteController.run.bind(deleteController))
}
