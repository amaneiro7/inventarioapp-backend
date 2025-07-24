import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type TypeOfSiteDto } from '../domain/TypeOfSite.dto'
import { type TypeOfSiteRepository } from '../domain/TypeOfSiteRepository'

export class TypeOfSiteFinderAll extends GetAllBaseService<TypeOfSiteDto> {
	private readonly typeOfSiteRepository: TypeOfSiteRepository
	constructor({ typeOfSiteRepository }: { typeOfSiteRepository: TypeOfSiteRepository }) {
		super()
		this.typeOfSiteRepository = typeOfSiteRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<TypeOfSiteDto>> {
		const { data, total } = await this.typeOfSiteRepository.searchAll(criteria)
		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
