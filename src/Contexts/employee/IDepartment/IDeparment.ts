import { CargoId } from '../Cargo/domain/valueObject/CargoId'
import { DepartmentId } from './DepartmentId'
import { DepartmentName } from './DepartmentName'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type Cargo } from '../Cargo/domain/entity/Cargo.dto'

export interface DepartmentPrimitives {
	id: Primitives<DepartmentId>
	name: Primitives<DepartmentName>
	cargos: Primitives<CargoId>[]
}

/**
 * @description Base class for department entities, providing common properties and methods.
 */
export class IDepartment {
	constructor(
		private readonly id: DepartmentId,
		private name: DepartmentName,
		private cargos: CargoId[]
	) {}

	static create(params: Omit<DepartmentPrimitives, 'id'>): IDepartment {
		const id = DepartmentId.random()
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new IDepartment(id, new DepartmentName(params.name), cargos)
	}

	toPrimitive(): DepartmentPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			cargos: this.CargosValue
		}
	}

	get idValue(): Primitives<DepartmentId> {
		return this.id.value
	}

	get nameValue(): Primitives<DepartmentName> {
		return this.name.value
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

	updateCargos(cargoIds: Primitives<CargoId>[]): void {
		this.cargos = cargoIds.map(cargo => new CargoId(cargo))
	}
}
