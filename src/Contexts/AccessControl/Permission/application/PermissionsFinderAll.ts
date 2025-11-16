import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type PermissionDto } from '../domain/entity/Permission.dto'
import { type PermissionRepository } from '../domain/repository/PermissionRepository'

export class PermissionsFinderAll extends GetAllBaseService<PermissionDto> {
	private readonly permissionRepository: PermissionRepository
	constructor({ permissionRepository }: { permissionRepository: PermissionRepository }) {
		super()
		this.permissionRepository = permissionRepository
	}

	/**
	 * @description Executes the process of finding all permission entities.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<PermissionDto>>} A paginated response of Permission DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<PermissionDto>> {
		const { data, total } = await this.permissionRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}
