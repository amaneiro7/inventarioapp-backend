import { CategoryDefault } from '../../../../Category/Category/domain/CategoryDefaultValues'
import { type DeviceDto } from '../../../../Device/Device/domain/dto/Device.dto'
import { type DeviceSnapshotData } from './DeviceSnapshot'

export class DeviceSnapshot {
	constructor(public readonly value: DeviceSnapshotData) {}

	static fromDeviceDto(deviceDto: DeviceDto): DeviceSnapshot {
		// Definimos las propiedades base que todos los snapshots tendrán
		const baseSnapshot = {
			id: deviceDto.id,
			serial: deviceDto.serial ?? 'Sin serial',
			activo: deviceDto.activo ?? 'Sin activo',
			status: deviceDto.status.name,
			categoryName: deviceDto.category.name,
			brandName: deviceDto.brand.name,
			modelName: deviceDto.model.name
		}

		// Usamos un switch para determinar el tipo de dispositivo
		// y crear el snapshot específico, garantizando la tipificación correcta.
		switch (deviceDto.category.name) {
			case CategoryDefault.COMPUTERS:
			case CategoryDefault.ALLINONE:
			case CategoryDefault.LAPTOPS:
			case CategoryDefault.SERVERS: {
				if (deviceDto.computer === null) {
					throw new Error('Los datos del computador son requeridos para un dispositivo de esta categoría.')
				}
				const computer = deviceDto.computer
				return new DeviceSnapshot({
					...baseSnapshot,
					computerName: computer.computerName ?? 'No especificado',
					processorName: computer.processor?.name ?? 'No especificado',
					memoryRam: computer.memoryRam ?? 'No especificado',
					memoryRamCapacity: computer.memoryRamCapacity ?? 'No especificado',
					hardDriveCapacity: computer.hardDriveCapacity?.name ?? 'No especificado',
					hardDriveType: computer.hardDriveType?.name ?? 'No especificado',
					operatingSystem: computer.operatingSystem?.name ?? 'No especificado',
					operatingSystemArq: computer.operatingSystemArq?.name ?? 'No especificado',
					macAddress: computer.macAddress ?? 'No asignada',
					ipAddress: computer.ipAddress ?? 'No asignada'
				})
			}
			case CategoryDefault.HARDDRIVE: {
				if (deviceDto.hardDrive === null) {
					throw new Error('Los datos del disco duro son requeridos para un dispositivo de esta categoría.')
				}
				const hardDrive = deviceDto.hardDrive
				return new DeviceSnapshot({
					...baseSnapshot,
					health: hardDrive.health,
					hardDriveCapacity: hardDrive.hardDriveCapacity.name,
					hardDriveType: hardDrive.hardDriveType.name
				})
			}
			default:
				return new DeviceSnapshot({
					...baseSnapshot
				})
		}
	}
}
