import { DepartmentId } from '../../IDepartment/DepartmentId'
import { Departamento } from '../domain/Departamento'
import { UpdateDepartamentoUseCase } from '../domain/UpdateDepartmentoUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DepartamentoParams, type DepartamentoDto } from '../domain/Departamento.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class DepartamentoUpdater {
	private readonly updateDepartamentoUseCase: UpdateDepartamentoUseCase
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.updateDepartamentoUseCase = new UpdateDepartamentoUseCase(
			this.departamentoRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
	}

	async run({ id, params }: { id: string; params: Partial<DepartamentoParams> }): Promise<void> {
		const departamentoId = new DepartmentId(id)
		const departamento = await this.departamentoRepository.searchById(departamentoId.value)
		if (!departamento) {
			throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
		}

		const departamentoEntity = Departamento.fromPrimitives(departamento)

		await this.updateDepartamentoUseCase.execute({
			entity: departamentoEntity,
			params
		})

		await this.departamentoRepository.save(departamentoEntity.toPrimitive())
	}
}
