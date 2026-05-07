import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import type { UnidadDto } from '../entity/Unidad.dto'
import type { UnidadId } from '../valueObject/UnidadId'
import type { Nullable } from '../../../../Shared/domain/Nullable'
import type { CodigoInterno } from '../valueObject/CodigoInterno'
import type { CentroDeCosto } from '../valueObject/CentroDeCosto'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'

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

	/**
	 * @abstract
	 * @method findByCodigoInterno
	 * @description Finds a unit by its unique internal code.
	 * @param {string} code The internal code to search for.
	 */
	abstract findByCodigoInterno: (code: Primitives<CodigoInterno>) => Promise<Nullable<UnidadDto>>

	/**
	 * @abstract
	 * @method findByCentroDeCosto
	 * @description Finds a unit by its unique cost center.
	 * @param {string} costCenter The cost center to search for.
	 */
	abstract findByCentroDeCosto: (costCenter: Primitives<CentroDeCosto>) => Promise<Nullable<UnidadDto>>
}
