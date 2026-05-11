import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import type { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import type { CentroDeCosto } from '../valueObject/CentroDeCosto'
import type { CodigoInterno } from '../valueObject/CodigoInterno'
import type { IsUnitActive } from '../valueObject/IsUnitActive'
import type { RangeLevel } from '../valueObject/RangeLevel'
import type { UnidadId } from '../valueObject/UnidadId'
import type { UnidadName } from '../valueObject/UnidadName'

/**
 * @interface Unidad
 * @description Defines the core properties of a Unidad entity.
 */
export interface Unidad {
	id: Primitives<UnidadId>
	name: Primitives<UnidadName>
	level: Primitives<RangeLevel>
	centroDeCosto: Primitives<CentroDeCosto>
	codigoInterno: Primitives<CodigoInterno>
	isUnitActive: Primitives<IsUnitActive>
	parentId: Primitives<UnidadId> | null
}

/**
 * @type UnidadPrimitives
 * @description Represents the primitive, serializable state of a Unidad entity.
 */
export type UnidadPrimitives = Unidad & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type UnidadParams
 * @description Represents the parameters required to create a new Unidad.
 */
export type UnidadParams = Omit<Unidad & { cargos: Primitives<CargoId>[] }, 'id'>

/**
 * @type UnidadDto
 * @description Represents a Data Transfer Object (DTO) for the Unidad entity,
 * including associated Cargo DTOs.
 */
export type UnidadDto = Unidad & {
	full_chain?: string
	cargos: Omit<CargoDto, 'directivas' | 'vicepresidenciasEjecutivas' | 'vicepresidencias' | 'departamentos'>[]
}
