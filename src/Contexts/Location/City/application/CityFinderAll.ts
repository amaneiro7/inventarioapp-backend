import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CityDto } from '../domain/City.dto'
import { type CityRepository } from '../domain/CityRepository'

export class CityFinderAll extends GetAllBaseService<CityDto> {
	constructor(private readonly cityRepository: CityRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<CityDto>> {
		const { data, total } = await this.cityRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
