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
		return options
	}
}
