import { CargoDoesNotExistError } from '../Cargo/domain/errors/CargoDoesNotExistError'
import { type CargoRepository } from '../Cargo/domain/repository/CargoRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../Cargo/domain/valueObject/CargoId'

/**
 * @description Use case for creating a new department, including validation of associated cargos.
 */
export class CreateIDepartementUseCase {
	constructor(private readonly cargoRepository: CargoRepository) {}

	/**
	 * @description Executes the creation of a new department.
	 * @param {{ cargos: Primitives<CargoId>[] }} params The parameters for creating the department.
	 * @returns {Promise<void>} A promise that resolves when the department is successfully created.
	 * @throws {CargoDoesNotExistError} If any of the associated cargos do not exist.
	 */
	public async execute({ cargos }: { cargos: Primitives<CargoId>[] }): Promise<void> {
		await this.ensureCargoExists(cargos)
	}

	private async ensureCargoExists(cargos: Primitives<CargoId>[]): Promise<void> {
		const cargoExistenceChecks = cargos.map(async cargoId => {
			if (!(await this.cargoRepository.findById(cargoId))) {
				throw new CargoDoesNotExistError()
			}
		})
		await Promise.all(cargoExistenceChecks)
	}
}
