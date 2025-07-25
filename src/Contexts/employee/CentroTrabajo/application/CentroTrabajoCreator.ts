import { CentroTrabajo } from '../domain/CentroTrabajo'
import { CentroTrabajoAlreadyExistError } from '../domain/CentroTrabajoAlreadyExistError'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoId } from '../domain/CentroTrabajoId'
import { CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { CentroCostoAlreadyExistError } from '../../CentroCosto/domain/CentroCostoAlreadyExistError'
import { CentroTrabajoParams } from '../domain/CentroTrabajo.dto'

export class CentroTrabajoCreator {
	private readonly centroTrabajoRepository: CentroTrabajoRepository
	private readonly centroCostoRepository: CentroCostoRepository
	constructor({
		centroCostoRepository,
		centroTrabajoRepository
	}: {
		centroTrabajoRepository: CentroTrabajoRepository
		centroCostoRepository: CentroCostoRepository
	}) {
		this.centroCostoRepository = centroCostoRepository
		this.centroTrabajoRepository = centroTrabajoRepository
	}

	async run({ params: { id, name, centroCostoId } }: { params: CentroTrabajoParams }): Promise<void> {
		await this.ensureCentroTrabajoDoesNotExist({ id })
		await this.ensureCentroCostoDoesNotExist({ centroCostoId })

		const centroTrabajo = CentroTrabajo.create({ id, name, centroCostoId })

		await this.centroTrabajoRepository.save(centroTrabajo.toPrimitive())
	}

	private async ensureCentroTrabajoDoesNotExist({ id }: { id: Primitives<CentroTrabajoId> }): Promise<void> {
		if ((await this.centroTrabajoRepository.searchById(id)) !== null) {
			throw new CentroTrabajoAlreadyExistError()
		}
	}
	private async ensureCentroCostoDoesNotExist({
		centroCostoId
	}: {
		centroCostoId: Primitives<CodCentroCosto>
	}): Promise<void> {
		if ((await this.centroCostoRepository.searchById(centroCostoId)) !== null) {
			throw new CentroCostoAlreadyExistError()
		}
	}
}
