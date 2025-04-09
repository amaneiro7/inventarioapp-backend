import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'

interface EmployeeDepartamentoProps {
	value: Primitives<DepartmentId> | null
	vicepresidenciaId: Primitives<DepartmentId> | null
}
export class EmployeeDepartamento extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly vicepresidenciaId: Primitives<DepartmentId> | null
	) {
		super(value)
		this.ensureIsValidDepartamento({ value, vicepresidenciaId: this.vicepresidenciaId })
	}

	private ensureIsValidDepartamento({ value, vicepresidenciaId }: EmployeeDepartamentoProps): void {
		if (vicepresidenciaId === null && value !== null) {
			throw new InvalidArgumentError(
				'Si la vicepresidencia no ha sido asignada, no se puede asignar un departamento'
			)
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de departamento válido.`)
		}
	}
	static async updateDepartamentoField({
		repository,
		departamentoId,
		entity
	}: {
		repository: DepartmentRepository<DepartamentoDto>
		departamentoId?: Primitives<DepartmentId> | null
		entity: Employee
	}): Promise<void> {
		if (departamentoId === undefined || entity.departamentoValue === departamentoId) {
			return
		}
		await this.ensureDepartamentoExists({ repository, departamentoId })
		entity.updateDepartamento(departamentoId)
	}

	static async ensureDepartamentoExists({
		repository,
		departamentoId
	}: {
		repository: DepartmentRepository<DepartamentoDto>
		departamentoId: Primitives<DepartmentId> | null
	}): Promise<void> {
		if (!departamentoId) return
		if (departamentoId) {
			const exists = await repository.searchById(new DepartmentId(departamentoId).value)
			if (!exists) {
				throw new DepartmentDoesNotExistError('El eepartamento especificado no existe.')
			}
		}
	}
}
