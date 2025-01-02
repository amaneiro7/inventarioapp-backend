import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityPrimitives } from '../../domain/HardDriveCapacity'
import { type HardDriveCapacityId } from '../../domain/HardDriveCapacityId'
import { type HardDriveCapacityRepository } from '../../domain/HardDriveCapacityRepository'
import { HardDriveCapacityModel } from './HardDriveCapacitySchema'

export class SequelizeHardDriveCapacityRepository implements HardDriveCapacityRepository {
  private readonly cacheKey: string = 'hardDriveCapacities'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<HardDriveCapacityPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await HardDriveCapacityModel.findAll()
    })
  }

  async searchById(id: Primitives<HardDriveCapacityId>): Promise<HardDriveCapacityPrimitives | null> {
    return await HardDriveCapacityModel.findByPk(id) ?? null
  }
}
