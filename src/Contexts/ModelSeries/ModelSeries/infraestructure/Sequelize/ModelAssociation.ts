import { FindOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class ModelAssociation {
	convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'category',
				include: ['mainCategory']
			},
			{
				association: 'brand',
				attributes: ['id', 'name']
			},
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
		if (options.where && 'mainCategoryId' in options.where) {
			;(options.include[0] as any).where = {
				mainCategoryId: options.where?.mainCategoryId
			}
			delete options.where.mainCategoryId
		}
		options.order = this.transformOrder(options.order)
		return options
	}

	private transformOrder(order: FindOptions['order']): FindOptions['order'] {
		if (!order || !Array.isArray(order)) return undefined

		const orderMap: Record<string, string[]> = {
			categoryId: ['category', 'name'],
			brandId: ['brand', 'name'],
			mainCategoryId: ['category', 'mainCategory', 'name']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
