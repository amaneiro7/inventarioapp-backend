import { CentroCosto } from '../domain/CentroCosto'
import { CentroCostoDoesNotExistError } from '../domain/CentroCostoDoesNotExistError'
import { CodCentroCosto } from '../domain/CodCentroCosto'
import { type CentroCostoName } from '../domain/CentroCostoName'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoParams } from '../domain/CentroCosto.dto'

export class CentroCostoUpdater {
	constructor(private readonly centroCostoRepository: CentroCostoRepository) {}

	async run({
		id,
		params: { name }
	}: {
		id: Primitives<CodCentroCosto>
		params: Partial<CentroCostoParams>
	}): Promise<void> {
		const codCentroCosto = new CodCentroCosto(id)

		const centroCosto = await this.centroCostoRepository.searchById(codCentroCosto.value)
		if (!centroCosto) {
			throw new CentroCostoDoesNotExistError()
		}

		const centroCostoEntity = CentroCosto.fromPrimitives(centroCosto)
		await this.updateCentroCostoUseCase({ name, entity: centroCostoEntity })

		await this.centroCostoRepository.save(centroCostoEntity.toPrimitive())
	}

	private async updateCentroCostoUseCase({
		entity,
		name
	}: {
		name?: Primitives<CentroCostoName>
		entity: CentroCosto
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		entity.updateName(name)
	}
}
