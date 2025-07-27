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

export const statusOptionsName = {
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

export type StatusOptionKey = keyof typeof statusOptionsName
