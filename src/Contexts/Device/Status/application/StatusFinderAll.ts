import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type StatusDto } from '../domain/entity/Status.dto'
import { type StatusRepository } from '../domain/repository/StatusRepository'

/**
 * @description Use case for retrieving all Status entities, with support for criteria-based filtering, sorting, and pagination.
 */
export class StatusFinderAll extends GetAllBaseService<StatusDto> {
	private readonly statusRepository: StatusRepository

	constructor({ statusRepository }: { statusRepository: StatusRepository }) {
		super()
		this.statusRepository = statusRepository
	}

	/**
	 * @description Executes the process of finding all statuses based on the provided criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<StatusDto>>} A promise that resolves to a paginated response containing Status DTOs.
	 */
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
