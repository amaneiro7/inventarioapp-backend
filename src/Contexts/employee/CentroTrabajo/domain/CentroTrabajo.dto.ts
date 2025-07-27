import { type CentroCostoDto } from '../../CentroCosto/domain/CentroCosto.dto'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CentroTrabajoId } from './CentroTrabajoId'
import { type CentroTrabajoName } from './CentroTrabajoName'

/**
 * @interface CentroTrabajo
 * @description Defines the core properties of a CentroTrabajo entity.
 */
export interface CentroTrabajo {
	id: CentroTrabajoId['value']
	name: CentroTrabajoName['value']
	centroCostoId: CodCentroCosto['value']
}

/**
 * @type CentroTrabajoPrimitives
 * @description Represents the primitive, serializable state of a CentroTrabajo entity.
 */
export type CentroTrabajoPrimitives = CentroTrabajo

/**
 * @type CentroTrabajoParams
 * @description Represents the parameters required to create a new CentroTrabajo.
 */
export type CentroTrabajoParams = CentroTrabajo

/**
 * @type CentroTrabajoDto
 * @description Represents a Data Transfer Object (DTO) for the CentroTrabajo entity,
 * including the associated CentroCosto DTO.
 */
export type CentroTrabajoDto = CentroTrabajo & {
	centroCosto: CentroCostoDto
}
