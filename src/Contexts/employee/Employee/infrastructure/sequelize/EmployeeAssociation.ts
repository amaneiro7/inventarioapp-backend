import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class EmployeeAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'centroTrabajo',
				attributes: ['id', 'name'],
				include: [
					{
						association: 'centroCosto',
						attributes: ['id', 'name']
					}
				]
			},
			{
				association: 'departamento',
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
				association: 'cargo',
				attributes: ['id', 'name']
			},
			{
				association: 'location', // 7
				required: true,
				include: [
					'typeOfSite', // 7 - 0
					{
						association: 'site', // 7 - 1
						required: true,
						include: [
							{
								association: 'city', // 7 - 1 - 0
								required: true,
								include: [
									{
										association: 'state', // 7 - 1 - 1
										required: true,
										include: [
											{
												association: 'region', // 7 - 1 - 1 - 0
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
		return options
	}
}
