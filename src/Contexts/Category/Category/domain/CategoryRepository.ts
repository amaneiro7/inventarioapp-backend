import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from './Category.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

export abstract class CategoryRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>>

	abstract searchById(id: CategoryId['value']): Promise<CategoryDto | null>

	abstract searchByName(
		name: CategoryName['value']
	): Promise<CategoryDto | null>
}
