import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type VicepresidenciaEjecutivaDto } from '../domain/entity/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaEjecutivaRepository } from '../domain/repository/VicepresidenciaEjecutivaRepository'

/**
 * @description Use case for retrieving all VicepresidenciaEjecutiva entities.
 */
export class VicepresidenciaEjecutivaFinderAll extends GetAllBaseService<VicepresidenciaEjecutivaDto> {
	private readonly vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository

	constructor({
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
	}) {
		super()
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
	}

	/**
	 * @description Executes the process of finding all VicepresidenciaEjecutiva entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<VicepresidenciaEjecutivaDto>>} A paginated response of VicepresidenciaEjecutiva entities.
	 */
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
