import { FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class EmployeeAssociation {
	static convertFilter(criteria: Criteria, options: FindOptions): FindOptions {
		options.include = [
			{
				association: 'centroTrabajo', // 0
				attributes: ['id', 'name'],
				include: [
					{
						association: 'centroCosto', // 0 - 0
						attributes: ['id', 'name']
					}
				]
			},
			{
				association: 'departamento', // 1
				attributes: ['id', 'name'],
				include: [
					{
						association: 'vicepresidenciaEjecutiva', // 1 - 0
						attributes: ['id', 'name'],
						include: [
							{
								association: 'directiva', // 1 - 0 - 0
								attributes: ['id', 'name']
							}
						]
					}
				]
			},
			{
				association: 'cargo', // 2
				attributes: ['id', 'name']
			},
			{
				association: 'location', // 3
				include: [
					'typeOfSite', // 3 - 0
					{
						association: 'site', // 3 - 1
						required: true,
						include: [
							{
								association: 'city', // 3 - 1 - 0
								required: true,
								include: [
									{
										association: 'state', // 3 - 1 - 0 - 0
										required: true,
										include: [
											{
												association: 'region', // 3 - 1 - 0 - 0 - 0
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

		// Filtrar por centro de Costo
		if (options.where && 'centroCostoId' in options.where) {
			;(options.include[0] as any).include[0].where = {
				id: options.where.centroCostoId
			}
			delete options.where.centroCostoId
		}
		// Filtrar por vicepresidencia ejecutiva
		if (options.where && 'vicepresidenciaEjecutivaId' in options.where) {
			;(options.include[1] as any).required = true
			;(options.include[1] as any).include[0].where = {
				id: options.where.vicepresidenciaEjecutivaId
			}
			delete options.where.vicepresidenciaEjecutivaId
		}
		// Filtrar por directiva
		if (options.where && 'directivaId' in options.where) {
			;(options.include[1] as any).required = true
			;(options.include[1] as any).include[0].include[0].where = {
				id: options.where.directivaId
			}
			delete options.where.directivaId
		}
		// Filtrar por sitio
		if (options.where && 'siteId' in options.where) {
			;(options.include[3] as any).required = true
			;(options.include[3] as any).include[1].where = {
				id: options.where.siteId
			}
			delete options.where.siteId
		}
		// Filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[3] as any).required = true
			;(options.include[3] as any).include[1].include[0].where = {
				id: options.where.cityId
			}
			delete options.where.cityId
		}
		// Filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[3] as any).required = true
			;(options.include[3] as any).include[1].include[0].include[0].where = {
				id: options.where.stateId
			}
			delete options.where.stateId
		}
		// Filtrar por región
		if (options.where && 'regionId' in options.where) {
			;(options.include[3] as any).required = true
			;(options.include[3] as any).include[1].include[0].include[0].include[0].where = {
				id: options.where.regionId
			}
			delete options.where.regionId
		}
		return options
	}
}
