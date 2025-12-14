import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CargoAlreadyExistError } from './errors/CargoAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type Cargo } from './entity/Cargo'
import { type CargoName } from './valueObject/CargoName'
import { type CargoRepository } from './repository/CargoRepository'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type CargoPrimitives } from './entity/Cargo.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

interface DepartmentRepositories {
	readonly cargoRepository: CargoRepository
	readonly directivaRepository: DepartmentRepository<DirectivaDto>
	readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
}

interface UpdateCargoParams {
	params: Partial<Omit<CargoPrimitives, 'id'>>
	entity: Cargo
}

/**
 * @description Use case for updating an existing Cargo, including validation of associated departments.
 */
export class UpdateCargoUseCase {
	constructor(private readonly repository: DepartmentRepositories) {}

	/**
	 * @description Executes the update of a cargo.
	 * @param {UpdateCargoParams} data The parameters for updating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully updated.
	 * @throws {CargoAlreadyExistError} If a cargo with the new name already exists.
	 * @throws {DepartmentDoesNotExistError} If any of the associated department IDs do not exist.
	 */
	public async execute({
		params: { name, departamentos, directivas, vicepresidencias, vicepresidenciasEjecutivas },
		entity
	}: UpdateCargoParams): Promise<boolean> {
		// 1. Realizar todas las validaciones de negocio primero.
		await Promise.all([
			this.ensureCargoNameIsAvailable({ name, entity }),
			this.ensureDepartmentsExist('directiva', directivas, this.repository.directivaRepository),
			this.ensureDepartmentsExist('vicepresidencia', vicepresidencias, this.repository.vicepresidenciaRepository),
			this.ensureDepartmentsExist(
				'vicepresidencia ejecutiva',
				vicepresidenciasEjecutivas,
				this.repository.vicepresidenciaEjecutivaRepository
			),
			this.ensureDepartmentsExist(
				'gerencia, coordinación o departamento',
				departamentos,
				this.repository.departamentoRepository
			)
		])

		// 2. Si todas las validaciones pasan, actualizar la entidad.
		return this.updateEntity({
			name,
			departamentos,
			directivas,
			vicepresidencias,
			vicepresidenciasEjecutivas,
			entity
		})
	}

	private async ensureCargoNameIsAvailable({
		name,
		entity
	}: {
		name?: Primitives<CargoName>
		entity: Cargo
	}): Promise<void> {
		if (!name || entity.nameValue === name) return
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
		if (!departmentIds) return

		await Promise.all(
			Array.from(new Set(departmentIds)).map(async departmentId => {
				if (!(await repository.findById(departmentId))) {
					throw new DepartmentDoesNotExistError(`La ${departmentType}`)
				}
			})
		)
	}

	private updateEntity({
		name,
		departamentos,
		directivas,
		vicepresidencias,
		vicepresidenciasEjecutivas,
		entity
	}: UpdateCargoParams['params'] & { entity: Cargo }): boolean {
		let hasChanged = false

		if (name !== undefined && entity.nameValue !== name) {
			entity.updateName(name)
			hasChanged = true
		}
		// Nota: Para las listas, una comparación simple podría no ser suficiente si el orden no importa.
		// Por ahora, asumimos que si se envía el array, es porque se quiere actualizar.
		// Una mejora futura podría ser comparar el contenido de los arrays.
		if (departamentos) {
			entity.updateDepartamentos(departamentos)
			hasChanged = true
		}
		if (directivas) {
			entity.updateDirectivas(directivas)
			hasChanged = true
		}
		if (vicepresidencias) {
			entity.updateVicepresidencias(vicepresidencias)
			hasChanged = true
		}
		if (vicepresidenciasEjecutivas) {
			entity.updateVicepresidenciaEjecutivas(vicepresidenciasEjecutivas)
			hasChanged = true
		}

		return hasChanged
	}
}
