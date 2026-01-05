import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/entity/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaId } from '../valueObject/VicepresidenciaId'
import { type VicepresidenciaName } from '../valueObject/VicepresidenciaName'

/**
 * @interface Vicepresidencia
 * @description Defines the core properties of a Vicepresidencia entity.
 */
export interface Vicepresidencia {
	id: Primitives<VicepresidenciaId>
	name: Primitives<VicepresidenciaName>
	vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId>
}

/**
 * @type VicepresidenciaPrimitives
 * @description Represents the primitive, serializable state of a Vicepresidencia entity.
 */
export type VicepresidenciaPrimitives = Vicepresidencia & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type VicepresidenciaParams
 * @description Represents the parameters required to create a new Vicepresidencia.
 */
export type VicepresidenciaParams = Omit<
	Vicepresidencia & {
		cargos: Primitives<CargoId>[]
	},
	'id'
>

/**
 * @type VicepresidenciaDto
 * @description Represents a Data Transfer Object (DTO) for the Vicepresidencia entity,
 * including associated VicepresidenciaEjecutiva and Cargo DTOs.
 */
export type VicepresidenciaDto = Vicepresidencia & {
	vicepresidenciaEjecutiva: VicepresidenciaEjecutivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
