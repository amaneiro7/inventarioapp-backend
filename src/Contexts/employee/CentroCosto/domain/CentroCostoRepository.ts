import { GenericRepository } from '../../../Shared/domain/GenericRepository'
import { type CentroCostoDto } from './CentroCosto.dto'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoName } from './CentroCostoName'

/**
 * @abstract
 * @class CentroCostoRepository
 * @description Defines the contract for data persistence operations related to the CentroCosto entity.
 */
export abstract class CentroCostoRepository extends GenericRepository<CentroCostoDto> {
	/**
	 * @abstract
	 * @method searchByName
	 * @description Retrieves a single CentroCosto entity by its name.
	 * @param {Primitives<CentroCostoName>} name The name of the CentroCosto to search for.
	 * @returns {Promise<Nullable<CentroCostoDto>>} A promise that resolves to the CentroCosto DTO if found, or null otherwise.
	 */
	abstract searchByName(name: Primitives<CentroCostoName>): Promise<Nullable<CentroCostoDto>>
}
