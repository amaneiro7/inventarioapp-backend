import { StatusModel } from './StatusSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusPrimitives } from '../../domain/Status'
import { type StatusId } from '../../domain/StatusId'
import { type StatusRepository } from '../../domain/StatusRepository'

export class SequelizeStatusRepository implements StatusRepository {
  private readonly cacheKey: string = 'status'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<StatusPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await StatusModel.findAll()

    })
  }

  async searchById(id: Primitives<StatusId>): Promise<StatusPrimitives | null> {
    return await StatusModel.findByPk(id) ?? null
  }
}
