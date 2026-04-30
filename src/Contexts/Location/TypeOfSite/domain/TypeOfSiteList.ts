/**
 * Defines a set of predefined options for TypeOfSite IDs.
 * These are constant values used throughout the application.
 */
export const TypeOfSiteList = {
	TORRE: '1',
	AGENCIA: '2',
	ALMACEN: '3'
} as const

export const TypeOfSiteOptionsByName = {
	ADMINISTRATIVE: 'Sede Administrativa',
	AGENCY: 'Agencia',
	ALMACEN: 'Almacén'
} as const
