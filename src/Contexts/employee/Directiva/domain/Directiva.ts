import { IDepartment } from '../../IDepartment/IDeparment'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DirectivaDto } from './Directiva.dto'

/**
 * Esta clase es el nivel mas alto del organigrama laboral
 */

export class Directiva extends IDepartment {
	constructor(id: DepartmentId, name: DepartmentName, centroCostoId: CodCentroCosto, cargos: CargoId[]) {
		super(id, name, centroCostoId, cargos)
	}

	static fromPrimitives(primitives: DirectivaDto): Directiva {
		return new Directiva(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			new CodCentroCosto(primitives.centroCostoId),
			this.addCargoIds(primitives.cargos)
		)
	}
}
