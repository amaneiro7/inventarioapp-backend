import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationDto } from '../domain/Location.dto'
import { type LocationRepository } from '../domain/LocationRepository'

export class LocationFinderAll extends GetAllBaseService<LocationDto> {
	constructor(private readonly locationRepository: LocationRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<LocationDto>> {
		const { data, total } = await this.locationRepository.searchAll(
			criteria
		)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
