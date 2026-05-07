import { UnidadId } from '../domain/valueObject/UnidadId'
import { UnidadDoesNotExistError } from '../domain/errors/UnidadDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UnidadDto } from '../domain/entity/Unidad.dto'
import { type UnidadRepository } from '../domain/repository/UnidadRepository'

/**
 * @description Use case for finding an Unidad entity by its unique identifier.
 */
export class UnidadFinder {
	private readonly unidadRepository: UnidadRepository

	constructor({ unidadRepository }: { unidadRepository: UnidadRepository }) {
		this.unidadRepository = unidadRepository
	}

	/**
	 * @description Executes the Unidad finding process.
	 * @param {{ id: Primitives<UnidadId> }} params The parameters for finding the Unidad.
	 * @returns {Promise<UnidadDto>} A promise that resolves to the found Unidad DTO.
	 * @throws {UnidadDoesNotExistError} If no Unidad with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<UnidadId> }): Promise<UnidadDto> {
		const unidadId = new UnidadId(id).value
		const unidad = await this.unidadRepository.findById(unidadId)

		if (!unidad) {
			throw new UnidadDoesNotExistError(unidadId)
		}

		return unidad
	}
}
