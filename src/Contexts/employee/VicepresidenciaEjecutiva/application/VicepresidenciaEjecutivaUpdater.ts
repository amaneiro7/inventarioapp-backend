import { VicepresidenciaEjecutiva } from '../domain/entity/VicepresidenciaEjecutiva'
import { VicepresidenciaEjecutivaId } from '../domain/valueObject/VicepresidenciaEjecutivaId'
import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { DirectivaExistenceChecker } from '../../Directiva/domain/service/DirectivaExistanceChecker'
import { VicepresidenciaEjecutivaNameUniquenessChecker } from '../domain/service/VicepresidenciaEjecutivaNameuniquenessChecker'
import { VicepresidenciaEjecutivaDoesNotExistError } from '../domain/errors/VicepresidenciaEjecutivaDoesNotExistError'
import { type VicepresidenciaEjecutivaRepository } from '../domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaEjecutivaParams } from '../domain/entity/VicepresidenciaEjecutiva.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type DirectivaRepository } from '../../Directiva/domain/repository/DirectivaRepository'

/**
 * @description Use case for updating an existing VicepresidenciaEjecutiva entity.
 */
export class VicepresidenciaEjecutivaUpdater {
	private readonly vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
	private readonly vicepresidenciaEjecutivaNameUniquenessChecker: VicepresidenciaEjecutivaNameUniquenessChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		directivaRepository,
		vicepresidenciaEjecutivaRepository,
		eventBus
	}: {
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		directivaRepository: DirectivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
		this.vicepresidenciaEjecutivaNameUniquenessChecker = new VicepresidenciaEjecutivaNameUniquenessChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.directivaExistenceChecker = new DirectivaExistenceChecker(directivaRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the VicepresidenciaEjecutiva update process.
	 * @param {{ id: string; params: Partial<VicepresidenciaEjecutivaParams> }} data The parameters for updating the VicepresidenciaEjecutiva.
	 * @returns {Promise<void>} A promise that resolves when the VicepresidenciaEjecutiva is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the VicepresidenciaEjecutiva with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<VicepresidenciaEjecutivaParams> }): Promise<void> {
		const vpeId = new VicepresidenciaEjecutivaId(id)

		const vpe = await this.vicepresidenciaEjecutivaRepository.findById(vpeId.value)
		if (!vpe) {
			throw new VicepresidenciaEjecutivaDoesNotExistError(vpeId.value)
		}

		const vpeEntity = VicepresidenciaEjecutiva.fromPrimitives(vpe)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && vpeEntity.nameValue !== params.name.trim()) {
			await this.vicepresidenciaEjecutivaNameUniquenessChecker.ensureUnique(params.name)
			changes.push({
				field: 'name',
				oldValue: vpeEntity.nameValue,
				newValue: params.name
			})
			vpeEntity.updateName(params.name)
		}

		if (params.directivaId && vpeEntity.directivaValue !== params.directivaId) {
			await this.directivaExistenceChecker.ensureExist(params.directivaId)
			changes.push({
				field: 'directivaId',
				oldValue: vpeEntity.directivaValue,
				newValue: params.directivaId
			})
			vpeEntity.updateDirectiva(params.directivaId)
		}

		if (params.cargos) {
			await this.cargoExistenceChecker.ensureExist(params.cargos)
			changes.push({
				field: 'cargos',
				oldValue: vpeEntity.cargosValue,
				newValue: params.cargos
			})
			const uniqueCargos = Array.from(new Set(params.cargos))
			const newIdSet = new Set(uniqueCargos)
			const currentIdSet = new Set(vpeEntity.cargosValue)

			// Añadir categorías nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					vpeEntity.addCargo(new CargoId(id))
				}
			}

			// Eliminar categorías que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					vpeEntity.removeCargo(new CargoId(id))
				}
			}
		}

		if (changes.length > 0) {
			vpeEntity.registerUpdateEvent(changes)
			await this.vicepresidenciaEjecutivaRepository.save(vpeEntity.toPrimitives())
			await this.eventBus.publish(vpeEntity.pullDomainEvents())
		}
	}
}
