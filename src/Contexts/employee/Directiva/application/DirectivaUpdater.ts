import { Directiva } from '../domain/entity/Directiva'
import { DirectivaId } from '../domain/valueObject/DirectivaId'
import { CargoId } from '../../Cargo/domain/valueObject/CargoId'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { DirectivaNameUniquenessChecker } from '../domain/service/DirectivaNameuniquenessChecker'
import { DirectivaDoesNotExistError } from '../domain/errors/DirectivaDoesNotExistError'
import { type DirectivaParams } from '../domain/entity/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DirectivaRepository } from '../domain/repository/DirectivaRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for updating an existing Directiva entity.
 */
export class DirectivaUpdater {
	private readonly directivaRepository: DirectivaRepository
	private readonly directivaNameUniquenessChecker: DirectivaNameUniquenessChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		directivaRepository,
		eventBus
	}: {
		directivaRepository: DirectivaRepository
		cargoRepository: CargoRepository
		eventBus: EventBus
	}) {
		this.directivaRepository = directivaRepository
		this.directivaNameUniquenessChecker = new DirectivaNameUniquenessChecker(directivaRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Directiva update process.
	 * @param {{ id: string; params: Partial<DirectivaParams> }} data The parameters for updating the Directiva.
	 * @returns {Promise<void>} A promise that resolves when the Directiva is successfully updated.
	 * @throws {DirectivaDoesNotExistError} If the Directiva with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<DirectivaParams> }): Promise<void> {
		const directivaId = new DirectivaId(id)

		const directiva = await this.directivaRepository.findById(directivaId.value)
		if (!directiva) {
			throw new DirectivaDoesNotExistError(directivaId.value)
		}

		const directivaEntity = Directiva.fromPrimitives(directiva)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && directivaEntity.nameValue !== params.name.trim()) {
			await this.directivaNameUniquenessChecker.ensureUnique(params.name, directivaEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: directivaEntity.nameValue,
				newValue: params.name
			})
			directivaEntity.updateName(params.name)
		}

		if (params.cargos) {
			await this.cargoExistenceChecker.ensureExist(params.cargos)
			changes.push({
				field: 'cargos',
				oldValue: directivaEntity.cargosValue,
				newValue: params.cargos
			})
			const uniqueCargos = Array.from(new Set(params.cargos))
			const newIdSet = new Set(uniqueCargos)
			const currentIdSet = new Set(directivaEntity.cargosValue)

			// Añadir cargos nuevos
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					directivaEntity.addCargo(new CargoId(id))
				}
			}

			// Eliminar cargos que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					directivaEntity.removeCargo(new CargoId(id))
				}
			}
		}

		if (changes.length > 0) {
			directivaEntity.registerUpdateEvent(changes)
			await this.directivaRepository.save(directivaEntity.toPrimitives())
			await this.eventBus.publish(directivaEntity.pullDomainEvents())
		}
	}
}
