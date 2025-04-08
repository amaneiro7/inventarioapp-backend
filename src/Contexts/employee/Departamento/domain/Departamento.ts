import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { IDepartment } from '../../IDepartment/IDeparment'
import { CargoId } from '../../Cargo/domain/CargoId'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type DepartamentoDto, type DepartamentoParams, type DepartamentoPrimitives } from './Departamento.dto'

export class Departamento extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		centroCostoId: CodCentroCosto,
		cargos: CargoId[],
		private vicepresidenciaEjecutivaId: DepartmentId
	) {
		super(id, name, centroCostoId, cargos)
	}

	static create(params: DepartamentoParams): Departamento {
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new Departamento(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new CodCentroCosto(params.centroCostoId),
			cargos,
			new DepartmentId(params.vicepresidenciaEjecutivaId)
		)
	}

	static fromPrimitives(primitives: DepartamentoDto): Departamento {
		return new Departamento(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new CodCentroCosto(primitives.centroCostoId),
			this.addCargoIds(primitives.cargos),
			new DepartmentId(primitives.vicepresidenciaEjecutivaId)
		)
	}

	toPrimitive(): DepartamentoPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue,
			centroCostoId: this.centroCostoValue,
			cargos: this.CargosValue
		}
	}

	get vicepresidenciaEjecutivaValue(): Primitives<DepartmentId> {
		return this.vicepresidenciaEjecutivaId.value
	}

	updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: Primitives<DepartmentId>): void {
		this.vicepresidenciaEjecutivaId = new DepartmentId(vicepresidenciaEjecutivaId)
	}
}
