import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StatusOptions } from '../../../../Device/Status/domain/StatusOptions'
import { type DeviceComputer } from '../entity/Computer'

/**
 * @class ComputerConsistencyValidator
 * @description Domain service responsible for validating consistency rules specific to Computer devices.
 */
export class ComputerConsistencyValidator {
	/**
	 * @method validate
	 * @description Validates the consistency of a computer entity.
	 * @param {DeviceComputer} computer The computer entity to validate.
	 * @throws {InvalidArgumentError} If any consistency rule is violated.
	 */

	public validate(computer: DeviceComputer): void {
		this.ensureIfStatusIsInUse(computer)
		this.validateHardDriveConsistency(computer)
		this.validateHardDriveRequirement(computer)
		this.validateOperatingSystem(computer)
		this.validateArchitecture(computer)
		this.valdateMemoryRamRequirement(computer)
		this.validateIPAddress(computer)
		this.validateProcessorRequirement(computer)
	}

	private ensureIfStatusIsInUse(device: DeviceComputer): void {
		const statusId = device.statusValue
		const computerName = device.computerNameValue

		const isInUse =
			statusId === StatusOptions.INUSE ||
			statusId === StatusOptions.PRESTAMO ||
			statusId === StatusOptions.CONTINGENCIA ||
			statusId === StatusOptions.GUARDIA ||
			statusId === StatusOptions.JORNADA

		const isNotInUse =
			statusId === StatusOptions.INALMACEN ||
			statusId === StatusOptions.DESINCORPORADO ||
			statusId === StatusOptions.PORDESINCORPORAR

		if (isNotInUse && computerName !== null) {
			throw new InvalidArgumentError(
				'El nombre del equipo solo puede establecerse cuando el dispositivo está en uso.'
			)
		}

		if (isInUse && computerName === null) {
			throw new InvalidArgumentError('La computadora debe tener un nombre de equipo.')
		}
	}

	/**
	 * @private
	 * @method validateHardDriveRequirement
	 * @description Ensures a hard drive is present if the computer is in use.
	 * @param {DeviceComputer} computer The computer entity.
	 */
	private validateHardDriveRequirement(computer: DeviceComputer): void {
		const status = computer.statusValue
		const hardDriveCapacity = computer.hardDriveCapacityValue

		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		if (isInUse && hardDriveCapacity === null) {
			throw new InvalidArgumentError('Si la computadora está en uso, se requiere un disco duro.')
		}
	}

	/**
	 * @private
	 * @method validateHardDriveConsistency
	 * @description Ensures consistency between hard drive capacity and type.
	 * @param {DeviceComputer} computer The computer entity.
	 */
	private validateHardDriveConsistency(computer: DeviceComputer): void {
		const hardDriveCapacity = computer.hardDriveCapacityValue
		const hardDriveType = computer.hardDriveTypeValue

		if (hardDriveCapacity !== null && hardDriveType === null) {
			throw new InvalidArgumentError('El tipo de disco duro no puede ser nulo si se especifica una capacidad.')
		}
		if (hardDriveCapacity === null && hardDriveType !== null) {
			throw new InvalidArgumentError('No se puede especificar un tipo de disco duro si no hay capacidad.')
		}
	}

	/**
	 * @private
	 * @method validateOperatingSystem
	 * @description Validates operating system rules regarding hard drive presence and device status.
	 * @param {DeviceComputer} computer The computer entity.
	 */
	private validateOperatingSystem(computer: DeviceComputer): void {
		const operatingSystem = computer.operatingSystemValue
		const hardDriveCapacity = computer.hardDriveCapacityValue
		const status = computer.statusValue

		// Regla: No se puede tener OS sin Disco Duro
		if (hardDriveCapacity === null && operatingSystem !== null) {
			throw new InvalidArgumentError('No se puede tener un sistema operativo si no hay un disco duro.')
		}

		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		const isNotInUse =
			status === StatusOptions.INALMACEN ||
			status === StatusOptions.PORDESINCORPORAR ||
			status === StatusOptions.DESINCORPORADO

		// Regla: Si está en uso, requiere OS
		if (isInUse && operatingSystem === null) {
			throw new InvalidArgumentError('Si la computadora está en uso, se requiere un sistema operativo.')
		}

		// Regla: Si NO está en uso, NO debe tener OS (según tu lógica actual)
		if (isNotInUse && operatingSystem !== null) {
			throw new InvalidArgumentError('Si la computadora no está en uso, no puede tener un sistema operativo.')
		}
	}

	/**
	 * @private
	 * @method validateArchitecture
	 * @description Ensures consistency between Operating System and its Architecture.
	 * @param {DeviceComputer} computer The computer entity.
	 */
	private validateArchitecture(computer: DeviceComputer): void {
		const operatingSystem = computer.operatingSystemValue
		const architecture = computer.operatingSystemArqValue

		// Regla: Coherencia entre OS y Arquitectura
		if (operatingSystem === null && architecture !== null) {
			throw new InvalidArgumentError(
				'No se puede tener una arquitectura de sistema operativo sin un sistema operativo.'
			)
		}
		if (operatingSystem !== null && architecture === null) {
			throw new InvalidArgumentError(
				'No se puede tener un sistema operativo sin una arquitectura de sistema operativo.'
			)
		}
	}

	private valdateMemoryRamRequirement(device: DeviceComputer): void {
		const status = device.statusValue
		const memoryRam = device.memoryRamCapacityValue

		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		if (isInUse && memoryRam === 0) {
			throw new InvalidArgumentError('La memoria RAM no puede ser 0 si la computadora está en uso.')
		}
	}

	private validateProcessorRequirement(device: DeviceComputer): void {
		const status = device.statusValue
		const processor = device.processorValue

		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA ||
			status === StatusOptions.INALMACEN

		if (isInUse && !processor) {
			throw new InvalidArgumentError('Se requiere un procesador cuando el estado está en uso.')
		}
	}
	private validateIPAddress(device: DeviceComputer): void {
		const status = device.statusValue
		const ipAddress = device.ipAddressValue

		const isInUse =
			status === StatusOptions.INUSE ||
			status === StatusOptions.PRESTAMO ||
			status === StatusOptions.CONTINGENCIA ||
			status === StatusOptions.JORNADA ||
			status === StatusOptions.GUARDIA

		const isNotInUse =
			status === StatusOptions.INALMACEN ||
			status === StatusOptions.DESINCORPORADO ||
			status === StatusOptions.PORDESINCORPORAR

		if (isInUse && !ipAddress) {
			throw new InvalidArgumentError('Se requiere una dirección IP cuando el estado está en uso.')
		}
		if (isNotInUse && ipAddress) {
			throw new InvalidArgumentError('No se requiere una dirección IP cuando el estado no está en uso.')
		}
	}
}
