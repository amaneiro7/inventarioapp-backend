import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type CategoryDto } from './Category.dto'
import { type CategoryId } from './CategoryId'
import { type CategoryName } from './CategoryName'

export abstract class CategoryRepository {
	abstract searchAll(
		criteria: Criteria
	): Promise<{ total: number; data: CategoryDto[] }>

	abstract searchById(id: CategoryId['value']): Promise<CategoryDto | null>

	abstract searchByName(
		name: CategoryName['value']
	): Promise<CategoryDto | null>
}
