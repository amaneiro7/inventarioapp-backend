import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type StatusOptionKey, StatusOptions, statusOptionsName } from '../../../Status/domain/StatusOptions'
import { type TypeOfSiteId } from '../../../../Location/TypeOfSite/domain/valueObject/TypeOfSiteId'
import { type Generic } from '../../../../ModelSeries/ModelSeries/domain/valueObject/Generic'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Device } from '../entity/Device'

/**
 * @class DeviceConsistencyValidator
 * @description Domain service responsible for validating complex business rules
 * involving multiple properties of a Device entity (Cross-field validation).
 */
export class DeviceConsistencyValidator {
	/**
	 * @method validate
	 * @description Validates the consistency of the device state against business rules.
	 * @param {{ device: Device; typeOfSite: Primitives<TypeOfSiteId> | null; generic: Primitives<Generic> }} params
	 * @throws {InvalidArgumentError} If any consistency rule is violated.
	 */
	public validate({
		device,
		typeOfSite,
		generic
	}: {
		device: Device
		typeOfSite: Primitives<TypeOfSiteId> | null
		generic: Primitives<Generic>
	}): void {
		this.validateSerialRequirement({ device, generic })
		this.validateEmployeeAssignment({ device })
		this.validateLocationConsistency({ device, typeOfSite })
		this.validateStockNumber({ device })
	}

	/**
	 * @private
	 * @method isSerialCanBeNull
	 * @description Checks if the serial number can be null based on whether the model is generic.
	 * @param {{ generic: Primitives<Generic>; serial: Primitives<DeviceSerial> }} params The parameters for the check.
	 * @throws {InvalidArgumentError} If the serial is null for a non-generic model.
	 */
	private validateSerialRequirement({ device, generic }: { device: Device; generic: Primitives<Generic> }): void {
		if (!generic && !device.serialValue) {
			throw new InvalidArgumentError('El serial es obligatorio para modelos no genéricos.')
		}
	}

	/**
	 * @private
	 * @method validateLocationConsistency
	 * @description Validates that the device's location type matches its status.
	 * @param {{ device: Device; typeOfSite: Primitives<TypeOfSiteId> | null }} params
	 * @throws {InvalidArgumentError} If the location type is incompatible with the device status.
	 */
	private validateLocationConsistency({
		device,
		typeOfSite
	}: {
		device: Device
		typeOfSite: Primitives<TypeOfSiteId> | null
	}): void {
		const status = device.statusValue
		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.GUARDIA ||
			status === StatusOptions.DISPONIBLE ||
			status === StatusOptions.JORNADA
		const isStorage = status === StatusOptions.INALMACEN || status === StatusOptions.PORDESINCORPORAR

		if (isInUse && typeOfSite === TypeOfSiteList.ALMACEN) {
			throw new InvalidArgumentError('Un dispositivo en uso no puede estar ubicado en un almacén.')
		}
		if (isStorage && typeOfSite !== TypeOfSiteList.ALMACEN) {
			throw new InvalidArgumentError('Un dispositivo en almacén solo puede estar ubicado en un almacén.')
		}
		if (status === StatusOptions.DESINCORPORADO && typeOfSite !== null) {
			throw new InvalidArgumentError('Un dispositivo desincorporado no puede tener una ubicación asignada.')
		}
	}

	/**
	 * @private
	 * @method validateEmployeeAssignment
	 * @description Validates that the employee assignment matches the device status.
	 * @param {{ device: Device }} params
	 * @throws {InvalidArgumentError} If the employee assignment is incompatible with the device status.
	 */
	private validateEmployeeAssignment({ device }: { device: Device }): void {
		const employee = device.employeeValue
		const status = device.statusValue

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

	private validateStockNumber({ device }: { device: Device }): void {
		const stockNumber = device.stockNumberValue
		const status = device.statusValue

		const inStorage = status === StatusOptions.INALMACEN || status === StatusOptions.PORDESINCORPORAR

		if (stockNumber !== null && !inStorage) {
			throw new InvalidArgumentError(
				'Un dispositivo solo puede tener número de stock si está en almacén o por desincorporar.'
			)
		}
	}
}
