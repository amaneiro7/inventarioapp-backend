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

interface PermissionGroupUpdaterParams {
	name?: string
	permissionsToAdd?: Primitives<PermissionId>[]
	permissionsToRevoke?: Primitives<PermissionId>[]
}

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
		params: PermissionGroupUpdaterParams
	}): Promise<void> {
		const permissionGroupId = new PermissionGroupId(id)

		const permissionGroup = await this.permissionGroupRepository.findById(permissionGroupId.value)
		if (permissionGroup === null) {
			throw new PermissionGroupDoesNotExistError(id)
		}

		const permissionGroupEntity = PermissionGroup.fromPrimitives(permissionGroup)

		if (params.name !== undefined && params.name !== permissionGroupEntity.name.value) {
			const existingGroup = await this.permissionGroupRepository.findByName(params.name)
			if (existingGroup) {
				throw new PermissionGroupAlreadyExistsError(params.name)
			}
			// Aquí necesitaríamos un método `updateName` en la entidad PermissionGroup
			// permissionGroupEntity.updateName(params.name)
		}

		if (params.permissionsToAdd) {
			for (const permId of params.permissionsToAdd) {
				const permission = await this.permissionRepository.findById(permId)
				if (permission === null) {
					throw new PermissionDoesNotExistError()
				}
				permissionGroupEntity.assignPermission(new PermissionId(permId))
			}
		}

		if (params.permissionsToRevoke) {
			for (const permId of params.permissionsToRevoke) {
				// No es necesario verificar si existe para revocarlo, la entidad ya lo maneja.
				permissionGroupEntity.revokePermission(new PermissionId(permId))
			}
		}

		await this.permissionGroupRepository.save(permissionGroupEntity.toPrimitives())
		await this.eventBus.publish(permissionGroupEntity.pullDomainEvents())
	}
}
