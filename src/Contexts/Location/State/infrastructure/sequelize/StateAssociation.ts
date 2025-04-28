import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class StateAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'region', // 0
				required: true,
				include: [
					{
						association: 'administrativeRegion', // 0 - 0
						required: true,
						attributes: []
					}
				]
			}
		]

		if (options.where && 'administrativeRegionId' in options.where) {
			;(options.include[0] as any).where = {
				administrativeRegionId: options.where.administrativeRegionId
			}
			delete options.where.administrativeRegionId
		}

		return options
	}
}
