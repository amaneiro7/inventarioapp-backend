import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { lastHistoryUpdated } from '../../../../Shared/domain/LastHistoryUpdated'
import { type DeviceDto } from '../../domain/Device.dto'
import { type ClearDefaultDataset, type ClearComputerDataset } from './DeviceResponse'

const SIN_ASIGNAR = 'Sin Asignar'
const SIN_SERIAL = 'Sin Serial'
const SIN_ACTIVO = 'Sin Activo'
const SIN_PROCESADOR = 'Sin Procesador'
const SIN_TIPO = 'Sin Tipo'
const ROOT_USER = 'root'
const SIN_OBSERVACION = 'Sin Observación'
const SIN_UBICACION = 'Sin Ubicación'
const SIN_ESTATUS = 'Sin Estatus'
const SIN_CATEGORIA = 'Sin Categoría'
const SIN_MARCA = 'Sin Marca'
const SIN_MODELO = 'Sin Modelo'
const SIN_FECHA = 'Sin Fecha'
const NO_APLICA = 'No Aplica'
const SIN_IP = 'Sin IP'
const SIN_NOMBRE_EQUIPO = 'Sin Nombre de Equipo'
const NO_ESPECIFICADO = 'No Especificado'
const SIN_SISTEMA_OPERATIVO = 'Sin Sistema Operativo'
const SIN_ARQUITECTURA = 'Sin Arquitectura'

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
 * @description Transforms a list of Device DTOs into a flattened dataset suitable for Excel export.
 * It handles different data structures for computer devices versus other device types.
 * @param {{ devices: DeviceDto[] }} params The devices to transform.
 * @returns {Array<ClearComputerDataset | ClearDefaultDataset>} An array of flattened device data.
 */
export function clearComputerDataset({
	devices
}: {
	devices: DeviceDto[]
}): Array<ClearComputerDataset | ClearDefaultDataset> {
	return devices.map(device => {
		const baseDataset = {
			id: device.id,
			Usuario: getValueOrDefault(device.employee?.userName, SIN_ASIGNAR),
			Ubicación: getValueOrDefault(device.location?.name, SIN_UBICACION),
			Serial: getValueOrDefault(device.serial, SIN_SERIAL),
			Activo: getValueOrDefault(device.activo, SIN_ACTIVO),
			Estatus: getValueOrDefault(device.status?.name, SIN_ESTATUS),
			Categoria: getValueOrDefault(device.category?.name, SIN_CATEGORIA),
			Marca: getValueOrDefault(device.brand?.name, SIN_MARCA),
			Modelo: getValueOrDefault(device.model?.name, SIN_MODELO),
			Observación: getValueOrDefault(device.observation, SIN_OBSERVACION),
			'Actualizado por': getValueOrDefault(lastHistoryUpdated(device.history)?.user?.email, ROOT_USER),
			'Fecha de Modificacion': device.updatedAt ? new Date(device.updatedAt).toLocaleDateString() : SIN_FECHA
		}

		if (device.category.mainCategoryId === MainCategoryList.COMPUTER && device.computer) {
			const osName = device.computer.operatingSystem?.name
			let cleanedOsName = osName
			if (osName?.startsWith('Windows 10')) {
				cleanedOsName = 'Windows 10'
			} else if (osName?.startsWith('Windows 11')) {
				cleanedOsName = 'Windows 11'
			}
			return {
				...baseDataset,
				Nombre: getValueOrDefault(device.employee?.name, NO_APLICA),
				Apellido: getValueOrDefault(device.employee?.lastName, NO_APLICA),
				Cédula:
					device.employee?.nationality && device.employee?.cedula
						? `${device.employee.nationality}-${device.employee.cedula}`
						: NO_APLICA,
				'Código de Empleado': getValueOrDefault(device.employee?.employeeCode, NO_APLICA),
				Departamento: getValueOrDefault(device.employee?.departamento?.name, NO_APLICA),
				Cargo: getValueOrDefault(device.employee?.cargo?.name, NO_APLICA),
				'Direccion IP': getValueOrDefault(device.computer.ipAddress, SIN_IP),
				'Nombre de Equipo': getValueOrDefault(device.computer.computerName, SIN_NOMBRE_EQUIPO),
				Procesador: getValueOrDefault(device.computer.processor?.name, SIN_PROCESADOR),
				'Memoria Ram Total': device.computer.memoryRamCapacity ?? NO_ESPECIFICADO,
				'Slot de Memoria Ram': device.computer.memoryRam?.join('_') ?? NO_ESPECIFICADO,
				'Tipo de Memoria Ram':
					device.model?.modelComputer?.memoryRamType?.name ??
					device.model?.modelLaptop?.memoryRamType?.name ??
					SIN_TIPO,
				'Disco Duro Total': getValueOrDefault(device.computer.hardDriveCapacity?.name, NO_ESPECIFICADO),
				'Tipo de Disco Duro': getValueOrDefault(device.computer.hardDriveType?.name, NO_ESPECIFICADO),
				'Sistema Operativo': getValueOrDefault(cleanedOsName, SIN_SISTEMA_OPERATIVO),
				'Sistema Operativo Build Number': getValueOrDefault(
					device.computer.operatingSystem?.buildNumber,
					NO_ESPECIFICADO
				),
				'Sistema Operativo Version': getValueOrDefault(
					device.computer.operatingSystem?.version,
					NO_ESPECIFICADO
				),
				Arquitectura: getValueOrDefault(device.computer.operatingSystemArq?.name, SIN_ARQUITECTURA)
			}
		}

		return baseDataset
	})
}
