import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { CreateDepartamentoUseCase } from '../domain/CreateDepartmentoUseCase'
import { Departamento } from '../domain/Departamento'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type DepartamentoDto, type DepartamentoParams } from '../domain/Departamento.dto'

export class DepartamentoCreator {
	private readonly createDepartamentoUseCase: CreateDepartamentoUseCase
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.createDepartamentoUseCase = new CreateDepartamentoUseCase(
			this.departamentoRepository,
			this.vicepresidenciaRepository,
			this.cargoRepository
		)
	}

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
