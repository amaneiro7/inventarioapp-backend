import { type Criteria } from './criteria/Criteria'
import { type Nullable } from './Nullable'
import { type ResponseDB } from './ResponseType'

export abstract class GenericRepository<DTO> {
	abstract save(payload: unknown): Promise<void>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<DTO>>

	abstract searchById(id: string | number): Promise<Nullable<DTO>>

	abstract searchByName(id: string | number): Promise<Nullable<DTO>>

	abstract remove(id: string | number): Promise<void>
}
