import { type ModelSeriesDto } from '../../domain/dto/ModelSeries.dto'

/**
 * Interface que representa la estructura de datos para la exportación de modelos.
 */
export interface ClearModelDataset {
	Categoria: string
	Marca: string
	Modelo: string
	'Tipo de Memoria': string
	'Cantidad de Ranuras': string | number
	'Puerto VGA': string
	'Puerto HDMI': string
	'Puerto DVI': string
	'Adaptador Bluetooth': string
	'Adaptador Wifi': string
	'Modelo de Bateria': string
	'Tamaño de Pantalla': string
	'Modelo de Cartucho': string
	'Tipo de entrada': string
	'Lector de Huella': string
	'Fecha de Modificación': string
}

const DATE_FORMATTER = new Intl.DateTimeFormat('es-VE')

/**
 * Convierte un valor booleano a "Si", "No" o "N/A" si es nulo/indefinido.
 */
const toYesNo = (value: boolean | undefined | null): string => {
	if (value === undefined || value === null) return 'N/A'
	return value ? 'Si' : 'No'
}

/**
 * @description Transforma una lista de ModelSeries DTOs en un dataset aplanado para exportación Excel.
 * @param {{ models: ModelSeriesDto[] }} params - Los modelos a transformar.
 * @returns {ClearModelDataset[]} Array de datos de modelos formateados.
 */
export function clearModelDataset({ models }: { models: ModelSeriesDto[] }): ClearModelDataset[] {
	return models.map(model => {
		const comp = model.modelComputer
		const laptop = model.modelLaptop
		const monitor = model.modelMonitor
		const isHardware = !!(comp || laptop || monitor)

		return {
			Categoria: model?.category?.name || 'N/A',
			Marca: model?.brand?.name || 'N/A',
			Modelo: model?.name || 'N/A',
			'Tipo de Memoria': (comp?.memoryRamType?.name || laptop?.memoryRamType?.name) ?? 'N/A',
			'Cantidad de Ranuras': (comp?.memoryRamSlotQuantity || laptop?.memoryRamSlotQuantity) ?? 'N/A',
			'Puerto VGA': isHardware ? toYesNo(comp?.hasVGA || laptop?.hasVGA || monitor?.hasVGA) : 'N/A',
			// FIX: Antes HDMI validaba hasDVI y DVI validaba hasHDMI
			'Puerto HDMI': isHardware ? toYesNo(comp?.hasHDMI || laptop?.hasHDMI || monitor?.hasHDMI) : 'N/A',
			'Puerto DVI': isHardware ? toYesNo(comp?.hasDVI || laptop?.hasDVI || monitor?.hasDVI) : 'N/A',
			'Adaptador Bluetooth': comp || laptop ? toYesNo(comp?.hasBluetooth || laptop?.hasBluetooth) : 'N/A',
			'Adaptador Wifi': comp || laptop ? toYesNo(comp?.hasWifiAdapter || laptop?.hasWifiAdapter) : 'N/A',
			'Modelo de Bateria': laptop?.batteryModel ?? 'N/A',
			'Tamaño de Pantalla': monitor ? `${monitor.screenSize} pulgadas` : 'N/A',
			'Modelo de Cartucho': model.modelPrinter?.cartridgeModel ?? 'N/A',
			'Tipo de entrada': (model.modelKeyboard?.inputType?.name || model.modelMouse?.inputType?.name) ?? 'N/A',
			'Lector de Huella': model.modelKeyboard ? toYesNo(model.modelKeyboard.hasFingerPrintReader) : 'N/A',
			'Fecha de Modificación': model.updatedAt ? DATE_FORMATTER.format(new Date(model.updatedAt)) : 'Sin Fecha'
		}
	})
}
