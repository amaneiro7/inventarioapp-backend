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

function getValueOrDefault<T>(value: T | null | undefined, defaultValue: string): T | string {
	return value ?? defaultValue
}

export function clearComputerDataset({
	devices
}: {
	devices: DeviceDto[]
}): ClearComputerDataset[] | ClearDefaultDataset[] {
	return devices.map(device => {
		const baseDataset = {
			id: device?.id,
			Usuario: getValueOrDefault(device?.employee?.userName, SIN_ASIGNAR),
			Ubicación: getValueOrDefault(device?.location?.name, SIN_ASIGNAR),
			Serial: getValueOrDefault(device?.serial, SIN_SERIAL),
			Activo: getValueOrDefault(device?.activo, SIN_ACTIVO),
			Estatus: getValueOrDefault(device?.status?.name, SIN_ASIGNAR),
			Categoria: getValueOrDefault(device?.category?.name, SIN_ASIGNAR),
			Marca: getValueOrDefault(device?.brand?.name, SIN_ASIGNAR),
			Modelo: getValueOrDefault(device?.model?.name, SIN_ASIGNAR),
			Observación: getValueOrDefault(device?.observation, SIN_OBSERVACION),
			'Actualizado por': getValueOrDefault(lastHistoryUpdated(device?.history)?.user?.email, ROOT_USER),
			'Fecha de Modificacion': device?.updatedAt ? new Date(device.updatedAt).toLocaleDateString() : SIN_ASIGNAR
		}

		if (device.category.mainCategoryId === MainCategoryList.COMPUTER) {
			return {
				...baseDataset,
				Nombre: getValueOrDefault(device?.employee?.name, SIN_ASIGNAR),
				Apellido: getValueOrDefault(device?.employee?.lastName, SIN_ASIGNAR),
				Cédula:
					device?.employee?.nationality && device?.employee?.cedula
						? `${device.employee.nationality}-${device.employee.cedula}`
						: SIN_ASIGNAR,
				'Código de Empleado': getValueOrDefault(device?.employee?.employeeCode, SIN_ASIGNAR),
				Departamento: getValueOrDefault(device?.employee?.departamento?.name, SIN_ASIGNAR),
				Cargo: getValueOrDefault(device?.employee?.cargo?.name, SIN_ASIGNAR),
				'Direccion IP': getValueOrDefault(device?.computer?.ipAddress, SIN_ASIGNAR),
				'Nombre de Equipo': getValueOrDefault(device?.computer?.computerName, SIN_ASIGNAR),
				Procesador: getValueOrDefault(device?.computer?.processor?.name, SIN_PROCESADOR),
				'Memoria Ram Total': device?.computer?.memoryRamCapacity ?? SIN_ASIGNAR,
				'Slot de Memoria Ram': device?.computer?.memoryRam?.map(mem => mem).join('_') ?? SIN_ASIGNAR,
				'Tipo de Memoria Ram':
					device?.model?.modelComputer?.memoryRamType?.name ??
					device?.model?.modelLaptop?.memoryRamType?.name ??
					SIN_TIPO,
				'Disco Duro Total': getValueOrDefault(device?.computer?.hardDriveCapacity?.name, SIN_ASIGNAR),
				'Tipo de Disco Duro': getValueOrDefault(device?.computer?.hardDriveType?.name, SIN_ASIGNAR),
				'Sistema Operativo': getValueOrDefault(device?.computer?.operatingSystem?.name, SIN_ASIGNAR),
				Arquitectura: getValueOrDefault(device?.computer?.operatingSystemArq?.name, SIN_ASIGNAR)
			} as ClearComputerDataset
		}

		return baseDataset as ClearDefaultDataset
	})
	// if (devices.every(device => device.category.mainCategoryId === MainCategoryList.COMPUTER)) {
	// 	return devices.map(device => ({
	// 		id: device?.id,
	// 		Usuario: device?.employee?.userName ?? 'Sin Asignar',
	// 		Nombre: device?.employee?.name ?? '',
	// 		Apellido: device?.employee?.lastName ?? '',
	// 		Cédula: `${device?.employee?.nationality}-${device?.employee?.cedula}`,
	// 		'Código de Empleado': device?.employee?.employeeCode,
	// 		Departamento: device?.employee?.departamento?.name,
	// 		Cargo: device?.employee?.cargo?.name,
	// 		Ubicación: device?.location?.name,
	// 		'Direccion IP': device?.computer?.ipAddress ?? '',
	// 		Serial: device?.serial ?? 'Sin Serial',
	// 		Activo: device?.activo ?? 'Sin Activo',
	// 		Estatus: device?.status?.name,
	// 		Categoria: device?.category?.name,
	// 		Marca: device?.brand?.name,
	// 		Modelo: device?.model?.name,
	// 		'Nombre de Equipo': device?.computer?.computerName ?? '',
	// 		Procesador: device?.computer?.processor?.name ?? 'Sin Procesador',
	// 		'Memoria Ram Total': device?.computer?.memoryRamCapacity,
	// 		'Slot de Memoria Ram': device?.computer?.memoryRam.map(mem => mem).join('_'),
	// 		'Tipo de Memoria Ram': device?.model?.modelComputer
	// 			? device?.model?.modelComputer?.memoryRamType?.name
	// 			: device?.model.modelLaptop
	// 			? device?.model?.modelLaptop?.memoryRamType?.name
	// 			: null,
	// 		'Disco Duro Total': device?.computer?.hardDriveCapacity?.name ?? '',
	// 		'Tipo de Disco Duro': device?.computer?.hardDriveType?.name ?? '',
	// 		'Sistema Operativo': device?.computer?.operatingSystem?.name ?? '',
	// 		Arquitectura: device?.computer?.operatingSystemArq?.name ?? '',
	// 		Observación: device?.observation,
	// 		'Actualizado por': lastHistoryUpdated(device?.history)?.user?.email ?? 'root',
	// 		'Fecha de Modificacion': new Date(device?.updatedAt).toLocaleDateString()
	// 	}))
	// }
	// return devices.map(device => ({
	// 	id: device?.id,
	// 	Usuario: device?.employee?.userName ?? 'Sin Asignar',
	// 	Ubicación: device?.location?.name,
	// 	Serial: device?.serial ?? 'Sin Serial',
	// 	Activo: device?.activo ?? 'Sin Activo',
	// 	Estatus: device?.status?.name,
	// 	Categoria: device?.category?.name,
	// 	Marca: device?.brand?.name,
	// 	Modelo: device?.model?.name,
	// 	Observación: device?.observation,
	// 	'Actualizado por': lastHistoryUpdated(device?.history)?.user?.email ?? 'root',
	// 	'Fecha de Modificacion': new Date(device?.updatedAt).toLocaleDateString()
	// }))
}
