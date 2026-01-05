import { DirectivaDoesNotExistError } from '../errors/DirectivaDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaRepository } from '../repository/DirectivaRepository'
import { type DirectivaId } from '../valueObject/DirectivaId'

export class DirectivaExistenceChecker {
	constructor(private readonly repository: DirectivaRepository) {}

	/**
	 * Ensures that one or more Directivas exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<DirectivaId> | null | undefined | (Primitives<DirectivaId> | null | undefined)[]} directivaIds - The Directiva ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Directivas exist.
	 * @throws {DirectivaDoesNotExistError} If any of the Directivas do not exist.
	 */
	async ensureExist(
		directivaIds: Primitives<DirectivaId> | null | undefined | (Primitives<DirectivaId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(directivaIds) ? directivaIds : [directivaIds]
		const uniqueDirectivaIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<DirectivaId>[]
		if (uniqueDirectivaIds.length === 0) {
			return
		}

		const foundDirectivas = await this.repository.findByIds(uniqueDirectivaIds)
		if (foundDirectivas.length !== uniqueDirectivaIds.length) {
			const foundIds = new Set(foundDirectivas.map(c => c.id))
			const missingIds = uniqueDirectivaIds.filter(id => !foundIds.has(id))
			throw new DirectivaDoesNotExistError(missingIds.join(', '))
		}
	}
}
