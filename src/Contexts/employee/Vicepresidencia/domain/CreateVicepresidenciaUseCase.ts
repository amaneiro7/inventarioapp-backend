import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

/**
 * @description Use case for creating a new Vicepresidencia, including validation of associated entities.
 */
export class CreateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the creation of a new vicepresidencia.
	 * @param {VicepresidenciaParams} params The parameters for creating the vicepresidencia.
	 * @returns {Promise<void>} A promise that resolves when the vicepresidencia is successfully created.
	 * @throws {DepartmentAlreadyExistError} If a vicepresidencia with the same name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated vicepresidencia ejecutiva or any cargo does not exist.
	 */
	public async execute({ name, vicepresidenciaEjecutivaId, cargos }: VicepresidenciaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaDoesNotExist(name),
			this.ensureVicepresidenciaEjecutivaExists(vicepresidenciaEjecutivaId),
			createIDepartementUseCase.execute({ cargos })
		])
	}

	private async ensureVicepresidenciaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if (await this.vicepresidenciaRepository.findByName(name)) {
			throw new DepartmentAlreadyExistError('La vicepresidencia')
		}
	}

	private async ensureVicepresidenciaEjecutivaExists(
		vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	): Promise<void> {
		if (!(await this.vicepresidenciaEjecutivaRepository.findById(vicepresidenciaEjecutivaId))) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
	}
}
