import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CentroTrabajoDto } from '../domain/CentroTrabajo.dto'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'

export class CentroTrabajoFinderAll extends GetAllBaseService<CentroTrabajoDto> {
	private readonly centroTrabajoRepository: CentroTrabajoRepository
	constructor({ centroTrabajoRepository }: { centroTrabajoRepository: CentroTrabajoRepository }) {
		super()
		this.centroTrabajoRepository = centroTrabajoRepository
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
