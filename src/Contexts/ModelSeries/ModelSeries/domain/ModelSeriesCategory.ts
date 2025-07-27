import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeries } from './ModelSeries'
import { type CategoryRepository } from '../../../Category/Category/domain/CategoryRepository'
import { CategoryId } from '../../../Category/Category/domain/CategoryId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { ComputerModels } from '../../ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { LaptopsModels } from '../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { MonitorModels } from '../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { ModelPrinters } from '../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { KeyboardModels } from '../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { MouseModels } from '../../ModelCharacteristics/Mouses/domain/MouseModels'

/**
 * @description Represents the category of a model series.
 */
export class ModelSeriesCategory extends CategoryId {
	/**
	 * @description Handles the logic for updating the category field of a model series.
	 * @param {{ repository: CategoryRepository; categoryId?: Primitives<CategoryId>; entity: ModelSeries }} params The parameters for updating.
	 */
	static async updateCategoryField(params: {
		repository: CategoryRepository
		categoryId?: Primitives<CategoryId>
		entity: ModelSeries
	}): Promise<void> {
		if (params.categoryId === undefined || params.entity.categoryIdValue === params.categoryId) {
			return
		}
		await this.ensureCategoryExist({ repository: params.repository, categoryId: params.categoryId })
		this.ensureCategoryMatchesModelType({ categoryId: params.categoryId, entity: params.entity })
		params.entity.updateCategoryId(params.categoryId)
	}

	/**
	 * @description Ensures that the specified category exists in the repository.
	 * @param repository The repository to search in.
	 * @param categoryId The ID of the category to check.
	 * @throws {Error} If the category does not exist.
	 */
	static async ensureCategoryExist({
		repository,
		categoryId
	}: {
		repository: CategoryRepository
		categoryId: Primitives<CategoryId>
	}): Promise<void> {
		const isCategoryExist = await repository.searchById(categoryId)
		if (!isCategoryExist) {
			throw new Error('La categoría no existe.')
		}
	}

	private static ensureCategoryMatchesModelType({
		categoryId,
		entity
	}: {
		categoryId: Primitives<CategoryId>
		entity: ModelSeries
	}): void {
		const isComputer = ComputerModels.isComputerCategory({ categoryId })
		const isLaptop = LaptopsModels.isLaptopCategory({ categoryId })
		const isMonitor = MonitorModels.isMonitorCategory({ categoryId })
		const isPrinter = ModelPrinters.isPrinterCategory({ categoryId })
		const isKeyboard = KeyboardModels.isKeyboardCategory({ categoryId })
		const isMouse = MouseModels.isMouseCategory({ categoryId })

		const isComputerModel = entity instanceof ComputerModels
		const isLaptopModel = entity instanceof LaptopsModels
		const isMonitorModel = entity instanceof MonitorModels
		const isPrinterModel = entity instanceof ModelPrinters
		const isKeyboardModel = entity instanceof KeyboardModels
		const isMouseModel = entity instanceof MouseModels

		if (isComputerModel && !isComputer) {
			throw new InvalidArgumentError(
				'La categoría solo puede ser de tipo Computadora, Servidor o Todo en Uno para este modelo.'
			)
		}
		if (isLaptopModel && !isLaptop) {
			throw new InvalidArgumentError('La categoría solo puede ser de tipo Laptop para este modelo.')
		}
		if (isMonitorModel && !isMonitor) {
			throw new InvalidArgumentError('La categoría solo puede ser de tipo Monitor para este modelo.')
		}
		if (isPrinterModel && !isPrinter) {
			throw new InvalidArgumentError('La categoría solo puede ser de tipo Impresora para este modelo.')
		}
		if (isKeyboardModel && !isKeyboard) {
			throw new InvalidArgumentError('La categoría solo puede ser de tipo Teclado para este modelo.')
		}
		if (isMouseModel && !isMouse) {
			throw new InvalidArgumentError('La categoría solo puede ser de tipo Ratón para este modelo.')
		}
	}
}
