import { VicepresidenciaEjecutivaDoesNotExistError } from '../errors/VicepresidenciaEjecutivaDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaRepository } from '../repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaEjecutivaId } from '../valueObject/VicepresidenciaEjecutivaId'

export class VicepresidenciaEjecutivaExistenceChecker {
	constructor(private readonly repository: VicepresidenciaEjecutivaRepository) {}
	/**
	 * Ensures that one or more VicepresidenciaEjecutivas exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<VicepresidenciaEjecutivaId> | null | undefined | (Primitives<VicepresidenciaEjecutivaId> | null | undefined)[]} vicepresidenciaEjecutivaIds - The VicepresidenciaEjecutiva ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all VicepresidenciaEjecutivas exist.
	 * @throws {VicepresidenciaEjecutivaDoesNotExistError} If any of the VicepresidenciaEjecutivas do not exist.
	 */
	async ensureExist(
		vicepresidenciaEjecutivaIds:
			| Primitives<VicepresidenciaEjecutivaId>
			| null
			| undefined
			| (Primitives<VicepresidenciaEjecutivaId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(vicepresidenciaEjecutivaIds)
			? vicepresidenciaEjecutivaIds
			: [vicepresidenciaEjecutivaIds]
		const uniqueVicepresidenciaEjecutivaIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueVicepresidenciaEjecutivaIds.length === 0) {
			return
		}

		const foundVicepresidenciaEjecutivas = await this.repository.findByIds(uniqueVicepresidenciaEjecutivaIds)
		if (foundVicepresidenciaEjecutivas.length !== uniqueVicepresidenciaEjecutivaIds.length) {
			const foundIds = new Set(foundVicepresidenciaEjecutivas.map(c => c.id))
			const missingIds = uniqueVicepresidenciaEjecutivaIds.filter(id => !foundIds.has(id))
			throw new VicepresidenciaEjecutivaDoesNotExistError(missingIds.join(', '))
		}
	}
}
