import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { HardDriveCapacityId } from '../../../../Features/HardDrive/HardDriveCapacity/domain/valueObject/HardDriveCapacityId'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceStatus } from '../DeviceStatus'
import { type HardDriveCapacityRepository } from '../../../../Features/HardDrive/HardDriveCapacity/domain/repository/HardDriveCapacityRepository'
import { type DeviceComputer } from './Computer'

/**
 * @description Represents the hard drive capacity of a computer, which can be null.
 */
export class ComputerHardDriveCapacity extends AcceptedNullValueObject<Primitives<HardDriveCapacityId>> {
	constructor(
		readonly value: Primitives<HardDriveCapacityId> | null,
		readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureIsValidHardDriveCapacityId(value)
		this.ensureIfStatusIsInUseHardDriveMustHaveAValue(this.value, this.status)
	}

	private ensureIfStatusIsInUseHardDriveMustHaveAValue(
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>,
		status: Primitives<DeviceStatus>
	): void {
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

	private ensureIsValidHardDriveCapacityId(id: Primitives<HardDriveCapacityId> | null): void {
		if (id !== null) {
			new HardDriveCapacityId(id)
		}
	}

	static async updateHardDriveCapacityField({
		repository,
		hardDriveCapacity,
		entity
	}: {
		repository: HardDriveCapacityRepository
		hardDriveCapacity?: Primitives<ComputerHardDriveCapacity>
		entity: DeviceComputer
	}): Promise<void> {
		if (hardDriveCapacity === undefined || entity.hardDriveCapacityValue === hardDriveCapacity) {
			return
		}
		await HardDriveCapacityId.ensureHardDriveCapacityExit({ repository, hardDriveCapacity })
		entity.updateHardDriveCapacity(hardDriveCapacity, entity.statusValue)
	}
}
