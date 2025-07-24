import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type VicepresidenciaEjecutivaDto } from '../domain/VicepresidenciaEjecutiva.dto'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'

export class VicepresidenciaEjecutivaFinderAll extends GetAllBaseService<VicepresidenciaEjecutivaDto> {
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	constructor({
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	}) {
		super()
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<VicepresidenciaEjecutivaDto>> {
		const { data, total } = await this.vicepresidenciaEjecutivaRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
