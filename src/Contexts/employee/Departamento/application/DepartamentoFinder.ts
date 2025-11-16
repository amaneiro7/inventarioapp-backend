import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartamentoDto } from '../domain/Departamento.dto'

/**
 * @description Use case for finding a Departamento entity by its unique identifier.
 */
export class DepartamentoFinder {
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>

	constructor({ departamentoRepository }: { departamentoRepository: DepartmentRepository<DepartamentoDto> }) {
		this.departamentoRepository = departamentoRepository
	}

	/**
	 * @description Executes the Departamento finding process.
	 * @param {{ id: string }} params The parameters for finding the Departamento.
	 * @returns {Promise<DepartamentoDto>} A promise that resolves to the found Departamento DTO.
	 * @throws {DepartmentDoesNotExistError} If no Departamento with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<DepartamentoDto> {
		const departamentoId = new DepartmentId(id).value
		const departamento = await this.departamentoRepository.findById(departamentoId)

		if (!departamento) {
			throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
		}

		return departamento
	}
}
