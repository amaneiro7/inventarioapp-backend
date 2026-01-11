import { type BrandRepository } from '../../../../Brand/domain/repository/BrandRepository'
import { type CategoryRepository } from '../../../../Category/Category/domain/repository/CategoryRepository'
import { type MemoryRamTypeRepository } from '../../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import { type InputTypeRepository } from '../../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesRepository } from '../repository/ModelSeriesRepository'

export interface ModelDependencies {
	categoryRepository: CategoryRepository
	brandRepository: BrandRepository
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	processorRepository: ProcessorRepository
}
