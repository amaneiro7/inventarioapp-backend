import { GenericRepository } from '../../../Shared/domain/GenericRepository'
import { type CentroTrabajoDto } from './CentroTrabajo.dto'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoName } from './CentroTrabajoName'

/**
 * @abstract
 * @class CentroTrabajoRepository
 * @description Defines the contract for data persistence operations related to the CentroTrabajo entity.
 */
export abstract class CentroTrabajoRepository extends GenericRepository<CentroTrabajoDto> {
	/**
	 * @abstract
	 * @method searchByName
	 * @description Retrieves a single CentroTrabajo entity by its name.
	 * @param {Primitives<CentroTrabajoName>} name The name of the CentroTrabajo to search for.
	 * @returns {Promise<Nullable<CentroTrabajoDto>>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract searchByName(name: Primitives<CentroTrabajoName>): Promise<Nullable<CentroTrabajoDto>>
}
