import { EmployeeTypes } from '../valueObject/EmployeeType'
import { EmployeeName } from '../valueObject/EmployeeName'
import { EmployeeLastName } from '../valueObject/EmployeeLastName'
import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { EmployeeEmail } from '../valueObject/EmployeeEmail'
import { EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { EmployeeVicepresidencia } from '../valueObject/EmployeeVicepresidencia'
import { EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'
import { EmployeeDepartamento } from '../valueObject/EmployeeDepartamento'
import { EmployeeCargo } from '../valueObject/EmployeeCargo'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type Employee } from '../entity/Employee'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type LocationRepository } from '../../../../Location/Location/domain/LocationRepository'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../../Cargo/domain/CargoRepository'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type EmployeeParams } from '../entity/Employee.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { PhoneNumber } from '../valueObject/PhoneNumber'
import { Extension } from '../valueObject/Extension'
import { EmployeeLocationId } from '../valueObject/EmployeeLocation'

interface UpdateEmployeeRepositories {
	readonly employeeRepository: EmployeeRepository
	readonly locationRepository: LocationRepository
	readonly directivaRepository: DepartmentRepository<DirectivaDto>
	readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	readonly cargoRepository: CargoRepository
}
export class UpdateEmployeeUseCase {
	constructor(private readonly repository: UpdateEmployeeRepositories) {}

	public async execute({
		entity,
		params
	}: {
		params: Partial<Omit<EmployeeParams, 'employeeCode' | 'cedula' | 'nationality'>>
		entity: Employee
	}): Promise<void> {
		if (EmployeeTypes.GENERIC === entity.typeValue) {
			throw new Error('Los usuarios genericos no se les puede actualizar sus propiedades')
		}
		if (entity.isStillWorkingValue === false) {
			throw new Error(
				'Los usuarios que ya se encuentran desvinculados no se les puede actualizar sus propiedades'
			)
		}

		await Promise.all([
			EmployeeUserName.updateUserNameField({
				userName: params.userName,
				repository: this.repository.employeeRepository,
				entity
			}),
			EmployeeIsStillWorking.updateIsStillWorkingFieldField({ isStillWorking: params.isStillWorking, entity }),
			EmployeeName.updateNameField({ name: params.name, entity }),
			EmployeeLastName.updateLastNameField({ lastName: params.lastName, entity }),
			EmployeeEmail.updateEmailField({
				email: params.email,
				repository: this.repository.employeeRepository,
				entity
			}),
			EmployeeLocationId.updateLocationField({
				locationId: params.locationId,
				repository: this.repository.locationRepository,
				entity
			}),
			EmployeeCargo.updateCargoField({
				cargoId: params.cargoId,
				repository: this.repository.cargoRepository,
				entity
			}),

			EmployeeDirectiva.updateDirectivaField({
				directivaId: params.directivaId,
				repository: this.repository.directivaRepository,
				entity
			}),
			EmployeeVicepresidencia.updateVicepresidenciaField({
				vicepresidenciaId: params.vicepresidenciaId,
				repository: this.repository.vicepresidenciaRepository,
				entity
			}),
			EmployeeVicepresidenciaEjecutiva.updateVicepresidenciaEjecutivaField({
				vicepresidenciaEjecutivaId: params.vicepresidenciaEjecutivaId,
				repository: this.repository.vicepresidenciaEjecutivaRepository,
				entity
			}),
			EmployeeDepartamento.updateDepartamentoField({
				departamentoId: params.departamentoId,
				repository: this.repository.departamentoRepository,
				entity
			}),
			PhoneNumber.updatePhoneNumber({ phoneNumber: params.phone, entity }),
			Extension.updateExtension({ entity, extension: params.extension })
		])
	}
}
