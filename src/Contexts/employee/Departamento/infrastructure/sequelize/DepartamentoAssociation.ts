import { type FindOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class DepartamentoAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		;(options.attributes = ['id', 'name', 'createdAt', 'updatedAt']),
			(options.include = [
				{
					association: 'vicepresidenciaEjecutiva',
					attributes: ['name'],
					include: [
						{
							association: 'directiva',
							attributes: ['id', 'name']
						}
					]
				},
				{
					association: 'centroCosto',
					attributes: ['id', 'name']
				},
				{
					association: 'cargos',
					attributes: ['id', 'name'],
					through: { attributes: [] }
				},
				'employee'
			])

		return options
	}
}
