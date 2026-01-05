import { VicepresidenciaDoesNotExistError } from '../errors/VicepresidenciaDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaRepository } from '../repository/VicepresidenciaRepository'
import { type VicepresidenciaId } from '../valueObject/VicepresidenciaId'

export class VicepresidenciaExistenceChecker {
	constructor(private readonly repository: VicepresidenciaRepository) {}

	/**
	 * Ensures that one or more Vicepresidencias exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<VicepresidenciaId> | null | undefined |(Primitives<VicepresidenciaId> | null | undefined)[]} vicepresidenciaIds - The Vicepresidencia ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all Vicepresidencias exist.
	 * @throws {VicepresidenciaDoesNotExistError} If any of the Vicepresidencias do not exist.
	 */
	async ensureExist(
		vicepresidenciaIds:
			| Primitives<VicepresidenciaId>
			| null
			| undefined
			| (Primitives<VicepresidenciaId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(vicepresidenciaIds) ? vicepresidenciaIds : [vicepresidenciaIds]
		const uniqueVicepresidenciaIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueVicepresidenciaIds.length === 0) {
			return
		}

		const foundVicepresidencias = await this.repository.findByIds(uniqueVicepresidenciaIds)
		if (foundVicepresidencias.length !== uniqueVicepresidenciaIds.length) {
			const foundIds = new Set(foundVicepresidencias.map(c => c.id))
			const missingIds = uniqueVicepresidenciaIds.filter(id => !foundIds.has(id))
			throw new VicepresidenciaDoesNotExistError(missingIds.join(', '))
		}
	}
}
