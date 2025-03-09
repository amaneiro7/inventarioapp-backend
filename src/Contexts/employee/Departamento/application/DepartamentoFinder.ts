import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartamentoDto } from '../domain/Departamento.dto'

export class DepartamentoFinder {
	constructor(private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>) {}

	async run(params: { id: string }): Promise<DepartamentoDto> {
		const { id } = params
		const departamentoId = new DepartmentId(id).value
		const departamento = await this.departamentoRepository.searchById(departamentoId)

		if (!departamento) {
			throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
		}

		return departamento
	}
}
