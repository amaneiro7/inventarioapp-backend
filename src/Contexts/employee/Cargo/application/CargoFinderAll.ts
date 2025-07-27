import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CargoDto } from '../domain/Cargo.dto'
import { type CargoRepository } from '../domain/CargoRepository'

/**
 * @description Use case for retrieving all Cargo entities.
 */
export class CargoFinderAll extends GetAllBaseService<CargoDto> {
	private readonly cargoRepository: CargoRepository

	constructor({ cargoRepository }: { cargoRepository: CargoRepository }) {
		super()
		this.cargoRepository = cargoRepository
	}

	/**
	 * @description Executes the process of finding all cargos.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<CargoDto>>} A paginated response of cargos.
	 */
	async run(criteria: Criteria): Promise<ResponseService<CargoDto>> {
		const { data, total } = await this.cargoRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
