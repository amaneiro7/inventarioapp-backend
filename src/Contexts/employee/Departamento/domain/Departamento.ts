import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { IDepartment } from '../../IDepartment/IDeparment'
import { CargoId } from '../../Cargo/domain/CargoId'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartamentoDto, type DepartamentoParams, type DepartamentoPrimitives } from './Departamento.dto'

export class Departamento extends IDepartment {
	constructor(id: DepartmentId, name: DepartmentName, cargos: CargoId[], private vicepresidenciaId: DepartmentId) {
		super(id, name, cargos)
	}

	static create(params: DepartamentoParams): Departamento {
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new Departamento(
			new DepartmentId(id),
			new DepartmentName(params.name),
			cargos,
			new DepartmentId(params.vicepresidenciaId)
		)
	}

	static fromPrimitives(primitives: DepartamentoDto): Departamento {
		return new Departamento(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			this.addCargoIds(primitives.cargos),
			new DepartmentId(primitives.vicepresidenciaId)
		)
	}

	toPrimitive(): DepartamentoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			vicepresidenciaId: this.vicepresidenciaValue,
			cargos: this.CargosValue
		}
	}

	get vicepresidenciaValue(): Primitives<DepartmentId> {
		return this.vicepresidenciaId.value
	}

	updateVicepresidencia(vicepresidenciaId: Primitives<DepartmentId>): void {
		this.vicepresidenciaId = new DepartmentId(vicepresidenciaId)
	}
}
