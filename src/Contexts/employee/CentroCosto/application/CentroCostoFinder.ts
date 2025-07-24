import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type CentroCostoDto } from '../domain/CentroCosto.dto'
import { CodCentroCosto } from '../domain/CodCentroCosto'
import { CentroCostoDoesNotExistError } from '../domain/CentroCostoDoesNotExistError'

export class CentroCostoFinder {
	private readonly centroCostoRepository: CentroCostoRepository
	constructor({ centroCostoRepository }: { centroCostoRepository: CentroCostoRepository }) {
		this.centroCostoRepository = centroCostoRepository
	}

	async run(params: { id: Primitives<CodCentroCosto> }): Promise<CentroCostoDto> {
		const { id } = params
		const codCentroCosto = new CodCentroCosto(id)
		const centroCosto = await this.centroCostoRepository.searchById(codCentroCosto.value)

		if (!centroCosto) {
			throw new CentroCostoDoesNotExistError()
		}

		return centroCosto
	}
}
