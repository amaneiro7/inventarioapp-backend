import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type DepartamentoDto } from '../domain/entity/Departamento.dto'
import { type DepartamentoRepository } from '../domain/repository/DepartamentoRepository'

/**
 * @description Use case for retrieving all Departamento entities.
 */
export class DepartamentoFinderAll extends GetAllBaseService<DepartamentoDto> {
	private readonly departamentoRepository: DepartamentoRepository

	constructor({ departamentoRepository }: { departamentoRepository: DepartamentoRepository }) {
		super()
		this.departamentoRepository = departamentoRepository
	}

	/**
	 * @description Executes the process of finding all Departamento entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<DepartamentoDto>>} A paginated response of Departamento entities.
	 */
	async run(criteria: Criteria): Promise<ResponseService<DepartamentoDto>> {
		const { data, total } = await this.departamentoRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
