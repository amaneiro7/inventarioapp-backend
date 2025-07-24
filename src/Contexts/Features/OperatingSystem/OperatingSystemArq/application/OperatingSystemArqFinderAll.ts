import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type OperatingSystemArqDto } from '../domain/OperatingSystemArq.dto'
import { type OperatingSystemArqRepository } from '../domain/OperatingSystemArqRepository'

export class OperatingSystemArqFinderAll extends GetAllBaseService<OperatingSystemArqDto> {
	private readonly operatingSystemArqRepository: OperatingSystemArqRepository
	constructor({ operatingSystemArqRepository }: { operatingSystemArqRepository: OperatingSystemArqRepository }) {
		super()
		this.operatingSystemArqRepository = operatingSystemArqRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<OperatingSystemArqDto>> {
		const { data, total } = await this.operatingSystemArqRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
