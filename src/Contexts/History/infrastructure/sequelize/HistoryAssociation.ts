import { FindOptions } from 'sequelize'
import { Criteria } from '../../../Shared/domain/criteria/Criteria'

export class HistoryAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'user', // 0
				attributes: ['id', 'name', 'email', 'lastName', 'roleId']
			},
			'employee', // 1
			{
				association: 'device', // 2
				include: ['category']
			}
		]

		if (options.where && 'serial' in options.where) {
			;(options.include[2] as any).where = {
				serial: options.where.serial
			}
			delete options.where.serial
		}
		if (options.where && 'categoryId' in options.where) {
			;(options.include[2] as any).where = {
				categoryId: options.where.categoryId
			}
			delete options.where.categoryId
		}
		options.order = this.transformOrder(options.order)
		return options
	}

	private static transformOrder(order: FindOptions['order']): FindOptions['order'] {
		if (!order || !Array.isArray(order)) return undefined

		const orderMap: Record<string, string[]> = {
			employeeId: ['employee', 'userName'],
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			ipAddress: ['computer', 'ipAddress'],
			categoryId: ['category', 'name'],
			computerName: ['computer', 'computerName'],
			memoryRamCapacity: ['computer', 'memoryRamCapacity'],
			processorId: ['computer', 'processor', 'name'],
			operatingSystemId: ['computer', 'operatingSystem', 'name'],
			operatingSystemArqId: ['computer', 'operatingSystemArq', 'name'],
			hardDriveCapacityId: ['computer', 'hardDriveCapacity', 'name'],
			hardDriveTypeId: ['computer', 'hardDriveType', 'name'],
			brandId: ['brand', 'name'],
			modelId: ['model', 'name']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
