import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type CentroCostoDto } from '../domain/CentroCosto.dto'
import { CodCentroCosto } from '../domain/CodCentroCosto'
import { CentroCostoDoesNotExistError } from '../domain/CentroCostoDoesNotExistError'

/**
 * @description Use case for finding a CentroCosto entity by its unique identifier.
 */
export class CentroCostoFinder {
	private readonly centroCostoRepository: CentroCostoRepository

	constructor({ centroCostoRepository }: { centroCostoRepository: CentroCostoRepository }) {
		this.centroCostoRepository = centroCostoRepository
	}

	/**
	 * @description Executes the CentroCosto finding process.
	 * @param {{ id: Primitives<CodCentroCosto> }} params The parameters for finding the CentroCosto.
	 * @returns {Promise<CentroCostoDto>} A promise that resolves to the found CentroCosto DTO.
	 * @throws {CentroCostoDoesNotExistError} If no CentroCosto with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<CodCentroCosto> }): Promise<CentroCostoDto> {
		const codCentroCosto = new CodCentroCosto(id)
		const centroCosto = await this.centroCostoRepository.findById(codCentroCosto.value)

		if (!centroCosto) {
			throw new CentroCostoDoesNotExistError()
		}

		return centroCosto
	}
}
