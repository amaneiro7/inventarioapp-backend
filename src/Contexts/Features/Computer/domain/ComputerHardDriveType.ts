import { HardDriveTypeId } from '../../HardDrive/HardDriveType/domain/HardDriveTypeId'
import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ComputerHardDriveCapacity } from './ComputerHardDriveCapacity'
import { type HardDriveTypeRepository } from '../../HardDrive/HardDriveType/domain/HardDriveTypeRepository'
import { type DeviceComputer } from './Computer'

/**
 * @description Represents the hard drive type of a computer, which can be null.
 */
export class ComputerHardDriveType extends AcceptedNullValueObject<Primitives<HardDriveTypeId>> {
	constructor(
		readonly value: Primitives<HardDriveTypeId> | null,
		readonly hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	) {
		super(value)
		this.ensureIfHardDriveIsNullHardDriveTypeIsNullAsWell(this.value, this.hardDriveCapacity)
		this.ensureIsValidHardDriveTypeId(value)
	}

	private ensureIsValidHardDriveTypeId(id: Primitives<HardDriveTypeId> | null): void {
		if (id !== null) {
			new HardDriveTypeId(id)
		}
	}

	private ensureIfHardDriveIsNullHardDriveTypeIsNullAsWell(
		hardDriveType: Primitives<ComputerHardDriveType>,
		hardDriveCapacity: Primitives<ComputerHardDriveCapacity>
	): void {
		if (hardDriveCapacity !== null && hardDriveType === null) {
			throw new InvalidArgumentError('El tipo de disco duro no puede ser nulo si se especifica una capacidad.')
		}
		if (hardDriveCapacity === null && hardDriveType !== null) {
			throw new InvalidArgumentError('No se puede especificar un tipo de disco duro si no hay capacidad.')
		}
	}

	static async updateHardDriveTypeField({
		repository,
		hardDriveType,
		entity
	}: {
		repository: HardDriveTypeRepository
		hardDriveType?: Primitives<ComputerHardDriveType>
		entity: DeviceComputer
	}): Promise<void> {
		if (hardDriveType === undefined || entity.hardDriveTypeValue === hardDriveType) {
			return
		}
		await HardDriveTypeId.ensureHardDriveTypeExit({ repository, hardDriveType })
		entity.updateHardDriveType(hardDriveType, entity.hardDriveCapacityValue)
	}
}
