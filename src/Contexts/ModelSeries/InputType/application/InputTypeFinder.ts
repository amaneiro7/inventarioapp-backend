import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type InputTypeDto } from '../domain/InputType.dto'
import { type InputTypeRepository } from '../domain/InputTypeRepository'

export class InputTypeFinderAll extends GetAllBaseService<InputTypeDto> {
	private readonly inputTypeRepository: InputTypeRepository
	constructor({ inputTypeRepository }: { inputTypeRepository: InputTypeRepository }) {
		super()
		this.inputTypeRepository = inputTypeRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<InputTypeDto>> {
		const { data, total } = await this.inputTypeRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
