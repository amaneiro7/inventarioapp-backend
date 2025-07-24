import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type AdministrativeRegionDto } from '../domain/AdministrativeRegion.dto'
import { type AdministrativeRegionRepository } from '../domain/AdministrativeRegionRepository'

export class AdministrativeRegionFinderAll extends GetAllBaseService<AdministrativeRegionDto> {
	private readonly administrativeRegionRepository: AdministrativeRegionRepository
	constructor({
		administrativeRegionRepository
	}: {
		administrativeRegionRepository: AdministrativeRegionRepository
	}) {
		super()
		this.administrativeRegionRepository = administrativeRegionRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<AdministrativeRegionDto>> {
		const { data, total } = await this.administrativeRegionRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
