import type { IncludeOptions } from 'sequelize'

export const employeeGetInclude: IncludeOptions = {
	include: [
		{
			association: 'devices',
			include: ['category', 'brand', 'model', 'location', 'computer']
		},
		{ association: 'cargo', attributes: ['name'] },
		{
			association: 'location',
			attributes: ['name', 'typeOfSiteId'],
			include: [
				{
					association: 'site',
					attributes: ['name', 'address']
				}
			]
		},
		{ association: 'unidad' },
		{
			association: 'history',
			include: [
				{
					association: 'device',
					attributes: ['serial', 'categoryId'],
					include: [
						{ association: 'category', attributes: ['name'] },
						{ association: 'brand', attributes: ['name'] },
						{ association: 'model', attributes: ['name'] }
					]
				},
				{
					association: 'user',
					attributes: ['id'],
					include: [
						{
							association: 'employee',
							attributes: ['name', 'lastName', 'email', 'userName']
						}
					]
				}
			]
		}
	]
}
