import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupDoesNotExistError } from '../domain/errors/PermissionGroupDoesNotExistError'
import { PermissionGroupAlreadyExistsError } from '../domain/errors/PermissionGroupAlreadyExistsError'
import { PermissionDoesNotExistError } from '../../Permission/domain/errors/PermissionDoesNotExistError'
import { PermissionGroupId } from '../domain/valueObject/PermissionGroupId'
import { PermissionId } from '../../Permission/domain/valueObject/PermissionId'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type PermissionGroupParams } from '../domain/entity/PermissionGroup.dto'

/**
 * @description Use case for updating an existing PermissionGroup entity.
 */
export class PermissionGroupUpdater {
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

	/**
	 * @description Executes the permission group update process.
	 * @param {object} data The parameters for updating the permission group.
	 * @param {Primitives<PermissionGroupId>} data.id The ID of the group to update.
	 * @param {PermissionGroupUpdaterParams} data.params The new data for the group.
	 * @returns {Promise<void>} A promise that resolves when the group is successfully updated.
	 * @throws {PermissionGroupDoesNotExistError} If the group with the provided ID does not exist.
	 * @throws {PermissionGroupAlreadyExistsError} If the new name already exists for another group.
	 * @throws {PermissionDoesNotExistError} If any of the permission IDs to add/revoke do not exist.
	 */
	async run({
		id,
		params
	}: {
		id: Primitives<PermissionGroupId>
		params: Partial<PermissionGroupParams>
	}): Promise<void> {
		const permissionGroupId = new PermissionGroupId(id)

		const permissionGroup = await this.permissionGroupRepository.findById(permissionGroupId.value)
		if (permissionGroup === null) {
			throw new PermissionGroupDoesNotExistError(id)
		}

		const permissionGroupEntity = PermissionGroup.fromPrimitives(permissionGroup)

		if (params.name !== undefined && params.name !== permissionGroupEntity.name.value) {
			const existingGroup = await this.permissionGroupRepository.findByName(params.name)
			if (existingGroup && existingGroup.id !== permissionGroupEntity.id.value) {
				throw new PermissionGroupAlreadyExistsError(params.name)
			}
			permissionGroupEntity.updateName(params.name)
		}

		if (params.description !== undefined && params.description !== permissionGroupEntity.description.value) {
			permissionGroupEntity.updateDescription(params.description)
		}

		if (params.permissions !== undefined) {
			await this.updatePermissionsInGroup(permissionGroupEntity, params?.permissions)
		}

		await this.permissionGroupRepository.save(permissionGroupEntity.toPrimitives())
		await this.eventBus.publish(permissionGroupEntity.pullDomainEvents())
	}

	/**
	 * @private
	 * @description Ensures that all provided permission IDs exist and updates the permission group's permissions.
	 * It calculates the difference between current and new permissions and applies granular changes.
	 * @param {PermissionGroup} entity The permission group entity being updated.
	 * @param {Primitives<PermissionId>[]} newPermissionPrimitives The list of new permission IDs (as primitives) to set for the group.
	 * @returns {Promise<void>} A promise that resolves when the permissions are successfully updated.
	 * @throws {PermissionDoesNotExistError} If any of the provided permission IDs do not exist.
	 */
	private async updatePermissionsInGroup(
		entity: PermissionGroup,
		newPermissionPrimitives: Primitives<PermissionId>[]
	): Promise<void> {
		const uniqueNewPermissionPrimitives = [...new Set(newPermissionPrimitives)]

		// 1. Validate existence of all incoming permission IDs in a single query
		if (uniqueNewPermissionPrimitives.length > 0) {
			const foundPermissions = await this.permissionRepository.findByIds(uniqueNewPermissionPrimitives)

			// If the number of found permissions does not match the number of unique IDs,
			// it means at least one permission does not exist.
			if (foundPermissions.length !== uniqueNewPermissionPrimitives.length) {
				throw new PermissionDoesNotExistError()
			}
		}

		// 2. Convert primitives to value objects for comparison and entity methods
		const newPermissionIds = new Set(uniqueNewPermissionPrimitives.map(p => new PermissionId(p)))
		const currentPermissionIds = new Set(entity.permissionsValue.map(p => new PermissionId(p)))

		// 3. Determine permissions to add
		for (const newPermId of newPermissionIds) {
			if (![...currentPermissionIds].some(currentPerm => currentPerm.equals(newPermId))) {
				entity.assignPermission(newPermId)
			}
		}

		// 4. Determine permissions to remove
		for (const currentPermId of currentPermissionIds) {
			if (![...newPermissionIds].some(newPerm => newPerm.equals(currentPermId))) {
				entity.revokePermission(currentPermId)
			}
		}
	}
}
