// --- Definiciones de Grupos y Permisos ---

const { permissions } = require('./permissionList.')

// Usamos los IDs del último request del usuario con nombres traducidos
const permissionGroups = [
	{
		id: '45de16b3-1288-4790-bee0-5445b015414e',
		name: 'Monitor Operacional',
		description:
			'Permite acceder a las vistas en tiempo real (ej. salud de servidores, logs de errores, tráfico de red, estado de dispositivos).'
	},
	{
		id: '93567304-4a7f-4b88-8675-df250439ee14',
		name: 'Analista de Métrica',
		description:
			'Permite ver todos los dashboards y reportes gerenciales (ej. uso de inventario, tendencias de fallas, reportes de ubicación).'
	},
	{
		id: '1e40712a-90f4-438e-9d67-fc9083799eb8',
		name: 'Lector de Inventario',
		description: 'Permite visualizar todos los activos, sus especificaciones, y estados.'
	},
	{
		id: '9135a46c-c675-47f2-bd86-96b8d343182b',
		name: 'Gestor de Inventario',
		description: 'Permite registrar nuevos activos, editar especificaciones, y gestionar el stock/estado.'
	},
	{
		id: '8fb35246-ab2a-4526-86c3-d4ba3cf90273',
		name: 'Lector de Empleados',
		description: 'Permite ver la información completa de empleados, sus dispositivos asignados y historial.'
	},
	{
		id: 'ab3f0c6a-7e89-457b-80f4-1b442e786050',
		name: 'Gestor de Empleados',
		description: 'Permite crear, editar, y dar de baja (actualizar estado) a empleados.'
	},
	{
		id: '384431a8-44a7-48a7-a1c2-55b029efef04',
		name: 'Lector de Ubicaciones',
		description: 'Permite ver regiones, sitios, ubicaciones, y sus jerarquías.'
	},
	{
		id: '70247cfa-caea-4511-a363-fec9f19765cf',
		name: 'Gestor de Ubicaciones',
		description: 'Permite crear, editar o eliminar cualquier estructura de ubicación (Regiones, Sitios, etc.).'
	},
	{
		id: '952a5983-3955-4861-adca-9de1b67f5daf',
		name: 'Gestor de Usuarios',
		description: 'Gestión de cuentas de usuario, roles y restablecimiento de contraseñas.'
	},
	{
		id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
		name: 'Administrador del Sistema',
		description: 'Control total, configuraciones del sistema y eliminaciones críticas.'
	},
	{
		id: 'c4d71924-fec1-4532-a573-c30310d956ef',
		name: 'Administración de Accesos',
		description:
			'Permite la gestión completa (crear, leer, actualizar, eliminar) de políticas de acceso, grupos de permisos y permisos individuales.'
	},
	{
		id: '71fb5b34-feb9-4499-9a7e-53330acc6efc',
		name: 'Administrador de Configuración',
		description:
			'Permite gestionar las configuraciones globales del sistema, como parámetros de seguridad y dominios permitidos.'
	}
]

// --- Asignaciones Base por Funcionalidad ---

