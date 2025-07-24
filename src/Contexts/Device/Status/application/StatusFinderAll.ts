import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type StatusDto } from '../domain/Status.dto'
import { type StatusRepository } from '../domain/StatusRepository'

export class StatusFinderAll extends GetAllBaseService<StatusDto> {
	private readonly statusRepository: StatusRepository
	constructor({ statusRepository }: { statusRepository: StatusRepository }) {
		super()
		this.statusRepository = statusRepository
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
