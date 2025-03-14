import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { CreateDepartamentoUseCase } from '../domain/CreateDepartmentoUseCase'
import { Departamento } from '../domain/Departamento'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type DepartamentoDto, type DepartamentoParams } from '../domain/Departamento.dto'

export class DepartamentoCreator {
	private readonly createDepartamentoUseCase: CreateDepartamentoUseCase
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.createDepartamentoUseCase = new CreateDepartamentoUseCase(
			this.departamentoRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
	}

	async run({ name, vicepresidenciaEjecutivaId, centroCostoId, cargos }: DepartamentoParams): Promise<void> {
		const uniqueCargos = Array.from(new Set(cargos))

		await this.createDepartamentoUseCase.execute({
			name,
			vicepresidenciaEjecutivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		const departamento = Departamento.create({
			name,
			vicepresidenciaEjecutivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		await this.departamentoRepository.save(departamento.toPrimitive())
	}
}
