import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaDto } from '../domain/Directiva.dto'

export class DirectivaFinderAll extends GetAllBaseService<DirectivaDto> {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<DirectivaDto>> {
		const { data, total } = await this.directivaRepository.searchAll(
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
