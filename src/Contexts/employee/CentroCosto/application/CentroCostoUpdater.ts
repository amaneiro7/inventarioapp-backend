import { CentroCosto } from '../domain/CentroCosto'
import { CentroCostoDoesNotExistError } from '../domain/CentroCostoDoesNotExistError'
import { CodCentroCosto } from '../domain/CodCentroCosto'
import { type CentroCostoName } from '../domain/CentroCostoName'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoParams } from '../domain/CentroCosto.dto'

/**
 * @description Use case for updating an existing CentroCosto entity.
 */
export class CentroCostoUpdater {
	private readonly centroCostoRepository: CentroCostoRepository

	constructor({ centroCostoRepository }: { centroCostoRepository: CentroCostoRepository }) {
		this.centroCostoRepository = centroCostoRepository
	}

	/**
	 * @description Executes the CentroCosto update process.
	 * @param {{ id: Primitives<CodCentroCosto>; params: Partial<CentroCostoParams> }} data The parameters for updating the CentroCosto.
	 * @returns {Promise<void>} A promise that resolves when the CentroCosto is successfully updated.
	 * @throws {CentroCostoDoesNotExistError} If the CentroCosto with the provided ID does not exist.
	 */
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
		this.updateCentroCostoName(name, centroCostoEntity)

		await this.centroCostoRepository.save(centroCostoEntity.toPrimitive())
	}

	private updateCentroCostoName(name: Primitives<CentroCostoName> | undefined, entity: CentroCosto): void {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		entity.updateName(name)
	}
}
