import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyId } from '../domain/valueObject/AccessPolicyId'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { AccessPolicyDoesNotExistError } from '../domain/errors/AccessPolicyDoesNotExistError'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { PermissionGroupId } from '../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { PermissionGroupDoesNotExistError } from '../../PermissionGroup/domain/errors/PermissionGroupDoesNotExistError'
import { AccessPolicyAlreadyExistsError } from '../domain/errors/AccessPolicyAlreadyExistsError'

export class AccessPolicyUpdater {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly eventBus: EventBus
	constructor({
		accessPolicyRepository,
		permissionGroupRepository,
		eventBus
	}: {
		accessPolicyRepository: AccessPolicyRepository
		permissionGroupRepository: PermissionGroupRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.permissionGroupRepository = permissionGroupRepository
		this.eventBus = eventBus
	}

	async run({ id, params }: { id: Primitives<AccessPolicyId>; params: AccessPolicyParams }): Promise<void> {
		const accessPolicyPrimitives = await this.accessPolicyRepository.findById(id)

		if (!accessPolicyPrimitives) {
			throw new AccessPolicyDoesNotExistError(id)
		}

		const { permissionsGroups } = accessPolicyPrimitives
		const policy = AccessPolicy.fromPrimitives({
			...accessPolicyPrimitives,
			permissionsGroups: permissionsGroups.map(group => group.id)
		})

		let hasChanges = false

		// Usamos los métodos de actualización de la entidad de dominio
		if (params.name !== undefined && params.name !== policy.nameValue) {
			const existingPolicy = await this.accessPolicyRepository.findByName(params.name)
			if (existingPolicy && existingPolicy.id !== policy.idValue) {
				throw new AccessPolicyAlreadyExistsError(params.name)
			}
			policy.updateName(params.name)
			hasChanges = true
		}

		if (params.roleId !== undefined && params.roleId !== policy.roleValue) {
			policy.updateRole(params.roleId)
			hasChanges = true
		}
		if (params.cargoId !== undefined && params.cargoId !== policy.cargoValue) {
			policy.updateCargo(params.cargoId)
			hasChanges = true
		}

		if (params.departamentoId !== undefined && params.departamentoId !== policy.departamentoValue) {
			policy.updateDepartamento(params.departamentoId)
			hasChanges = true
		}

		if (params.vicepresidenciaId !== undefined && params.vicepresidenciaId !== policy.vicepresidenciaValue) {
			policy.updateVicepresidencia(params.vicepresidenciaId)
			hasChanges = true
		}

		if (
			params.vicepresidenciaEjecutivaId !== undefined &&
			params.vicepresidenciaEjecutivaId !== policy.vicepresidenciaEjecutivaValue
		) {
			policy.updatevicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId)
			hasChanges = true
		}

		if (params.directivaId !== undefined && params.directivaId !== policy.directivaValue) {
			policy.updateDirectiva(params.directivaId)
			hasChanges = true
		}

		if (params.priority !== undefined && params.priority !== policy.priorityValue) {
			policy.updatePriority(params.priority)
			hasChanges = true
		}

		if (params.permissionGroupIds !== undefined) {
			const permissionsChanged = await this.updatePermissionsGroupsInAccessPolic({
				entity: policy,
				newPermissionGroupIds: params.permissionGroupIds
			})
			if (permissionsChanged) {
				hasChanges = true
			}
		}

		if (hasChanges) {
			await this.accessPolicyRepository.save(policy.toPrimitives())
			// Publicar eventos si la actualización generó alguno
			await this.eventBus.publish(policy.pullDomainEvents())
		}
	}

	/**
	 * @private
	 * @description Updates the permissions associated with a PermissionGroup entity.
	 * This method performs a differential update: it identifies which permissions to add and which to revoke
	 * by comparing the current permissions of the entity with the new list provided.
	 * It also validates that all new permission IDs exist in the database before applying changes.
	 * @param {PermissionGroup} entity The `PermissionGroup` domain entity to update.
	 * @param {string[]} newPermissionGroupIds An array of permission IDs (as strings) to be set for the group.
	 * @returns {Promise<void>} A promise that resolves when the update is complete.
	 * @throws {PermissionDoesNotExistError} If one or more permission IDs in `newPermissionGroupIds` do not correspond to an existing permission.
	 */
	private async updatePermissionsGroupsInAccessPolic({
		entity,
		newPermissionGroupIds
	}: {
		entity: AccessPolicy
		newPermissionGroupIds: Primitives<PermissionGroupId>[]
	}): Promise<boolean> {
		let hasPermissionsChanged = false
		const uniquenewPermissionGroupIds = [...new Set(newPermissionGroupIds)]

		// 1. Validar la existencia de todos los IDs de permisos entrantes en una sola consulta.
		if (uniquenewPermissionGroupIds.length > 0) {
			const foundPermissionsGroups = await this.permissionGroupRepository.findByIds(uniquenewPermissionGroupIds)

			// If the number of found permissions does not match the number of unique IDs,
			// it means at least one permission does not exist.
			if (foundPermissionsGroups.length !== uniquenewPermissionGroupIds.length) {
				// Identificar qué permisos no se encontraron para un mensaje de error más útil.
				const foundIds = new Set(foundPermissionsGroups.map(p => p.id))
				const missingIds = uniquenewPermissionGroupIds.filter(id => !foundIds.has(id))
				throw new PermissionGroupDoesNotExistError({
					permissionId: missingIds.join(', ')
				})
			}
		}

		const newIdSet = new Set(uniquenewPermissionGroupIds)
		const currentIdSet = new Set(entity.permissionGroupValue)

		// 3. Determine permissions to add
		for (const id of newIdSet) {
			if (!currentIdSet.has(id)) {
				entity.assignPermissionGroup(new PermissionGroupId(id))
				hasPermissionsChanged = true
			}
		}

		// 4. Determine permissions to remove
		for (const id of currentIdSet) {
			if (!newIdSet.has(id)) {
				entity.revokePermissionGroup(new PermissionGroupId(id))
				hasPermissionsChanged = true
			}
		}

		return hasPermissionsChanged
	}
}
