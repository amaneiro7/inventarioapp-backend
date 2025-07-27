import { CargoAlreadyExistError } from './CargoAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from './CargoRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type CargoName } from './CargoName'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type CargoPrimitives } from './Cargo.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'

interface DepartmentRepositories {
	readonly cargoRepository: CargoRepository
	readonly directivaRepository: DepartmentRepository<DirectivaDto>
	readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
}

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
		const existingCargo = await this.repository.cargoRepository.searchByName(name)
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
				if (!(await repository.searchById(id))) {
					throw new DepartmentDoesNotExistError(`La ${departmentType}`)
				}
			})
		)
	}
}
