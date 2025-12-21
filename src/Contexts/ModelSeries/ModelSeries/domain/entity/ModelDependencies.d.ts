import { type BrandRepository } from '../../../../Brand/domain/repository/BrandRepository'
import { type CategoryRepository } from '../../../../Category/Category/domain/CategoryRepository'
import { type MemoryRamTypeRepository } from '../../../../Features/MemoryRam/MemoryRamType/domain/MemoryRamTypeRepository'
import { type ProcessorRepository } from '../../../../Features/Processor/Processor/domain/ProcessorRepository'
import { type InputTypeRepository } from '../../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesRepository } from '../repository/ModelSeriesRepository'

export interface ModelDependencies {
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	categoryRepository: CategoryRepository
	brandRepository: BrandRepository
	processorRepository: ProcessorRepository
}
