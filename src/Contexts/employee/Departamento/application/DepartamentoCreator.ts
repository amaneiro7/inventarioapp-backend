import { Departamento } from '../domain/entity/Departamento'
import { DepartamentoNameUniquenessChecker } from '../domain/service/DepartamentoNameuniquenessChecker'
import { VicepresidenciaExistenceChecker } from '../../Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { type DepartamentoParams } from '../domain/entity/Departamento.dto'
import { type DepartamentoRepository } from '../domain/repository/DepartamentoRepository'
import { type VicepresidenciaRepository } from '../../Vicepresidencia/domain/repository/VicepresidenciaRepository'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

export class DepartamentoCreator {
	private readonly departamentoRepository: DepartamentoRepository
	private readonly departamentoNameUniquenessChecker: DepartamentoNameUniquenessChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		vicepresidenciaRepository,
		departamentoRepository,
		eventBus
	}: {
		departamentoRepository: DepartamentoRepository
		vicepresidenciaRepository: VicepresidenciaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.departamentoRepository = departamentoRepository
		this.departamentoNameUniquenessChecker = new DepartamentoNameUniquenessChecker(departamentoRepository)
		this.vicepresidenciaExistenceChecker = new VicepresidenciaExistenceChecker(vicepresidenciaRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Departamento creation process.
	 * @param {{ params: DepartamentoParams }} data The parameters for creating the Departamento.
	 * @returns {Promise<void>} A promise that resolves when the Departamento is successfully created.
	 */
	async run({ params }: { params: DepartamentoParams }): Promise<void> {
		const { name, vicepresidenciaId, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await Promise.all([
			this.departamentoNameUniquenessChecker.ensureUnique(name),
			this.vicepresidenciaExistenceChecker.ensureExist(vicepresidenciaId),
			this.cargoExistenceChecker.ensureExist(uniqueCargos)
		])

		const vicepresidenciaEjecutiva = Departamento.create({
			name,
			vicepresidenciaId,
			cargos: uniqueCargos
		})

		await this.departamentoRepository.save(vicepresidenciaEjecutiva.toPrimitives())
		await this.eventBus.publish(vicepresidenciaEjecutiva.pullDomainEvents())
	}
}
