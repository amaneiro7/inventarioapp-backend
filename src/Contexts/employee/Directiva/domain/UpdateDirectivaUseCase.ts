import { Directiva } from './Directiva'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { CargoDoesNotExistError } from '../../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'

export class UpdateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, cargos, centroCostoId },
		entity
	}: {
		entity: Directiva
		params: Partial<DirectivaParams>
	}): Promise<void> {
		await Promise.all([
			this.ensureDirectivaDoesNotExist({ name, entity }),
			this.ensureCentroCostoExists({ centroCostoId, entity }),
			this.ensureCargoExists({ cargos, entity })
		])
	}

	private async ensureDirectivaDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Directiva
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		if ((await this.directivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
		entity.updateName(name)
	}

	private async ensureCentroCostoExists({
		entity,
		centroCostoId
	}: {
		centroCostoId?: Primitives<CodCentroCosto>
		entity: Directiva
	}): Promise<void> {
		if (!centroCostoId || entity.centroCostoValue === centroCostoId) return

		if ((await this.centroCostoRepository.searchById(centroCostoId)) === null) {
			throw new CentroCostoDoesNotExistError()
		}
		entity.updateCodCentroCosto(centroCostoId)
	}

	private async ensureCargoExists({
		entity,
		cargos
	}: {
		cargos?: Primitives<CargoId>[]
		entity: Directiva
	}): Promise<void> {
		if (!cargos) return

		// Asegurarse que no existan valores duplicados
		const uniqueCargos = Array.from(new Set(cargos))
		// Se crea una nueva lista con los cargos nuevos, que no estan en la lista actual
		const newCargos = this.getNewCargos(entity.CargosValue, uniqueCargos)

		// Si la lista es 0, no hay cargos nuevos
		if (newCargos.length === 0) return

		// Se verifica que cada cargo exista
		await Promise.all(
			newCargos.map(async cargoId => {
				if ((await this.cargoRepository.searchById(cargoId)) === null) {
					throw new CargoDoesNotExistError()
				}
			})
		)
		entity.updateCargos(cargos)
	}

	// Funcion para filtrar solo los cargos nuevos que no estan en la lista actual
	private getNewCargos(currentList: string[], newList: string[]): string[] {
		return newList.filter(cargoId => !currentList.includes(cargoId))
	}
}
