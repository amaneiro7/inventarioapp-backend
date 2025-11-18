import { PermissionId } from '../domain/valueObject/PermissionId'
import { PermissionDoesNotExistError } from '../domain/errors/PermissionDoesNotExistError'
import { type PermissionRepository } from '../domain/repository/PermissionRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionDto } from '../domain/entity/Permission.dto'

/**
 * @description Use case for finding an Permission entity by its unique identifier.
 */
export class PermissionFinder {
	private readonly permissionRepository: PermissionRepository

	constructor({ permissionRepository }: { permissionRepository: PermissionRepository }) {
		this.permissionRepository = permissionRepository
	}

	/**
	 * @description Executes the permission finding process.
	 * @param {{ id: Primitives<PermissionId> }} params The parameters for finding the permission.
	 * @returns {Promise<PermissionDto>} A promise that resolves to the found Permission DTO.
	 * @throws {PermissionDoesNotExistError} If no permission with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<PermissionId> }): Promise<PermissionDto> {
		const permissionId = new PermissionId(id).value
		const permission = await this.permissionRepository.findById(permissionId)

		if (!permission) {
			throw new PermissionDoesNotExistError({ permissionId: id })
		}

		return permission
	}
}
