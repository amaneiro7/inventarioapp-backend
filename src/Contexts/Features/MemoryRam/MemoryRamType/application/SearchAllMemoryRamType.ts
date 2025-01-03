import { type MemoryRamTypePrimitives } from '../domain/MemoryRamType'
import { type MemoryRamTypeRepository } from '../domain/MemoryRamTypeRepository'

export class MemoryRamTypeFinderAll {
  constructor(private readonly memoryRamTypeRepository: MemoryRamTypeRepository) { }

  async run(): Promise<MemoryRamTypePrimitives[]> {
    return await this.memoryRamTypeRepository.searchAll()
  }
}
