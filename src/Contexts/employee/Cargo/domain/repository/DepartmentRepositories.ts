import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../../Directiva/domain/entity/Directiva.dto'
import { type DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type CargoRepository } from './CargoRepository'

export interface DepartmentRepositories {
	readonly cargoRepository: CargoRepository
	readonly directivaRepository: DepartmentRepository<DirectivaDto>
	readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
}
