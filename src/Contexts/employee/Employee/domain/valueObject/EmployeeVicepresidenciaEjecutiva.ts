import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

interface EmployeeVicepresidenciaEjecutivaProps {
	value: Primitives<DepartmentId> | null
	type: Primitives<EmployeeType>
	directivaId: Primitives<DepartmentId> | null
}
export class EmployeeVicepresidenciaEjecutiva extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly type: Primitives<EmployeeType>,
		private readonly directivaId: Primitives<DepartmentId> | null
	) {
		super(value)
		this.ensureIsValidVicepresidenciaEjecutiva({ value, type: this.type, directivaId: this.directivaId })
	}

	private ensureIsValidVicepresidenciaEjecutiva({
		value,
		type,
		directivaId
	}: EmployeeVicepresidenciaEjecutivaProps): void {
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('La vicepresidencia ejecutiva es requerida para este tipo de empleado.')
		}

		if (value !== null && directivaId === null) {
			throw new InvalidArgumentError(
				'Si la Vicepresidencia Ejecutiva está asignada, la Directiva Jerárquica también es requerida.'
			)
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de vicepresidencia ejecutiva válido.`)
		}
	}
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
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
	}

	static async ensureVicepresidenciaEjecutivaExists({
		repository,
		vicepresidenciaEjecutivaId
	}: {
		repository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
	}): Promise<void> {
		if (!vicepresidenciaEjecutivaId) return
		if (vicepresidenciaEjecutivaId) {
			const exists = await repository.searchById(new DepartmentId(vicepresidenciaEjecutivaId).value)
			if (!exists) {
				throw new DepartmentDoesNotExistError('La VicepresidenciaEjecutiva especificada no existe.')
			}
		}
	}
}
