import { CentroTrabajo } from '../domain/CentroTrabajo'
import { CentroTrabajoAlreadyExistError } from '../domain/CentroTrabajoAlreadyExistError'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoId } from '../domain/CentroTrabajoId'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type CentroTrabajoParams } from '../domain/CentroTrabajo.dto'

/**
 * @description Use case for creating a new CentroTrabajo entity.
 */
export class CentroTrabajoCreator {
	private readonly centroTrabajoRepository: CentroTrabajoRepository
	private readonly centroCostoRepository: CentroCostoRepository

	constructor(dependencies: {
		centroTrabajoRepository: CentroTrabajoRepository
		centroCostoRepository: CentroCostoRepository
	}) {
		this.centroCostoRepository = dependencies.centroCostoRepository
		this.centroTrabajoRepository = dependencies.centroTrabajoRepository
	}

	/**
	 * @description Executes the CentroTrabajo creation process.
	 * @param {{ params: CentroTrabajoParams }} data The parameters for creating the CentroTrabajo.
	 * @returns {Promise<void>} A promise that resolves when the CentroTrabajo is successfully created.
	 * @throws {CentroTrabajoAlreadyExistError} If a CentroTrabajo with the same ID already exists.
	 * @throws {CentroCostoDoesNotExistError} If the associated CentroCosto does not exist.
	 */
	async run({ params: { id, name, centroCostoId } }: { params: CentroTrabajoParams }): Promise<void> {
		await this.ensureCentroTrabajoDoesNotExist(id)
		await this.ensureCentroCostoExists(centroCostoId)

		const centroTrabajo = CentroTrabajo.create({ id, name, centroCostoId })

		await this.centroTrabajoRepository.save(centroTrabajo.toPrimitive())
	}

	private async ensureCentroTrabajoDoesNotExist(id: Primitives<CentroTrabajoId>): Promise<void> {
		if (await this.centroTrabajoRepository.searchById(id)) {
			throw new CentroTrabajoAlreadyExistError()
		}
	}

	private async ensureCentroCostoExists(centroCostoId: Primitives<CodCentroCosto>): Promise<void> {
		if (!(await this.centroCostoRepository.searchById(centroCostoId))) {
			throw new CentroCostoDoesNotExistError()
		}
	}
}
