import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type ProcessorDto } from '../domain/Processor.dto'
import { type ProcessorRepository } from '../domain/ProcessorRepository'

export class ProcessorsFinderAll extends GetAllBaseService<ProcessorDto> {
	constructor(private readonly processorRepository: ProcessorRepository) {
		super()
	}

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
