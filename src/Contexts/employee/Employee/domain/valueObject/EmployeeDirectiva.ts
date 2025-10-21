import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'

interface EmployeeDirectivaProps {
	value: Primitives<DepartmentId> | null
	type: Primitives<EmployeeType>
}
export class EmployeeDirectiva extends AcceptedNullValueObject<Primitives<DepartmentId>> {
	constructor(
		value: Primitives<DepartmentId> | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidDirectiva({ value, type: this.type })
	}

	private ensureIsValidDirectiva({ value, type }: EmployeeDirectivaProps): void {
		if (type !== EmployeeTypesEnum.GENERIC && value === null) {
			throw new InvalidArgumentError('La directiva jerárquica es requerida para este tipo de empleado.')
		}

		if (value !== null && !(new DepartmentId(value) instanceof DepartmentId)) {
			throw new InvalidArgumentError(`<${value}> no es un ID de directiva válido.`)
		}
	}
	static async updateDirectivaField({
		repository,
		directivaId,
		entity
	}: {
		repository: DepartmentRepository<DirectivaDto>
		directivaId?: Primitives<DepartmentId> | null
		entity: Employee
	}): Promise<void> {
		if (directivaId === undefined || entity.directivaValue === directivaId) {
			return
		}
		await this.ensureDirectivaExists({ repository, directivaId })
		entity.updateDirectiva(directivaId, entity.typeValue)
	}

	static async ensureDirectivaExists({
		repository,
		directivaId
	}: {
		repository: DepartmentRepository<DirectivaDto>
		directivaId: Primitives<DepartmentId> | null
	}): Promise<void> {
		if (!directivaId) return
		if (directivaId) {
			const exists = await repository.searchById(new DepartmentId(directivaId).value)
			if (!exists) {
				throw new DepartmentDoesNotExistError('La directiva especificada no existe.')
			}
		}
	}
}
