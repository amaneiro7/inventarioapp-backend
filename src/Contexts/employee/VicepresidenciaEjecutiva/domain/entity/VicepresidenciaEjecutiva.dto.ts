import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type DirectivaDto } from '../../../Directiva/domain/entity/Directiva.dto'
import { type DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { type VicepresidenciaEjecutivaId } from '../valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaName } from '../valueObject/VicepresidenciaEjecutivaName'

/**
 * @interface VicepresidenciaEjecutiva
 * @description Defines the core properties of a VicepresidenciaEjecutiva entity.
 */
export interface VicepresidenciaEjecutiva {
	id: Primitives<VicepresidenciaEjecutivaId>
	name: Primitives<VicepresidenciaEjecutivaName>
	directivaId: Primitives<DirectivaId>
}

/**
 * @type VicepresidenciaEjecutivaPrimitives
 * @description Represents the primitive, serializable state of a VicepresidenciaEjecutiva entity.
 */
export type VicepresidenciaEjecutivaPrimitives = VicepresidenciaEjecutiva & {
	cargos: Primitives<CargoId>[]
}

/**
 * @type VicepresidenciaEjecutivaParams
 * @description Represents the parameters required to create a new VicepresidenciaEjecutiva.
 */
export type VicepresidenciaEjecutivaParams = Omit<
	VicepresidenciaEjecutiva & {
		cargos: Primitives<CargoId>[]
	},
	'id'
>

/**
 * @type VicepresidenciaEjecutivaDto
 * @description Represents a Data Transfer Object (DTO) for the VicepresidenciaEjecutiva entity,
 * including associated Directiva and Cargo DTOs.
 */
export type VicepresidenciaEjecutivaDto = VicepresidenciaEjecutiva & {
	directiva: DirectivaDto
	cargos: Omit<CargoDto, 'departamentos'>[]
}
