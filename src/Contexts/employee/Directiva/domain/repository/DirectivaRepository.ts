import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type DirectivaDto } from '../entity/Directiva.dto'
import { type DirectivaId } from '../valueObject/DirectivaId'

/**
 * @abstract
 * @class DirectivaRepository
 * @description Defines the contract for data persistence operations related to directiva entities.
 */
export abstract class DirectivaRepository extends GenericRepository<DirectivaDto> {
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple directivas by their IDs.
	 * @param {Array<DirectivaId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<DirectivaDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<DirectivaId['value']>) => Promise<DirectivaDto[]>
}
