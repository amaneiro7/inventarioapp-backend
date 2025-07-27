import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { DeviceStatus } from './DeviceStatus'
import { EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { EmployeeDoesNotExistError } from '../../../employee/Employee/domain/Errors/EmployeeDoesNotExistError'
import { type StatusOptionKey, StatusOptions, statusOptionsName } from '../../Status/domain/StatusOptions'
import { type Device } from './Device'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../../../employee/Employee/domain/Repository/EmployeeRepository'

/**
 * @class DeviceEmployee
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's assigned employee.
 * It encapsulates validation rules based on the device's status.
 */
export class DeviceEmployee extends AcceptedNullValueObject<Primitives<EmployeeId>> {
	constructor(
		readonly value: Primitives<EmployeeId> | null,
		private readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureEmployeeConditionDependsOnStatus({
			employee: this.value,
			status: this.status
		})
		this.ensureIsValidEmployeeId(value)
	}

	/**
	 * @private
	 * @method ensureIsValidEmployeeId
	 * @description Validates that the employee ID is a valid UUID.
	 * @param {Primitives<EmployeeId> | null} id The employee ID to validate.
	 */
	private ensureIsValidEmployeeId(id: Primitives<EmployeeId> | null): void {
		if (id !== null) {
			new EmployeeId(id) // This will throw an error if the UUID is invalid
		}
	}

	/**
	 * @private
	 * @method ensureEmployeeConditionDependsOnStatus
	 * @description Enforces business rules regarding employee assignment based on device status.
	 * @throws {InvalidArgumentError} If a business rule is violated.
	 */
	private ensureEmployeeConditionDependsOnStatus({
		employee,
		status
	}: {
		employee: Primitives<EmployeeId> | null
		status: Primitives<DeviceStatus>
	}): void {
		const isAssignedStatus =
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.GUARDIA
		const isUnassignedStatus = status === StatusOptions.DISPONIBLE || status === StatusOptions.JORNADA
		const isStorageStatus =
			status === StatusOptions.INALMACEN ||
			status === StatusOptions.PORDESINCORPORAR ||
			status === StatusOptions.DESINCORPORADO

		const statusName = statusOptionsName[status as StatusOptionKey] ?? ''

		if (isAssignedStatus && employee === null) {
			throw new InvalidArgumentError(
				`Un dispositivo con estatus '${statusName}' debe estar asignado a un empleado.`
			)
		}
		if (isUnassignedStatus && employee !== null) {
			throw new InvalidArgumentError(
				`Un dispositivo con estatus '${statusName}' no puede tener un empleado asignado.`
			)
		}
		if (isStorageStatus && employee !== null) {
			throw new InvalidArgumentError(
				'Un dispositivo en almacén o desincorporado no puede tener un empleado asignado.'
			)
		}
	}

	/**
	 * @static
	 * @method updateEmployeeField
	 * @description Handles the logic for updating a device's assigned employee.
	 * @param {{ repository: EmployeeRepository; employee?: Primitives<DeviceEmployee>; entity: Device }} params The parameters for updating.
	 * @returns {Promise<void>}
	 */
	static async updateEmployeeField({
		repository,
		employee,
		entity
	}: {
		repository: EmployeeRepository
		employee?: Primitives<DeviceEmployee>
		entity: Device
	}): Promise<void> {
		if (employee === undefined || entity.employeeeValue === employee) {
			return
		}
		await DeviceEmployee.ensureEmployeeExit({ repository, employee })
		entity.updateEmployee(employee, entity.statusValue)
	}

	/**
	 * @static
	 * @method ensureEmployeeExit
	 * @description Checks if an employee exists in the repository.
	 * @param {{ repository: EmployeeRepository; employee: Primitives<DeviceEmployee> }} params The parameters for the check.
	 * @throws {EmployeeDoesNotExistError} If the employee does not exist.
	 */
	static async ensureEmployeeExit({
		repository,
		employee
	}: {
		repository: EmployeeRepository
		employee: Primitives<DeviceEmployee>
	}): Promise<void> {
		if (employee === null) {
			return
		}
		const existingEmployee = await repository.searchById(new EmployeeId(employee).value)
		if (!existingEmployee) {
			throw new EmployeeDoesNotExistError(employee)
		}
	}
}
