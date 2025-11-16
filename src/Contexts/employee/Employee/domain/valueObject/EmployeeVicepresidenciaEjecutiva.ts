import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

interface EmployeeVicepresidenciaEjecutivaProps {
	value: Primitives<DepartmentId> | null
	directivaId: Primitives<DepartmentId> | null
}

/**
 * @description Represents the executive vicepresidencia of an employee.
 */
export class EmployeeVicepresidenciaEjecutiva extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly directivaId: Primitives<DepartmentId> | null
	) {
		super(value)
		this.ensureIsValidVicepresidenciaEjecutiva({ value, directivaId: this.directivaId })
	}

	private ensureIsValidVicepresidenciaEjecutiva({ value, directivaId }: EmployeeVicepresidenciaEjecutivaProps): void {
		if (directivaId === null && value !== null) {
			throw new InvalidArgumentError(
				'Si la directiva jerárquica no ha sido asignada, no se puede asignar una vicepresidencia ejecutiva.'
			)
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`'${value}' no es un ID de vicepresidencia ejecutiva válido.`) // Improved error message
		}
	}

	/**
	 * @description Handles the logic for updating the executive vicepresidencia field of an employee.
	 * @param {{ repository: DepartmentRepository<VicepresidenciaEjecutivaDto>; vicepresidenciaEjecutivaId?: Primitives<DepartmentId> | null; entity: Employee }} params The parameters for updating.
	 */
	static async updateVicepresidenciaEjecutivaField({
		repository,
		vicepresidenciaEjecutivaId,
		entity
	}: {
		repository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaEjecutivaId?: Primitives<DepartmentId> | null
		entity: Employee
	}): Promise<void> {
		if (
			vicepresidenciaEjecutivaId === undefined ||
			entity.vicepresidenciaEjecutivaValue === vicepresidenciaEjecutivaId
		) {
			return
		}
		await this.ensureVicepresidenciaEjecutivaExists({ repository, vicepresidenciaEjecutivaId })
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId, entity.directivaValue)
	}

	/**
	 * @description Ensures that the specified executive vicepresidencia exists in the repository.
	 * @param {{ repository: DepartmentRepository<VicepresidenciaEjecutivaDto>; vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null }} params The parameters for the check.
	 * @throws {DepartmentDoesNotExistError} If the executive vicepresidencia does not exist.
	 */
	static async ensureVicepresidenciaEjecutivaExists({
		repository,
		vicepresidenciaEjecutivaId
	}: {
		repository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
	}): Promise<void> {
		if (!vicepresidenciaEjecutivaId) return
		const exists = await repository.findById(new DepartmentId(vicepresidenciaEjecutivaId).value)
		if (!exists) {
			throw new DepartmentDoesNotExistError('La Vicepresidencia Ejecutiva especificada no existe.')
		}
	}
}
