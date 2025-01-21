import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { lastHistoryUpdated } from '../../../../Shared/domain/LastHistoryUpdated'
import {
	type ClearDefaultDataset,
	type ClearComputerDataset,
	type DevicesApiResponse
} from './DeviceResponse'

export function clearComputerDataset({
	devices
}: {
	devices: DevicesApiResponse[]
}): ClearComputerDataset[] | ClearDefaultDataset[] {
	if (
		devices.every(
			device =>
				device.category.mainCategoryId === MainCategoryList.COMPUTER
		)
	) {
		return devices.map(device => ({
			id: device?.id,
			Usuario: device?.employee?.userName ?? 'Sin Asignar',
			Nombre: device?.employee?.name,
			Apellido: device?.employee?.lastName,
			Cédula: `${device?.employee?.nationality}-${device?.employee?.cedula}`,
			'Código de Empleado': device?.employee?.employeeCode,
			'Cod. Centro de Trabajo': device?.employee?.centroTrabajo?.id,
			'Centro de Trabajo': device?.employee?.centroTrabajo?.name,
			Departamento: device?.employee?.departamento?.name,
			Cargo: device?.employee?.cargo?.name,
			Ubicación: device?.location?.name,
			'Direccion IP': device?.computer?.ipAddress ?? '',
			Serial: device?.serial ?? 'Sin Serial',
			Activo: device?.activo ?? 'Sin Activo',
			Estatus: device?.status?.name,
			Categoria: device?.category?.name,
			Marca: device?.brand?.name,
			Modelo: device?.model?.name,
			'Nombre de Equipo': device?.computer?.computerName ?? '',
			Procesador: device?.computer?.processor?.name ?? 'Sin Procesador',
			'Memoria Ram Total': device?.computer?.memoryRamCapacity,
			'Slot de Memoria Ram': device?.computer?.memoryRam
				.map(mem => mem)
				.join('_'),
			'Tipo de Memoria Ram': device?.model?.modelComputer
				? device?.model?.modelComputer?.memoryRamType?.name
				: device?.model.modelLaptop
					? device?.model?.modelLaptop?.memoryRamType?.name
					: null,
			'Disco Duro Total': device?.computer?.hardDriveCapacity?.name ?? '',
			'Tipo de Disco Duro': device?.computer?.hardDriveType?.name ?? '',
			'Sistema Operativo': device?.computer?.operatingSystem?.name ?? '',
			Arquitectura: device?.computer?.operatingSystemArq?.name ?? '',
			Observación: device?.observation,
			'Actualizado por':
				lastHistoryUpdated(device?.history)?.user?.email ?? 'root',
			'Fecha de Modificacion': new Date(
				device?.updatedAt
			).toLocaleDateString()
		}))
	}
	return devices.map(device => ({
		id: device?.id,
		Usuario: device?.employee?.userName ?? 'Sin Asignar',
		Ubicación: device?.location?.name,
		Serial: device?.serial ?? 'Sin Serial',
		Activo: device?.activo ?? 'Sin Activo',
		Estatus: device?.status?.name,
		Categoria: device?.category?.name,
		Marca: device?.brand?.name,
		Modelo: device?.model?.name,
		Observación: device?.observation,
		'Actualizado por':
			lastHistoryUpdated(device?.history)?.user?.email ?? 'root',
		'Fecha de Modificacion': new Date(
			device?.updatedAt
		).toLocaleDateString()
	}))
}
