import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { AccessPolicyNameUniquenessChecker } from '../domain/service/AccessPolicyNameuniquenessChecker'
import { PermissionGroupExistenceChecker } from '../../PermissionGroup/domain/service/PermissionGroupExistanceChecker'
import { RoleExistenceChecker } from '../../../User/Role/domain/service/RoleExistanceChecker'
import { DirectivaExistenceChecker } from '../../../employee/Directiva/domain/service/DirectivaExistanceChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../../employee/VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { VicepresidenciaExistenceChecker } from '../../../employee/Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { DepartamentoExistenceChecker } from '../../../employee/Departamento/domain/service/DepartamentoExistanceChecker'
import { CargoExistenceChecker } from '../../../employee/Cargo/domain/service/CargoExistanceChecker'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { type CargoRepository } from '../../../employee/Cargo/domain/repository/CargoRepository'
import { type DirectivaRepository } from '../../../employee/Directiva/domain/repository/DirectivaRepository'
import { type VicepresidenciaEjecutivaRepository } from '../../../employee/VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaRepository } from '../../../employee/Vicepresidencia/domain/repository/VicepresidenciaRepository'
import { type DepartamentoRepository } from '../../../employee/Departamento/domain/repository/DepartamentoRepository'
import { type RoleRepository } from '../../../User/Role/domain/repository/RoleRepository'

export class AccessPolicyCreator {
	private readonly accessPolicyRepository: AccessPolicyRepository
	private readonly accessPolicyNameUniquenessChecker: AccessPolicyNameUniquenessChecker
	private readonly permissionGroupExistanceChecker: PermissionGroupExistenceChecker
	private readonly roleExistenceChecker: RoleExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly departamentoExistenceChecker: DepartamentoExistenceChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly vicepresidenciaEjecutivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		eventBus,
		accessPolicyRepository,
		permissionGroupRepository,
		roleRepository,
		cargoRepository,
		departamentoRepository,
		vicepresidenciaRepository,
		vicepresidenciaEjecutivaRepository,
		directivaRepository
	}: {
		accessPolicyRepository: AccessPolicyRepository
		permissionGroupRepository: PermissionGroupRepository
		roleRepository: RoleRepository
		directivaRepository: DirectivaRepository
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		vicepresidenciaRepository: VicepresidenciaRepository
		departamentoRepository: DepartamentoRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.accessPolicyRepository = accessPolicyRepository
		this.accessPolicyNameUniquenessChecker = new AccessPolicyNameUniquenessChecker(accessPolicyRepository)
		this.permissionGroupExistanceChecker = new PermissionGroupExistenceChecker(permissionGroupRepository)
		this.roleExistenceChecker = new RoleExistenceChecker(roleRepository)
		this.directivaExistenceChecker = new DirectivaExistenceChecker(directivaRepository)
		this.vicepresidenciaEjecutivaExistenceChecker = new VicepresidenciaEjecutivaExistenceChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.vicepresidenciaExistenceChecker = new VicepresidenciaExistenceChecker(vicepresidenciaRepository)
		this.departamentoExistenceChecker = new DepartamentoExistenceChecker(departamentoRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	async run(params: AccessPolicyParams): Promise<void> {
		const {
			cargoId,
			name,
			permissionGroupIds,
			priority,
			departamentoId,
			directivaId,
			roleId,
			vicepresidenciaEjecutivaId,
			vicepresidenciaId
		} = params

		await Promise.all([
			this.accessPolicyNameUniquenessChecker.ensureUnique(name),
			this.roleExistenceChecker.ensureExist(roleId),
			this.cargoExistenceChecker.ensureExist(cargoId),
			this.departamentoExistenceChecker.ensureExist(departamentoId),
			this.vicepresidenciaExistenceChecker.ensureExist(vicepresidenciaId),
			this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(vicepresidenciaEjecutivaId),
			this.directivaExistenceChecker.ensureExist(directivaId),
			this.permissionGroupExistanceChecker.ensureExist(permissionGroupIds)
		])

		const policy = AccessPolicy.create({
			name,
			cargoId,
			departamentoId,
			permissionGroupIds,
			priority,
			directivaId,
			roleId,
			vicepresidenciaEjecutivaId,
			vicepresidenciaId
		})

		await this.accessPolicyRepository.save(policy.toPrimitives())
		await this.eventBus.publish(policy.pullDomainEvents())
	}
}
