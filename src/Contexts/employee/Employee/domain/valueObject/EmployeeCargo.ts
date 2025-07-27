import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { CargoId } from '../../../Cargo/domain/CargoId'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { CargoDoesNotExistError } from '../../../Cargo/domain/CargoDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type CargoRepository } from '../../../Cargo/domain/CargoRepository'

interface EmployeeCargoProps {
	value: Primitives<CargoId> | null
	type: Primitives<EmployeeType>
}

/**
 * @description Represents the cargo (job title) of an employee.
 */
export class EmployeeCargo extends AcceptedNullValueObject<Primitives<CargoId>> {
	constructor(
		value: Primitives<CargoId> | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidCargo({ value, type: this.type })
	}

	private ensureIsValidCargo({ value, type }: EmployeeCargoProps): void {
		if (type !== EmployeeTypes.GENERIC && value === null) {
			throw new InvalidArgumentError('El cargo es requerido para este tipo de empleado.')
		}

		if (value !== null && !(new CargoId(value) instanceof CargoId)) {
			throw new InvalidArgumentError(`'${value}' no es un ID de cargo válido.`) // Improved error message
		}
	}

	/**
	 * @description Handles the logic for updating the cargo field of an employee.
	 * @param {{ repository: CargoRepository; cargoId?: Primitives<CargoId> | null; entity: Employee }} params The parameters for updating.
	 */
	static async updateCargoField({
		repository,
		cargoId,
		entity
	}: {
		repository: CargoRepository
		cargoId?: Primitives<CargoId> | null
		entity: Employee
	}): Promise<void> {
		if (cargoId === undefined || entity.cargoValue === cargoId) {
			return
		}
		await this.ensureCargoExists({ repository, cargoId })
		entity.updateCargo(cargoId, entity.typeValue)
	}

	/**
	 * @description Ensures that the specified cargo exists in the repository.
	 * @param {{ repository: CargoRepository; cargoId: Primitives<CargoId> | null }} params The parameters for the check.
	 * @throws {CargoDoesNotExistError} If the cargo does not exist.
	 */
	static async ensureCargoExists({
		repository,
		cargoId
	}: {
		repository: CargoRepository
		cargoId: Primitives<CargoId> | null
	}): Promise<void> {
		if (!cargoId) return
		const exists = await repository.searchById(new CargoId(cargoId).value)
		if (!exists) {
			throw new CargoDoesNotExistError()
		}
	}
}
