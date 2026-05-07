import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type UnidadDto } from '../entity/Unidad.dto'
import { type UnidadId } from '../valueObject/UnidadId'

/**
 * @abstract
 * @class UnidadRepository
 * @description Defines the contract for data persistence operations related to directiva entities.
 */
export abstract class UnidadRepository extends GenericRepository<UnidadDto> {
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple directivas by their IDs.
	 * @param {Array<UnidadId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<UnidadDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<UnidadId['value']>) => Promise<UnidadDto[]>
}
