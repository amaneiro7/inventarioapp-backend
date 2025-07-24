import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type RegionDto } from '../domain/Region.dto'
import { type RegionRepository } from '../domain/RegionRepository'

export class RegionFinderAll extends GetAllBaseService<RegionDto> {
	private readonly regionRepository: RegionRepository
	constructor({ regionRepository }: { regionRepository: RegionRepository }) {
		super()
		this.regionRepository = regionRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<RegionDto>> {
		const { data, total } = await this.regionRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
