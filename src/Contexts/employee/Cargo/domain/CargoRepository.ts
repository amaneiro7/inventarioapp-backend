import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoPrimitives } from './Cargo'
import { type CargoId } from './CargoId'
import { type CargoName } from './CargoName'

export abstract class CargoRepository {
  abstract searchAll(): Promise<CargoPrimitives[]>

  abstract searchById(id: Primitives<CargoId>): Promise<Nullable<CargoPrimitives>>

  abstract searchByName(id: Primitives<CargoName>): Promise<Nullable<CargoPrimitives>>

  abstract save(cargo: CargoPrimitives): Promise<void>
}
