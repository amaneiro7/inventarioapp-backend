import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type DepartamentoDto } from '../entity/Departamento.dto'
import { type DepartamentoId } from '../valueObject/DepartamentoId'

/**
 * @abstract
 * @class DepartamentoRepository
 * @description Defines the contract for data persistence operations related to vicepresidencia ejecutiva entities.
 */
export abstract class DepartamentoRepository extends GenericRepository<DepartamentoDto> {
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple departamentos by their IDs.
	 * @param {Array<DepartamentoId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<DepartamentoDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<DepartamentoId['value']>) => Promise<DepartamentoDto[]>
}
