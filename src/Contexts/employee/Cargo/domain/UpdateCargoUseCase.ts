import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type Cargo, type CargoPrimitives } from './Cargo'
import { type CargoName } from './CargoName'
import { type CargoRepository } from './CargoRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CargoAlreadyExistError } from './CargoAlreadyExistError'

export class UpdateCargoUseCase {
	constructor(
		private readonly cargoRepository: CargoRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {}

	public async execute({
		params: { name, departamentos },
		entity
	}: {
		entity: Cargo
		params: Partial<Omit<CargoPrimitives, 'id'>>
	}): Promise<void> {
		// Se verifica que el cargo no exista
		await this.ensureCargoDoesNotExist({ name, entity })

		// Se verifica que los departamentos existan
		await this.ensureDepartamentosExists({ departamentos, entity })
	}

	private async ensureCargoDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<CargoName>
		entity: Cargo
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		if ((await this.cargoRepository.searchByName(name)) !== null) {
			throw new CargoAlreadyExistError(name)
		}
		entity.updateName(name)
	}

	private async ensureDepartamentosExists({
		entity,
		departamentos
	}: {
		departamentos?: Primitives<DepartmentId>[]
		entity: Cargo
	}): Promise<void> {
		if (!departamentos) return

		// Asegurarse que no existan valores duplicados
		const arraySinDuplicados = Array.from(new Set(departamentos))
		const currentDepartamentoIds = entity.departamentosValue

		// Se crea una nueva lista con los departamentos nuevos, que no estan en la lista actual
		const newDepartamentos = this.newDepartamentosToAdd(currentDepartamentoIds, arraySinDuplicados)

		// Si la lista es 0, no hay cargos nuevos
		if (newDepartamentos.length === 0) return

		// Se verifica que cada departamento exista
		for (const departmentId of newDepartamentos) {
			if ((await this.departamentoRepository.searchById(departmentId)) === null) {
				throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
			}
		}
		entity.updateDepartamentos(departamentos)
	}

	// Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
	private newDepartamentosToAdd(currentList: string[], newList: string[]): string[] {
		return newList.filter(list => !currentList.includes(list))
	}
}
