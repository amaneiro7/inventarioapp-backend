import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type LocationStatusDto } from '../domain/LocationStatus.dto'
import { type LocationStatusRepository } from '../domain/LocationStatusRepository'

export class LocationStatusFinderAll extends GetAllBaseService<LocationStatusDto> {
	private readonly locationStatusRepository: LocationStatusRepository
	constructor({ locationStatusRepository }: { locationStatusRepository: LocationStatusRepository }) {
		super()
		this.locationStatusRepository = locationStatusRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<LocationStatusDto>> {
		const { data, total } = await this.locationStatusRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
