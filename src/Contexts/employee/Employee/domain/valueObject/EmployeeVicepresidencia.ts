import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'

interface EmployeeVicepresidenciaProps {
	value: Primitives<DepartmentId> | null
	type: Primitives<EmployeeType>
	directivaId: Primitives<DepartmentId> | null
}
export class EmployeeVicepresidencia extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly type: Primitives<EmployeeType>,
		private readonly directivaId: Primitives<DepartmentId> | null
	) {
		super(value)
		this.ensureIsValidVicepresidencia({ value, type: this.type, directivaId: this.directivaId })
	}

	private ensureIsValidVicepresidencia({ value, type, directivaId }: EmployeeVicepresidenciaProps): void {
		if (type === EmployeeTypes.GENERIC && value !== null) {
			throw new InvalidArgumentError('La vicepresidencia no es requerida para este tipo de usuario.')
		}

		if (value !== null && directivaId === null) {
			throw new InvalidArgumentError(
				'Si la Vicepresidencia  está asignada, la Directiva Jerárquica también es requerida.'
			)
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de vicepresidencia  válido.`)
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
		entity.updateVicepresidencia(vicepresidenciaId)
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
