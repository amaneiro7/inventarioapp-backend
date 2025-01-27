import { CentroCosto } from '../domain/CentroCosto'
import { CentroCostoAlreadyExistError } from '../domain/CentroCostoAlreadyExistError'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../domain/CodCentroCosto'
import { type CentroCostoParams } from '../domain/CentroCosto.dto'

export class CentroCostoCreator {
	constructor(
		private readonly centroCostoRepository: CentroCostoRepository
	) {}

	async run({ id, name }: CentroCostoParams): Promise<void> {
		await this.ensureCentroCostoDoesNotExist({ id })

		const centroCosto = CentroCosto.create({ id, name })

		await this.centroCostoRepository.save(centroCosto.toPrimitive())
	}

	private async ensureCentroCostoDoesNotExist({
		id
	}: {
		id: Primitives<CodCentroCosto>
	}): Promise<void> {
		if ((await this.centroCostoRepository.searchById(id)) !== null) {
			throw new CentroCostoAlreadyExistError()
		}
	}
}
