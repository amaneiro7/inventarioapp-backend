import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupAlreadyExistsError } from '../domain/errors/PermissionGroupAlreadyExistsError'
import { PermissionDoesNotExistError } from '../../Permission/domain/errors/PermissionDoesNotExistError'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type PermissionGroupParams } from '../domain/entity/PermissionGroup.dto'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionId } from '../../Permission/domain/valueObject/PermissionId'

export class PermissionGroupCreator {
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly permissionRepository: PermissionRepository
	private readonly eventBus: EventBus
	constructor({
		permissionGroupRepository,
		permissionRepository,
		eventBus
	}: {
		permissionGroupRepository: PermissionGroupRepository
		permissionRepository: PermissionRepository
		eventBus: EventBus
	}) {
		this.permissionGroupRepository = permissionGroupRepository
		this.permissionRepository = permissionRepository
		this.eventBus = eventBus
	}

	async run(params: PermissionGroupParams): Promise<void> {
		const { name, permissions, description } = params
		const existingPermissionGroup = await this.permissionGroupRepository.findByName(name)
		if (existingPermissionGroup) {
			throw new PermissionGroupAlreadyExistsError(name)
		}

		await this.ensurePermissionsExist(permissions)

		const permissionGroup = PermissionGroup.create({ name, permissions, description })
		await this.permissionGroupRepository.save(permissionGroup.toPrimitives())
		await this.eventBus.publish(permissionGroup.pullDomainEvents())
	}

	/**
	 * @private
	 * @description Ensures that all provided permission IDs exist in the database.
	 * It performs the checks in parallel to optimize performance.
	 * @param {Primitives<PermissionId>[]} [permissionIds] An array of permission IDs to validate.
	 * @returns {Promise<void>} A promise that resolves if all permissions exist.
	 * @throws {PermissionDoesNotExistError} If any permission ID is not found.
	 */
	private async ensurePermissionsExist(permissionIds?: Primitives<PermissionId>[]): Promise<void> {
		if (!permissionIds || permissionIds.length === 0) {
			return
		}

		const uniquePermissions = [...new Set(permissionIds)]

		// Find all permissions in a single database query for efficiency.
		const foundPermissions = await this.permissionRepository.findByIds(uniquePermissions)

		// If the number of found permissions does not match the number of unique IDs,
		// it means at least one permission does not exist.
		if (foundPermissions.length !== uniquePermissions.length) {
			throw new PermissionDoesNotExistError()
		}
	}
}
