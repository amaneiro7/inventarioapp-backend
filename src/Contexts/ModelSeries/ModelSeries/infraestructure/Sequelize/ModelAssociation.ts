import { type Order, type FindOptions, type IncludeOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class ModelAssociation
 * @description A utility class to build complex Sequelize query options for the ModelSeries model.
 */
export class ModelAssociation {
	/**
	 * @description Converts a Criteria object into a fully configured Sequelize FindOptions object.
	 * @param {Criteria} criteria The criteria object containing filters and ordering.
	 * @param {FindOptions} options The base FindOptions to be modified.
	 * @returns {FindOptions} The configured Sequelize FindOptions object.
	 */
	public static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		const mainCategoryInclude: IncludeOptions = { association: 'mainCategory', required: true }
		const categoryInclude: IncludeOptions = {
			association: 'category',
			attributes: ['id', 'name', 'mainCategoryId'],
			required: true,
			include: [mainCategoryInclude]
		}
		const brandInclude: IncludeOptions = { association: 'brand', attributes: ['id', 'name'] }

		options.include = [
			categoryInclude,
			brandInclude,
			{ association: 'modelPrinter', attributes: ['cartridgeModel'] },
			{ association: 'modelMonitor', attributes: ['screenSize', 'hasDVI', 'hasHDMI', 'hasVGA'] },
			{
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
			},
			{
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
			},
			{
				association: 'modelKeyboard',
				include: ['inputType'],
				attributes: ['inputTypeId', 'hasFingerPrintReader']
			},
			{ association: 'modelMouse', include: ['inputType'], attributes: ['inputTypeId'] }
		]

		const whereFilters = options.where ?? {}

		if ('mainCategoryId' in whereFilters) {
			categoryInclude.required = true
			mainCategoryInclude.where = { id: whereFilters.mainCategoryId }
			// We make it required here because filtering by a nested association implies an INNER JOIN is desired.
			mainCategoryInclude.required = true
			delete whereFilters.mainCategoryId
		}

		// --- CRITICAL FIX FOR ORDERING ---
		// If ordering by a field in an associated table, that association MUST be required
		// to ensure an INNER JOIN is performed, making the table available for the ORDER BY clause.

		options.order = this.transformOrder(options.order)

		// Clean up custom filter keys
		options.where = whereFilters

		return options
	}

	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!Array.isArray(order) || order.length === 0) {
			return undefined
		}

		const orderMap: Record<string, string[]> = {
			categoryId: ['category', 'name'],
			mainCategoryId: ['category', 'mainCategory', 'name'],
			brandId: ['brand', 'name']
		}

		const orderTuples = order.flat().length === 2 && typeof order[0] === 'string' ? [order] : order

		const transformedOrder = (orderTuples as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			return mappedPath ? [...mappedPath, direction.toUpperCase()] : [field, direction.toUpperCase()]
		})

		return transformedOrder as Order
	}
}
