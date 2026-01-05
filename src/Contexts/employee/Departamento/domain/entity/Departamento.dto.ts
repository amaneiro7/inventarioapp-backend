import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/entity/Vicepresidencia.dto'
import { type VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { type DepartamentoId } from '../valueObject/DepartamentoId'
import { type DepartamentoName } from '../valueObject/DepartamentoName'

/**
 * @interface Departamento
 * @description Defines the core properties of a Departamento entity.
 */
export interface Departamento {
	id: Primitives<DepartamentoId>
	name: Primitives<DepartamentoName>
	vicepresidenciaId: Primitives<VicepresidenciaId>
}

/**
 * @type DepartamentoPrimitives
 * @description Represents the primitive, serializable state of a Departamento entity.
 */
export type DepartamentoPrimitives = Departamento & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type DepartamentoParams
 * @description Represents the parameters required to create a new Departamento.
 */
export type DepartamentoParams = Omit<
	Departamento & {
		cargos: Primitives<CargoId>[]
	},
	'id'
>

/**
 * @type DepartamentoDto
 * @description Represents a Data Transfer Object (DTO) for the Departamento entity,
 * including associated Departamento and Cargo DTOs.
 */
export type DepartamentoDto = Departamento & {
	vicepresidencia: VicepresidenciaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
