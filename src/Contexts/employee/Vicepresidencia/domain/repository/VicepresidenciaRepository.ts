import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type VicepresidenciaDto } from '../entity/Vicepresidencia.dto'
import { type VicepresidenciaId } from '../valueObject/VicepresidenciaId'

/**
 * @abstract
 * @class VicepresidenciaRepository
 * @description Defines the contract for data persistence operations related to vicepresidencia ejecutiva entities.
 */
export abstract class VicepresidenciaRepository extends GenericRepository<VicepresidenciaDto> {
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple vicepresidencias by their IDs.
	 * @param {Array<VicepresidenciaId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<VicepresidenciaDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<VicepresidenciaId['value']>) => Promise<VicepresidenciaDto[]>
}
