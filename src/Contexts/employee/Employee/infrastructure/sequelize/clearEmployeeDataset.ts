import { employeeTypeTranslations } from './employeeTypeTranslations'
import { type EmployeeDto } from '../../domain/entity/Employee.dto'
import { type ClearEmployeeDataset } from './EmployeeResponse'
import { type EmployeeTypesEnum } from '../../domain/valueObject/EmployeeType'

const SIN_UBICACION = 'Sin Ubicación'
const NO_APLICA = 'No Aplica'
const SIN_FECHA = 'Sin Fecha'
const SIN_CARGO = 'Sin Cargo'
const SIN_DEPARTAMENTO = 'Sin Departamento'
const SIN_VICEPRESIDENCIA = 'Sin Vicepresidencia'
const SIN_DIRECTIVA = 'Sin Directiva'
const SIN_NOMBRE = 'Sin Nombre'
const SIN_NACIONALIDAD = 'Sin Nacionalidad'
const SIN_CEDULA = 'Sin Cédula'
const SIN_CORREO = 'Sin Correo'

/**
 * @description Safely retrieves a value from an object, returning a default value if it is null or undefined.
 * @param {T | null | undefined} value The value to retrieve.
 * @param {string} defaultValue The default value to return if the original value is nullish.
 * @returns {T | string} The original value or the default value.
 */
function getValueOrDefault<T>(value: T | null | undefined, defaultValue: string): T | string {
	return value ?? defaultValue
}

/**
 * @description Transforms a list of Employee DTOs into a flattened dataset suitable for Excel export.
 * @param {{ employees: EmployeeDto[] }} params The employees to transform.
 * @returns {Array<ClearEmployeeDataset>} An array of flattened employee data.
 */
export function clearEmployeeDataset({ employees }: { employees: EmployeeDto[] }): Array<ClearEmployeeDataset> {
	return employees.map(employee => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const location = employee.location as any
		const site = location?.site
		const city = site?.city
		const state = city?.state
		const region = state?.region

		const fullName = [employee.lastName, employee.name].filter(Boolean).join(', ')

		return {
			'Código de empleado': employee.employeeCode ? String(employee.employeeCode) : NO_APLICA,
			'Nombre de usuario': employee.userName,
			'Apellidos y Nombres': fullName || SIN_NOMBRE,
			'Tipo de empleado': employeeTypeTranslations[employee.type as EmployeeTypesEnum] ?? employee.type,
			'Trabajador activo': employee.isStillWorking ? 'Sí' : 'No',
			Nacionalidad: employee.nationality ?? SIN_NACIONALIDAD,
			Cédula: employee.cedula ?? SIN_CEDULA,
			'Correo Electrónico': employee.email ?? SIN_CORREO,
			Cargo: getValueOrDefault(employee.cargo?.name, SIN_CARGO) as string,
			Departamento: getValueOrDefault(employee.departamento?.name, SIN_DEPARTAMENTO) as string,
			Vicepresidencia: getValueOrDefault(employee.vicepresidencia?.name, SIN_VICEPRESIDENCIA) as string,
			'Vicepresidencia Ejecutiva': getValueOrDefault(
				employee.vicepresidenciaEjecutiva?.name,
				SIN_VICEPRESIDENCIA
			) as string,
			Directiva: getValueOrDefault(employee.directiva?.name, SIN_DIRECTIVA) as string,
			'Lugar de trabajo': getValueOrDefault(location?.name, SIN_UBICACION) as string,
			Ciudad: getValueOrDefault(city?.name, SIN_UBICACION) as string,
			Estado: getValueOrDefault(state?.name, SIN_UBICACION) as string,
			Región: getValueOrDefault(region?.name, SIN_UBICACION) as string,
			'Teléfono Móvil': employee.phone?.length ? employee.phone.join(', ') : NO_APLICA,
			'Extensión Telefónica': employee.extension?.length ? employee.extension.join(', ') : NO_APLICA,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			'Fecha de Modificacion': (employee as any).updatedAt
				? // eslint-disable-next-line @typescript-eslint/no-explicit-any
					new Date((employee as any).updatedAt).toLocaleDateString()
				: SIN_FECHA
		}
	})
}
