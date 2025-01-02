import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaEjecutivaPrimitives } from '../../domain/VicepresidenciaEjecutiva'
import { type VicepresidenciaEjecutivaId } from '../../domain/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaRepository } from '../../domain/VicepresidenciaEjecutivaRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'

export class SequelizeVicepresidenciaEjecutivaRepository implements VicepresidenciaEjecutivaRepository {
  private readonly cacheKey: string = 'vicepresidenciasEjecutivas'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<VicepresidenciaEjecutivaPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await VicepresidenciaEjecutivaModel.findAll()
    })
  }

  async searchById(id: Primitives<VicepresidenciaEjecutivaId>): Promise<VicepresidenciaEjecutivaPrimitives | null> {
    return await VicepresidenciaEjecutivaModel.findByPk(id) ?? null
  }
}
