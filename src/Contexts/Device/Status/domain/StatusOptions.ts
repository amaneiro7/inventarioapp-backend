/**
 * @constant StatusOptions
 * @description A read-only object mapping status keys to their corresponding IDs.
 */
export const StatusOptions = {
	INUSE: '1',
	INALMACEN: '2',
	PORDESINCORPORAR: '3',
	DESINCORPORADO: '4',
	PRESTAMO: '5',
	CONTINGENCIA: '6',
	GUARDIA: '7',
	DISPONIBLE: '8',
	JORNADA: '9'
} as const

/**
 * @constant statusOptionsName
 * @description A read-only record mapping status IDs to their corresponding display names.
 */
export const statusOptionsName: Record<(typeof StatusOptions)[keyof typeof StatusOptions], string> = {
	[StatusOptions.INUSE]: 'En Uso',
	[StatusOptions.INALMACEN]: 'En Almacen',
	[StatusOptions.PORDESINCORPORAR]: 'Por Desincorporar',
	[StatusOptions.DESINCORPORADO]: 'Desincorporado',
	[StatusOptions.PRESTAMO]: 'Préstamo',
	[StatusOptions.CONTINGENCIA]: 'Contingencia',
	[StatusOptions.GUARDIA]: 'Guardia',
	[StatusOptions.DISPONIBLE]: 'Disponible',
	[StatusOptions.JORNADA]: 'Jornada'
}

/**
 * @type StatusOptionKey
 * @description A union type representing all possible status option keys.
 */
export type StatusOptionKey = keyof typeof statusOptionsName
