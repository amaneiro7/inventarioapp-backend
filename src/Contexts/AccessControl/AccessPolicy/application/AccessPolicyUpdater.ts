import { AccessPolicyDoesNotExistError } from '../domain/errors/AccessPolicyDoesNotExistError'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { PermissionGroupId } from '../../PermissionGroup/domain/valueObject/PermissionGroupId'
import { AccessPolicyNameUniquenessChecker } from '../domain/service/AccessPolicyNameuniquenessChecker'
import { PermissionGroupExistenceChecker } from '../../PermissionGroup/domain/service/PermissionGroupExistanceChecker'
import { RoleExistenceChecker } from '../../../User/Role/domain/service/RoleExistanceChecker'
import { DirectivaExistenceChecker } from '../../../employee/Directiva/domain/service/DirectivaExistanceChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../../employee/VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { VicepresidenciaExistenceChecker } from '../../../employee/Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { DepartamentoExistenceChecker } from '../../../employee/Departamento/domain/service/DepartamentoExistanceChecker'
import { CargoExistenceChecker } from '../../../employee/Cargo/domain/service/CargoExistanceChecker'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyId } from '../domain/valueObject/AccessPolicyId'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'
import { type AccessPolicyFields, type AccessPolicyParams } from '../domain/entity/AccessPolicy.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type PermissionGroupRepository } from '../../PermissionGroup/domain/repository/PermissionGroupRepository'
import { type CargoRepository } from '../../../employee/Cargo/domain/repository/CargoRepository'
import { type DirectivaRepository } from '../../../employee/Directiva/domain/repository/DirectivaRepository'
import { type VicepresidenciaEjecutivaRepository } from '../../../employee/VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaRepository } from '../../../employee/Vicepresidencia/domain/repository/VicepresidenciaRepository'
import { type DepartamentoRepository } from '../../../employee/Departamento/domain/repository/DepartamentoRepository'
import { type RoleRepository } from '../../../User/Role/domain/repository/RoleRepository'

export class AccessPolicyUpdater {
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

		const validations: Promise<void>[] = []
		const changes: Array<{ field: AccessPolicyFields; oldValue: unknown; newValue: unknown }> = []

		if (params.name !== undefined && params.name !== policy.nameValue) {
			validations.push(this.accessPolicyNameUniquenessChecker.ensureUnique(params.name, policy.idValue))
			changes.push({
				field: 'name',
				oldValue: policy.nameValue,
				newValue: params.name
			})
			policy.updateName(params.name)
		}

		if (params.roleId !== undefined && params.roleId !== policy.roleValue) {
			validations.push(this.roleExistenceChecker.ensureExist(params.roleId))
			changes.push({
				field: 'roleId',
				oldValue: policy.roleValue,
				newValue: params.roleId
			})
			policy.updateRole(params.roleId)
		}
		if (params.cargoId !== undefined && params.cargoId !== policy.cargoValue) {
			validations.push(this.cargoExistenceChecker.ensureExist(params.cargoId))
			changes.push({
				field: 'cargoId',
				oldValue: policy.cargoValue,
				newValue: params.cargoId
			})
			policy.updateCargo(params.cargoId)
		}

		if (params.departamentoId !== undefined && params.departamentoId !== policy.departamentoValue) {
			validations.push(this.departamentoExistenceChecker.ensureExist(params.departamentoId))
			changes.push({
				field: 'departamentoId',
				oldValue: policy.departamentoValue,
				newValue: params.departamentoId
			})
			policy.updateDepartamento(params.departamentoId)
		}

		if (params.vicepresidenciaId !== undefined && params.vicepresidenciaId !== policy.vicepresidenciaValue) {
			validations.push(this.vicepresidenciaExistenceChecker.ensureExist(params.vicepresidenciaId))
			changes.push({
				field: 'vicepresidenciaId',
				oldValue: policy.vicepresidenciaValue,
				newValue: params.vicepresidenciaId
			})
			policy.updateVicepresidencia(params.vicepresidenciaId)
		}

