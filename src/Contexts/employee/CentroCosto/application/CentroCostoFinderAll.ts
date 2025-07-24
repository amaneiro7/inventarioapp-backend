import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type CentroCostoDto } from '../domain/CentroCosto.dto'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'

export class CentroCostoFinderAll extends GetAllBaseService<CentroCostoDto> {
	private readonly centroCostoRepository: CentroCostoRepository
	constructor({ centroCostoRepository }: { centroCostoRepository: CentroCostoRepository }) {
		super()
		this.centroCostoRepository = centroCostoRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<CentroCostoDto>> {
		const { data, total } = await this.centroCostoRepository.searchAll(criteria)

		return this.response({
			total,
			data,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
