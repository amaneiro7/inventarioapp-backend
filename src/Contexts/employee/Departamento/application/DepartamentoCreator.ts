import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaEjecutivaPrimitives } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { CreateDepartamentoUseCase } from '../domain/CreateDepartmentoUseCase'
import {
	Departamento,
	type DepartamentoPrimitives
} from '../domain/Departamento'

export class DepartamentoCreator {
	private readonly createDepartamentoUseCase: CreateDepartamentoUseCase
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
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

	async run({
		name,
		vicepresidenciaEjecutivaId,
		centroCostoId,
		cargos
	}: Omit<DepartamentoPrimitives, 'id'>): Promise<void> {
		const arraySinDuplicados = Array.from(new Set(cargos))

		await this.createDepartamentoUseCase.execute({
			name,
			vicepresidenciaEjecutivaId,
			centroCostoId,
			cargos: arraySinDuplicados
		})

		const departamento = Departamento.create({
			name,
			vicepresidenciaEjecutivaId,
			centroCostoId,
			cargos: arraySinDuplicados
		})

		await this.departamentoRepository.save(departamento.toPrimitive())
	}
}
