import { DirectivaDoesNotExistError } from '../errors/DirectivaDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaRepository } from '../repository/DirectivaRepository'
import { type DirectivaId } from '../valueObject/DirectivaId'

export class DirectivaExistenceChecker {
	constructor(private readonly repository: DirectivaRepository) {}

	/**
	 * Ensures that a Directiva exists in the repository.
	 * @param {Primitives<DirectivaId>} directivaId - The Directiva ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the Directiva exists.
	 * @throws {DirectivaDoesNotExistError} If the Directiva does not exist.
	 */
	async ensureExist(directivaId: Primitives<DirectivaId>): Promise<void> {
		const isDirectivaExist = await this.repository.findById(directivaId)
		if (!isDirectivaExist) {
			throw new DirectivaDoesNotExistError(directivaId)
		}
	}
}
