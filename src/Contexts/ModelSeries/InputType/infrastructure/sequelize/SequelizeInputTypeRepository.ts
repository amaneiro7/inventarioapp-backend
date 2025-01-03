import { InputTypeModel } from './InputTypeSchema'
import { type InputTypeRepository } from '../../domain/InputTypeRepository'
import { type InputTypePrimitives } from '../../domain/InputType'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../Shared/domain/CacheService'

export class SequelizeInputTypeRepository implements InputTypeRepository {
  private readonly cacheKey: string = 'inputTypes'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<InputTypePrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await InputTypeModel.findAll()
    })
  }

  async searchById(id: Primitives<InputTypeId>): Promise<InputTypePrimitives | null> {
    return await InputTypeModel.findByPk(id) ?? null
  }
}
