import { IDepartment } from '../../IDepartment/IDeparment'
import { CargoId } from '../../Cargo/domain/CargoId'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams,
	type VicepresidenciaEjecutivaPrimitives
} from './VicepresidenciaEjecutiva.dto'

/**
 * @description Represents the VicepresidenciaEjecutiva domain entity, the second level in the organizational chart.
 */
export class VicepresidenciaEjecutiva extends IDepartment {
	constructor(
		id: DepartmentId,
		name: DepartmentName,
		cargos: CargoId[],
		private directivaId: DepartmentId
	) {
		super(id, name, cargos)
	}

	static create(params: VicepresidenciaEjecutivaParams): VicepresidenciaEjecutiva {
		return new VicepresidenciaEjecutiva(
			DepartmentId.random(),
			new DepartmentName(params.name),
			params.cargos.map(cargo => new CargoId(cargo)),
			new DepartmentId(params.directivaId)
		)
	}

	static fromPrimitives(primitives: VicepresidenciaEjecutivaDto): VicepresidenciaEjecutiva {
		return new VicepresidenciaEjecutiva(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			this.addCargoIds(primitives.cargos),
			new DepartmentId(primitives.directivaId)
		)
	}

	toPrimitive(): VicepresidenciaEjecutivaPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			directivaId: this.directivaValue,
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
