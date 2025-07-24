import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type SiteDto } from '../domain/Site.dto'
import { type SiteRepository } from '../domain/SiteRepository'

export class SiteFinderAll extends GetAllBaseService<SiteDto> {
	private readonly siteRepository: SiteRepository
	constructor({ siteRepository }: { siteRepository: SiteRepository }) {
		super()
		this.siteRepository = siteRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<SiteDto>> {
		const { data, total } = await this.siteRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
