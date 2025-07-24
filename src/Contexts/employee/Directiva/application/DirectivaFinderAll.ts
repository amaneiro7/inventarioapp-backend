import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaDto } from '../domain/Directiva.dto'

export class DirectivaFinderAll extends GetAllBaseService<DirectivaDto> {
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	constructor({ directivaRepository }: { directivaRepository: DepartmentRepository<DirectivaDto> }) {
		super()
		this.directivaRepository = directivaRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<DirectivaDto>> {
		const { data, total } = await this.directivaRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
