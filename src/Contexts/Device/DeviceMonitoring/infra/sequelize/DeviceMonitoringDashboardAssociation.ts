import { Op, type FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { StatusList } from '../../../Status/domain/StatusList'

export class DeviceMonitoringDashboardAssociation {
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [
			{
				association: 'device', // 0
				where: {
					statusId: StatusList.INUSE
				},
				include: [
					{
						association: 'computer', // 0 - 0
						where: {
							ipAddress: { [Op.ne]: null }
						},
						required: true,
						attributes: ['computerName', 'ipAddress']
					},
					{
						association: 'location', // 0 - 1
						required: true,
						include: [
							{
								association: 'typeOfSite', // 0 - 1 - 0
								attributes: []
							},
							{
								association: 'site', // 0 - 1 - 1
								required: true,
								attributes: [],
								include: [
									{
										association: 'city', // 0 - 1 - 1 - 0
										required: true,
										attributes: [],
										include: [
											{
												association: 'state', // 0 - 1 - 1 - 1
												required: true,
												attributes: [],
												include: [
													{
														association: 'region', // 0 - 1 - 1 - 1 - 0
														required: true,
														attributes: [],

														include: [
															{
																association: 'administrativeRegion', // 0 - 1 - 1 - 1 - 0 - 0
																required: true,
																attributes: []
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
		options.group = ['status', 'device.id', 'device.computer.id', 'device.location.id']
		options.raw = true

		if (options.where && 'computerName' in options.where) {
			;(options.include[0] as any).include[0].where = {
				computerName: (options.where as any)?.computerName
			}
			delete options.where.computerName
		}

		// Poder filtrar por direccion
		if (options.where && 'ipAddress' in options.where) {
			const ipAddress = options.where.ipAddress
			const symbol = Object.getOwnPropertySymbols(ipAddress)[0]
			const value: string = ipAddress[symbol] as string

			;(options.include[0] as any).include[0].where = {
				ipAddress: sequelize.literal(`ip_address::text ILIKE '%${value}%'`)
			}

			delete options.where.ipAddress
		}

		// Poder filtrar por ubicacion - Tipo de sitio
		if (options.where && 'typeOfSiteId' in options.where) {
			;(options.include[0] as any).include[1].where = {
				typeOfSiteId: (options.where as any)?.typeOfSiteId
			}
			delete options.where?.typeOfSiteId
		}

		// Poder filtrar por ubicacion - por sitio
		if (options.where && 'locationId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).where = {
				locationId: (options.where as any)?.locationId
			}
			delete options.where?.locationId
		}
		if (options.where && 'siteId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[1].where = {
				id: (options.where as any)?.siteId
			}
			delete options.where?.siteId
		}

		// Poder filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[1].include[0].where = {
				id: options.where.cityId
			}

			delete options.where?.cityId
		}

		// Poder filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[1].include[0].include[0].where = {
				id: options.where.stateId
			}

			delete options.where?.stateId
		}

		// Poder filtrar por region
		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[1].include[0].include[0].include[0].where = {
				id: (options.where as any)?.regionId
			}

			delete options.where?.regionId
		}
		// Poder filtrar por region administrativa
		if (options.where && 'administrativeRegionId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[1].include[0].include[0].include[0].include[0].where = {
				id: (options.where as any)?.administrativeRegionId
			}

			delete options.where?.administrativeRegionId
		}

		options.order = this.transformOrder(options.order)

		return options
	}

	private static transformOrder(order: FindOptions['order']): FindOptions['order'] {
		if (!order || !Array.isArray(order)) return undefined

		const orderMap: Record<string, string[]> = {
			locationId: ['device', 'location', 'name'],
			cityId: ['device', 'location', 'site', 'city', 'name'],
			stateId: ['device', 'location', 'site', 'city', 'state', 'name'],
			regionId: ['device', 'location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: [
				'device',
				'location',
				'site',
				'city',
				'state',
				'region',
				'administrativeRegion',
				'name'
			],
			ipAddress: ['device', 'computer', 'ipAddress'],
			computerName: ['device', 'computer', 'computerName']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
