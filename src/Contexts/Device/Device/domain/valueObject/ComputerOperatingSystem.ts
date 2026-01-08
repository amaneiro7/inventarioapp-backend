import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { OperatingSystemId } from '../../../../Features/OperatingSystem/OperatingSystem/domain/valueObject/OperatingSystemId'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { OperatingSystemDoesNotExistError } from '../../../../Features/OperatingSystem/OperatingSystem/domain/errors/OperatingSystemDoesNotExist'
import { type DeviceStatus } from '../DeviceStatus'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemRepository } from '../../../../Features/OperatingSystem/OperatingSystem/domain/repository/OperatingSystemRepository'
import { type DeviceComputer } from './Computer'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'

/**
 * @description Represents the operating system of a computer, which can be null.
 */
export class ComputerOperatingSystem extends AcceptedNullValueObject<Primitives<OperatingSystemId>> {
	constructor(
		readonly value: Primitives<OperatingSystemId> | null,
		readonly hardDriveCapacity: Primitives<ComputerHardDriveCapacity>,
		readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureIfHardDriveIsNullOperatingSystemIsNullAsWell(this.value, this.hardDriveCapacity)
		this.ensureIfStatusIsInUseOperatingSystemMustHaveAValue(this.value, this.status)
		this.ensureIsValidOperatingSystemId(value)
	}

	private ensureIsValidOperatingSystemId(id: Primitives<ComputerOperatingSystem>): void {
		if (id !== null) {
			new OperatingSystemId(id)
		}
	}

	private ensureIfHardDriveIsNullOperatingSystemIsNullAsWell(
		operatingSystem: Primitives<ComputerOperatingSystem>,
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	): void {
		if (hardDriveCapacity === null && operatingSystem !== null) {
			throw new InvalidArgumentError('No se puede tener un sistema operativo si no hay un disco duro.')
		}
	}

	private ensureIfStatusIsInUseOperatingSystemMustHaveAValue(
		operatingSystem: Primitives<ComputerOperatingSystem>,
		status: Primitives<DeviceStatus>
	): void {
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

		if (isInUse && operatingSystem === null) {
			throw new InvalidArgumentError('Si la computadora está en uso, se requiere un sistema operativo.')
		}

		if (isNotInUse && operatingSystem !== null) {
			throw new InvalidArgumentError('Si la computadora no está en uso, no puede tener un sistema operativo.')
		}
	}

	static async updateOperatingSystemField({
		repository,
		operatingSystem,
		entity
	}: {
		repository: OperatingSystemRepository
		operatingSystem?: Primitives<ComputerOperatingSystem>
		entity: DeviceComputer
	}): Promise<void> {
		if (operatingSystem === undefined || entity.operatingSystemValue === operatingSystem) {
			return
		}
		await ComputerOperatingSystem.ensureOperatingSystemExit({ repository, operatingSystem })
		entity.updateOperatingSystem(operatingSystem, entity.hardDriveCapacityValue, entity.statusValue)
	}

	static async ensureOperatingSystemExit({
		repository,
		operatingSystem
	}: {
		repository: OperatingSystemRepository
		operatingSystem: Primitives<ComputerOperatingSystem>
	}): Promise<void> {
		if (operatingSystem === null) {
			return
		}
		const existingOS = await repository.findById(operatingSystem)
		if (!existingOS) {
			throw new OperatingSystemDoesNotExistError(operatingSystem)
		}
	}
}
