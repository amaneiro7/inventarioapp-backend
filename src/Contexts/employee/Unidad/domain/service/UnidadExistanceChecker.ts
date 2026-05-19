import { UnidadDoesNotExistError } from '../errors/UnidadDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type UnidadId } from '../valueObject/UnidadId'

export class UnidadExistenceChecker {
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * Ensures that one or more Unidades exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<UnidadId> | null | undefined | (Primitives<UnidadId> | null | undefined)[]} unidadIds - The Unidad ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Unidades exist.
	 * @throws {UnidadDoesNotExistError} If any of the Unidades do not exist.
	 */
	async ensureExist(
		unidadIds: Primitives<UnidadId> | null | undefined | (Primitives<UnidadId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(unidadIds) ? unidadIds : [unidadIds]
		const uniqueUnidadIds = [
			...new Set(ids.filter(id => id !== null && id !== undefined))
		] as Primitives<UnidadId>[]
		if (uniqueUnidadIds.length === 0) {
			return
		}

		const foundUnidades = await this.repository.findByIds(uniqueUnidadIds)
		if (foundUnidades.length !== uniqueUnidadIds.length) {
			const foundIds = new Set(foundUnidades.map(c => c.id))
			const missingIds = uniqueUnidadIds.filter(id => !foundIds.has(id))
			throw new UnidadDoesNotExistError(missingIds.join(', '))
		}
	}
}
