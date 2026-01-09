import { OperatingSystemArqDoesNotExistError } from '../errors/OperatingSystemArqDoesNotExist'
import { type OperatingSystemArqRepository } from '../repository/OperatingSystemArqRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../valueObject/OperatingSystemArqID'

export class OperatingSystemArqExistenceChecker {
	constructor(private readonly repository: OperatingSystemArqRepository) {}

	/**
	 * Ensures that one or more OperatingSystemArqs exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<OperatingSystemArqId> | null | undefined | (Primitives<OperatingSystemArqId>  | null | undefined)[]} operatingSystemArqIds - The OperatingSystemArq ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all OperatingSystemArqs exist.
	 * @throws {OperatingSystemArqDoesNotExistError} If any of the OperatingSystemArqs do not exist.
	 */
	async ensureExist(
		operatingSystemArqIds:
			| Primitives<OperatingSystemArqId>
			| null
			| undefined
			| (Primitives<OperatingSystemArqId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(operatingSystemArqIds) ? operatingSystemArqIds : [operatingSystemArqIds]
		const uniqueOperatingSystemArqIds = [...new Set(ids.filter(id => id !== null && id !== undefined))]
		if (uniqueOperatingSystemArqIds.length === 0) {
			return
		}

		const foundOperatingSystemArqs = await this.repository.findByIds(uniqueOperatingSystemArqIds)
		if (foundOperatingSystemArqs.length !== uniqueOperatingSystemArqIds.length) {
			const foundIds = new Set(foundOperatingSystemArqs.map(c => c.id))
			const missingIds = uniqueOperatingSystemArqIds.filter(id => !foundIds.has(id))
			throw new OperatingSystemArqDoesNotExistError(missingIds.join(', '))
		}
	}
}
