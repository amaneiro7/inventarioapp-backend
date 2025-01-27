import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DepartamentoDto } from '../domain/Departamento.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'

export class DepartamentoFinderAll extends GetAllBaseService<DepartamentoDto> {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<DepartamentoDto>> {
		const { data, total } = await this.departamentoRepository.searchAll(
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
