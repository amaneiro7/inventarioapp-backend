import type { CityId } from '../../../../Location/City/domain/valueObject/CityId'
import type { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import type { RegionId } from '../../../../Location/Region/domain/valueObject/RegionId'
import type { StateId } from '../../../../Location/State/domain/valueObject/StateId'
import type { EmployeeCedula } from '../../domain/valueObject/EmployeeCedula'
import type { EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import type { Nationalities } from '../../domain/valueObject/EmployeeNationality' // No se usa, se puede eliminar

/**
 * @type ClearEmployeeDataset
 * @description Defines the structure for a flattened employee dataset, used for data exports.
 */

export type ClearEmployeeDataset = {
	'Código de empleado': string | null
	'Nombre de usuario': string
	'Apellidos y Nombres': string | null
	'Tipo de empleado': string
	'Trabajador activo': string
	Nacionalidad: Nationalities | string | null
	Cédula: EmployeeCedula['value'] | string
	'Correo Electrónico': EmployeeEmail['value'] | string
	Cargo: string | null // Nombre descriptivo del cargo
	'Jerarquía Nivel 1 (Directiva)': string | null // Nombre de la unidad de nivel 1
	'Jerarquía Nivel 2 (VPE)': string | null // Nombre de la unidad de nivel 2
	'Jerarquía Nivel 3 (VP)': string | null // Nombre de la unidad de nivel 3
	'Jerarquía Nivel 4 (Gerencia)': string | null // Nombre de la unidad de nivel 4
	'Jerarquía Nivel 5 (Depto)': string | null // Nombre de la unidad de nivel 5
	'Jerarquía Nivel 6': string | null // Nombre de la unidad de nivel 6
	'Unidad Específica': string | null // Nombre de la unidad exacta asignada
	'Ruta Jerárquica': string | null // Cadena de texto con la ruta completa (ej: A > B > C)
	'Lugar de trabajo': LocationId['value'] | null
	Ciudad: CityId['value'] | null
	Estado: StateId['value'] | null
	Región: RegionId['value'] | null
	'Región Administrativa': string | null
	'Teléfono Móvil': string | null
	'Extensión Telefónica': string | null
	'Fecha de Modificacion': string | null
}
