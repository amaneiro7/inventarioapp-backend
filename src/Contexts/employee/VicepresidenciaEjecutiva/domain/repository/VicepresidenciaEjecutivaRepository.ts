import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type VicepresidenciaEjecutivaDto } from '../entity/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaEjecutivaId } from '../valueObject/VicepresidenciaEjecutivaId'

/**
 * @abstract
 * @class VicepresidenciaEjecutivaRepository
 * @description Defines the contract for data persistence operations related to vicepresidencia ejecutiva entities.
 */
export abstract class VicepresidenciaEjecutivaRepository extends GenericRepository<VicepresidenciaEjecutivaDto> {
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple vicepresidencias ejecutivas by their IDs.
	 * @param {Array<VicepresidenciaEjecutivaId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<VicepresidenciaEjecutivaDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<VicepresidenciaEjecutivaId['value']>) => Promise<VicepresidenciaEjecutivaDto[]>
}
