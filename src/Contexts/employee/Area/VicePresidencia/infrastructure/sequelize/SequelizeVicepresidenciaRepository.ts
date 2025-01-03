
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaPrimitives } from '../../domain/vicepresidencia'
import { type VicepresidenciaId } from '../../domain/vicepresidenciaId'
import { type VicepresidenciaRepository } from '../../domain/vicepresidenciaRepository'
import { VicepresidenciaModel } from './VicepresidenciaSchema'

export class SequelizeVicepresidenciaRepository implements VicepresidenciaRepository {
  private readonly cacheKey: string = 'vicepresidencias'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<VicepresidenciaPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await VicepresidenciaModel.findAll()
    })
  }

  async searchById(id: Primitives<VicepresidenciaId>): Promise<VicepresidenciaPrimitives | null> {
    return await VicepresidenciaModel.findByPk(id) ?? null
  }
}
