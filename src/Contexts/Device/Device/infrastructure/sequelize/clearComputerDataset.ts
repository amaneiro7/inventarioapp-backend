import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { lastHistoryUpdated } from '../../../../Shared/domain/LastHistoryUpdated'
import type { DeviceDto } from '../../domain/dto/Device.dto'
import type { ClearDefaultDataset, ClearComputerDataset } from './DeviceResponse'

/**
 * Configuración de valores por defecto para campos vacíos o nulos.
 */
const LABELS = {
	SIN_ASIGNAR: 'Sin Asignar',
	SIN_SERIAL: 'Sin Serial',
	SIN_ACTIVO: 'Sin Activo',
	SIN_PROCESADOR: 'Sin Procesador',
	SIN_TIPO: 'Sin Tipo',
	ROOT_USER: 'root',
	SIN_OBSERVACION: 'Sin Observación',
	SIN_UBICACION: 'Sin Ubicación',
	SIN_ESTATUS: 'Sin Estatus',
	SIN_CATEGORIA: 'Sin Categoría',
	SIN_MARCA: 'Sin Marca',
	SIN_MODELO: 'Sin Modelo',
	SIN_FECHA: 'Sin Fecha',
	NO_APLICA: 'No Aplica',
	SIN_IP: 'Sin IP',
	SIN_NOMBRE_EQUIPO: 'Sin Nombre de Equipo',
	NO_ESPECIFICADO: 'No Especificado',
	SIN_SISTEMA_OPERATIVO: 'Sin Sistema Operativo',
	SIN_ARQUITECTURA: 'Sin Arquitectura'
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
 * @description Limpia y normaliza el nombre del sistema operativo.
 */
function cleanOSName(name: string | undefined): string {
	if (!name) return LABELS.SIN_SISTEMA_OPERATIVO
	if (name.startsWith('Windows 10')) return 'Windows 10'
	if (name.startsWith('Windows 11')) return 'Windows 11'
	return name
}

/**
 * @description Transforms a list of Device DTOs into a flattened dataset suitable for Excel export.
 * It handles different data structures for computer devices versus other device types.
 * @param {{ devices: DeviceDto[] }} params The devices to transform.
 * @returns {Array<ClearComputerDataset | ClearDefaultDataset>} An array of flattened device data.
 */
export function clearComputerDataset({
	devices
}: {
	devices: DeviceDto[]
}): Array<Partial<ClearComputerDataset & ClearDefaultDataset>> {
	return devices.map(device => {
		// Optimización: Extraer referencias anidadas una sola vez
		const loc = device.location
		const site = loc?.site
		const city = site?.city
		const state = city?.state
		const region = state?.region
		const employee = device.employee

		// 1. Campos Comunes (Cabecera)
		const commonFields = {
			Serial: getValueOrDefault(device.serial, LABELS.SIN_SERIAL),
			Usuario: getValueOrDefault(employee?.userName, LABELS.SIN_ASIGNAR),
			Ubicación: getValueOrDefault(loc?.name, LABELS.SIN_UBICACION),
			'Región Administrativa': getValueOrDefault(region?.administrativeRegion?.name, LABELS.SIN_UBICACION),
			Región: getValueOrDefault(region?.name, LABELS.SIN_UBICACION),
			Estado: getValueOrDefault(state?.name, LABELS.SIN_UBICACION),
			Ciudad: getValueOrDefault(city?.name, LABELS.SIN_UBICACION),
			Sitio: getValueOrDefault(site?.name, LABELS.SIN_UBICACION),
			Activo: getValueOrDefault(device.activo, LABELS.SIN_ACTIVO),
			Estatus: getValueOrDefault(device.status?.name, LABELS.SIN_ESTATUS),
			Categoria: getValueOrDefault(device.category?.name, LABELS.SIN_CATEGORIA),
			Marca: getValueOrDefault(device.brand?.name, LABELS.SIN_MARCA),
			Modelo: getValueOrDefault(device.model?.name, LABELS.SIN_MODELO)
		}

		// 2. Campos Específicos (Cuerpo)
		let specificFields = {}
		if (device.category.mainCategoryId === MainCategoryList.COMPUTER && device.computer) {
			const comp = device.computer
			const os = comp.operatingSystem

			specificFields = {
				'Direccion IP': getValueOrDefault(comp.ipAddress, LABELS.SIN_IP),
				'Nombre de Equipo': getValueOrDefault(comp.computerName, LABELS.SIN_NOMBRE_EQUIPO),
				Procesador: getValueOrDefault(comp.processor?.name, LABELS.SIN_PROCESADOR),
				'Memoria Ram Total': comp.memoryRamCapacity ?? LABELS.NO_ESPECIFICADO,
				'Slot de Memoria Ram': comp.memoryRam?.join('_') ?? LABELS.NO_ESPECIFICADO,
				'Tipo de Memoria Ram':
					device.model?.modelComputer?.memoryRamType?.name ??
					device.model?.modelLaptop?.memoryRamType?.name ??
					LABELS.SIN_TIPO,
				'Disco Duro Total': getValueOrDefault(comp.hardDriveCapacity?.name, LABELS.NO_ESPECIFICADO),
				'Tipo de Disco Duro': getValueOrDefault(comp.hardDriveType?.name, LABELS.NO_ESPECIFICADO),
				'Sistema Operativo': cleanOSName(os?.name),
				'Sistema Operativo Build Number': getValueOrDefault(os?.buildNumber, LABELS.NO_ESPECIFICADO),
				'Sistema Operativo Version': getValueOrDefault(os?.version, LABELS.NO_ESPECIFICADO),
				Arquitectura: getValueOrDefault(comp.operatingSystemArq?.name, LABELS.SIN_ARQUITECTURA),
				Nombre: getValueOrDefault(employee?.name, LABELS.NO_APLICA),
				Apellido: getValueOrDefault(employee?.lastName, LABELS.NO_APLICA),
				Cédula:
					employee?.nationality && employee?.cedula
						? `${employee.nationality}-${employee.cedula}`
						: LABELS.NO_APLICA,
				'Código de Empleado': getValueOrDefault(employee?.employeeCode, LABELS.NO_APLICA),
				Directiva: getValueOrDefault(employee?.directiva?.name, LABELS.NO_APLICA),
				'Vicepresidencia Ejecutiva': getValueOrDefault(
					employee?.vicepresidenciaEjecutiva?.name,
					LABELS.NO_APLICA
				),
				Vicepresidencia: getValueOrDefault(employee?.vicepresidencia?.name, LABELS.NO_APLICA),
				Departamento: getValueOrDefault(employee?.departamento?.name, LABELS.NO_APLICA),
				Cargo: getValueOrDefault(employee?.cargo?.name, LABELS.NO_APLICA)
			}
		}

		// 3. Campos de Metadatos (Pie de página - SIEMPRE AL FINAL)
		const footerFields = {
			Observación: getValueOrDefault(device.observation, LABELS.SIN_OBSERVACION),
			'Actualizado por': getValueOrDefault(
				lastHistoryUpdated(device.history)?.user?.employee?.email,
				LABELS.ROOT_USER
			),
			'Fecha de Modificacion': device.updatedAt
				? DATE_FORMATTER.format(new Date(device.updatedAt))
				: LABELS.SIN_FECHA
		}

		// El orden de las propiedades en el objeto resultante determina el orden de las columnas en Excel
		return { ...commonFields, ...specificFields, ...footerFields }
	})
}
