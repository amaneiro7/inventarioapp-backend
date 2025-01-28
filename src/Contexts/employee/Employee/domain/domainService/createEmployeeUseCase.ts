import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../Repository/EmployeeRepository'
import { type CentroCostoRepository } from '../../../CentroCosto/domain/CentroCostoRepository'
import { type LocationRepository } from '../../../../Location/Location/domain/LocationRepository'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../../CentroCosto/domain/CodCentroCosto'
import { type EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type CargoRepository } from '../../../Cargo/domain/CargoRepository'
import { type EmployeeCode } from '../valueObject/EmployeCode'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername'
import { type EmployeeCedula } from '../valueObject/EmployeeCedula'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type FiltersPrimitives } from '../../../../Shared/domain/criteria/Filter'
import { EmployeeTypes } from '../valueObject/EmployeeType'
import { CargoDoesNotExistError } from '../../../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { LocationDoesNotExistError } from '../../../../Location/Location/domain/LocationDoesNotExistError'
import { DepartmentDoesNotExistError } from '../../../IDepartment/DepartmentDoesNotExistError'
import { CreateCriteria } from '../../../../Shared/domain/criteria/CreateCriteria'
import { Operator } from '../../../../Shared/domain/criteria/FilterOperator'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type EmployeeParams } from '../entity/Employee.dto'

export class CreateEmployeeUseCase {
	constructor(
		private readonly employeeRepository: EmployeeRepository,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly locationRepository: LocationRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute(params: EmployeeParams): Promise<void> {
		await this.ensureIsStillWorkingUserNameDoesNotExis(params.userName)

		if (EmployeeTypes.GENERIC === params.type) {
			return
		}

		await this.ensureEmailDoesNotExis(params?.email)
		await this.ensureEmployeeCodeDoesNotExis(params?.employeeCode)
		await this.ensureCedulaDoesNotExis(params?.cedula)
		await this.ensureCargoExist(params?.cargoId)
		await this.ensureCentroCostoExist(params?.centroTrabajoId)
		await this.ensureLocationExist(params?.locationId)
		await this.ensureDepartamentoExist(params?.departamentoId)
	}

	private async ensureIsStillWorkingUserNameDoesNotExis(
		userName: Primitives<EmployeeUserName>
	) {
		const query: FiltersPrimitives[] = [
			{
				field: 'userName',
				operator: Operator.EQUAL,
				value: userName
			},
			{
				field: 'isStillWorking',
				operator: Operator.EQUAL,
				value: true
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		await this.employeeRepository.searchByQuery(criteria)
	}
	private async ensureEmailDoesNotExis(
		email?: Nullable<Primitives<EmployeeEmail>>
	) {
		if (!email) {
			throw new Error(
				'Email cannot be null or undefined for non-generic employees'
			)
		}
		const query: FiltersPrimitives[] = [
			{
				field: 'email',
				operator: Operator.EQUAL,
				value: email
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		await this.employeeRepository.searchByQuery(criteria)
	}
	private async ensureEmployeeCodeDoesNotExis(
		emloyeeCode?: Nullable<Primitives<EmployeeCode>>
	) {
		if (!emloyeeCode) {
			throw new Error(
				'Employee code cannot be null or undefined for non-generic employees'
			)
		}
		const query: FiltersPrimitives[] = [
			{
				field: 'employeeCode',
				operator: Operator.EQUAL,
				value: emloyeeCode
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		await this.employeeRepository.searchByQuery(criteria)
	}
	private async ensureCedulaDoesNotExis(
		cedula?: Nullable<Primitives<EmployeeCedula>>
	) {
		if (!cedula) {
			throw new Error(
				'Cedula cannot be null or undefined for non-generic employees'
			)
		}
		const query: FiltersPrimitives[] = [
			{
				field: 'cedula',
				operator: Operator.EQUAL,
				value: cedula
			}
		]
		const criteria = await CreateCriteria.execute({ filters: query })
		await this.employeeRepository.searchByQuery(criteria)
	}

	private async ensureCargoExist(
		cargoId?: Nullable<Primitives<CargoId>>
	): Promise<void> {
		if (!cargoId) {
			throw new Error(
				'Cargo cannot be null or undefined for non-generic employees'
			)
		}
		if ((await this.cargoRepository.searchById(cargoId)) === null) {
			throw new CargoDoesNotExistError()
		}
	}

	private async ensureCentroCostoExist(
		centroCosto?: Nullable<Primitives<CodCentroCosto>>
	): Promise<void> {
		if (!centroCosto) {
			throw new Error(
				'Centro Costo cannot be null or undefined for non-generic employees'
			)
		}
		if (
			(await this.centroCostoRepository.searchById(centroCosto)) === null
		) {
			throw new CentroCostoDoesNotExistError()
		}
	}

	private async ensureLocationExist(
		locationId?: Nullable<Primitives<EmployeeLocationId>>
	): Promise<void> {
		if (!locationId) {
			throw new Error(
				'Location cannot be null or undefined for non-generic employees'
			)
		}
		if ((await this.locationRepository.searchById(locationId)) === null) {
			throw new LocationDoesNotExistError(locationId)
		}
	}

	private async ensureDepartamentoExist(
		departamento?: Nullable<Primitives<DepartmentId>>
	): Promise<void> {
		if (!departamento) {
			throw new Error(
				'Deparment cannot be null or undefined for non-generic employees'
			)
		}
		if (
			(await this.departamentoRepository.searchById(departamento)) ===
			null
		) {
			throw new DepartmentDoesNotExistError(
				'La gerencia, coordinación o departamento'
			)
		}
	}
}
