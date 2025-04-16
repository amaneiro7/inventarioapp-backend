import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { EmployeeCode } from '../valueObject/EmployeCode'
import { EmployeeEmail } from '../valueObject/EmployeeEmail'
import { EmployeeCedula } from '../valueObject/EmployeeCedula'
import { EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { EmployeeVicepresidencia } from '../valueObject/EmployeeVicepresidencia'
import { EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'
import { EmployeeDepartamento } from '../valueObject/EmployeeDepartamento'
import { EmployeeCargo } from '../valueObject/EmployeeCargo'

import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type LocationRepository } from '../../../../Location/Location/domain/LocationRepository'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../../Cargo/domain/CargoRepository'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type EmployeeParams } from '../entity/Employee.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { EmployeeLocationId } from '../valueObject/EmployeeLocation'

interface CreateEmployeeRepositories {
	readonly employeeRepository: EmployeeRepository
	readonly locationRepository: LocationRepository
	readonly directivaRepository: DepartmentRepository<DirectivaDto>
	readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	readonly cargoRepository: CargoRepository
}

export class CreateEmployeeUseCase {
	constructor(private readonly repository: CreateEmployeeRepositories) {}

	public async execute(params: EmployeeParams): Promise<void> {
		await Promise.all([
			EmployeeUserName.ensureIsStillWorkingUserNameDoesNotExist({
				userName: params.userName,
				repository: this.repository.employeeRepository
			}),
			EmployeeEmail.ensureEmailDoesNotExist({
				email: params.email,
				repository: this.repository.employeeRepository
			}),
			EmployeeCode.ensureEmployeeCodeDoesNotExis({
				emloyeeCode: params.employeeCode,
				repository: this.repository.employeeRepository
			}),
			EmployeeLocationId.ensureLocationExists({
				locationId: params.locationId,
				repository: this.repository.locationRepository
			}),
			EmployeeCargo.ensureCargoExists({ cargoId: params.cargoId, repository: this.repository.cargoRepository }),
			EmployeeCedula.ensureCedulaDoesNotExis({
				cedula: params.cedula,
				repository: this.repository.employeeRepository
			}),
			EmployeeDirectiva.ensureDirectivaExists({
				directivaId: params.directivaId,
				repository: this.repository.directivaRepository
			}),
			EmployeeVicepresidencia.ensureVicepresidenciaExists({
				vicepresidenciaId: params.vicepresidenciaId,
				repository: this.repository.vicepresidenciaRepository
			}),
			EmployeeVicepresidenciaEjecutiva.ensureVicepresidenciaEjecutivaExists({
				vicepresidenciaEjecutivaId: params.vicepresidenciaEjecutivaId,
				repository: this.repository.vicepresidenciaEjecutivaRepository
			}),
			EmployeeDepartamento.ensureDepartamentoExists({
				departamentoId: params.departamentoId,
				repository: this.repository.departamentoRepository
			})
		])
	}
}
