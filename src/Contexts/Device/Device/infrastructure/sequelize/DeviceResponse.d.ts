/**
 * @type ClearComputerDataset
 * @description Defines the structure for a flattened computer device dataset, used for data exports.
 */
export type ClearComputerDataset = {
	id: string
	Usuario: string
	Ubicación: string
	'Direccion IP'?: string
	Serial: string
	Activo: string
	Estatus: string
	Categoria: string
	Marca: string
	Modelo: string
	'Nombre de Equipo'?: string
	Procesador?: string
	'Memoria Ram Total'?: number
	'Slot de Memoria Ram'?: string
	'Tipo de Memoria Ram'?: string | null
	'Disco Duro Total'?: string | number
	'Tipo de Disco Duro'?: string
	'Sistema Operativo'?: string
	Arquitectura?: string
	Observación: string | null
	'Actualizado por'?: string
	'Fecha de Modificacion': string
}

/**
 * @type ClearDefaultDataset
 * @description Defines the structure for a flattened default device dataset, used for data exports.
 */
export type ClearDefaultDataset = {
	id: string
	Usuario: string
	Ubicación: string
	Serial: string
	Activo: string
	Estatus: string
	Categoria: string
	Marca: string
	Modelo: string
	Observación: string | null
	'Actualizado por'?: string
	'Fecha de Modificacion': string
}
