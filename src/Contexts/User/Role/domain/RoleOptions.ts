export const ROLES = {
	ADMIN: 'Admin',
	SPECIALIST: 'Specialist',
	COORD: 'Coordinador',
	GERENTE: 'Gerente'
} as const

// --- Tipos Derivados ---

// Este tipo extrae todos los valores de los objetos anidados en PERMISSIONS
type RolesObject = typeof ROLES
type ResourceRoles = RolesObject[keyof RolesObject]

// Este es el tipo de unión de todas las cadenas de permisos posibles.
// Ejemplo: 'access-policies:read' | 'access-policies:create' | 'users:read' | ...
export type Permission = ResourceRoles[keyof ResourceRoles]
