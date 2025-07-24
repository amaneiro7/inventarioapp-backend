import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type VicepresidenciaDto } from '../domain/Vicepresidencia.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'

export class VicepresidenciaFinderAll extends GetAllBaseService<VicepresidenciaDto> {
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	constructor({
		vicepresidenciaRepository
	}: {
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	}) {
		super()
		this.vicepresidenciaRepository = vicepresidenciaRepository
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
