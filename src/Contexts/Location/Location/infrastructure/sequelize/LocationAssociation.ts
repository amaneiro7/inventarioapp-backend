import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type FindOptions } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

export class LocationAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'site', // 0
				required: true,
				include: [
					{
						association: 'city', // 0 - 0
						required: true,
						include: [
							{
								association: 'state', // 0 - 0 - 0
								required: true,
								include: [
									{
										association: 'region', // 0 - 0 - 0 - 0
										required: true,
										include: [
											{
												association: 'administrativeRegion',
												required: true
											}
										]
									}
								]
							}
						]
					}
				]
			},
			'typeOfSite', // 1
			'locationStatus' // 2
		]
		// Poder filtrar por direccion
		if (options.where && 'subnet' in options.where) {
			const subnet = options.where.subnet
			const symbol = Object.getOwnPropertySymbols(subnet)[0]
			const value: string = subnet[symbol] as string

			options.where.subnet = sequelize.literal(`subnet::text ILIKE '%${value}%'`)
		}

		// Poder filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[0] as any).include[0].where = {
				id: options.where.cityId
			}

			delete options.where?.cityId
		}
		// Poder filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[0] as any).include[0].include[0].where = {
				id: options.where.stateId
			}

			delete options.where?.stateId
		}
		// Poder filtrar por region
		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).include[0].include[0].include[0].where = {
				id: options.where.regionId
			}

			delete options.where?.regionId
		}
		// Poder filtrar por region Administrativa
		if (options.where && 'administrativeRegionId' in options.where) {
			;(options.include[0] as any).include[0].include[0].include[0].include[0].where = {
				id: options.where.administrativeRegionId
			}

			delete options.where?.administrativeRegionId
		}

		return options
	}
}
