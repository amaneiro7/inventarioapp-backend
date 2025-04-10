import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class EmployeeAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'directiva', // 0
				attributes: ['id', 'name']
			},
			{
				association: 'vicepresidenciaEjecutiva', // 1
				attributes: ['id', 'name']
			},
			{
				association: 'vicepresidencia', // 2
				attributes: ['id', 'name']
			},
			{
				association: 'departamento', // 3
				attributes: ['id', 'name']
			},
			{
				association: 'cargo', // 4
				attributes: ['id', 'name']
			},
			{
				association: 'location', // 5
				include: [
					'typeOfSite', // 5 - 0
					{
						association: 'site', // 5 - 1
						required: true,
						include: [
							{
								association: 'city', // 5 - 1 - 0
								required: true,
								include: [
									{
										association: 'state', // 5 - 1 - 0 - 0
										required: true,
										include: [
											{
												association: 'region', // 5 - 1 - 0 - 0 - 0
												required: true
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
		// Filtrar por sitio
		if (options.where && 'siteId' in options.where) {
			;(options.include[5] as any).required = true
			;(options.include[5] as any).include[1].where = {
				id: options.where.siteId
			}
			delete options.where.siteId
		}
		// Filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[5] as any).required = true
			;(options.include[5] as any).include[1].include[0].where = {
				id: options.where.cityId
			}
			delete options.where.cityId
		}
		// Filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[5] as any).required = true
			;(options.include[5] as any).include[1].include[0].include[0].where = {
				id: options.where.stateId
			}
			delete options.where.stateId
		}
		// Filtrar por región
		if (options.where && 'regionId' in options.where) {
			;(options.include[5] as any).required = true
			;(options.include[5] as any).include[1].include[0].include[0].include[0].where = {
				id: options.where.regionId
			}
			delete options.where.regionId
		}
		return options
	}
}
