import {
	CentroTrabajo,
	type CentroTrabajoPrimitives
} from '../domain/CentroTrabajo'
import { CentroTrabajoAlreadyExistError } from '../domain/CentroTrabajoAlreadyExistError'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoId } from '../domain/CentroTrabajoId'
import { CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { CentroCostoAlreadyExistError } from '../../CentroCosto/domain/CentroCostoAlreadyExistError'

export class CentroTrabajoCreator {
	constructor(
		private readonly centroTrabajoRepository: CentroTrabajoRepository,
		private readonly centroCostoRepository: CentroCostoRepository
	) {}

	async run({
		params: { id, name, centroCostoId }
	}: {
		params: CentroTrabajoPrimitives
	}): Promise<void> {
		await this.ensureCentroTrabajoDoesNotExist({ id })
		await this.ensureCentroCostoDoesNotExist({ centroCostoId })

		const centroTrabajo = CentroTrabajo.create({ id, name, centroCostoId })

		await this.centroTrabajoRepository.save(centroTrabajo.toPrimitive())
	}

	private async ensureCentroTrabajoDoesNotExist({
		id
	}: {
		id: Primitives<CentroTrabajoId>
	}): Promise<void> {
		if ((await this.centroTrabajoRepository.searchById(id)) !== null) {
			throw new CentroTrabajoAlreadyExistError()
		}
	}
	private async ensureCentroCostoDoesNotExist({
		centroCostoId
	}: {
		centroCostoId: Primitives<CodCentroCosto>
	}): Promise<void> {
		if (
			(await this.centroCostoRepository.searchById(centroCostoId)) !==
			null
		) {
			throw new CentroCostoAlreadyExistError()
		}
	}
}
