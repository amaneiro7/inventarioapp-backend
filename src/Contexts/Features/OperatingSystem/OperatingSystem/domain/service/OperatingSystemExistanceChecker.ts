import { OperatingSystemDoesNotExistError } from '../errors/OperatingSystemDoesNotExist'
import { type OperatingSystemRepository } from '../repository/OperatingSystemRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemId } from '../valueObject/OperatingSystemId'

export class OperatingSystemExistenceChecker {
	constructor(private readonly repository: OperatingSystemRepository) {}

	/**
	 * Ensures that one or more OperatingSystems exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<OperatingSystemId> | null | undefined | (Primitives<OperatingSystemId> | null | undefined)[]} operatingSystemIds - The OperatingSystem ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all OperatingSystems exist.
	 * @throws {OperatingSystemDoesNotExistError} If any of the OperatingSystems do not exist.
	 */
	async ensureExist(
		operatingSystemIds:
			| Primitives<OperatingSystemId>
			| null
			| undefined
			| (Primitives<OperatingSystemId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(operatingSystemIds) ? operatingSystemIds : [operatingSystemIds]
		const uniqueOperatingSystemIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueOperatingSystemIds.length === 0) {
			return
		}

		const foundOperatingSystems = await this.repository.findByIds(uniqueOperatingSystemIds)
		if (foundOperatingSystems.length !== uniqueOperatingSystemIds.length) {
			const foundIds = new Set(foundOperatingSystems.map(c => c.id))
			const missingIds = uniqueOperatingSystemIds.filter(id => !foundIds.has(id))
			throw new OperatingSystemDoesNotExistError(missingIds.join(', '))
		}
	}
}
