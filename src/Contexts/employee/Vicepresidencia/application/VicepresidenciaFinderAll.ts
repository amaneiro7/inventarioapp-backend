import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type VicepresidenciaDto } from '../domain/Vicepresidencia.dto'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'

export class VicepresidenciaFinderAll extends GetAllBaseService<VicepresidenciaDto> {
	constructor(private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<VicepresidenciaDto>> {
		const { data, total } = await this.vicepresidenciaRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
