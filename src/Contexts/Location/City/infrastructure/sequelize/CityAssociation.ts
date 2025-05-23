import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class CityAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'state', // 0
				required: true,
				include: [
					{
						association: 'region', // 0 - 0
						required: true,
						include: [
							{
								association: 'administrativeRegion', // 0 - 0 - 0
								required: true,
								attributes: []
							}
						]
					}
				]
			}
		]

		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).where = {
				regionId: options.where.regionId
			}
			delete options.where.regionId
		}
		if (options.where && 'administrativeRegionId' in options.where) {
			;(options.include[0] as any).include[0].where = {
				administrativeRegionId: options.where.administrativeRegionId
			}
			delete options.where.administrativeRegionId
		}

		return options
	}
}
