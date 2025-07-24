import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { ResponseService } from '../../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { ProcessorSocketDto } from '../domain/ProcessorSocket.dto'
import { type ProcessorSocketRepository } from '../domain/ProcessorSocketRepository'

export class ProcessorSocketFinderAll extends GetAllBaseService<ProcessorSocketDto> {
	private readonly processorSockeRepository: ProcessorSocketRepository
	constructor({ processorSockeRepository }: { processorSockeRepository: ProcessorSocketRepository }) {
		super()
		this.processorSockeRepository = processorSockeRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<ProcessorSocketDto>> {
		const { data, total } = await this.processorSockeRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
