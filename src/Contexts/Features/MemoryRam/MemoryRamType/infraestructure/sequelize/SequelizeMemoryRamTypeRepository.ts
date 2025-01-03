
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type MemoryRamTypePrimitives } from '../../domain/MemoryRamType'
import { type MemoryRamTypeId } from '../../domain/MemoryRamTypeId'
import { type MemoryRamTypeRepository } from '../../domain/MemoryRamTypeRepository'
import { MemoryRamTypeModel } from './MemoryRamTypeSchema'
import { CacheService } from '../../../../../Shared/domain/CacheService'

export class SequelizeMemoryRamTypeRepository implements MemoryRamTypeRepository {
  private readonly cacheKey: string = 'memoryRamType'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<MemoryRamTypePrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await MemoryRamTypeModel.findAll()
    })
  }

  async searchById(id: Primitives<MemoryRamTypeId>): Promise<MemoryRamTypePrimitives | null> {
    return await MemoryRamTypeModel.findByPk(id) ?? null
  }
}
