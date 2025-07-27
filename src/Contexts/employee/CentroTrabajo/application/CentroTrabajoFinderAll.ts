import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CentroTrabajoDto } from '../domain/CentroTrabajo.dto'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'

/**
 * @description Use case for retrieving all CentroTrabajo entities.
 */
export class CentroTrabajoFinderAll extends GetAllBaseService<CentroTrabajoDto> {
	private readonly centroTrabajoRepository: CentroTrabajoRepository

	constructor({ centroTrabajoRepository }: { centroTrabajoRepository: CentroTrabajoRepository }) {
		super()
		this.centroTrabajoRepository = centroTrabajoRepository
	}

	/**
	 * @description Executes the process of finding all CentroTrabajo entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<CentroTrabajoDto>>} A paginated response of CentroTrabajo entities.
	 */
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
