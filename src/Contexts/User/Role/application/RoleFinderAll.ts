import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { RoleId } from '../domain/RoleId'
import { type RoleRepository } from '../domain/RoleRepository'
import { type RoleDto } from '../domain/Role.dto'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'

/**
 * @description Use case for retrieving all Role entities, excluding the 'Admin' role.
 */
export class RoleFinderAll extends GetAllBaseService<RoleDto> {
	private readonly roleRepository: RoleRepository

	constructor({ roleRepository }: { roleRepository: RoleRepository }) {
		super()
		this.roleRepository = roleRepository
	}

	/**
	 * @description Executes the process of finding all roles, filtering out the 'Admin' role.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<RoleDto>>} A paginated response of roles, excluding the 'Admin' role.
	 */
	async run(criteria: Criteria): Promise<ResponseService<RoleDto>> {
		const { data, total } = await this.roleRepository.searchAll(criteria)
		const filteredData = data.filter(role => role.id !== RoleId.Options.ADMIN)

		return this.response({
			total,
			data: filteredData,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
