import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartamentoDto, type DepartamentoParams } from './Departamento.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

export class CreateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, vicepresidenciaId, cargos }: DepartamentoParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([
			// Se verifica que el departamento 2 exista
			this.ensureVicepresidenciaExists(vicepresidenciaId),
			// Se verifica que el departamento 3 no exista
			this.ensureDepartamentoDoesNotExist(name),
			createIDepartementUseCase.execute({ cargos })
		])
	}

	private async ensureDepartamentoDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.departamentoRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La Genrecia, coordinación o departamento')
		}
	}

	private async ensureVicepresidenciaExists(vicepresidenciaId: Primitives<DepartmentId>): Promise<void> {
		if ((await this.vicepresidenciaRepository.searchById(vicepresidenciaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ')
		}
	}
}
