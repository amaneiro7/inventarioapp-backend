import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type ProcessorSocketDto } from '../domain/ProcessorSocket.dto'
import { type ProcessorSocketRepository } from '../domain/ProcessorSocketRepository'

/**
 * @description Use case for retrieving all ProcessorSocket entities.
 */
export class ProcessorSocketFinderAll extends GetAllBaseService<ProcessorSocketDto> {
	private readonly processorSocketRepository: ProcessorSocketRepository

	constructor({ processorSocketRepository }: { processorSocketRepository: ProcessorSocketRepository }) {
		super()
		this.processorSocketRepository = processorSocketRepository
	}

	/**
	 * @description Executes the process of finding all processor sockets.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<ProcessorSocketDto>>} A paginated response of processor sockets.
	 */
	async run(criteria: Criteria): Promise<ResponseService<ProcessorSocketDto>> {
		const { data, total } = await this.processorSocketRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
