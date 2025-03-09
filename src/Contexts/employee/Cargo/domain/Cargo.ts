import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { CargoDto, type CargoParams, type CargoPrimitives } from './Cargo.dto'
import { CargoId } from './CargoId'
import { CargoName } from './CargoName'

export class Cargo {
	constructor(
		private readonly id: CargoId,
		private name: CargoName,
		private departamentos: DepartmentId[]
	) {}

	static create(params: CargoParams): Cargo {
		const id = CargoId.random().value
		const Departamentos = params.departamentos.map(deps => new DepartmentId(deps))
		return new Cargo(new CargoId(id), new CargoName(params.name), Departamentos)
	}

	static fromPrimitives(primitives: CargoDto): Cargo {
		return new Cargo(
			new CargoId(primitives.id),
			new CargoName(primitives.name),
			primitives.departamentos.map(deps => new DepartmentId(deps.id))
		)
	}

	toPrimitive(): CargoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			departamentos: this.departamentos.map(dept => dept.value)
		}
	}

	get idValue(): Primitives<CargoId> {
		return this.id.value
	}

	get nameValue(): Primitives<CargoName> {
		return this.name.value
	}

	get departamentosValue(): Primitives<DepartmentId>[] {
		return this.departamentos.map(deps => deps.value)
	}

	updateName(newName: Primitives<CargoName>): void {
		this.name = new CargoName(newName)
	}

	updateDepartamentos(departamentoIds: Primitives<DepartmentId>[]): void {
		this.departamentos = departamentoIds.map(deps => new DepartmentId(deps))
	}
}
