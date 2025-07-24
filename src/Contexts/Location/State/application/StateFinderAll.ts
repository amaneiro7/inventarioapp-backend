import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type StateDto } from '../domain/State.dto'
import { type StateRepository } from '../domain/StateRepository'

export class StateFinderAll extends GetAllBaseService<StateDto> {
	private readonly stateRepository: StateRepository
	constructor({ stateRepository }: { stateRepository: StateRepository }) {
		super()
		this.stateRepository = stateRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<StateDto>> {
		const { data, total } = await this.stateRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
