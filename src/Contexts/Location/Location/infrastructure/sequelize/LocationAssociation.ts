import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

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
										include: ['administrativeRegion']
									}
								]
							}
						]
					}
				]
			},
			'typeOfSite' // 1
		]
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

		return options
	}
}
