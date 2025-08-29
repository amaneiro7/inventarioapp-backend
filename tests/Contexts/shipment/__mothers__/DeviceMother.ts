import { type DeviceDto } from '../../../../src/Contexts/Device/Device/domain/Device.dto'
import { CategoryDefault } from '../../../../src/Contexts/Category/Category/domain/CategoryDefaultValues'
import { StatusOptions } from '../../../../src/Contexts/Device/Status/domain/StatusOptions'

export class DeviceMother {
	static computer(id: string): DeviceDto {
		return {
			id,
			serial: `SERIAL-${id}`,
			activo: `ACTIVO-${id}`,
			status: { id: '1', name: StatusOptions.INUSE },
			category: { id: '1', name: CategoryDefault.COMPUTERS },
			brand: { id: '1', name: 'HP' },
			model: { id: '1', name: 'EliteBook' },
			observation: '',
			computer: {
				id: `C-${id}`,
				computerName: `PC-${id}`,
				processor: { id: '1', name: 'Intel Core i5' },
				memoryRam: [{ id: '1', name: '8GB' }],
				memoryRamCapacity: 8,
				hardDriveCapacity: { id: '1', name: '256GB' },
				hardDriveType: { id: '1', name: 'SSD' },
				operatingSystem: { id: '1', name: 'Windows 10' },
				operatingSystemArq: { id: '1', name: 'x64' },
				macAddress: `MAC-${id}`,
				ipAddress: `192.168.1.1`
			},
			hardDrive: null
		}
	}

	static hardDrive(id: string): DeviceDto {
		return {
			id,
			serial: `SERIAL-HD-${id}`,
			activo: `ACTIVO-HD-${id}`,
			status: { id: '2', name: StatusOptions.INALMACEN },
			category: { id: '2', name: CategoryDefault.HARDDRIVE },
			brand: { id: '2', name: 'Seagate' },
			model: { id: '2', name: 'Barracuda' },
			observation: '',
			computer: null,
			hardDrive: {
				id: `HD-${id}`,
				health: 'Good',
				hardDriveCapacity: { id: '2', name: '1TB' },
				hardDriveType: { id: '2', name: 'HDD' }
			}
		}
	}
}
