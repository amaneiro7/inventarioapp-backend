import { Vicepresidencia } from '../domain/entity/Vicepresidencia'
import { VicepresidenciaId } from '../domain/valueObject/VicepresidenciaId'
import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { VicepresidenciaNameUniquenessChecker } from '../domain/service/VicepresidenciaNameuniquenessChecker'
import { VicepresidenciaDoesNotExistError } from '../domain/errors/VicepresidenciaDoesNotExistError'
import { type VicepresidenciaRepository } from '../domain/repository/VicepresidenciaRepository'
import { type VicepresidenciaParams } from '../domain/entity/Vicepresidencia.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type VicepresidenciaEjecutivaRepository } from '../../VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'

/**
 * @description Use case for updating an existing Vicepresidencia entity.
 */
export class VicepresidenciaUpdater {
	private readonly vicepresidenciaRepository: VicepresidenciaRepository
	private readonly vicepresidenciaNameUniquenessChecker: VicepresidenciaNameUniquenessChecker
	private readonly vicepresidenciaEjecutivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		vicepresidenciaEjecutivaRepository,
		vicepresidenciaRepository,
		eventBus
	}: {
		vicepresidenciaRepository: VicepresidenciaRepository
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.vicepresidenciaRepository = vicepresidenciaRepository
		this.vicepresidenciaNameUniquenessChecker = new VicepresidenciaNameUniquenessChecker(vicepresidenciaRepository)
		this.vicepresidenciaEjecutivaExistenceChecker = new VicepresidenciaEjecutivaExistenceChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Vicepresidencia update process.
	 * @param {{ id: string; params: Partial<VicepresidenciaParams> }} data The parameters for updating the Vicepresidencia.
	 * @returns {Promise<void>} A promise that resolves when the Vicepresidencia is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the Vicepresidencia with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<VicepresidenciaParams> }): Promise<void> {
		const vpeId = new VicepresidenciaId(id)

		const vpe = await this.vicepresidenciaRepository.findById(vpeId.value)
		if (!vpe) {
			throw new VicepresidenciaDoesNotExistError(vpeId.value)
		}

		const vicepresidenciaEntity = Vicepresidencia.fromPrimitives(vpe)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && vicepresidenciaEntity.nameValue !== params.name.trim()) {
			await this.vicepresidenciaNameUniquenessChecker.ensureUnique(params.name)
			changes.push({
				field: 'name',
				oldValue: vicepresidenciaEntity.nameValue,
				newValue: params.name
			})
			vicepresidenciaEntity.updateName(params.name)
		}

		if (
			params.vicepresidenciaEjecutivaId &&
			vicepresidenciaEntity.vicepresidenciaEjecutivaValue !== params.vicepresidenciaEjecutivaId
		) {
			await this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(params.vicepresidenciaEjecutivaId)
			changes.push({
				field: 'vicepresidenciaEjecutivaId',
				oldValue: vicepresidenciaEntity.vicepresidenciaEjecutivaValue,
				newValue: params.vicepresidenciaEjecutivaId
			})
			vicepresidenciaEntity.updateVicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId)
		}

		if (params.cargos) {
			await this.cargoExistenceChecker.ensureExist(params.cargos)
			changes.push({
				field: 'cargos',
				oldValue: vicepresidenciaEntity.cargosValue,
				newValue: params.cargos
			})
			const uniqueCargos = Array.from(new Set(params.cargos))
			const newIdSet = new Set(uniqueCargos)
			const currentIdSet = new Set(vicepresidenciaEntity.cargosValue)

			// Añadir categorías nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					vicepresidenciaEntity.addCargo(new CargoId(id))
				}
			}

			// Eliminar categorías que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					vicepresidenciaEntity.removeCargo(new CargoId(id))
				}
			}
		}

		if (changes.length > 0) {
			vicepresidenciaEntity.registerUpdateEvent(changes)
			await this.vicepresidenciaRepository.save(vicepresidenciaEntity.toPrimitives())
			await this.eventBus.publish(vicepresidenciaEntity.pullDomainEvents())
		}
	}
}
