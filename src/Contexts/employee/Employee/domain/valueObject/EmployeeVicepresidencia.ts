import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'

interface EmployeeVicepresidenciaProps {
	value: Primitives<DepartmentId> | null
	vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
}
export class EmployeeVicepresidencia extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly vicepresidenciaEjecutivaId: Primitives<DepartmentId> | null
	) {
		super(value)
		this.ensureIsValidVicepresidencia({ value, vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaId })
	}

	private ensureIsValidVicepresidencia({ value, vicepresidenciaEjecutivaId }: EmployeeVicepresidenciaProps): void {
		if (vicepresidenciaEjecutivaId === null && value !== null) {
			throw new InvalidArgumentError(
				'Si la vicepresidencia ejecutiva no ha sido asignada, no se puede asignar una vicepresidencia'
			)
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de vicepresidencia válido.`)
		}
	}
	static async updateVicepresidenciaField({
		repository,
		vicepresidenciaId,
		entity
	}: {
		repository: DepartmentRepository<VicepresidenciaDto>
		vicepresidenciaId?: Primitives<DepartmentId> | null
		entity: Employee
	}): Promise<void> {
		if (vicepresidenciaId === undefined || entity.vicepresidenciaValue === vicepresidenciaId) {
			return
		}
		await this.ensureVicepresidenciaExists({ repository, vicepresidenciaId })
		entity.updateVicepresidencia(vicepresidenciaId, entity.vicepresidenciaEjecutivaValue)
	}

	static async ensureVicepresidenciaExists({
		repository,
		vicepresidenciaId
	}: {
		repository: DepartmentRepository<VicepresidenciaDto>
		vicepresidenciaId: Primitives<DepartmentId> | null
	}): Promise<void> {
		if (!vicepresidenciaId) return
		if (vicepresidenciaId) {
			const exists = await repository.searchById(new DepartmentId(vicepresidenciaId).value)
			if (!exists) {
				throw new DepartmentDoesNotExistError('La Vicepresidencia especificada no existe.')
			}
		}
	}
}
