import { type FindOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class DepartamentoAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'vicepresidencia',
				attributes: ['id', 'name'],
				include: [
					{
						association: 'vicepresidenciaEjecutiva',
						attributes: ['id', 'name'],
						include: [
							{
								association: 'directiva',
								attributes: ['id', 'name']
							}
						]
					}
				]
			},
			{
				association: 'cargos',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			'employee'
		]

		return options
	}
}
