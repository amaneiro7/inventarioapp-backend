import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ProcessorRepository } from '../domain/repository/ProcessorRepository'
import { type ProcessorDto } from '../domain/entity/Processor.dto'

/**
 * @description Use case for retrieving all Processor entities.
 */
export class ProcessorsFinderAll extends GetAllBaseService<ProcessorDto> {
	private readonly processorRepository: ProcessorRepository

	constructor({ processorRepository }: { processorRepository: ProcessorRepository }) {
		super()
		this.processorRepository = processorRepository
	}

	/**
	 * @description Executes the process of finding all processors.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<ProcessorDto>>} A paginated response of processors.
	 */
	async run(criteria: Criteria): Promise<ResponseService<ProcessorDto>> {
		const { data, total } = await this.processorRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageSize: criteria.pageSize,
			pageNumber: criteria.pageNumber
		})
	}
}
