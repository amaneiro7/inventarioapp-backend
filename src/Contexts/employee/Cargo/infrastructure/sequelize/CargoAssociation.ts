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

		// FIlrar por departamentos
		if (options.where && 'departamentoId' in options.where) {
			;(options.include[0] as any).where = {
				id: options.where.departamentoId
			}
			delete options.where.departamentoId
		}

		return options
	}
}
