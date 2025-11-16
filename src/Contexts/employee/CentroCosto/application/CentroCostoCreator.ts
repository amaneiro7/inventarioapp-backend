import { CentroCosto } from '../domain/CentroCosto'
import { CentroCostoAlreadyExistError } from '../domain/CentroCostoAlreadyExistError'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../domain/CodCentroCosto'
import { type CentroCostoParams } from '../domain/CentroCosto.dto'

/**
 * @description Use case for creating a new CentroCosto entity.
 */
export class CentroCostoCreator {
	private readonly centroCostoRepository: CentroCostoRepository

	constructor({ centroCostoRepository }: { centroCostoRepository: CentroCostoRepository }) {
		this.centroCostoRepository = centroCostoRepository
	}

	/**
	 * @description Executes the CentroCosto creation process.
	 * @param {{ params: CentroCostoParams }} data The parameters for creating the CentroCosto.
	 * @returns {Promise<void>} A promise that resolves when the CentroCosto is successfully created.
	 * @throws {CentroCostoAlreadyExistError} If a CentroCosto with the same ID already exists.
	 */
	async run({ params: { id, name } }: { params: CentroCostoParams }): Promise<void> {
		await this.ensureCentroCostoDoesNotExist(id)

		const centroCosto = CentroCosto.create({ id, name })

		await this.centroCostoRepository.save(centroCosto.toPrimitive())
	}

	private async ensureCentroCostoDoesNotExist(id: Primitives<CodCentroCosto>): Promise<void> {
		if (await this.centroCostoRepository.findById(id)) {
			throw new CentroCostoAlreadyExistError()
		}
	}
}
