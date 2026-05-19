import { employeeTypeTranslations } from './employeeTypeTranslations'
import type { EmployeeDto } from '../../domain/entity/Employee.dto'
import type { ClearEmployeeDataset } from './EmployeeResponse'
import type { EmployeeTypesEnum } from '../../domain/valueObject/EmployeeType'

/**
 * Configuración de etiquetas por defecto para campos vacíos.
 */
const LABELS = {
	SIN_UBICACION: 'Sin Ubicación',
	NO_APLICA: 'No Aplica',
	SIN_FECHA: 'Sin Fecha',
	SIN_CARGO: 'Sin Cargo',
	SIN_UNIDAD: 'Sin Unidad',
	SIN_NOMBRE: 'Sin Nombre',
	SIN_NACIONALIDAD: 'Sin Nacionalidad',
	SIN_CEDULA: 'Sin Cédula',
	SIN_CORREO: 'Sin Correo'
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
		// Desestructuración de datos de ubicación para aplanar el dataset del Excel
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

		// 2. Datos Organizacionales (Cargo y Jerarquía de Unidades)
		// Se extrae la cadena jerárquica pre-calculada en el repositorio para evitar lógica recursiva aquí
		const hierarchy = employee?.unidad?.full_chain?.levels ?? []

		// Nombre de la unidad inmediata a la que pertenece el empleado
		const unidadEspecifica = employee?.unidad?.name ?? LABELS.SIN_UNIDAD

		const structuralFields = {
			Cargo: getValueOrDefault(employee.cargo?.name, LABELS.SIN_CARGO) as string,
			/**
			 * Desglose por columnas de la jerarquía (Niveles 1 al 6) para permitir filtrado y agrupación en Excel
			 */
			'Jerarquía Nivel 1 (Directiva)': hierarchy[0] ?? LABELS.NO_APLICA,
			'Jerarquía Nivel 2 (VPE)': hierarchy[1] ?? LABELS.NO_APLICA,
			'Jerarquía Nivel 3 (VP)': hierarchy[2] ?? LABELS.NO_APLICA,
			'Jerarquía Nivel 4 (Gerencia)': hierarchy[3] ?? LABELS.NO_APLICA,
			'Jerarquía Nivel 5 (Depto)': hierarchy[4] ?? LABELS.NO_APLICA,
			'Jerarquía Nivel 6': hierarchy[5] ?? LABELS.NO_APLICA,

			'Unidad Específica': unidadEspecifica,

			// Cadena de texto completa para una lectura rápida del contexto organizacional
			'Ruta Jerárquica': employee?.unidad?.full_chain?.text ?? LABELS.SIN_UNIDAD
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