const PERMISSION_ASSIGNMENTS = {
	// 1. Solo Métricas
	'Monitor Operacional': [
		'status:read-dashboard',
		'history:read-dashboard',
		'dashboard:read',
		'dashboard:read-computer-dashboard',
		'dashboard:read-monitor-dashboard',
		'dashboard:read-printer-dashboard',
		'dashboard:read-parts-dashboard',
		'dashboard:read-finantial-printer-dashboard',
		'dashboard:read-employee-dashboard'
	],
	'Analista de Métrica': [
		'devices:read-ping-status',
		'devices:read-monitoring-dashboard',
		'devices:read-monitoring-by-state-dashboard',
		'devices:read-monitoring-by-location-dashboard',
		'locations:read-ping-status',
		'locations:read-monitoring-dashboard',
		'locations:read-monitoring-by-state-dashboard',
		'locations:read-monitoring-by-location-dashboard'
	],

	// 2 Operación Diaria (El "hacer" cosas con los activos)
	'Lector de Inventario': [
		// Dispositivos
		'devices:read',
		'devices:read-list',
		'devices:download',
		// Empleados
		'employees:read-list',
		'employees:read',
		// Envíos
		'shipments:read',
		'shipments:read-list',
		// Procesadores (a veces se crean al vuelo)
		'processors:read',
		'processors:read-list',
		// Marcas
		'brands:read',
		'brands:read-list',
		// Modelos
		'models:read',
		'models:read-list',
		'models:download',
		'input-type:read-list',
		// Main Categories
		'main-categories:read-list',
		'main-categories:read',
		// Categories
		'categories:read-list',
		// Status
		'status:read-list',
		'hard-drive-capacities:read-list',
		'hard-drive-types:read-list',
		'memory-ram-types:read-list',
		'operating-systems:read-list',
		'operating-system-arqs:read-list',
		'history:read-list'
	],
	// 3 Operación Diaria (El "hacer" cosas con los activos)
	'Gestor de Inventario': [
		// Dispositivos
		'devices:create',
		'devices:update',
		'devices:download',
		// Envíos
		'shipments:create',
		'shipments:update',
		// Procesadores (a veces se crean al vuelo)
		'processors:create',
		'processors:update',
		'processors:delete',
		// Marcas
		'brands:create',
		'brands:update',
		// Modelos
		'models:create',
		'models:update',
		'models:download'
	],

	// 4. Gestión de Estructura (El "configurar" el entorno del inventario)
	'Lector de Ubicaciones': [
		// Ubicación y Estructura
		'locations:read-list',
		'locations:read',
		'sites:read-list',
		'sites:read',
		'cities:read-list',
		'cities:read',
		'states:read-list',
		'regions:read-list',
		'administrative-regions:read-list',
		'type-of-sites:read-list',
		'operational-status:read-list'
	],
	// 4. Gestión de Estructura (El "configurar" el entorno del inventario)
	'Gestor de Ubicaciones': [
		// Ubicación y Estructura
		'locations:create',
		'locations:update',
		'sites:create',
		'sites:update',
		'cities:create',
		'cities:update',
		'regions:update'
	],
	// // Organización
	'Lector de Empleados': [
		'cargos:read-list',
		'cargos:read',
		'departamentos:read-list',
		'departamentos:read',
		'directivas:read-list',
		'directivas:read',
		'employees:read-list',
		'employees:read',
		'employees:download',
		'vicepresidencias:read-list',
		'vicepresidencias:read',
		'vicepresidencia-ejecutivas:read-list',
		'vicepresidencia-ejecutivas:read',
		'settings:read-allowed-domains'
	],
	'Gestor de Empleados': [
		'cargos:create',
		'cargos:update',
		'departamentos:create',
		'departamentos:update',
		'directivas:create',
		'directivas:update',
		'employees:create',
		'employees:update',
		'employees:delete',
		'vicepresidencias:create',
		'vicepresidencias:create',
		'vicepresidencia-ejecutivas:update',
		'vicepresidencia-ejecutivas:update'
	],

	// 5. Gestión de Accesos
	'Gestor de Usuarios': [
		'users:read-list',
		'users:read',
		'users:create',
		'users:update',
		'users:reset-password',
		'users:unlock',
		'users:disable',
		'users:reactivate',
		'roles:read-list'
	],
	// 5. Gestión de Accesos
	'Administración de Accesos': [
		'access-policies:read',
		'access-policies:read-list',
		'access-policies:create',
		'access-policies:update',
		'access-policies:delete',
		'access-policies:assign',
		'access-policies:unassign',
		'permission-groups:create',
		'permission-groups:read',
		'permission-groups:read-list',
		'permission-groups:update',
		'permission-groups:delete',
		'permissions:create',
		'permissions:read-list',
		'permissions:read',
		'permissions:delete'
	],
	// 5. Gestión de Accesos
	'Administrador de Configuración': [
		'settings:read-list',
		'settings:read',
		'settings:create',
		'settings:update',
		'settings:read-allowed-domains'
	],

	// 6. Admin Supremo
	'Administrador del Sistema': permissions.map(p => p.name)
}

// Nota: En tu lógica de AccessPolicy es donde harás la suma:
// Ejemplo: Un "L1 Support" tendrá los grupos: ['Dashboard Viewer', 'Global Reader', 'Inventory Operator']

// --- Funciones de Utilidad ---

// Mapea los arrays a objetos para una búsqueda eficiente O(1)
const permissionMap = permissions.reduce((acc, p) => {
	acc[p.name] = p.id
	return acc
}, {})

const groupMap = permissionGroups.reduce((acc, g) => {
	acc[g.name] = g.id
	return acc
}, {})

/**
 * Genera el array de objetos para la tabla de unión.
 */
function generateGroupPermissions() {
	const records = []
	const now = new Date()

	for (const groupName in PERMISSION_ASSIGNMENTS) {
		const groupID = groupMap[groupName]
		const assignedPermissions = PERMISSION_ASSIGNMENTS[groupName]

		if (!groupID) {
			console.error(`Group ID not found for group: ${groupName}`)
			continue
		}

		// Usamos un Set para asegurar que no haya duplicados
		const uniquePermissions = [...new Set(assignedPermissions)]

		for (const permName of uniquePermissions) {
			const permissionID = permissionMap[permName]

			if (!permissionID) {
				console.warn(`Permission ID not found for name: ${permName} in group ${groupName}`)
				continue
			}

			records.push({
				permission_group_id: groupID,
				permission_id: permissionID,
				created_at: now,
				updated_at: now
			})
		}
	}
	return records
}

module.exports = {
	permissions,
	permissionGroups,
	generateGroupPermissions
}
