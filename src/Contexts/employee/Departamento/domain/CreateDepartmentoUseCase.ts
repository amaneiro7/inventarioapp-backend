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

/**
 * @description Use case for creating a new Departamento, including validation of associated entities.
 */
export class CreateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the creation of a new departamento.
	 * @param {DepartamentoParams} params The parameters for creating the departamento.
	 * @returns {Promise<void>} A promise that resolves when the departamento is successfully created.
	 * @throws {DepartmentAlreadyExistError} If a departamento with the same name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated vicepresidencia or any cargo does not exist.
	 */
	public async execute({ name, vicepresidenciaId, cargos }: DepartamentoParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaExists(vicepresidenciaId),
			this.ensureDepartamentoDoesNotExist(name),
			createIDepartementUseCase.execute({ cargos })
		])
	}

	private async ensureDepartamentoDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if (await this.departamentoRepository.findByName(name)) {
			throw new DepartmentAlreadyExistError('La gerencia, coordinación o departamento')
		}
	}

	private async ensureVicepresidenciaExists(vicepresidenciaId: Primitives<DepartmentId>): Promise<void> {
		if (!(await this.vicepresidenciaRepository.findById(vicepresidenciaId))) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}
	}
}
