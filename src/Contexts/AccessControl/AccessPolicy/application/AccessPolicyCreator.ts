import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { AccessPolicyNameUniquenessChecker } from '../domain/service/AccessPolicyNameuniquenessChecker'
import { PermissionGroupExistenceChecker } from '../../PermissionGroup/domain/service/PermissionGroupExistanceChecker'
import { RoleExistenceChecker } from '../../../User/Role/domain/service/RoleExistanceChecker'
import { UnidadExistenceChecker } from '../../../employee/Unidad/domain/service/UnidadExistanceChecker'
import { CargoExistenceChecker } from '../../../employee/Cargo/domain/service/CargoExistanceChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { type CargoRepository } from '../../../employee/Cargo/domain/repository/CargoRepository'
import { type RoleRepository } from '../../../User/Role/domain/repository/RoleRepository'
import { type UnidadRepository } from '../../../employee/Unidad/domain/repository/UnidadRepository'

export class AccessPolicyCreator {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly accessPolicyNameUniquenessChecker: AccessPolicyNameUniquenessChecker
	private readonly permissionGroupExistanceChecker: PermissionGroupExistenceChecker
	private readonly roleExistenceChecker: RoleExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly unidadExistenceChecker: UnidadExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		eventBus,
		accessPolicyRepository,
		permissionGroupRepository,
		roleRepository,
		cargoRepository,
		unidadRepository
	}: {
		accessPolicyRepository: AccessPolicyRepository
		permissionGroupRepository: PermissionGroupRepository
		roleRepository: RoleRepository
		unidadRepository: UnidadRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.accessPolicyNameUniquenessChecker = new AccessPolicyNameUniquenessChecker(accessPolicyRepository)
		this.permissionGroupExistanceChecker = new PermissionGroupExistenceChecker(permissionGroupRepository)
		this.roleExistenceChecker = new RoleExistenceChecker(roleRepository)
		this.unidadExistenceChecker = new UnidadExistenceChecker(unidadRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	async run(params: AccessPolicyParams): Promise<void> {
		const { cargoId, name, permissionGroupIds, priority, unidadId, roleId } = params

		await Promise.all([
			this.accessPolicyNameUniquenessChecker.ensureUnique(name),
			this.roleExistenceChecker.ensureExist(roleId),
			this.cargoExistenceChecker.ensureExist(cargoId),
			this.unidadExistenceChecker.ensureExist(unidadId),
			this.permissionGroupExistanceChecker.ensureExist(permissionGroupIds)
		])

		const policy = AccessPolicy.create({
			name,
			cargoId,
			permissionGroupIds,
			priority,
			unidadId,
			roleId
		})

		await this.accessPolicyRepository.save(policy.toPrimitives())
		await this.eventBus.publish(policy.pullDomainEvents())
	}
}
