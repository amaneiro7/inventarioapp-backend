import { DirectivaAlreadyExistError } from '../errors/DirectivaAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaRepository } from '../repository/DirectivaRepository'
import { type DirectivaId } from '../valueObject/DirectivaId'

/**
 * Domain service responsible for verifying that a Directiva name is unique within the system.
 */
export class DirectivaNameUniquenessChecker {
	/**
	 * Creates an instance of DirectivaNameUniquenessChecker.
	 * @param {DirectivaRepository} repository - The repository used to check for existing Directivas.
	 */
	constructor(private readonly repository: DirectivaRepository) {}

	/**
	 * Ensures that the provided Directiva name is unique.
	 * If an ID is provided in excludeId, it ignores that Directiva (useful for updates).
	 *
	 * @param {string} name - The Directiva name to check.
	 * @param {Primitives<DirectivaId>} [excludeId] - The ID of the Directiva to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {DirectivaAlreadyExistError} If a Directiva with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<DirectivaId>): Promise<void> {
		const existingDirectiva = await this.repository.findByName(name)
		if (existingDirectiva && existingDirectiva.id !== excludeId) {
			throw new DirectivaAlreadyExistError(name)
		}
	}
}
