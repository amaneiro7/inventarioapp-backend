import { PermissionGroupId } from '../domain/valueObject/PermissionGroupId'
import { PermissionGroupDoesNotExistError } from '../domain/errors/PermissionGroupDoesNotExistError'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupDto } from '../domain/entity/PermissionGroup.dto'

/**
 * @description Use case for finding an PermissionGroup entity by its unique identifier.
 */
export class PermissionGroupFinder {
	private readonly permissionGroupRepository: PermissionGroupRepository

	constructor({ permissionGroupRepository }: { permissionGroupRepository: PermissionGroupRepository }) {
		this.permissionGroupRepository = permissionGroupRepository
	}

	/**
	 * @description Executes the permission group finding process.
	 * @param {{ id: Primitives<PermissionGroupId> }} params The parameters for finding the permission group.
	 * @returns {Promise<PermissionGroupDto>} A promise that resolves to the found PermissionGroup DTO.
	 * @throws {PermissionGroupDoesNotExistError} If no permission group with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<PermissionGroupId> }): Promise<PermissionGroupDto> {
		const permissionGroupId = new PermissionGroupId(id).value
		const permissionGroup = await this.permissionGroupRepository.findById(permissionGroupId)

		if (!permissionGroup) {
			throw new PermissionGroupDoesNotExistError(id)
		}

		return permissionGroup
	}
}
