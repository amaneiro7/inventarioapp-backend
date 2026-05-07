import { UnidadCentroDeCostoAlreadyExistError } from '../errors/UnidadCentroDeCostoAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type UnidadId } from '../valueObject/UnidadId'
import { type CentroDeCosto } from '../valueObject/CentroDeCosto'

export class UnidadCentroDeCostoUniquenessChecker {
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * @param {Primitives<CentroDeCosto>} costCenter - The cost center to check.
	 * @param {Primitives<UnidadId>} [excludeId] - Optional ID to exclude (for updates).
	 */
	async ensureUnique(costCenter: Primitives<CentroDeCosto>, excludeId?: Primitives<UnidadId>): Promise<void> {
		if (!costCenter) return

		const existingUnidad = await this.repository.findByCentroDeCosto(costCenter)
		if (existingUnidad && existingUnidad.id !== excludeId) {
			throw new UnidadCentroDeCostoAlreadyExistError(costCenter)
		}
	}
}
