import { Cargo } from '../domain/Cargo'
import { CargoId } from '../domain/CargoId'
import { CargoDoesNotExistError } from '../domain/CargoDoesNotExistError'
import { UpdateCargoUseCase } from '../domain/UpdateCargoUseCase'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type CargoParams } from '../domain/Cargo.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

/**
 * @description Use case for updating an existing Cargo entity.
 */
export class CargoUpdater {
	private readonly updateCargoUseCase: UpdateCargoUseCase
	private readonly cargoRepository: CargoRepository
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>

	constructor(dependencies: {
		cargoRepository: CargoRepository
		departamentoRepository: DepartmentRepository<DepartamentoDto>
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	}) {
		this.cargoRepository = dependencies.cargoRepository
		this.departamentoRepository = dependencies.departamentoRepository
		this.directivaRepository = dependencies.directivaRepository
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository

		this.updateCargoUseCase = new UpdateCargoUseCase({
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository
		})
	}

	/**
	 * @description Executes the cargo update process.
	 * @param {{ id: string; params: Partial<CargoParams> }} data The parameters for updating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully updated.
	 * @throws {CargoDoesNotExistError} If the cargo with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<CargoParams> }): Promise<void> {
		const cargoId = new CargoId(id)

		const cargo = await this.cargoRepository.searchById(cargoId.value)
		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		const cargoEntity = Cargo.fromPrimitives(cargo)

		await this.updateCargoUseCase.execute({
			entity: cargoEntity,
			params
		})

		await this.cargoRepository.save(cargoEntity.toPrimitive())
	}
}
