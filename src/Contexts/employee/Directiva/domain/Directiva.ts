import { IDepartment } from '../../IDepartment/IDeparment'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentName } from '../../IDepartment/DepartmentName'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type DirectivaDto } from './Directiva.dto'

/**
 * Esta clase es el nivel mas alto del organigrama laboral
 */

export class Directiva extends IDepartment {
	constructor(id: DepartmentId, name: DepartmentName, cargos: CargoId[]) {
		super(id, name, cargos)
	}

	static fromPrimitives(primitives: DirectivaDto): Directiva {
		return new Directiva(
			new DepartmentId(primitives.id),
			new DepartmentName(primitives.name),
			this.addCargoIds(primitives.cargos)
		)
	}
}
