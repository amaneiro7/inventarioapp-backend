import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SiteAssociation {
	static converFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'city',
				include: [
					{
						association: 'state',
						include: ['region']
					}
				],
				required: true
			}
		]

		if (options.where && 'stateId' in options.where) {
			;(options.include[0] as any).where = {
				stateId: options.where.stateId
			}
			delete options.where.stateId
		}
		if (options.where && 'regionId' in options.where) {
			;(options.include[0] as any).include[0].where = {
				regionId: options.where.regionId
			}
			delete options.where.regionId
		}

		return options
	}
}
