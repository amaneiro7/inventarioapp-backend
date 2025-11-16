import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type PermissionGroupDto } from '../domain/entity/PermissionGroup.dto'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'

/**
 * @description Use case for searching all PermissionGroup entities.
 */
export class PermissionGroupFinderAll {
	private readonly permissionGroupRepository: PermissionGroupRepository

	constructor({ permissionGroupRepository }: { permissionGroupRepository: PermissionGroupRepository }) {
		this.permissionGroupRepository = permissionGroupRepository
	}

	/**
	 * @description Executes the search process for all permission groups based on the provided criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<PermissionGroupDto>>} A promise that resolves to a paginated response of PermissionGroup DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseDB<PermissionGroupDto>> {
		const permissionGroups = await this.permissionGroupRepository.searchAll(criteria)

		return permissionGroups
	}
}
