import { CreateCargoUseCase } from '../domain/CreateCargoUseCase'
import { Cargo } from '../domain/Cargo'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento.dto'
import { type CargoParams } from '../domain/Cargo.dto'

export class CargoCreator {
	private readonly createCargoUseCase: CreateCargoUseCase
	constructor(
		private readonly cargoRepository: CargoRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {
		this.createCargoUseCase = new CreateCargoUseCase(this.cargoRepository, this.departamentoRepository)
	}

	async run({ name, departamentos }: CargoParams): Promise<void> {
		const arraySinDuplicados: CargoParams['departamentos'] = Array.from(new Set(departamentos))
		await this.createCargoUseCase.execute({
			name,
			departamentos: arraySinDuplicados
		})

		const cargo = Cargo.create({ name, departamentos: arraySinDuplicados })

		await this.cargoRepository.save(cargo.toPrimitive())
	}
}
