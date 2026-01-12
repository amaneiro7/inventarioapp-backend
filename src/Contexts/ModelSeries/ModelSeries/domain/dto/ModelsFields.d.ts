import { type ComputerModelsField } from './ComputerModels.dto'
import { type ModelSeriesField } from './ModelSeries.dto'
import { type KeyboardModelsField } from './KeyboardModels.dto'
import { type LaptopModelsField } from './LaptopsModels.dto'
import { type PrinteModelsField } from './ModelPrinters.dto'
import { type MonitorModelsField } from './MonitoModels.dto'
import { type MouseModelsField } from './MouseModels.dto'

export type ModelsFields = Array<{
	field:
		| ModelSeriesField
		| ComputerModelsField
		| LaptopModelsField
		| MonitorModelsField
		| PrinteModelsField
		| KeyboardModelsField
		| MouseModelsField
	oldValue: unknown
	newValue: unknown
}>
