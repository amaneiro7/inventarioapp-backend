import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { RoleId } from '../domain/RoleId'
import { type RoleRepository } from '../domain/RoleRepository'
import { type RoleDto } from '../domain/Role.dto'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'

export class RoleFinderAll extends GetAllBaseService<RoleDto> {
	constructor(private readonly roleRepository: RoleRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<RoleDto>> {
		const { data, total } = await this.roleRepository.searchAll(criteria)
		const dataWithoutAdmin = data.filter(elem => elem.id !== RoleId.Options.ADMIN)
		return this.response({
			total,
			data: dataWithoutAdmin,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
