import { UnidadCodigoInternoAlreadyExistError } from '../errors/UnidadCodigoInternoAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type UnidadId } from '../valueObject/UnidadId'
import { type CodigoInterno } from '../valueObject/CodigoInterno'

export class UnidadCodigoInternoUniquenessChecker {
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * @param {Primitives<CodigoInterno>} code - The internal code to check.
	 * @param {Primitives<UnidadId>} [excludeId] - Optional ID to exclude (for updates).
	 */
	async ensureUnique(code: Primitives<CodigoInterno>, excludeId?: Primitives<UnidadId>): Promise<void> {
		if (!code) return

		const existingUnidad = await this.repository.findByCodigoInterno(code)
		if (existingUnidad && existingUnidad.id !== excludeId) {
			throw new UnidadCodigoInternoAlreadyExistError(code)
		}
	}
}
