import { type Order, type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
/**
 * @description A utility class to build complex Sequelize query options for the ModelSeries model.
 */
export class ModelAssociation {
	/**
	 * @description Converts a Criteria object into a fully configured Sequelize FindOptions object.
	 * @param {Criteria} criteria The criteria object containing filters and ordering.
	 * @param {FindOptions} options The base FindOptions to be modified.
	 * @returns {FindOptions} The configured Sequelize FindOptions object.
	 */
	convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const whereFilters = { ...options.where } // Clone to avoid direct mutation
		const mainCategoryInclude: IncludeOptions = {
			association: 'mainCategory'
		}
		const categoryInclude: IncludeOptions = {
			association: 'category',
			include: [mainCategoryInclude]
		}
		const brandInclude: IncludeOptions = {
			association: 'brand',
			attributes: ['id', 'name']
		}
		const modelPrinterInclude: IncludeOptions = { association: 'modelPrinter', attributes: ['cartridgeModel'] }
		const modelMonitorInclude: IncludeOptions = {
			association: 'modelMonitor',
			attributes: ['screenSize', 'hasDVI', 'hasHDMI', 'hasVGA']
		}
		const modelLaptopInclude: IncludeOptions = {
			association: 'modelLaptop',
			include: ['memoryRamType'],
			attributes: [
				'memoryRamTypeId',
				'memoryRamSlotQuantity',
				'hasBluetooth',
				'hasWifiAdapter',
				'hasDVI',
				'hasHDMI',
				'hasVGA',
				'batteryModel'
			]
		}
		const modelComputerInclude: IncludeOptions = {
			association: 'modelComputer',
			include: ['memoryRamType'],
			attributes: [
				'memoryRamTypeId',
				'memoryRamSlotQuantity',
				'hasBluetooth',
				'hasWifiAdapter',
				'hasDVI',
				'hasHDMI',
				'hasVGA'
			]
		}
		const modelKeyboardInclude: IncludeOptions = {
			association: 'modelKeyboard',
			include: ['inputType'],
			attributes: ['inputTypeId', 'hasFingerPrintReader']
		}
		const modelMouseInclude: IncludeOptions = {
			association: 'modelMouse',
			include: ['inputType'],
			attributes: ['inputTypeId']
		}
		options.include = [
			categoryInclude,
			brandInclude,
			modelPrinterInclude,
			modelMonitorInclude,
			modelLaptopInclude,
			modelComputerInclude,
			modelKeyboardInclude,
			modelMouseInclude
		]

		if ('mainCategoryId' in whereFilters) {
			categoryInclude.where = {
				mainCategoryId: whereFilters.mainCategoryId
			}
			delete whereFilters.mainCategoryId
		}
		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters

		// --- 3. Order Transformation ---
		// The `transformOrder` method correctly maps frontend field names (e.g., 'cityId')
		// to the nested Sequelize structure required for sorting on associated tables.
		options.order = this.transformOrder(options.order)
		return options
	}

	/**
	 * @private
	 * @method transformOrder
	 * @description Transforms a simple order format (e.g., ['cityId', 'ASC']) into a nested format
	 * that Sequelize can use for ordering on associated tables (e.g., ['location', 'site', 'city', 'name', 'ASC']).
	 *
	 * @param {Order | undefined} order The order configuration from the criteria.
	 * @returns {Order | undefined} A Sequelize-compatible nested order configuration.
	 */
	private transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

		const orderMap: Record<string, string[]> = {
			categoryId: ['category', 'name'],
			brandId: ['brand', 'name'],
			mainCategoryId: ['category', 'mainCategory', 'name']
		}
		const transformedOrder = (order as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			// If a mapping exists, use the nested path. Otherwise, use the original field name.
			return mappedPath ? [...mappedPath, direction] : [field, direction]
		})

		return transformedOrder as Order
	}
}
