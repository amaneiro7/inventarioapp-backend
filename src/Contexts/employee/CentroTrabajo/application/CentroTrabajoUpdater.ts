import { CentroTrabajo } from '../domain/CentroTrabajo'
import { CentroTrabajoDoesNotExistError } from '../domain/CentroTrabajoDoesNotExistError'
import { CentroTrabajoId } from '../domain/CentroTrabajoId'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type CentroTrabajoName } from '../domain/CentroTrabajoName'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CentroTrabajoParams } from '../domain/CentroTrabajo.dto'

/**
 * @description Use case for updating an existing CentroTrabajo entity.
 */
export class CentroTrabajoUpdater {
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
	 * @description Executes the CentroTrabajo update process.
	 * @param {{ id: Primitives<CentroTrabajoId>; params: Partial<CentroTrabajoParams> }} data The parameters for updating the CentroTrabajo.
	 * @returns {Promise<void>} A promise that resolves when the CentroTrabajo is successfully updated.
	 * @throws {CentroTrabajoDoesNotExistError} If the CentroTrabajo with the provided ID does not exist.
	 * @throws {CentroCostoDoesNotExistError} If the associated CentroCosto does not exist.
	 */
	async run({
		id,
		params: { name, centroCostoId }
	}: {
		id: Primitives<CentroTrabajoId>
		params: Partial<CentroTrabajoParams>
	}): Promise<void> {
		const centroTrabajoId = new CentroTrabajoId(id)

		const centroTrabajo = await this.centroTrabajoRepository.findById(centroTrabajoId.value)
		if (!centroTrabajo) {
			throw new CentroTrabajoDoesNotExistError()
		}

		const centroTrabajoEntity = CentroTrabajo.fromPrimitives(centroTrabajo)
		this.updateCentroTrabajoName(name, centroTrabajoEntity)
		await this.updateCentroCosto(centroCostoId, centroTrabajoEntity)

		await this.centroTrabajoRepository.save(centroTrabajoEntity.toPrimitive())
	}

	private updateCentroTrabajoName(name: Primitives<CentroTrabajoName> | undefined, entity: CentroTrabajo): void {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		entity.updateName(name)
	}

	private async updateCentroCosto(
		centroCostoId: Primitives<CodCentroCosto> | undefined,
		entity: CentroTrabajo
	): Promise<void> {
		if (centroCostoId === undefined || entity.centroCostoValue === centroCostoId) {
			return
		}
		if (!(await this.centroCostoRepository.findById(centroCostoId))) {
			throw new CentroCostoDoesNotExistError()
		}
		entity.updateCentroCosto(centroCostoId)
	}
}
