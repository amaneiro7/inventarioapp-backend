import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoPrimitives } from '../../domain/Cargo'
import { type CargoId } from '../../domain/CargoId'
import { type CargoRepository } from '../../domain/CargoRepository'
import { type CargoName } from '../../domain/CargoName'
import { CargoModel } from './CargoSchema'

export class SequelizeCargoRepository implements CargoRepository {
  private readonly cacheKey: string = 'cargos'
  constructor(private readonly cache: CacheService) { }
  async searchAll(): Promise<CargoPrimitives[]> {
    return await this.cache.getCachedData(this.cacheKey, async () => {
      return await CargoModel.findAll()
    })

  }

  async searchById(id: Primitives<CargoId>): Promise<Nullable<CargoPrimitives>> {
    return await CargoModel.findByPk(id) ?? null
  }

  async searchByName(name: Primitives<CargoName>): Promise<Nullable<CargoPrimitives>> {
    return await CargoModel.findOne({ where: { name } }) ?? null
  }

  async save(payload: CargoPrimitives): Promise<void> {
    const { id, departamentos, ...restPayload } = payload
    const cargo = await CargoModel.findByPk(id) ?? null
    if (cargo === null) {
      const newCargo = await CargoModel.create({
        ...restPayload,
        id
      })
      await newCargo.setDeparments(departamentos)
    } else {
      cargo.set({ ...restPayload })
      await cargo.save()
      await cargo.setDeparments(departamentos)
    }
    await this.cache.removeCachedData(this.cacheKey)
    await this.searchAll()
  }
}
