import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { ResponseService } from '../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { StatusDto } from '../domain/Status.dto'
import { type StatusRepository } from '../domain/StatusRepository'

export class StatusFinderAll extends GetAllBaseService<StatusDto> {
	constructor(private readonly statusRepository: StatusRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<StatusDto>> {
		const { data, total } = await this.statusRepository.searchAll(criteria)

		return this.response({
			total,
			data,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
