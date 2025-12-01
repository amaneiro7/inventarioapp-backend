export const ROLES_MAP = {
	1: 'Admin',
	5: 'Estandar',
	6: 'Dashboard/Monitoreo',
	7: 'Invitado'
} as const

// Tipos derivados (Correctos para los nombres de roles)
export type RoleId = keyof typeof ROLES_MAP // 1 | 5 | 6 | 7
export type RoleName = (typeof ROLES_MAP)[RoleId] // 'Admin' | 'Estandar' | ...
// --- Tipo de Búsqueda Inversa ---

/**
 * 💡 Utility Type: Genera un mapa que permite buscar el ID usando el nombre del Rol.
 * Ejemplo: { 'Admin': 1, 'Estandar': 5, ... }
 */
export type InvertRolesMap<T extends Record<string, string>> = {
	[K in keyof T as T[K]]: K
}

// 💡 El tipo final que quieres: Mapeo de Nombres de Rol a IDs.
export type IdByRoleName = InvertRolesMap<typeof ROLES_MAP>

export const ROLE_ID_BY_NAME = Object.entries(ROLES_MAP).reduce(
	(acc, [id, name]) => {
		// Aseguramos que el ID sea de tipo number (o string, según tu DB)
		acc[name] = parseInt(id)
		return acc
	},
	{} as Record<string, number>
)

export const ADMIN_ROLE_ID = ROLE_ID_BY_NAME['Admin']
export const STANDARD_ROLE_ID = ROLE_ID_BY_NAME['Estandar']
export const DASHBOARD_ROLE_ID = ROLE_ID_BY_NAME['Dashboard/Monitoreo']
export const GUEST_ROLE_ID = ROLE_ID_BY_NAME['Invitado']
