import { GenericRepository } from '../../../../Shared/domain/GenericRepository'
import type { UnidadDto } from '../entity/Unidad.dto'
import type { UnidadId } from '../valueObject/UnidadId'
import type { Nullable } from '../../../../Shared/domain/Nullable'
import type { CodigoInterno } from '../valueObject/CodigoInterno'
import type { CentroDeCosto } from '../valueObject/CentroDeCosto'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'

export interface UnidadChainResult {
	pathString: string
	pathArray: string[]
}

/**
 * Interface contract for data persistence operations related to Unidad entities.
 */
export abstract class UnidadRepository extends GenericRepository<UnidadDto> {
	/**
	 * Finds multiple units by their specific IDs.
	 *
	 * @param ids - The array of primitive unit IDs to search for.
	 * @returns A promise that resolves to an array of matching Unidad DTOs.
	 */
	abstract findByIds: (ids: Array<UnidadId['value']>) => Promise<UnidadDto[]>
	/**
	 * Finds a specific unit using its unique internal code.
	 *
	 * @param code - The primitive internal code value.
	 * @returns A promise that resolves to the Unidad DTO if found, or null otherwise.
	 */
	abstract findByCodigoInterno: (code: Primitives<CodigoInterno>) => Promise<Nullable<UnidadDto>>

	/**
	 * Finds a specific unit using its assigned cost center.
	 *
	 * @param costCenter - The primitive cost center value.
	 * @returns A promise that resolves to the Unidad DTO if found, or null otherwise.
	 */
	abstract findByCentroDeCosto: (costCenter: Primitives<CentroDeCosto>) => Promise<Nullable<UnidadDto>>

	/**
	 * Obtiene la cadena jerárquica completa para múltiples IDs de unidad de forma eficiente.
	 * @param unidadIds Array de IDs de unidades a procesar.
	 * @returns Un Map donde la llave es el unidadId y el valor es la cadena "Padre > Hijo > ..."
	 */
	abstract getUnidadesFullChains: (unidadIds: string[]) => Promise<Map<string, UnidadChainResult>>
}
