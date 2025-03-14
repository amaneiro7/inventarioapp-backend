import { Departamento } from './Departamento'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentPrimitives } from '../../IDepartment/IDeparment'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CargoDoesNotExistError } from '../../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type DepartamentoDto, type DepartamentoParams } from './Departamento.dto'

export class UpdateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<DepartmentPrimitives>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, vicepresidenciaEjecutivaId, centroCostoId, cargos },
		entity
	}: {
		entity: Departamento
		params: Partial<DepartamentoParams>
	}): Promise<void> {
		await Promise.all([
			this.ensureVicepresidenciaEjecutivaExists({ vicepresidenciaEjecutivaId, entity }),
			this.ensureCentroCostoExists({ centroCostoId, entity }),
			this.ensureDepartamentoDoesNotExist({ name, entity }),
			this.ensureCargoExists({ cargos, entity })
		])
	}

	private async ensureDepartamentoDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Departamento
	}): Promise<void> {
		if (!name || entity.nameValue === name) return

		if ((await this.departamentoRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La gerencia, coordinación o departamento')
		}
		entity.updateName(name)
	}

	private async ensureVicepresidenciaEjecutivaExists({
		entity,
		vicepresidenciaEjecutivaId
	}: {
		vicepresidenciaEjecutivaId?: Primitives<DepartmentId>
		entity: Departamento
	}): Promise<void> {
		if (!vicepresidenciaEjecutivaId || entity.vicepresidenciaEjecutivaValue === vicepresidenciaEjecutivaId) return

		if ((await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
	}
	private async ensureCentroCostoExists({
		entity,
		centroCostoId
	}: {
		centroCostoId?: Primitives<CodCentroCosto>
		entity: Departamento
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
		entity: Departamento
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
