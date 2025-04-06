import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from './CargoRepository'

import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type CargoName } from './CargoName'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento.dto'
import { type CargoPrimitives } from './Cargo.dto'
import { CargoAlreadyExistError } from './CargoAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'

export class CreateCargoUseCase {
	constructor(
		private readonly cargoRepository: CargoRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {}

	public async execute({ name, departamentos }: Omit<CargoPrimitives, 'id'>): Promise<void> {
		// Se verifica que el cargo no exista
		await this.ensureCargoDoesNotExist(name)

		// Se verifica que los departamentos existan
		await this.ensureDepartamentosExists(departamentos)
	}

	private async ensureCargoDoesNotExist(name: Primitives<CargoName>): Promise<void> {
		if ((await this.cargoRepository.searchByName(name)) !== null) {
			throw new CargoAlreadyExistError(name)
		}
	}

	private async ensureDepartamentosExists(departamentos: Primitives<DepartmentId>[]): Promise<void> {
		for (const departmentId of departamentos) {
			if ((await this.departamentoRepository.searchById(departmentId)) === null) {
				throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
			}
		}
	}
}
