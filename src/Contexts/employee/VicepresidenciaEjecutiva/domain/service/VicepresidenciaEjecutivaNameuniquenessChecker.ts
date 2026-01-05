import { VicepresidenciaEjecutivaAlreadyExistError } from '../errors/VicepresidenciaEjecutivaAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaRepository } from '../repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaEjecutivaId } from '../valueObject/VicepresidenciaEjecutivaId'

/**
 * Domain service responsible for verifying that a VicepresidenciaEjecutiva name is unique within the system.
 */
export class VicepresidenciaEjecutivaNameUniquenessChecker {
	/**
	 * Creates an instance of VicepresidenciaEjecutivaNameUniquenessChecker.
	 * @param {VicepresidenciaEjecutivaRepository} repository - The repository used to check for existing VicepresidenciaEjecutivas.
	 */
	constructor(private readonly repository: VicepresidenciaEjecutivaRepository) {}

	/**
	 * Ensures that the provided VicepresidenciaEjecutiva name is unique.
	 * If an ID is provided in excludeId, it ignores that VicepresidenciaEjecutiva (useful for updates).
	 *
	 * @param {string} name - The VicepresidenciaEjecutiva name to check.
	 * @param {Primitives<VicepresidenciaEjecutivaId>} [excludeId] - The ID of the VicepresidenciaEjecutiva to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {VicepresidenciaEjecutivaAlreadyExistError} If a VicepresidenciaEjecutiva with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<VicepresidenciaEjecutivaId>): Promise<void> {
		const existingVicepresidenciaEjecutiva = await this.repository.findByName(name)
		if (existingVicepresidenciaEjecutiva && existingVicepresidenciaEjecutiva.id !== excludeId) {
			throw new VicepresidenciaEjecutivaAlreadyExistError(name)
		}
	}
}
