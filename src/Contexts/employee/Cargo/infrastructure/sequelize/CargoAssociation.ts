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
			{
				association: 'vicepresidencias',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			{
				association: 'vicepresidenciaEjecutivas',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			},
			{
				association: 'directivas',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			}
			// 'employee'
		]

		if (options.where && 'departamentoId' in options.where) {
			;(options.include[0] as any).where = {
				id: options.where.departamentoId
			}
		} else if (options.where && 'vicepresidenciaId' in options.where) {
			;(options.include[1] as any).where = {
				id: options.where.vicepresidenciaId
			}
		} else if (options.where && 'vicepresidenciaEjecutivaId' in options.where) {
			;(options.include[2] as any).where = {
				id: options.where.vicepresidenciaEjecutivaId
			}
		} else if (options.where && 'directivaId' in options.where) {
			;(options.include[3] as any).where = {
				id: options.where.directivaId
			}
		}

		if (options.where) {
			delete (options.where as any).departamentoId
			delete (options.where as any).vicepresidenciaId
			delete (options.where as any).vicepresidenciaEjecutivaId
			delete (options.where as any).directivaId
		}

		return options
	}
}
