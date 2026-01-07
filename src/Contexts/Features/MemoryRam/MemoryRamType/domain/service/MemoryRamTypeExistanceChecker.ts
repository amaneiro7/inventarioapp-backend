import { MemoryRamTypeDoesNotExistError } from '../errors/MemoryRamTypeDoesNotExistError'
import { type MemoryRamTypeRepository } from '../repository/MemoryRamTypeRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypeId } from '../valueObject/MemoryRamTypeId'

export class MemoryRamTypeExistenceChecker {
	constructor(private readonly repository: MemoryRamTypeRepository) {}

	/**
	 * Ensures that one or more MemoryRamTypes exist in the repository.
	 * @param {Primitives<MemoryRamTypeId> | Primitives<MemoryRamTypeId>[]} memoryRamTypeIds - The MemoryRamType ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all MemoryRamTypes exist.
	 * @throws {MemoryRamTypeDoesNotExistError} If any of the MemoryRamTypes do not exist.
	 */
	async ensureExist(memoryRamTypeIds: Primitives<MemoryRamTypeId> | Primitives<MemoryRamTypeId>[]): Promise<void> {
		const ids = Array.isArray(memoryRamTypeIds) ? memoryRamTypeIds : [memoryRamTypeIds]
		const uniqueMemoryRamTypeIds = [...new Set(ids)]
		if (uniqueMemoryRamTypeIds.length === 0) {
			return
		}

		const foundMemoryRamTypes = await this.repository.findByIds(uniqueMemoryRamTypeIds)
		if (foundMemoryRamTypes.length !== uniqueMemoryRamTypeIds.length) {
			const foundIds = new Set(foundMemoryRamTypes.map(c => c.id))
			const missingIds = uniqueMemoryRamTypeIds.filter(id => !foundIds.has(id))
			throw new MemoryRamTypeDoesNotExistError(missingIds.join(', '))
		}
	}
}
