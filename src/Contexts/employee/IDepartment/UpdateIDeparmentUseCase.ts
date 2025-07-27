import { type IDepartment } from './IDeparment'
import { CargoDoesNotExistError } from '../Cargo/domain/CargoDoesNotExistError'
import { type CargoRepository } from '../Cargo/domain/CargoRepository'
import { type CargoId } from '../Cargo/domain/CargoId'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for updating a department, including validation of associated cargos.
 */
export class UpdateIDeparmentUseCase {
	constructor(private readonly cargoRepository: CargoRepository) {}

	/**
	 * @description Executes the update of a department.
	 * @param {{ entity: IDepartment; params: Partial<{ cargos: Primitives<CargoId>[] }> }} data The parameters for updating the department.
	 * @returns {Promise<void>} A promise that resolves when the department is successfully updated.
	 * @throws {CargoDoesNotExistError} If any of the associated cargos do not exist.
	 */
	public async execute({
		params: { cargos },
		entity
	}: {
		entity: IDepartment
		params: Partial<{
			cargos: Primitives<CargoId>[]
		}>
	}): Promise<void> {
		await this.ensureCargoExists({ cargos, entity })
	}

	private async ensureCargoExists({
		entity,
		cargos
	}: {
		cargos?: Primitives<CargoId>[]
		entity: IDepartment
	}): Promise<void> {
		if (!cargos) return

		const uniqueCargos = Array.from(new Set(cargos))
		const newCargos = uniqueCargos.filter(cargoId => !entity.CargosValue.includes(cargoId))

		if (newCargos.length > 0) {
			const cargoExistenceChecks = newCargos.map(async cargoId => {
				if (!(await this.cargoRepository.searchById(cargoId))) {
					throw new CargoDoesNotExistError()
				}
			})
			await Promise.all(cargoExistenceChecks)
		}

		entity.updateCargos(cargos)
	}
}
