import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type Cargo } from '../Cargo/domain/Cargo.dto'
import { CargoId } from '../Cargo/domain/CargoId'
import { CodCentroCosto } from '../CentroCosto/domain/CodCentroCosto'
import { DepartmentId } from './DepartmentId'
import { DepartmentName } from './DepartmentName'

/**
 * Esta clase se usa como fabrica para crear otras clases
 * que heredan de ella *
 */

export interface DepartmentPrimitives {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	centroCostoId: Primitives<CodCentroCosto>
	cargos: Primitives<CargoId>[]
}

export class IDepartment {
	constructor(
		private readonly id: DepartmentId,
		private name: DepartmentName,
		private centroCostoId: CodCentroCosto,
		private cargos: CargoId[]
	) {}

	static create(params: Omit<DepartmentPrimitives, 'id'>): IDepartment {
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new IDepartment(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new CodCentroCosto(params.centroCostoId),
			cargos
		)
	}

	toPrimitive(): DepartmentPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			centroCostoId: this.centroCostoValue,
			cargos: this.CargosValue
		}
	}

	get idValue(): Primitives<DepartmentId> {
		return this.id.value
	}

	get nameValue(): Primitives<DepartmentName> {
		return this.name.value
	}

	get centroCostoValue(): Primitives<CodCentroCosto> {
		return this.centroCostoId.value
	}

	get CargosValue(): Primitives<CargoId>[] {
		return this.cargos.map(cargo => cargo.value)
	}

	static addCargoIds(cargos: Cargo[]): CargoId[] {
		return cargos.map(cargo => new CargoId(cargo.id))
	}

	updateName(name: Primitives<DepartmentName>): void {
		this.name = new DepartmentName(name)
	}

	updateCodCentroCosto(codCentroCosto: Primitives<CodCentroCosto>): void {
		this.centroCostoId = new CodCentroCosto(codCentroCosto)
	}

	updateCargos(cargoIds: Primitives<CargoId>[]): void {
		this.cargos = cargoIds.map(cargo => new CargoId(cargo))
	}
}
