import { VicepresidenciaAlreadyExistError } from '../errors/VicepresidenciaAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaRepository } from '../repository/VicepresidenciaRepository'
import { type VicepresidenciaId } from '../valueObject/VicepresidenciaId'

/**
 * Domain service responsible for verifying that a Vicepresidencia name is unique within the system.
 */
export class VicepresidenciaNameUniquenessChecker {
	/**
	 * Creates an instance of VicepresidenciaNameUniquenessChecker.
	 * @param {VicepresidenciaRepository} repository - The repository used to check for existing Vicepresidencias.
	 */
	constructor(private readonly repository: VicepresidenciaRepository) {}

	/**
	 * Ensures that the provided Vicepresidencia name is unique.
	 * If an ID is provided in excludeId, it ignores that Vicepresidencia (useful for updates).
	 *
	 * @param {string} name - The Vicepresidencia name to check.
	 * @param {Primitives<VicepresidenciaId>} [excludeId] - The ID of the Vicepresidencia to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {VicepresidenciaAlreadyExistError} If a Vicepresidencia with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<VicepresidenciaId>): Promise<void> {
		const existingVicepresidencia = await this.repository.findByName(name)
		if (existingVicepresidencia && existingVicepresidencia.id !== excludeId) {
			throw new VicepresidenciaAlreadyExistError(name)
		}
	}
}
