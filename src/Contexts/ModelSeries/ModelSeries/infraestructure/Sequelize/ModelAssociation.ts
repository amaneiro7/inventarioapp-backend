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
		return options
	}
}
