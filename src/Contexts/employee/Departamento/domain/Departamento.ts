import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { IDepartment } from '../../IDepartment/IDeparment'
import { CargoId } from '../../Cargo/domain/CargoId'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type DepartamentoDto, type DepartamentoParams, type DepartamentoPrimitives } from './Departamento.dto'
import { type Cargo } from '../../Cargo/domain/Cargo.dto'

export class Departamento extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		private vicepresidenciaEjecutivaId: DepartmentId,
		private centroCostoId: CodCentroCosto,
		private cargos: CargoId[]
	) {
		super(id, name)
	}

	static create(params: DepartamentoParams): Departamento {
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new Departamento(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new DepartmentId(params.vicepresidenciaEjecutivaId),
			new CodCentroCosto(params.centroCostoId),
			cargos
		)
	}

	static fromPrimitives(primitives: DepartamentoDto): Departamento {
		return new Departamento(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new DepartmentId(primitives.vicepresidenciaEjecutivaId),
			new CodCentroCosto(primitives.centroCostoId),
			this.addCargoIds(primitives.cargos)
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

	get centroCostoValue(): Primitives<CodCentroCosto> {
		return this.centroCostoId.value
	}

	get CargosValue(): Primitives<CargoId>[] {
		return this.cargos.map(cargo => cargo.value)
	}

	private static addCargoIds(cargos: Cargo[]): CargoId[] {
		return cargos.map(cargo => new CargoId(cargo.id))
	}

	updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId: Primitives<DepartmentId>): void {
		this.vicepresidenciaEjecutivaId = new DepartmentId(vicepresidenciaEjecutivaId)
	}
	updateCodCentroCosto(codCentroCosto: Primitives<CodCentroCosto>): void {
		this.centroCostoId = new CodCentroCosto(codCentroCosto)
	}

	updateCargos(cargoIds: Primitives<CargoId>[]): void {
		console.log(cargoIds)
		this.cargos = cargoIds.map(cargo => new CargoId(cargo))
	}
}
