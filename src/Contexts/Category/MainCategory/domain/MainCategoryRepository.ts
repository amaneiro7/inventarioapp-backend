import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from './MainCategory.dto'
import { type MainCategoryId } from './MainCategoryId'

export abstract class MainCategoryRepository {
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>>

	abstract searchById(id: MainCategoryId['value']): Promise<Nullable<MainCategoryDto>>
}
