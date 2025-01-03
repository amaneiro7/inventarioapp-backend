
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CoordinacionPrimitives } from '../../domain/Coordinacion'
import { type CoordinacionId } from '../../domain/CoordinacionId'
import { type CoordinacionRepository } from '../../domain/CoordinacionRepository'
import { CoordinacionModel } from './CoordinacionSchema'

export class SequelizeCoordinacionRepository implements CoordinacionRepository {
  private readonly cacheKey: string = 'coordinations'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<CoordinacionPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await CoordinacionModel.findAll()
    })
  }

  async searchById(id: Primitives<CoordinacionId>): Promise<CoordinacionPrimitives | null> {
    return await CoordinacionModel.findByPk(id) ?? null
  }
}
