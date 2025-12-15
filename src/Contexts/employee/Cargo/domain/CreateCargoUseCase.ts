import { CargoAlreadyExistError } from './errors/CargoAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type CargoName } from './valueObject/CargoName'
import { type CargoPrimitives } from './entity/Cargo.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentRepositories } from './repository/DepartmentRepositories'

/**
 * @description Use case for creating a new Cargo, including validation of associated departments.
 */
export class CreateCargoUseCase {
	constructor(private readonly repository: DepartmentRepositories) {}

	/**
	 * @description Executes the creation of a new cargo.
	 * @param {Omit<CargoPrimitives, 'id'>} params The parameters for creating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully created.
	 * @throws {CargoAlreadyExistError} If a cargo with the same name already exists.
	 * @throws {DepartmentDoesNotExistError} If any of the associated department IDs do not exist.
	 */
	public async execute({
		name,
		departamentos,
		directivas,
		vicepresidencias,
		vicepresidenciasEjecutivas
	}: Omit<CargoPrimitives, 'id'>): Promise<void> {
		await Promise.all([
			this.ensureCargoDoesNotExist(name),
			this.ensureDepartmentsExist('directiva jerárquica', directivas, this.repository.directivaRepository),
			this.ensureDepartmentsExist(
				'vicepresidencia ejecutiva',
				vicepresidenciasEjecutivas,
				this.repository.vicepresidenciaEjecutivaRepository
			),
			this.ensureDepartmentsExist('vicepresidencia', vicepresidencias, this.repository.vicepresidenciaRepository),
			this.ensureDepartmentsExist(
				'gerencia, coordinación o departamento',
				departamentos,
				this.repository.departamentoRepository
			)
		])
	}

	private async ensureCargoDoesNotExist(name: Primitives<CargoName>): Promise<void> {
		const existingCargo = await this.repository.cargoRepository.findByName(name)
		if (existingCargo) {
			throw new CargoAlreadyExistError(name)
		}
	}

	private async ensureDepartmentsExist<T>(
		departmentType: string,
		departmentIds: Primitives<DepartmentId>[] | undefined,
		repository: DepartmentRepository<T>
	): Promise<void> {
		if (!departmentIds || departmentIds.length === 0) return

		await Promise.all(
			Array.from(new Set(departmentIds)).map(async id => {
				if (!(await repository.findById(id))) {
					throw new DepartmentDoesNotExistError(`La ${departmentType}`)
				}
			})
		)
	}
}
