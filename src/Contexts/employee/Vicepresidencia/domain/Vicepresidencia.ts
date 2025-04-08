import { CargoId } from '../../Cargo/domain/CargoId'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { IDepartment } from '../../IDepartment/IDeparment'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import {
	type VicepresidenciaDto,
	type VicepresidenciaParams,
	type VicepresidenciaPrimitives
} from './Vicepresidencia.dto'

/**
 * Esta clase es el segundo nivel del organigrama laboral
 */

export class Vicepresidencia extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		centroCostoId: CodCentroCosto,
		cargos: CargoId[],
		private directivaId: DepartmentId
	) {
		super(id, name, centroCostoId, cargos)
	}

	static create(params: VicepresidenciaParams): Vicepresidencia {
		const id = DepartmentId.random().value
		const cargos = params.cargos.map(cargo => new CargoId(cargo))
		return new Vicepresidencia(
			new DepartmentId(id),
			new DepartmentName(params.name),
			new CodCentroCosto(params.centroCostoId),
			cargos,
			new DepartmentId(params.directivaId)
		)
	}

	static fromPrimitives(primitives: VicepresidenciaDto): Vicepresidencia {
		return new Vicepresidencia(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new CodCentroCosto(primitives.centroCostoId),
			this.addCargoIds(primitives.cargos),
			new DepartmentId(primitives.directivaId)
		)
	}

	toPrimitive(): VicepresidenciaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			directivaId: this.directivaValue,
			centroCostoId: this.centroCostoValue,
			cargos: this.CargosValue
		}
	}

	get directivaValue(): Primitives<DepartmentId> {
		return this.directivaId.value
	}

	updateDirectiva(newDirectivaId: Primitives<DepartmentId>): void {
		this.directivaId = new DepartmentId(newDirectivaId)
	}
}
