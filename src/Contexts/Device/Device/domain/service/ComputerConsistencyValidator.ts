// src/Contexts/Features/Computer/domain/service/ComputerConsistencyValidator.ts

import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StatusOptions } from '../../../../Device/Status/domain/StatusOptions'
import { DeviceComputer } from '../entity/Computer'

export class ComputerConsistencyValidator {
	public validate(computer: DeviceComputer): void {
		this.validateOperatingSystem(computer)
		this.validateArchitecture(computer)
	}

	private validateOperatingSystem(computer: DeviceComputer): void {
		const os = computer.operatingSystemValue
		const hdd = computer.hardDriveCapacityValue
		const status = computer.statusValue

		// Regla: No se puede tener OS sin Disco Duro
		if (hdd === null && os !== null) {
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
		if (isInUse && os === null) {
			throw new InvalidArgumentError('Si la computadora está en uso, se requiere un sistema operativo.')
		}

		// Regla: Si NO está en uso, NO debe tener OS (según tu lógica actual)
		if (isNotInUse && os !== null) {
			throw new InvalidArgumentError('Si la computadora no está en uso, no puede tener un sistema operativo.')
		}
	}

	private validateArchitecture(computer: DeviceComputer): void {
		const os = computer.operatingSystemValue
		const arq = computer.operatingSystemArqValue

		// Regla: Coherencia entre OS y Arquitectura
		if (os === null && arq !== null) {
			throw new InvalidArgumentError(
				'No se puede tener una arquitectura de sistema operativo sin un sistema operativo.'
			)
		}
		if (os !== null && arq === null) {
			throw new InvalidArgumentError(
				'No se puede tener un sistema operativo sin una arquitectura de sistema operativo.'
			)
		}
	}
}
