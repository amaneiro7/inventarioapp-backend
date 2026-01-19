import { type CityId } from '../../../../Location/City/domain/valueObject/CityId'
import { type LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { type RegionId } from '../../../../Location/Region/domain/valueObject/RegionId'
import { type StateId } from '../../../../Location/State/domain/valueObject/StateId'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'
import { type DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { type VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type EmployeeCedula } from '../../domain/valueObject/EmployeeCedula'
import { type EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import { type Nationalities } from '../../domain/valueObject/EmployeeNationality'

/**
 * @type ClearEmployeeDataset
 * @description Defines the structure for a flattened employee dataset, used for data exports.
 */
export type ClearEmployeeDataset = {
	'Código de empleado': string | null
	'Nombre de usuario': string
	'Apellidos y Nombres': string | null
	'Tipo de empleado': string
	'Trabajador activo': 'Sí' | 'No'
	Nacionalidad: Nationalities | string | null
	Cédula: EmployeeCedula['value'] | string
	'Correo Electrónico': EmployeeEmail['value'] | string
	Cargo: CargoId['value'] | null
	Departamento: DepartamentoId['value'] | null
	Vicepresidencia: VicepresidenciaId['value'] | null
	'Vicepresidencia Ejecutiva': VicepresidenciaEjecutivaId['value'] | null
	Directiva: DirectivaId['value'] | null
	'Lugar de trabajo': LocationId['value'] | null
	Ciudad: CityId['value'] | null
	Estado: StateId['value'] | null
	Región: RegionId['value'] | null
	'Teléfono Móvil': string | null
	'Extensión Telefónica': string | null
	'Fecha de Modificacion': string | null
}
