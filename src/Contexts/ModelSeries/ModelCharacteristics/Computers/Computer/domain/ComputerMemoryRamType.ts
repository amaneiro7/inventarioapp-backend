import { MemoryRamTypeId } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeId'
import { type MemoryRamTypePrimitives } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRam.dto'
import { type MemoryRamTypeRepository } from '../../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type LaptopsModels } from '../../Laptops/domain/LaptopsModels'
import { type ComputerModels } from './ComputerModels'

export class ComputerMemoryRamType extends MemoryRamTypeId {
	static async updateInputTypeField(params: {
		repository: MemoryRamTypeRepository
		memoryRamTypeId: Primitives<MemoryRamTypeId>
		entity: ComputerModels | LaptopsModels
	}): Promise<void> {
		if (params.memoryRamTypeId === undefined) {
			return
		}

		if (params.entity.memoryRamTypeValue === params.memoryRamTypeId) {
			return
		}

		await ComputerMemoryRamType.ensureInputTypeExist({
			repository: params.repository,
			memoryRamTypeId: params.memoryRamTypeId
		})

		params.entity.updateMemoryRamTypeId(params.memoryRamTypeId)
	}
	static async ensureInputTypeExist(params: {
		repository: MemoryRamTypeRepository
		memoryRamTypeId: Primitives<MemoryRamTypeId>
	}): Promise<void> {
		const isExist: MemoryRamTypePrimitives | null = await params.repository.searchById(params.memoryRamTypeId)
		if (isExist === null) {
			throw new Error('InputType does not exist')
		}
	}
}
