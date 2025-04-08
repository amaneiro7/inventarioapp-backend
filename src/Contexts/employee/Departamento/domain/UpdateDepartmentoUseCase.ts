import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Departamento } from './Departamento'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentPrimitives } from '../../IDepartment/IDeparment'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DepartamentoDto, type DepartamentoParams } from './Departamento.dto'

export class UpdateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<DepartmentPrimitives>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, vicepresidenciaEjecutivaId, centroCostoId, cargos },
		entity
	}: {
		entity: Departamento
		params: Partial<DepartamentoParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.centroCostoRepository, this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaEjecutivaExists({ vicepresidenciaEjecutivaId, entity }),
			this.ensureDepartamentoDoesNotExist({ name, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos, centroCostoId }, entity })
		])
	}

	private async ensureDepartamentoDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Departamento
	}): Promise<void> {
		if (!name || entity.nameValue === name) return

		if ((await this.departamentoRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La gerencia, coordinación o departamento')
		}
		entity.updateName(name)
	}

	private async ensureVicepresidenciaEjecutivaExists({
		entity,
		vicepresidenciaEjecutivaId
	}: {
		vicepresidenciaEjecutivaId?: Primitives<DepartmentId>
		entity: Departamento
	}): Promise<void> {
		if (!vicepresidenciaEjecutivaId || entity.vicepresidenciaEjecutivaValue === vicepresidenciaEjecutivaId) return

		if ((await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
	}
}
