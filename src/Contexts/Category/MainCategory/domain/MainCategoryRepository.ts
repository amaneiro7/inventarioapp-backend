import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from './MainCategoryId.dto'
import { type MainCategoryId } from './MainCategoryId'

export abstract class MainCategoryRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>>

	abstract searchById(
		id: MainCategoryId['value']
	): Promise<MainCategoryDto | null>
}
