import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoParams, type CargoDto } from './Cargo.dto'
import { type CargoId } from './CargoId'
import { type CargoName } from './CargoName'

export abstract class CargoRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>>

	abstract searchById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>>

	abstract searchByName(
		id: Primitives<CargoName>
	): Promise<Nullable<CargoDto>>

	abstract save(cargo: CargoParams): Promise<void>
}
