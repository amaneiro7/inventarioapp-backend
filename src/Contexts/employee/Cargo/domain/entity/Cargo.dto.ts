import { type DepartamentoDto } from '../../../Departamento/domain/entity/Departamento.dto'
import { type DirectivaDto } from '../../../Directiva/domain/entity/Directiva.dto'
import { type DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'
import { type DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/entity/Vicepresidencia.dto'
import { type VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/entity/VicepresidenciaEjecutiva.dto'
import { type CargoId } from '../valueObject/CargoId'
import { type CargoName } from '../valueObject/CargoName'

/**
 * @interface Cargo
 * @description Defines the core properties of a Cargo entity.
 */
export interface Cargo {
	id: CargoId['value']
	name: CargoName['value']
}

/**
 * @type CargoPrimitives
 * @description Represents the primitive, serializable state of a Cargo entity,
 * including associated department IDs.
 */
export type CargoPrimitives = Cargo & {
	directivas: DirectivaId['value'][]
	vicepresidenciasEjecutivas: VicepresidenciaEjecutivaId['value'][]
	vicepresidencias: VicepresidenciaId['value'][]
	departamentos: DepartamentoId['value'][]
}

/**
 * @type CargoParams
 * @description Represents the parameters required to create a new Cargo.
 * The 'id' is omitted as it is generated automatically.
 */
export type CargoParams = Omit<
	Cargo & {
		directivas: DirectivaId['value'][]
		vicepresidenciasEjecutivas: VicepresidenciaEjecutivaId['value'][]
		vicepresidencias: VicepresidenciaId['value'][]
		departamentos: DepartamentoId['value'][]
	},
	'id'
>

/**
 * @type CargoDto
 * @description Represents a Data Transfer Object (DTO) for the Cargo entity,
 * including full associated department DTOs.
 */
export type CargoDto = Cargo & {
	directivas: DirectivaDto[]
	vicepresidenciasEjecutivas: VicepresidenciaEjecutivaDto[]
	vicepresidencias: VicepresidenciaDto[]
	departamentos: DepartamentoDto[]
}
