import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupNameUniquenessChecker } from '../domain/service/PermissionGroupNameuniquenessChecker'
import { PermissionExistenceChecker } from '../../Permission/domain/service/PermissionExistanceChecker'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type PermissionGroupParams } from '../domain/entity/PermissionGroup.dto'
import { type PermissionRepository } from '../../Permission/domain/repository/PermissionRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

export class PermissionGroupCreator {
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

	async run(params: PermissionGroupParams): Promise<void> {
		const { name, permissions, description } = params

		await Promise.all([
			this.permissionGroupNameUniquenessChecker.ensureUnique(name),
			this.permissionChecker.ensureExist(permissions)
		])

		const permissionGroup = PermissionGroup.create({ name, permissions, description })
		await this.permissionGroupRepository.save(permissionGroup.toPrimitives())
		await this.eventBus.publish(permissionGroup.pullDomainEvents())
	}
}
