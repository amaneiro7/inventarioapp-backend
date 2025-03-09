import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../domain/MainCategory.dto'
import { type MainCategoryRepository } from '../domain/MainCategoryRepository'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'

export class MainCategoriesFinderAll extends GetAllBaseService<MainCategoryDto> {
	constructor(private readonly mainCategoryRepository: MainCategoryRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<MainCategoryDto>> {
		const { data, total } = await this.mainCategoryRepository.searchAll(criteria)

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
