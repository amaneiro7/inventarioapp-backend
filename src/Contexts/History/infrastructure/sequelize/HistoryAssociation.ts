import { FindOptions, Op } from 'sequelize'
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
		if (options.where && 'startDate' in options.where && 'endDate' in options.where) {
			options.where = {
				updatedAt: {
					[Op.between]: [options.where.startDate, options.where.endDate]
				}
			}
			delete options.where.startDate
			delete options.where.endDate
		}
		options.order = this.transformOrder(options.order)
		return options
	}

	private static transformOrder(order: FindOptions['order']): FindOptions['order'] {
		if (!order || !Array.isArray(order)) return undefined

		const orderMap: Record<string, string[]> = {
			serial: ['device', 'serial'],
			categoryId: ['device', 'category', 'name']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
