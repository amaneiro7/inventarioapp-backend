import { DepartamentoDoesNotExistError } from '../domain/errors/DepartamentoDoesNotExistError'
import { DepartamentoId } from '../domain/valueObject/DepartamentoId'
import { type DepartamentoRepository } from '../domain/repository/DepartamentoRepository'
import { type DepartamentoDto } from '../domain/entity/Departamento.dto'

/**
 * @description Use case for finding a Departamento entity by its unique identifier.
 */
export class DepartamentoFinder {
	private readonly departamentoRepository: DepartamentoRepository

	constructor({ departamentoRepository }: { departamentoRepository: DepartamentoRepository }) {
		this.departamentoRepository = departamentoRepository
	}

	/**
	 * @description Executes the Departamento finding process.
	 * @param {{ id: string }} params The parameters for finding the Departamento.
	 * @returns {Promise<DepartamentoDto>} A promise that resolves to the found Departamento DTO.
	 * @throws {DepartmentDoesNotExistError} If no Departamento with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<DepartamentoDto> {
		const departamentoId = new DepartamentoId(id).value
		const departamento = await this.departamentoRepository.findById(departamentoId)

		if (!departamento) {
			throw new DepartamentoDoesNotExistError(departamentoId)
		}

		return departamento
	}
}
