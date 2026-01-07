import { type MemoryRamTypeRepository } from '../../../../Features/MemoryRam/MemoryRamType/domain/repository/MemoryRamTypeRepository'
import { type ProcessorRepository } from '../../../../Features/Processor/domain/repository/ProcessorRepository'
import { type InputTypeRepository } from '../../../InputType/domain/repository/InputTypeRepository'
import { type ModelSeriesRepository } from '../repository/ModelSeriesRepository'

export interface ModelDependencies {
	modelSeriesRepository: ModelSeriesRepository
	inputTypeRepository: InputTypeRepository
	memoryRamTypeRepository: MemoryRamTypeRepository
	processorRepository: ProcessorRepository
}
