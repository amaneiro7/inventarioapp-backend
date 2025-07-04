import { Op, type FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/MonitoringStatus'

export class LocationMonitoringDashboardByLocationAssociation {
	static buildDashboardFindOptions(criteria: Criteria, options: FindOptions): FindOptions {
		options.attributes = [
			[sequelize.col('status'), 'statusName'],
			[sequelize.col('location.site.city.state.region.administrativeRegion.name'), 'admRegionName'],
			[sequelize.col('location.site.name'), 'siteName'],
			[sequelize.col('location.name'), 'locationName'],
			[sequelize.fn('COUNT', sequelize.col('*')), 'count']
		]
		options.include = [
			{
				association: 'location', // 0
				where: {
					locationStatusId: LocationStatusOptions.OPERATIONAL,
					subnet: { [Op.ne]: null }
				},
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
		options.group = [
			'status',
			'location.id',
			'location.site.city.state.region.administrativeRegion.name',
			'location.site.name',
			'location.name'
		]
		options.raw = true

		options.where = {
			...options.where,
			status: {
				[Op.ne]: MonitoringStatuses.NOTAVAILABLE
			}
		}

		if (options.where && 'name' in options.where) {
			;(options.include[0] as any).where = {
				name: (options.where as any)?.name
			}
			delete options.where.name
		}

		// Poder filtrar por direccion
		if (options.where && 'subnet' in options.where) {
			const subnet = options.where.subnet
			const symbol = Object.getOwnPropertySymbols(subnet)[0]
			const value: string = subnet[symbol] as string

			;(options.include[0] as any).where = {
				subnet: sequelize.literal(`subnet::text ILIKE '%${value}%'`)
			}

			delete options.where.subnet
		}

		// Poder filtrar por ubicacion - Tipo de sitio
		if (options.where && 'typeOfSiteId' in options.where) {
			;(options.include[0] as any).where = {
				typeOfSiteId: (options.where as any)?.typeOfSiteId
			}
			delete options.where?.typeOfSiteId
		}

		if (options.where && 'siteId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].where = {
				id: (options.where as any)?.siteId
			}
			delete options.where?.siteId
		}

		// Poder filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[0].where = {
				id: options.where.cityId
			}

			delete options.where?.cityId
		}

		// Poder filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[0].include[0].where = {
				id: options.where.stateId
			}

			delete options.where?.stateId
		}

		// Poder filtrar por region
		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[0].include[0].include[0].where = {
				id: (options.where as any)?.regionId
			}

			delete options.where?.regionId
		}
		// Poder filtrar por region administrativa
		if (options.where && 'administrativeRegionId' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[0].include[0].include[0].include[0].where = {
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
