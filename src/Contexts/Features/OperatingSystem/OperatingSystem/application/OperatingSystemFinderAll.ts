import { GetAllBaseService } from '../../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../../Shared/domain/ResponseType'
import { type OperatingSystemDto } from '../domain/OperatingSystem.dto'
import { type OperatingSystemRepository } from '../domain/OperatingSystemRepository'

export class OperatingSystemFinderAll extends GetAllBaseService<OperatingSystemDto> {
	constructor(
		private readonly operatingSystemRepository: OperatingSystemRepository
	) {
		super()
	}

	async run(
		criteria: Criteria
	): Promise<ResponseService<OperatingSystemDto>> {
		const { data, total } = await this.operatingSystemRepository.searchAll(
			criteria
		)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
