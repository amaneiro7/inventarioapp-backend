import { type MemoryRamTypePrimitives } from '../domain/MemoryRamType'
import { type MemoryRamTypeRepository } from '../domain/MemoryRamTypeRepository'

export class SearchAllMemoryRamType {
  constructor(private readonly repository: MemoryRamTypeRepository) { }

  async run(): Promise<MemoryRamTypePrimitives[]> {
    return await this.repository.searchAll()
  }
}
