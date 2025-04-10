import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CargoAlreadyExistError } from './CargoAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type Cargo } from './Cargo'
import { type CargoName } from './CargoName'
import { type CargoRepository } from './CargoRepository'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type CargoPrimitives } from './Cargo.dto'
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

export class UpdateCargoUseCase {
	constructor(private readonly repository: DepartmentRepositories) {}

	public async execute({
		params: { name, departamentos, directivas, vicepresidencias, vicepresidenciasEjecutivas },
		entity
	}: UpdateCargoParams): Promise<void> {
		await Promise.all([
			this.ensureCargoDoesNotExist({ name, entity }),
			this.ensureDepartmentsExist({
				departmentType: 'directiva',
				departmentIds: directivas,
				currentDepartmentIds: entity.directivasValue,
				repository: this.repository.directivaRepository,
				entity
			}),
			this.ensureDepartmentsExist({
				departmentType: 'vicepresidencia',
				departmentIds: vicepresidencias,
				currentDepartmentIds: entity.vicepresidenciasValue,
				repository: this.repository.vicepresidenciaRepository,
				entity
			}),
			this.ensureDepartmentsExist({
				departmentType: 'vicepresidencia ejecutiva',
				departmentIds: vicepresidenciasEjecutivas,
				currentDepartmentIds: entity.vicepresidenciasEjecutivasValue,
				repository: this.repository.vicepresidenciaEjecutivaRepository,
				entity
			}),
			this.ensureDepartmentsExist({
				departmentType: 'gerencia, coordinación o departamento',
				departmentIds: departamentos,
				currentDepartmentIds: entity.departamentosValue,
				repository: this.repository.departamentoRepository,
				entity
			})
		])
	}

	private async ensureCargoDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<CargoName>
		entity: Cargo
	}): Promise<void> {
		if (!name || entity.nameValue === name) return
		const existingCargo = await this.repository.cargoRepository.searchByName(name)
		if (existingCargo !== null) {
			throw new CargoAlreadyExistError(name)
		}
		entity.updateName(name)
	}

	private async ensureDepartmentsExist<T>({
		departmentType,
		departmentIds,
		currentDepartmentIds,
		repository,
		entity
	}: {
		departmentType: string
		departmentIds: Primitives<DepartmentId>[] | undefined
		currentDepartmentIds: string[]
		repository: DepartmentRepository<T>
		entity: Cargo
	}): Promise<void> {
		if (!departmentIds) return

		const uniqueDepartmentIds = Array.from(new Set(departmentIds))
		const newDepartmentIds = uniqueDepartmentIds.filter(id => !currentDepartmentIds.includes(id))

		if (newDepartmentIds.length === 0) return

		await Promise.all(
			newDepartmentIds.map(async departmentId => {
				if ((await repository.searchById(departmentId)) === null) {
					throw new DepartmentDoesNotExistError(`La ${departmentType}`)
				}
			})
		)

		switch (departmentType) {
			case 'gerencia, coordinación o departamento':
				entity.updateDepartamentos(departmentIds)
				break
			case 'directiva':
				entity.updateDirectivas(departmentIds)
				break
			case 'vicepresidencia':
				entity.updateVicepresidencias(departmentIds)
				break
			case 'vicepresidencia ejecutiva':
				entity.updateVicepresidenciaEjecutivas(departmentIds)
				break
		}
	}
}
