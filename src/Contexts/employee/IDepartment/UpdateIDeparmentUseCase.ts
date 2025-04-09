import { IDepartment } from './IDeparment'
import { CargoDoesNotExistError } from '../Cargo/domain/CargoDoesNotExistError'
// import { CentroCostoDoesNotExistError } from '../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type CargoRepository } from '../Cargo/domain/CargoRepository'
import { type CargoId } from '../Cargo/domain/CargoId'
// import { type CentroCostoRepository } from '../CentroCosto/domain/CentroCostoRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
// import { type CodCentroCosto } from '../CentroCosto/domain/CodCentroCosto'

export class UpdateIDeparmentUseCase {
	constructor(private readonly cargoRepository: CargoRepository) {}

	public async execute({
		params: { cargos },
		entity
	}: {
		entity: IDepartment
		params: Partial<{
			cargos: Primitives<CargoId>[]
		}>
	}): Promise<void> {
		await Promise.all([this.ensureCargoExists({ cargos, entity })])
	}

	// private async ensureCentroCostoExists({
	// 	entity,
	// 	centroCostoId
	// }: {
	// 	centroCostoId?: Primitives<CodCentroCosto>
	// 	entity: IDepartment
	// }): Promise<void> {
	// 	if (!centroCostoId || entity.centroCostoValue === centroCostoId) return

	// 	if ((await this.centroCostoRepository.searchById(centroCostoId)) === null) {
	// 		throw new CentroCostoDoesNotExistError()
	// 	}
	// 	entity.updateCodCentroCosto(centroCostoId)
	// }

	private async ensureCargoExists({
		entity,
		cargos
	}: {
		cargos?: Primitives<CargoId>[]
		entity: IDepartment
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
