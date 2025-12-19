import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type InputTypeDto } from '../domain/entity/InputType.dto'
import { type InputTypeRepository } from '../domain/repository/InputTypeRepository'

/**
 * @description Use case for retrieving all InputType entities.
 */
export class InputTypeFinderAll extends GetAllBaseService<InputTypeDto> {
	private readonly inputTypeRepository: InputTypeRepository

	constructor({ inputTypeRepository }: { inputTypeRepository: InputTypeRepository }) {
		super()
		this.inputTypeRepository = inputTypeRepository
	}

	/**
	 * @description Executes the process of finding all input types.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<InputTypeDto>>} A paginated response of input types.
	 */
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
