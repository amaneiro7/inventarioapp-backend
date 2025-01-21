import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartamentoPrimitives } from '../domain/Departamento'

export class DepartamentoFinder {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>
	) {}

	async run(params: { id: string }): Promise<DepartamentoPrimitives> {
		const { id } = params
		const departamentoId = new DepartmentId(id).value
		const departamento =
			await this.departamentoRepository.searchById(departamentoId)

		if (!departamento) {
			throw new DepartmentDoesNotExistError(
				'La gerencia, coordinación o departamento'
			)
		}

		return departamento
	}
}
