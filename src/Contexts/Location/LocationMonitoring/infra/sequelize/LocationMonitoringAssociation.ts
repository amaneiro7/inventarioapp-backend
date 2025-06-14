import { Op, type FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { LocationStatusOptions } from '../../../LocationStatus/domain/LocationStatusOptions'
import { LocationMonitoringStatuses } from '../../domain/valueObject/LocationMonitoringStatus'

export class LocationMonitoringAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'location', // 0
				required: true,
				where: {
					locationStatusId: LocationStatusOptions.OPERATIONAL,
					subnet: { [Op.ne]: null }
				},
				include: [
					{
						association: 'typeOfSite', // 0 - 0
						attributes: []
					},
					{
						association: 'site', // 0 - 1
						required: true,
						include: [
							{
								association: 'city', // 0 - 1 - 0
								required: true,
								include: [
									{
										association: 'state', // 0 - 1 - 0
										required: true,
										include: [
											{
												association: 'region', // 0 - 1 - 0 - 0
												required: true,

												include: [
													{
														association: 'administrativeRegion', // 0 - 1 - 0 - 0 - 0
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

		if (!criteria.searchValueInArray('status')) {
			options.where = {
				...options.where,
				status: {
					[Op.ne]: LocationMonitoringStatuses.NOTAVAILABLE
				}
			}
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
		// Poder filtrar por nombre estado
		if (options.where && 'stateName' in options.where) {
			;(options.include[0] as any).required = true
			;(options.include[0] as any).include[1].include[0].include[0].where = {
				name: options.where.stateName
			}

			delete options.where?.stateName
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
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: ['location', 'site', 'city', 'state', 'region', 'administrativeRegion', 'name'],
			subnet: ['location', 'subnet'],
			name: ['location', 'name']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
