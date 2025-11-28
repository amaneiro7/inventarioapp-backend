import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyPrimitives, type AccessPolicyDto } from '../entity/AccessPolicy.dto'
import { type AccessPolicyId } from '../valueObject/AccessPolicyId'
import { type AccessPolicyName } from '../valueObject/AccessPolicyName'

export abstract class AccessPolicyRepository {
	/**
	 * Guarda (crea o actualiza) una política de acceso.
	 */
	abstract save(payload: AccessPolicyPrimitives): Promise<void>

	/**
	 * Busca todas las políticas que coinciden con un criterio.
	 * Esencial para listar y gestionar las políticas en un panel de administración.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<AccessPolicyDto>>

	/**
	 * Busca una política de acceso por su ID.
	 */
	abstract findById(id: Primitives<AccessPolicyId>): Promise<Nullable<AccessPolicyDto>>

	/**
	 * Busca una política de acceso por su nombre.
	 */
	abstract findByName(name: Primitives<AccessPolicyName>): Promise<AccessPolicyDto | null>

	/**
	 * Elimina una política de acceso por su ID.
	 */
	abstract remove(id: Primitives<AccessPolicyId>): Promise<void>

	// Este es el método más importante para la lógica de login
	abstract search(criteria: Criteria): Promise<AccessPolicyDto[]>
}
