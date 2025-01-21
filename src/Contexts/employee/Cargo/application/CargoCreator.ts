import { CreateCargoUseCase } from '../domain/CreateCargoUseCase'
import { Cargo, type CargoPrimitives } from '../domain/Cargo'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../domain/CargoRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento'

export class CargoCreator {
	private readonly createCargoUseCase: CreateCargoUseCase
	constructor(
		private readonly cargoRepository: CargoRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {
		this.createCargoUseCase = new CreateCargoUseCase(
			this.cargoRepository,
			this.departamentoRepository
		)
	}

	async run({
		name,
		departamentos
	}: Omit<CargoPrimitives, 'id'>): Promise<void> {
		const arraySinDuplicados = Array.from(new Set(departamentos))
		await this.createCargoUseCase.execute({
			name,
			departamentos: arraySinDuplicados
		})

		const cargo = Cargo.create({ name, departamentos: arraySinDuplicados })

		await this.cargoRepository.save(cargo.toPrimitive())
	}
}
