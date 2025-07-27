import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { OperatingSystemArqId } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqID'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { OperatingSystemArqDoesNotExistError } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqDoesNotExist'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ComputerOperatingSystem } from './ComputerOperatingSystem'
import { type OperatingSystemArqRepository } from '../../OperatingSystem/OperatingSystemArq/domain/OperatingSystemArqRepository'
import { type DeviceComputer } from './Computer'

/**
 * @description Represents the operating system architecture of a computer, which can be null.
 */
export class ComputerOperatingSystemArq extends AcceptedNullValueObject<Primitives<OperatingSystemArqId>> {
	constructor(
		readonly value: Primitives<OperatingSystemArqId> | null,
		readonly operatingSystem: Primitives<ComputerOperatingSystem>
	) {
		super(value)
		this.ensureIfOperatingSystemIsNullOperatingSystemArqIsNullAsWell(this.value, this.operatingSystem)
		this.ensureIsValidOperatingSystemArqId(value)
	}

	private ensureIsValidOperatingSystemArqId(id: Primitives<ComputerOperatingSystemArq>): void {
		if (id !== null) {
			new OperatingSystemArqId(id)
		}
	}

	private ensureIfOperatingSystemIsNullOperatingSystemArqIsNullAsWell(
		operatingSystemArq: Primitives<ComputerOperatingSystemArq>,
		operatingSystem: Primitives<ComputerOperatingSystem>
	): void {
		if (operatingSystem === null && operatingSystemArq !== null) {
			throw new InvalidArgumentError(
				'No se puede tener una arquitectura de sistema operativo sin un sistema operativo.'
			)
		}
		if (operatingSystem !== null && operatingSystemArq === null) {
			throw new InvalidArgumentError(
				'No se puede tener un sistema operativo sin una arquitectura de sistema operativo.'
			)
		}
	}

	static async updateOperatingSystemArqField({
		repository,
		operatingSystemArq,
		entity
	}: {
		repository: OperatingSystemArqRepository
		operatingSystemArq?: Primitives<ComputerOperatingSystemArq>
		entity: DeviceComputer
	}): Promise<void> {
		if (operatingSystemArq === undefined || entity.operatingSystemArqValue === operatingSystemArq) {
			return
		}
		await ComputerOperatingSystemArq.ensureOperatingSystemArqExit({ repository, operatingSystemArq })
		entity.updateOperatingSystemArq(operatingSystemArq, entity.operatingSystemValue)
	}

	static async ensureOperatingSystemArqExit({
		repository,
		operatingSystemArq
	}: {
		repository: OperatingSystemArqRepository
		operatingSystemArq: Primitives<ComputerOperatingSystemArq>
	}): Promise<void> {
		if (operatingSystemArq === null) {
			return
		}
		const existingArq = await repository.searchById(operatingSystemArq)
		if (!existingArq) {
			throw new OperatingSystemArqDoesNotExistError(operatingSystemArq)
		}
	}
}
