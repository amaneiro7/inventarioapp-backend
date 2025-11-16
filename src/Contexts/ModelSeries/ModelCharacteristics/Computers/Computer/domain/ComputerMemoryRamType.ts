import { MemoryRamTypeId } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type MemoryRamTypeRepository } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type LaptopsModels } from '../../Laptops/domain/LaptopsModels'
import { type ComputerModels } from './ComputerModels'

/**
 * @description Represents the memory RAM type for a computer model.
 */
export class ComputerMemoryRamType extends MemoryRamTypeId {
	/**
	 * @description Updates the memory RAM type field for a computer or laptop entity.
	 * @param params The parameters for updating the field.
	 */
	static async updateInputTypeField(params: {
		repository: MemoryRamTypeRepository
		memoryRamTypeId: Primitives<MemoryRamTypeId>
		entity: ComputerModels | LaptopsModels
	}): Promise<void> {
		if (params.memoryRamTypeId === undefined || params.entity.memoryRamTypeValue === params.memoryRamTypeId) {
			return
		}

		await this.ensureInputTypeExist(params.repository, params.memoryRamTypeId)

		params.entity.updateMemoryRamTypeId(params.memoryRamTypeId)
	}

	/**
	 * @description Ensures that the specified memory RAM type exists in the repository.
	 * @param repository The repository to search in.
	 * @param memoryRamTypeId The ID of the memory RAM type to check.
	 * @throws {Error} If the memory RAM type does not exist.
	 */
	static async ensureInputTypeExist(
		repository: MemoryRamTypeRepository,
		memoryRamTypeId: Primitives<MemoryRamTypeId>
	): Promise<void> {
		const isExist = await repository.findById(memoryRamTypeId)
		if (!isExist) {
			throw new Error('El tipo de memoria RAM no existe.')
		}
	}
}
