import { CreateDepartamentoUseCase } from '../domain/CreateDepartmentoUseCase'
import { Departamento } from '../domain/Departamento'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type DepartamentoDto, type DepartamentoParams } from '../domain/Departamento.dto'

/**
 * @description Use case for creating a new Departamento entity.
 */
export class DepartamentoCreator {
	private readonly createDepartamentoUseCase: CreateDepartamentoUseCase
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		departamentoRepository: DepartmentRepository<DepartamentoDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
		cargoRepository: CargoRepository
	}) {
		this.cargoRepository = dependencies.cargoRepository
		this.departamentoRepository = dependencies.departamentoRepository
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository
		this.createDepartamentoUseCase = new CreateDepartamentoUseCase(
			this.departamentoRepository,
			this.vicepresidenciaRepository,
			this.cargoRepository
		)
	}

	/**
	 * @description Executes the Departamento creation process.
	 * @param {{ params: DepartamentoParams }} data The parameters for creating the Departamento.
	 * @returns {Promise<void>} A promise that resolves when the Departamento is successfully created.
	 */
	async run({ params: { name, vicepresidenciaId, cargos } }: { params: DepartamentoParams }): Promise<void> {
		const uniqueCargos = Array.from(new Set(cargos))

		await this.createDepartamentoUseCase.execute({
			name,
			vicepresidenciaId,
			cargos: uniqueCargos
		})

		const departamento = Departamento.create({
			name,
			vicepresidenciaId,
			cargos: uniqueCargos
		})

		await this.departamentoRepository.save(departamento.toPrimitive())
	}
}
