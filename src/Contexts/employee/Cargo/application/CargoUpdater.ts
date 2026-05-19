import { Cargo } from '../domain/entity/Cargo'
import { CargoNameUniquenessChecker } from '../domain/service/CargoNameuniquenessChecker'
import { CargoId } from '../domain/valueObject/CargoId'
import { CargoDoesNotExistError } from '../domain/errors/CargoDoesNotExistError'
import { UnidadExistenceChecker } from '../../Unidad/domain/service/UnidadExistanceChecker'
import type { EventBus } from '../../../Shared/domain/event/EventBus'
import type { CargoRepository } from '../domain/repository/CargoRepository'
import type { CargoParams } from '../domain/entity/Cargo.dto'
import { UnidadRepository } from '../../Unidad/domain/repository/UnidadRepository'
import { UnidadId } from '../../Unidad/domain/valueObject/UnidadId'

/**
 * @description Use case for updating an existing Cargo entity.
 */
export class CargoUpdater {
	private readonly cargoRepository: CargoRepository
	private readonly cargoNameUniquenessChecker: CargoNameUniquenessChecker
	private readonly unidadExistenceChecker: UnidadExistenceChecker
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		unidadRepository,
		eventBus
	}: {
		cargoRepository: CargoRepository
		unidadRepository: UnidadRepository
		eventBus: EventBus
	}) {
		this.cargoRepository = cargoRepository
		this.unidadExistenceChecker = new UnidadExistenceChecker(unidadRepository)
		this.cargoNameUniquenessChecker = new CargoNameUniquenessChecker(cargoRepository)
		this.eventBus = eventBus
	}
	/**
	 * @description Executes the cargo update process.
	 * @param {{ id: string; params: Partial<CargoParams> }} data The parameters for updating the cargo.
	 * @returns {Promise<void>} A promise that resolves when the cargo is successfully updated.
	 * @throws {CargoDoesNotExistError} If the cargo with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<CargoParams> }): Promise<void> {
		const cargoId = new CargoId(id)

		const cargo = await this.cargoRepository.findById(cargoId.value)
		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		const cargoEntity = Cargo.fromPrimitives(cargo)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []

		if (params.name && cargoEntity.nameValue !== params.name.trim()) {
			await this.cargoNameUniquenessChecker.ensureUnique(params.name, cargoEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: cargoEntity.nameValue,
				newValue: params.name
			})
			cargoEntity.updateName(params.name)
		}
		// Unidades
		if (params.unidades) {
			await this.unidadExistenceChecker.ensureExist(params.unidades)
			changes.push({
				field: 'unidades',
				oldValue: cargoEntity.unidadesValue,
				newValue: params.unidades
			})
			const uniqueUnidades = Array.from(new Set(params.unidades))
			const newIdSet = new Set(uniqueUnidades)
			const currentIdSet = new Set(cargoEntity.unidadesValue)

			// Añadir unidades nuevas
			for (const id of newIdSet) {
				if (!currentIdSet.has(id)) {
					cargoEntity.addUnidad(new UnidadId(id))
				}
			}

			// Eliminar unidades que ya no están
			for (const id of currentIdSet) {
				if (!newIdSet.has(id)) {
					cargoEntity.removeUnidad(new UnidadId(id))
				}
			}
		}

		// Solo guardar en la base de datos si realmente hubo un cambio
		if (changes.length > 0) {
			cargoEntity.registerUpdateEvent(changes)
			await this.cargoRepository.save(cargoEntity.toPrimitives())
			await this.eventBus.publish(cargoEntity.pullDomainEvents())
		}
	}
}
