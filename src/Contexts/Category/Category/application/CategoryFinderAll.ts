import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CategoryDto } from '../domain/Category.dto'
import { type CategoryRepository } from '../domain/CategoryRepository'

export class CategoriesFinderAll extends GetAllBaseService<CategoryDto> {
	constructor(private readonly categoryRepository: CategoryRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<CategoryDto>> {
		const { data, total } = await this.categoryRepository.searchAll(
			criteria
		)

		return {
			data,
			info: {
				total,
				page: criteria.pageNumber ?? 1,
				totalPage: this.calcularPaginas(total, criteria.pageNumber)
			}
		}
	}
}
