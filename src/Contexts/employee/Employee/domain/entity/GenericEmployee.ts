import { Employee } from './Employee'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { EmployeeId } from '../valueObject/EmployeeId'
import { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { EmployeeType, EmployeeTypes } from '../valueObject/EmployeeType'
import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { type GenericEmployeeParams } from './GenericEmployee.dto'

export class GenericEmployee extends Employee {
	constructor(
		id: EmployeeId,
		username: EmployeeUserName,
		type: EmployeeType,
		name: null,
		lastName: null,
		email: null,
		isStillWorking: EmployeeIsStillWorking,
		employeeCode: null,
		nationality: null,
		cedula: null,
		centroTrabajoId: null,
		locationId: null,
		departamentoId: null,
		cargoId: null,
		extension: [],
		phone: []
	) {
		super(
			id,
			username,
			type,
			name,
			lastName,
			email,
			isStillWorking,
			employeeCode,
			nationality,
			cedula,
			centroTrabajoId,
			locationId,
			departamentoId,
			cargoId,
			extension,
			phone
		)
		this.ensureTypeIsGeneric()
	}

	private ensureTypeIsGeneric(): void {
		if (this.typeValue !== EmployeeTypes.GENERIC) {
			throw new InvalidArgumentError('Un empleado genérico solo puede tener el tipo genérico')
		}
	}
	static create(params: GenericEmployeeParams): GenericEmployee {
		const id = EmployeeId.random().value
		return new GenericEmployee(
			new EmployeeId(id),
			new EmployeeUserName(params.userName),
			new EmployeeType(params.type),
			null,
			null,
			null,
			new EmployeeIsStillWorking(params.isStillWorking),
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			[],
			[]
		)
	}
}
