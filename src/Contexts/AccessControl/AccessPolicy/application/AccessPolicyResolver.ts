import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { Order } from '../../../Shared/domain/criteria/Order'
import { type AccessPolicy } from '../domain/entity/AccessPolicy'
import { type AccessPolicyRepository } from '../domain/repository/AccessPolicyRepository'

interface Params {
	cargoId?: string
	departamentoId?: string
}

export class AccessPolicyResolver {
	constructor(private readonly repository: AccessPolicyRepository) {}

	/**
	 * Resuelve el ID del grupo de permisos para un empleado basándose en las políticas de acceso.
	 * @param params - Los atributos del empleado (cargoId, departamentoId).
	 * @returns El ID del grupo de permisos que corresponde según la regla de mayor prioridad.
	 */
	async run(params: Params): Promise<string> {
		// 1. Obtener TODAS las políticas de la base de datos.
		// Para optimizar, podríamos cachear este resultado, ya que las políticas no cambian a menudo.
		const allPolicies = await this.repository.search(new Criteria(new Filters([]), Order.none(), 0, 0))

		// 2. Filtrar en memoria para encontrar todas las reglas que coinciden con el empleado.
		const matchingPolicies = allPolicies.filter(policy => policy.matches(params))

		// 3. Si no hay ninguna coincidencia, podría lanzar un error o devolver un grupo por defecto.
		if (matchingPolicies.length === 0) {
			// Esto no debería pasar si tienes una regla por defecto (con cargoId y departamentoId nulos).
			throw new Error('No matching access policy found for the user.')
		}

		// 4. Ordenar las reglas coincidentes por prioridad (el número más bajo es más prioritario).
		matchingPolicies.sort((a, b) => a.priorityValue - b.priorityValue)

		// 5. La regla ganadora es la primera de la lista. Devolver su permissionGroupId.
		return matchingPolicies[0].permissionGroupValue
	}
}
