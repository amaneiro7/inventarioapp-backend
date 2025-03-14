import { type FindOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class CargoAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'departamentos',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			'employee'
		]

		return options
	}
}
