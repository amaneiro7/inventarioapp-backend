import { Vicepresidencia } from '../domain/entity/Vicepresidencia'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { VicepresidenciaNameUniquenessChecker } from '../domain/service/VicepresidenciaNameuniquenessChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type VicepresidenciaParams } from '../domain/entity/Vicepresidencia.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type VicepresidenciaRepository } from '../domain/repository/VicepresidenciaRepository'
import { type VicepresidenciaEjecutivaRepository } from '../../VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'

export class VicepresidenciaCreator {
	private readonly vicepresidenciaRepository: VicepresidenciaRepository
	private readonly vicepresidenciaNameUniquenessChecker: VicepresidenciaNameUniquenessChecker
	private readonly vicepresidenciaEjectivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		vicepresidenciaEjectivaRepository,
		vicepresidenciaRepository,
		eventBus
	}: {
		vicepresidenciaRepository: VicepresidenciaRepository
		vicepresidenciaEjectivaRepository: VicepresidenciaEjecutivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.vicepresidenciaRepository = vicepresidenciaRepository
		this.vicepresidenciaNameUniquenessChecker = new VicepresidenciaNameUniquenessChecker(vicepresidenciaRepository)
		this.vicepresidenciaEjectivaExistenceChecker = new VicepresidenciaEjecutivaExistenceChecker(
			vicepresidenciaEjectivaRepository
		)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Vicepresidencia creation process.
	 * @param {{ params: VicepresidenciaParams }} data The parameters for creating the Vicepresidencia.
	 * @returns {Promise<void>} A promise that resolves when the Vicepresidencia is successfully created.
	 */
	async run({ params }: { params: VicepresidenciaParams }): Promise<void> {
		const { name, vicepresidenciaEjecutivaId, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await Promise.all([
			this.vicepresidenciaNameUniquenessChecker.ensureUnique(name),
			this.vicepresidenciaEjectivaExistenceChecker.ensureExist(vicepresidenciaEjecutivaId),
			this.cargoExistenceChecker.ensureExist(uniqueCargos)
		])

		const vicepresidencia = Vicepresidencia.create({
			name,
			vicepresidenciaEjecutivaId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaRepository.save(vicepresidencia.toPrimitives())
		await this.eventBus.publish(vicepresidencia.pullDomainEvents())
	}
}