		if (
			params.vicepresidenciaEjecutivaId !== undefined &&
			params.vicepresidenciaEjecutivaId !== policy.vicepresidenciaEjecutivaValue
		) {
			validations.push(
				this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(params.vicepresidenciaEjecutivaId)
			)
			changes.push({
				field: 'vicepresidenciaEjecutivaId',
				oldValue: policy.vicepresidenciaEjecutivaValue,
				newValue: params.vicepresidenciaEjecutivaId
			})
			policy.updatevicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId)
		}

		if (params.directivaId !== undefined && params.directivaId !== policy.directivaValue) {
			validations.push(this.directivaExistenceChecker.ensureExist(params.directivaId))
			changes.push({
				field: 'directivaId',
				oldValue: policy.directivaValue,
				newValue: params.directivaId
			})
			policy.updateDirectiva(params.directivaId)
		}

		if (params.priority !== undefined && params.priority !== policy.priorityValue) {
			changes.push({
				field: 'priority',
				oldValue: policy.priorityValue,
				newValue: params.priority
			})
			policy.updatePriority(params.priority)
		}

		if (params.permissionGroupIds !== undefined) {
			// Agregamos la validación al array para que se ejecute en paralelo con las demás
			const uniqueNewPermissionGroupIds = [...new Set(params.permissionGroupIds)]
			if (uniqueNewPermissionGroupIds.length > 0) {
				validations.push(this.permissionGroupExistanceChecker.ensureExist(uniqueNewPermissionGroupIds))
			}

			const oldPermissionsGroups = policy.permissionGroupValue
			// Ahora este método es síncrono y puramente lógico (optimistic update)
			const hasChanges = this.updatePermissionsGroupsInAccessPolicy({
				entity: policy,
				newPermissionGroupIds: params.permissionGroupIds
			})
			if (hasChanges) {
				changes.push({
					field: 'permissionGroupIds',
					oldValue: oldPermissionsGroups,
					newValue: policy.permissionGroupValue
				})
			}
		}

		await Promise.all(validations)
		if (changes.length > 0) {
			policy.registerUpdateEvent({ changes })
			await this.accessPolicyRepository.save(policy.toPrimitives())
			await this.eventBus.publish(policy.pullDomainEvents())
		}
	}

	/**
	 * @private
	 * @description Updates the permission groups associated with an AccessPolicy entity.
	 * This method performs a differential update: it identifies which permission groups to add and which to revoke
	 * by comparing the current permission groups of the entity with the new list provided.
	 * @param {AccessPolicy} params.entity The `AccessPolicy` domain entity to update.
	 * @param {Primitives<PermissionGroupId>[]} params.newPermissionGroupIds An array of permission group IDs to be set for the policy.
	 * @returns {boolean} True if any permission group was added or removed, false otherwise.
	 */
	private updatePermissionsGroupsInAccessPolicy({
		entity,
		newPermissionGroupIds
	}: {
		entity: AccessPolicy
		newPermissionGroupIds: Primitives<PermissionGroupId>[]
	}): boolean {
		let hasPermissionsChanged = false
		const uniqueNewPermissionGroupIds = [...new Set(newPermissionGroupIds)]

		const newPermissionsGroupIds = new Set(uniqueNewPermissionGroupIds)
		const currentPermissionsGroupIds = new Set(entity.permissionGroupValue)

		// 3. Determine permissions to add
		for (const id of newPermissionsGroupIds) {
			if (!currentPermissionsGroupIds.has(id)) {
				entity.assignPermissionGroup(new PermissionGroupId(id))
				hasPermissionsChanged = true
			}
		}

		// 4. Determine permissions to remove
		for (const id of currentPermissionsGroupIds) {
			if (!newPermissionsGroupIds.has(id)) {
				entity.revokePermissionGroup(new PermissionGroupId(id))
				hasPermissionsChanged = true
			}
		}

		return hasPermissionsChanged
	}
}
