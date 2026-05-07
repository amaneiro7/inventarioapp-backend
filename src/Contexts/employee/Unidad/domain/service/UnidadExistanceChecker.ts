import { UnidadDoesNotExistError } from '../errors/UnidadDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type UnidadId } from '../valueObject/UnidadId'

export class UnidadExistenceChecker {
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * Ensures that one or more Unidads exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<UnidadId> | null | undefined | (Primitives<UnidadId> | null | undefined)[]} directivaIds - The Unidad ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Unidads exist.
	 * @throws {UnidadDoesNotExistError} If any of the Unidads do not exist.
	 */
	async ensureExist(
		directivaIds: Primitives<UnidadId> | null | undefined | (Primitives<UnidadId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(directivaIds) ? directivaIds : [directivaIds]
		const uniqueUnidadIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<UnidadId>[]
		if (uniqueUnidadIds.length === 0) {
			return
		}

		const foundUnidads = await this.repository.findByIds(uniqueUnidadIds)
		if (foundUnidads.length !== uniqueUnidadIds.length) {
			const foundIds = new Set(foundUnidads.map(c => c.id))
			const missingIds = uniqueUnidadIds.filter(id => !foundIds.has(id))
			throw new UnidadDoesNotExistError(missingIds.join(', '))
		}
	}
}
