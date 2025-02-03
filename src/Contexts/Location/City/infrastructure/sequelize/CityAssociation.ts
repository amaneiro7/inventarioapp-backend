import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class CityAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'state',
				include: ['region']
			}
		]

		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).where = {
				regionId: options.where.regionId
			}
			delete options.where.regionId
		}

		return options
	}
}
