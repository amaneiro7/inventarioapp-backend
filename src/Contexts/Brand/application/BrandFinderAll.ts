import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { Brand, type BrandDto } from '../domain/Brand.dto'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandFinderAll extends GetAllBaseService<BrandDto> {
	constructor(private readonly brandRepository: BrandRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<Brand>> {
		const { data, total } = await this.brandRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
