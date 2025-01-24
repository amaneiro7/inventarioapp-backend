import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../Shared/domain/Nullable'
import { type BrandDto, type BrandParams } from './Brand.dto'
import { type GenericRepository } from '../../Shared/domain/GenericRepository'

export abstract class BrandRepository implements GenericRepository<BrandDto> {
	abstract save(payload: BrandParams): Promise<void>

	abstract searchAll(
		criteria: Criteria
	): Promise<{ total: number; data: BrandDto[] }>

	abstract searchById(id: BrandDto['id']): Promise<Nullable<BrandDto>>

	abstract searchByName(name: BrandDto['name']): Promise<Nullable<BrandDto>>

	abstract remove(id: BrandDto['id']): Promise<void>
}
