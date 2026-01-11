import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupDoesNotExistError } from '../domain/errors/PermissionGroupDoesNotExistError'
import { PermissionGroupId } from '../domain/valueObject/PermissionGroupId'
import { PermissionId } from '../../Permission/domain/valueObject/PermissionId'
import { PermissionExistenceChecker } from '../../Permission/domain/service/PermissionExistanceChecker'
import { PermissionGroupNameUniquenessChecker } from '../domain/service/PermissionGroupNameuniquenessChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type PermissionGroupFields, type PermissionGroupParams } from '../domain/entity/PermissionGroup.dto'

/**
 * @description Use case for updating an existing PermissionGroup entity.
 */
export class PermissionGroupUpdater {
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly permissionGroupNameUniquenessChecker: PermissionGroupNameUniquenessChecker
	private readonly permissionChecker: PermissionExistenceChecker
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
		this.permissionGroupNameUniquenessChecker = new PermissionGroupNameUniquenessChecker(permissionGroupRepository)
		this.permissionChecker = new PermissionExistenceChecker(permissionRepository)
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
		const changes: Array<{ field: PermissionGroupFields; oldValue: unknown; newValue: unknown }> = []
		if (params.name !== undefined && params.name !== permissionGroupEntity.nameValue) {
			this.permissionGroupNameUniquenessChecker.ensureUnique(params.name, permissionGroupEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: permissionGroupEntity.nameValue,
				newValue: params.name
			})

			permissionGroupEntity.updateName(params.name)
		}

		if (params.description !== undefined && params.description !== permissionGroupEntity.descriptionValue) {
			changes.push({
				field: 'description',
				oldValue: permissionGroupEntity.descriptionValue,
				newValue: params.description
			})
			permissionGroupEntity.updateDescription(params.description)
		}

		if (params.permissions !== undefined) {
			const oldPermissions = permissionGroupEntity.permissionsValue
			const hasChanges = await this.updatePermissionsInGroup(permissionGroupEntity, params?.permissions)
			if (hasChanges) {
				changes.push({
					field: 'permissions',
					oldValue: oldPermissions,
					newValue: permissionGroupEntity.permissionsValue
				})
			}
		}

		if (changes.length > 0) {
			permissionGroupEntity.registerUpdateEvent({ changes })
			await this.permissionGroupRepository.save(permissionGroupEntity.toPrimitives())
			await this.eventBus.publish(permissionGroupEntity.pullDomainEvents())
		}
	}

	/**
	 * @private
	 * @description Ensures that all provided permission IDs exist and updates the permission group's permissions.
	 * It calculates the difference between current and new permissions and applies granular changes.
	 * @param {PermissionGroup} entity The permission group entity being updated.
	 * @param {Primitives<PermissionId>[]} newPermissionPrimitives The list of new permission IDs (as primitives) to set for the group.
	 * @returns {Promise<boolean>} A promise that resolves when the permissions are successfully updated.
	 * @throws {PermissionDoesNotExistError} If any of the provided permission IDs do not exist.
	 */
	private async updatePermissionsInGroup(
		entity: PermissionGroup,
		newPermissionPrimitives: Primitives<PermissionId>[]
	): Promise<boolean> {
		let hasPermissionsChanged = false
		const uniqueNewPermissionPrimitives = [...new Set(newPermissionPrimitives)]

		// 1. Validate existence of all incoming permission IDs in a single query
		if (uniqueNewPermissionPrimitives.length > 0) {
			await this.permissionChecker.ensureExist(uniqueNewPermissionPrimitives)
		}

		// 2. Convert primitives to value objects for comparison and entity methods
		const newPermissionIds = new Set(uniqueNewPermissionPrimitives.map(p => new PermissionId(p)))
		const currentPermissionIds = new Set(entity.permissionsValue.map(p => new PermissionId(p)))

		// 3. Determine permissions to add
		for (const newPermId of newPermissionIds) {
			if (!currentPermissionIds.has(newPermId)) {
				entity.assignPermission(newPermId)
			}
			hasPermissionsChanged = true
		}

		// 4. Determine permissions to remove
		for (const currentPermId of currentPermissionIds) {
			if (!newPermissionIds.has(currentPermId)) {
				entity.revokePermission(currentPermId)
			}
			hasPermissionsChanged = true
		}

		return hasPermissionsChanged
	}
}
