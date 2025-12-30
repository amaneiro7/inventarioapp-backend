import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaEjecutivaParams, type VicepresidenciaEjecutivaDto } from './VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../Directiva/domain/entity/Directiva.dto'

/**
 * @description Use case for creating a new VicepresidenciaEjecutiva, including validation of associated entities.
 */
export class CreateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the creation of a new vicepresidencia ejecutiva.
	 * @param {VicepresidenciaEjecutivaParams} params The parameters for creating the vicepresidencia ejecutiva.
	 * @returns {Promise<void>} A promise that resolves when the vicepresidencia ejecutiva is successfully created.
	 * @throws {DepartmentAlreadyExistError} If a vicepresidencia ejecutiva with the same name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated directiva or any cargo does not exist.
	 */
	public async execute({ name, directivaId, cargos }: VicepresidenciaEjecutivaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)

		await Promise.all([
			this.ensureVicepresidenciaEjecutivaDoesNotExist(name),
			this.ensureDirectivaExists(directivaId),
			createIDepartementUseCase.execute({ cargos })
		])
	}

	private async ensureVicepresidenciaEjecutivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if (await this.vicepresidenciaEjecutivaRepository.findByName(name)) {
			throw new DepartmentAlreadyExistError('La vicepresidencia ejecutiva')
		}
	}

	private async ensureDirectivaExists(directivaId: Primitives<DepartmentId>): Promise<void> {
		if (!(await this.directivaRepository.findById(directivaId))) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
	}
}
