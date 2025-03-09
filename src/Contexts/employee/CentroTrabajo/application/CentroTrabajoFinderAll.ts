import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CentroTrabajoDto } from '../domain/CentroTrabajo.dto'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'

export class CentroTrabajoFinderAll extends GetAllBaseService<CentroTrabajoDto> {
	constructor(private readonly centroTrabajoRepository: CentroTrabajoRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<CentroTrabajoDto>> {
		const { data, total } = await this.centroTrabajoRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
