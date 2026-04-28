import { employeeTypeTranslations } from './employeeTypeTranslations'
import { type EmployeeDto } from '../../domain/entity/Employee.dto'
import { type ClearEmployeeDataset } from './EmployeeResponse'
import { type EmployeeTypesEnum } from '../../domain/valueObject/EmployeeType'

/**
 * Configuración de etiquetas por defecto para campos vacíos.
 */
const LABELS = {
	SIN_UBICACION: 'Sin Ubicación',
	NO_APLICA: 'No Aplica',
	SIN_FECHA: 'Sin Fecha',
	SIN_CARGO: 'Sin Cargo',
	SIN_DEPARTAMENTO: 'Sin Departamento',
	SIN_VICEPRESIDENCIA: 'Sin Vicepresidencia',
	SIN_NOMBRE: 'Sin Nombre',
	SIN_NACIONALIDAD: 'Sin Nacionalidad',
	SIN_CEDULA: 'Sin Cédula',
	SIN_CORREO: 'Sin Correo',
	SIN_DIRECTIVA: 'Sin Directiva'
} as const

const DATE_FORMATTER = new Intl.DateTimeFormat('es-VE')

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
		// Optimización: Extraer referencias anidadas para evitar múltiples accesos profundos
		const loc = employee.location
		const site = loc?.site
		const city = site?.city
		const state = city?.state
		const region = state?.region
		const admRegion = region?.administrativeRegion

		const fullName = [employee.lastName, employee.name].filter(Boolean).join(', ')

		// 1. Datos de Identidad
		const identityFields = {
			'Código de empleado': employee.employeeCode ? String(employee.employeeCode) : LABELS.NO_APLICA,
			'Nombre de usuario': employee.userName,
			'Apellidos y Nombres': fullName || LABELS.SIN_NOMBRE,
			'Tipo de empleado': employeeTypeTranslations[employee.type as EmployeeTypesEnum] ?? employee.type,
			'Trabajador activo': employee.isStillWorking ? 'Sí' : 'No',
			Nacionalidad: employee.nationality ?? LABELS.SIN_NACIONALIDAD,
			Cédula: employee.cedula ?? LABELS.SIN_CEDULA,
			'Correo Electrónico': employee.email ?? LABELS.SIN_CORREO
		}

		// 2. Datos Estructurales (Cargo, Departamento, etc)
		const structuralFields = {
			Cargo: getValueOrDefault(employee.cargo?.name, LABELS.SIN_CARGO) as string,
			Departamento: getValueOrDefault(employee.departamento?.name, LABELS.SIN_DEPARTAMENTO) as string,
			Vicepresidencia: getValueOrDefault(employee.vicepresidencia?.name, LABELS.SIN_VICEPRESIDENCIA) as string,
			'Vicepresidencia Ejecutiva': getValueOrDefault(
				employee.vicepresidenciaEjecutiva?.name,
				LABELS.SIN_VICEPRESIDENCIA
			) as string,
			Directiva: getValueOrDefault(employee.directiva?.name, LABELS.SIN_DIRECTIVA) as string
		}

		// 3. Datos de Ubicación y Contacto
		const contactFields = {
			'Lugar de trabajo': getValueOrDefault(loc?.name, LABELS.SIN_UBICACION) as string,
			Ciudad: getValueOrDefault(city?.name, LABELS.SIN_UBICACION) as string,
			Estado: getValueOrDefault(state?.name, LABELS.SIN_UBICACION) as string,
			Región: getValueOrDefault(region?.name, LABELS.SIN_UBICACION) as string,
			'Región Administrativa': getValueOrDefault(admRegion?.name, LABELS.SIN_UBICACION) as string,
			'Teléfono Móvil': employee.phone?.length ? employee.phone.join(', ') : LABELS.NO_APLICA,
			'Extensión Telefónica': employee.extension?.length ? employee.extension.join(', ') : LABELS.NO_APLICA
		}

		// 4. Metadatos (Siempre al final)
		const footerFields = {
			'Fecha de Modificacion': employee.updatedAt
				? DATE_FORMATTER.format(new Date(employee.updatedAt))
				: LABELS.SIN_FECHA
		}

		// El orden de las llaves en el objeto determina el orden de las columnas en el Excel
		return {
			...identityFields,
			...structuralFields,
			...contactFields,
			...footerFields
		}
	})
}
