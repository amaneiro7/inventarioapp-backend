import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { Order } from '../../../Shared/domain/criteria/Order'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { AccessPolicyDto } from '../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

interface Params {
	roleId?: AccessPolicyDto['roleId']
	cargoId?: AccessPolicyDto['cargoId']
	departamentoId?: AccessPolicyDto['departamentoId']
	vicepresidenciaId?: AccessPolicyDto['vicepresidenciaId']
	vicepresidenciaEjecutivaId?: AccessPolicyDto['vicepresidenciaEjecutivaId']
	directivaId?: AccessPolicyDto['directivaId']
}

export class AccessPolicyResolver {
	private readonly accessPolicyRepository: AccessPolicyRepository
	constructor({ accessPolicyRepository }: { accessPolicyRepository: AccessPolicyRepository }) {
		this.accessPolicyRepository = accessPolicyRepository
	}

	/**
	 * Resuelve y acumula los IDs de los grupos de permisos para un usuario basándose en todas las políticas de acceso que coincidan.
	 * @param params - Los atributos del usuario (roleId, cargoId, departamentoId, etc.).
	 * @returns Un array con los IDs de todos los grupos de permisos aplicables, sin duplicados.
	 */
	async run(params: Params): Promise<string[] | null> {
		// 1. Obtener TODAS las políticas de la base de datos.
		// TODO: Para optimizar, cachear este resultado, ya que las políticas no cambian a menudo.
		const accessPolicies = await this.accessPolicyRepository.search(
			new Criteria(new Filters([]), Order.none(), 0, 0)
		)
		const allPolicies = accessPolicies.map(policy => {
			const {
				cargoId,
				id,
				name,
				permissionsGroups,
				priority,
				departamentoId,
				directivaId,
				roleId,
				vicepresidenciaEjecutivaId,
				vicepresidenciaId
			} = policy
			const permissionGroups = permissionsGroups.map(group => group.id)
			return AccessPolicy.fromPrimitives({
				id,
				name,
				roleId,
				cargoId,
				departamentoId,
				vicepresidenciaId,
				vicepresidenciaEjecutivaId,
				directivaId,
				permissionsGroups: permissionGroups,
				priority
			})
		})

		// 2. Filtrar en memoria para encontrar todas las políticas que coinciden con los atributos del usuario.
		const matchingPolicies = allPolicies.filter(policy => policy.matches(params))
		// 3. Si no hay ninguna coincidencia, devolver null.
		if (matchingPolicies.length === 0) {
			return null
		}

		// 4. Acumular los grupos de permisos de TODAS las políticas coincidentes.
		const allPermissionGroupIds = matchingPolicies.flatMap(policy => policy.permissionGroupValue)

		// 5. Eliminar duplicados y devolver el conjunto final de IDs de grupos de permisos.
		const uniquePermissionGroupIds = [...new Set(allPermissionGroupIds)]
		return uniquePermissionGroupIds
	}
}
