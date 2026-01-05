import { DirectivaDoesNotExistError } from '../domain/errors/DirectivaDoesNotExistError'
import { DirectivaId } from '../domain/valueObject/DirectivaId'
import { type DirectivaDto } from '../domain/entity/Directiva.dto'
import { type DirectivaRepository } from '../domain/repository/DirectivaRepository'

/**
 * @description Use case for finding a Directiva entity by its unique identifier.
 */
export class DirectivaFinder {
	private readonly directivaRepository: DirectivaRepository

	constructor({ directivaRepository }: { directivaRepository: DirectivaRepository }) {
		this.directivaRepository = directivaRepository
	}

	/**
	 * @description Executes the Directiva finding process.
	 * @param {{ id: string }} params The parameters for finding the Directiva.
	 * @returns {Promise<DirectivaDto>} A promise that resolves to the found Directiva DTO.
	 * @throws {DepartmentDoesNotExistError} If no Directiva with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<DirectivaDto> {
		const directivaId = new DirectivaId(id).value
		const directiva = await this.directivaRepository.findById(directivaId)

		if (!directiva) {
			throw new DirectivaDoesNotExistError(directivaId)
		}

		return directiva
	}
}
