import { Departamento } from '../domain/entity/Departamento'
import { DepartamentoId } from '../domain/valueObject/DepartamentoId'
import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { VicepresidenciaExistenceChecker } from '../../Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { DepartamentoNameUniquenessChecker } from '../domain/service/DepartamentoNameuniquenessChecker'
import { DepartamentoDoesNotExistError } from '../domain/errors/DepartamentoDoesNotExistError'
import { type DepartamentoRepository } from '../domain/repository/DepartamentoRepository'
import { type DepartamentoParams } from '../domain/entity/Departamento.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type VicepresidenciaRepository } from '../../Vicepresidencia/domain/repository/VicepresidenciaRepository'

/**
 * @description Use case for updating an existing Departamento entity.
 */
export class DepartamentoUpdater {
	private readonly departamentoRepository: DepartamentoRepository
	private readonly departamentoNameUniquenessChecker: DepartamentoNameUniquenessChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		departamentoRepository,
		vicepresidenciaRepository,
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
	 * @description Executes the Departamento update process.
	 * @param {{ id: string; params: Partial<DepartamentoParams> }} data The parameters for updating the Departamento.
	 * @returns {Promise<void>} A promise that resolves when the Departamento is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the Departamento with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<DepartamentoParams> }): Promise<void> {
		const vpeId = new DepartamentoId(id)

		const vpe = await this.departamentoRepository.findById(vpeId.value)
		if (!vpe) {
			throw new DepartamentoDoesNotExistError(vpeId.value)
		}

		const departamentoEntity = Departamento.fromPrimitives(vpe)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && departamentoEntity.nameValue !== params.name.trim()) {
			await this.departamentoNameUniquenessChecker.ensureUnique(params.name)
			changes.push({
				field: 'name',
				oldValue: departamentoEntity.nameValue,
				newValue: params.name
			})
			departamentoEntity.updateName(params.name)
		}

		if (params.vicepresidenciaId && departamentoEntity.vicepresidenciaValue !== params.vicepresidenciaId) {
			await this.vicepresidenciaExistenceChecker.ensureExist(params.vicepresidenciaId)
			changes.push({
				field: 'vicepresidenciaId',
				oldValue: departamentoEntity.vicepresidenciaValue,
				newValue: params.vicepresidenciaId
			})
			departamentoEntity.updateVicepresidencia(params.vicepresidenciaId)
		}

		if (params.cargos) {
			await this.cargoExistenceChecker.ensureExist(params.cargos)
			changes.push({
				field: 'cargos',
				oldValue: departamentoEntity.cargosValue,
				newValue: params.cargos
			})
			const uniqueCargos = Array.from(new Set(params.cargos))
			const newIdSet = new Set(uniqueCargos)
			const currentIdSet = new Set(departamentoEntity.cargosValue)

			// Añadir categorías nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					departamentoEntity.addCargo(new CargoId(id))
				}
			}

			// Eliminar categorías que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					departamentoEntity.removeCargo(new CargoId(id))
				}
			}
		}

		if (changes.length > 0) {
			departamentoEntity.registerUpdateEvent(changes)
			await this.departamentoRepository.save(departamentoEntity.toPrimitives())
			await this.eventBus.publish(departamentoEntity.pullDomainEvents())
		}
	}
}
