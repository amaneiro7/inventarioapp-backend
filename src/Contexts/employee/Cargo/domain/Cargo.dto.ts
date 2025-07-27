import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type CargoId } from './CargoId'
import { type CargoName } from './CargoName'

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
	directivas: DepartmentId['value'][]
	vicepresidenciasEjecutivas: DepartmentId['value'][]
	vicepresidencias: DepartmentId['value'][]
	departamentos: DepartmentId['value'][]
}

/**
 * @type CargoParams
 * @description Represents the parameters required to create a new Cargo.
 * The 'id' is omitted as it is generated automatically.
 */
export type CargoParams = Omit<
	Cargo & {
		directivas: DepartmentId['value'][]
		vicepresidenciasEjecutivas: DepartmentId['value'][]
		vicepresidencias: DepartmentId['value'][]
		departamentos: DepartmentId['value'][]
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
