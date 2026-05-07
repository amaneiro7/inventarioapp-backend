import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type UnidadRepository } from '../domain/repository/UnidadRepository'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type UnidadDto } from '../domain/entity/Unidad.dto'

/**
 * @description Use case for retrieving all Unidad entities.
 */
export class UnidadFinderAll extends GetAllBaseService<UnidadDto> {
	private readonly unidadRepository: UnidadRepository

	constructor({ unidadRepository }: { unidadRepository: UnidadRepository }) {
		super()
		this.unidadRepository = unidadRepository
	}

	/**
	 * @description Executes the process of finding all Unidad entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<UnidadDto>>} A paginated response of Unidad DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<UnidadDto>> {
		const { data, total } = await this.unidadRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
