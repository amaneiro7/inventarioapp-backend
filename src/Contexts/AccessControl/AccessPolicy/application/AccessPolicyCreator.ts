import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { EventBus } from '../../../Shared/domain/event/EventBus'
import { PermissionGroupId } from '../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyAlreadyExistsError } from '../domain/errors/AccessPolicyAlreadyExistsError'
import { PermissionGroupDoesNotExistError } from '../../PermissionGroup/domain/errors/PermissionGroupDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'

export class AccessPolicyCreator {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly eventBus: EventBus
	constructor({
		eventBus,
		accessPolicyRepository,
		permissionGroupRepository
	}: {
		accessPolicyRepository: AccessPolicyRepository
		permissionGroupRepository: PermissionGroupRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.permissionGroupRepository = permissionGroupRepository
		this.eventBus = eventBus
	}

	async run(params: AccessPolicyParams): Promise<void> {
		const { cargoId, name, permissionGroupIds, priority, departamentoId } = params
		const existingAccessPolicy = await this.accessPolicyRepository.findByName(name)
		if (existingAccessPolicy) {
			throw new AccessPolicyAlreadyExistsError(name)
		}

		await this.ensurePermissionsGroupsExist(permissionGroupIds)

		const policy = AccessPolicy.create({ name, cargoId, departamentoId, permissionGroupIds, priority })
		await this.accessPolicyRepository.save(policy.toPrimitives())

		// Publicar los eventos de dominio registrados en la entidad.
		// Por ejemplo, un AccessPolicyCreatedDomainEvent si fuera necesario.
		await this.eventBus.publish(policy.pullDomainEvents())
	}

	/**
	 * @private
	 * @description Ensures that all provided permission groups IDs exist in the database.
	 * It performs the checks in parallel to optimize performance.
	 * @param {Primitives<PermissionGroupId>[]} [permissionGroupIds] An array of permission IDs to validate.
	 * @returns {Promise<void>} A promise that resolves if all permissions exist.
	 * @throws {PermissionGroupDoesNotExistError} If any permission ID is not found.
	 */
	private async ensurePermissionsGroupsExist(permissionGroupIds?: Primitives<PermissionGroupId>[]): Promise<void> {
		if (!permissionGroupIds || permissionGroupIds.length === 0) {
			return
		}

		const uniquePermissionsGroups = [...new Set(permissionGroupIds)]

		// Find all permissions in a single database query for efficiency.
		const foundPermissionsGroup = await this.permissionGroupRepository.findByIds(uniquePermissionsGroups)

		// If the number of found permissions does not match the number of unique IDs,
		// it means at least one permission does not exist.
		if (foundPermissionsGroup.length !== uniquePermissionsGroups.length) {
			throw new PermissionGroupDoesNotExistError()
		}
	}
}
