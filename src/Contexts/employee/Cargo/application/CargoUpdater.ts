import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento'
import { Cargo } from '../domain/Cargo'
import { CargoId } from '../domain/CargoId'
import { CargoDoesNotExistError } from '../domain/CargoDoesNotExistError'
import { UpdateCargoUseCase } from '../domain/UpdateCargoUseCase'
import { type CargoParams } from '../domain/Cargo.dto'

export class CargoUpdater {
	private readonly updateCargoUseCase: UpdateCargoUseCase
	constructor(
		private readonly cargoRepository: CargoRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {
		this.updateCargoUseCase = new UpdateCargoUseCase(this.cargoRepository, this.departamentoRepository)
	}

	async run({ id, params }: { id: string; params: Partial<CargoParams> }): Promise<void> {
		const { name, departamentos } = params
		const cargoId = new CargoId(id)

		const cargo = await this.cargoRepository.searchById(cargoId.value)
		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		const cargoEntity = Cargo.fromPrimitives(cargo)

		await this.updateCargoUseCase.execute({
			entity: cargoEntity,
			params: { name, departamentos }
		})

		await this.cargoRepository.save(cargoEntity.toPrimitive())
	}
}
