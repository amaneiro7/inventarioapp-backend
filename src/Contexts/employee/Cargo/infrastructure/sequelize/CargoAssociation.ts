import { type FindOptions } from 'sequelize'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class CargoAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'directivas',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			{
				association: 'vicepresidenciaEjecutivas',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			{
				association: 'vicepresidencias',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			{
				association: 'departamentos',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			'employee'
		]

		// Filtrar por departamentos
		if (options.where && 'departamentoId' in options.where) {
			;(options.include[0] as any).where = {
				id: options.where.departamentoId
			}
			delete options.where.departamentoId
		}

		return options
	}
}
