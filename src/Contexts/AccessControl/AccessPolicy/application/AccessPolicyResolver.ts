import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { Order } from '../../../Shared/domain/criteria/Order'
import { AccessPolicy } from '../domain/entity/AccessPolicy'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

interface Params {
	cargoId?: string
	departamentoId?: string
}

export class AccessPolicyResolver {
	private readonly accessPolicyRepository: AccessPolicyRepository
	constructor({ accessPolicyRepository }: { accessPolicyRepository: AccessPolicyRepository }) {
		this.accessPolicyRepository = accessPolicyRepository
	}

	/**
	 * Resuelve el ID del grupo de permisos para un empleado basándose en las políticas de acceso.
	 * @param params - Los atributos del empleado (cargoId, departamentoId).
	 * @returns El ID del grupo de permisos que corresponde según la regla de mayor prioridad.
	 */
	async run(params: Params): Promise<string[] | null> {
		// 1. Obtener TODAS las políticas de la base de datos.
		// Para optimizar, podríamos cachear este resultado, ya que las políticas no cambian a menudo.
		const accessPolicies = await this.accessPolicyRepository.search(
			new Criteria(new Filters([]), Order.none(), 0, 0)
		)
		const allPolicies = accessPolicies.map(policy => {
			const { cargoId, id, name, permissionsGroups, priority, departamentoId } = policy
			const permissionGroups = permissionsGroups.map(group => group.id)
			return AccessPolicy.fromPrimitives({
				cargoId,
				departamentoId,
				id,
				name,
				permissionsGroups: permissionGroups,
				priority
			})
		})

		// 2. Filtrar en memoria para encontrar todas las reglas que coinciden con el empleado.
		const matchingPolicies = allPolicies.filter(policy => policy.matches(params))

		// 3. Si no hay ninguna coincidencia, se devuelve null.
		if (matchingPolicies.length === 0) {
			return null
		}

		// 4. Ordenar las reglas coincidentes por prioridad (el número más bajo es más prioritario).
		matchingPolicies.sort((a, b) => a.priorityValue - b.priorityValue)

		// 5. La regla ganadora es la primera de la lista. Devolver su permissionGroupId.
		const winningPolicy = matchingPolicies[0]
		const permissionGroupIds = winningPolicy.permissionGroupValue

		// Una política de acceso debe resolver a exactamente UN grupo de permisos.
		// Si tiene 0 o más de 1, es una configuración ambigua y no se debe conceder acceso.
		if (permissionGroupIds.length !== 1) {
			return null
		}

		return permissionGroupIds
	}
}
