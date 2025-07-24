import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type CargoDto } from '../domain/Cargo.dto'
import { type CargoRepository } from '../domain/CargoRepository'

export class CargoFinderAll extends GetAllBaseService<CargoDto> {
	private readonly cargoRepository: CargoRepository
	constructor({ cargoRepository }: { cargoRepository: CargoRepository }) {
		super()
		this.cargoRepository = cargoRepository
	}
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
