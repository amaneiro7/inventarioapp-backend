import { type FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'

export class DeviceAssociation {
	convertFilterLocation(criteria: Criteria, options: FindOptions): FindOptions {
		const mainCategoryId = criteria.obtainFilterValue('mainCategoryId') ?? []

		options.include = [
			{
				association: 'model', // 0
				include: [
					{
						association: 'modelComputer', // 0 - 0
						include: ['memoryRamType'],
						attributes: [
							'memoryRamTypeId',
							'memoryRamSlotQuantity',
							'hasBluetooth',
							'hasWifiAdapter',
							'hasDVI',
							'hasHDMI',
							'hasVGA'
						]
					},
					{
						association: 'modelLaptop', // 0 - 1
						include: ['memoryRamType'],
						attributes: [
							'memoryRamTypeId',
							'memoryRamSlotQuantity',
							'hasBluetooth',
							'hasWifiAdapter',
							'hasDVI',
							'hasHDMI',
							'hasVGA',
							'batteryModel'
						]
					},
					{
						association: 'modelMonitor', // 0 - 2
						attributes: ['screenSize', 'hasDVI', 'hasHDMI', 'hasVGA']
					},
					{
						association: 'modelPrinter', // 0 - 3
						attributes: ['cartridgeModel']
					},
					{
						association: 'modelKeyboard', // 0 - 4
						include: ['inputType'],
						attributes: ['inputTypeId', 'hasFingerPrintReader']
					},
					{
						association: 'modelMouse', // 0 - 5
						include: ['inputType'],
						attributes: ['inputTypeId']
					}
				],
				attributes: ['name', 'categoryId', 'brandId', 'generic']
			},
			{
				association: 'category', // 1
				include: ['mainCategory']
			},
			{
				association: 'brand', // 2
				attributes: ['id', 'name']
			},
			'status', // 3
			{
				association: 'employee', // 4
				attributes: [
					'id',
					'userName',
					'type',
					'name',
					'lastName',
					'email',
					'isStillWorking',
					'employeeCode',
					'nationality',
					'cedula',
					'extension',
					'phone'
				],
				include: [
					{
						association: 'cargo', // 4 - 0
						attributes: ['id', 'name']
					},
					{
						association: 'directiva', // 4 - 1
						attributes: ['id', 'name']
					},
					{
						association: 'vicepresidenciaEjecutiva', // 4 - 2
						attributes: ['id', 'name']
					},
					{
						association: 'vicepresidencia', // 4 - 3
						attributes: ['id', 'name']
					},
					{
						association: 'departamento', // 4 - 4
						attributes: ['id', 'name']
					}
				]
			},
			{
				association: 'computer', // 5
				required: mainCategoryId.includes(MainCategoryList.COMPUTER),
				include: [
					{
						association: 'processor',
						attributes: ['productCollection', 'numberModel', 'name', 'frequency', 'cores', 'threads']
					}, // 5 - 0
					{
						association: 'hardDriveCapacity',
						attributes: ['name']
					}, // 5 - 1
					{
						association: 'hardDriveType',
						attributes: ['name']
					}, // 5 - 2
					{
						association: 'operatingSystem',
						attributes: ['name']
					}, // 5 - 3
					{
						association: 'operatingSystemArq',
						attributes: ['name']
					} // 5 - 4
				],
				attributes: [
					'computerName',
					'processorId',
					'memoryRam',
					'memoryRamCapacity',
					'hardDriveCapacityId',
					'hardDriveTypeId',
					'operatingSystemId',
					'operatingSystemArqId',
					'macAddress',
					'ipAddress'
				]
			},
			{
				association: 'hardDrive', // 6
				include: [
					'hardDriveCapacity', // 6 - 0
					'hardDriveType' // 6 - 1
				]
			},
			{
				association: 'location', // 7
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
			},
			{
				association: 'mfp', // 8
				required: mainCategoryId.includes(MainCategoryList.PRINTERS)
			},
			{
				association: 'history',
				include: [
					{
						association: 'user',
						attributes: ['email', 'name', 'lastName']
					},
					'employee'
				],
				separate: true,
				order: [['createdAt', 'DESC']]
			}
		]

		// Poder filtrar por main category
		if (options.where && 'mainCategoryId' in options.where) {
			;(options.include[1] as any).where = {
				mainCategoryId: options.where?.mainCategoryId
			}
			delete options.where.mainCategoryId
		}
		// Poder filtrar por las caracteristicas de computer
		const firstLevelJoin = [
			'computerName',
			'processorId',
			'hardDriveCapacityId',
			'hardDriveTypeId',
			'operatingSystemId',
			'operatingSystemArqId',
			'memoryRam',
			'memoryRamCapacity',
			'macAddress'
		]
		firstLevelJoin.forEach(ele => {
			if (options.where && criteria.searchValueInArray(ele)) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				options.include[5].where = {
					// @ts-expect-error
					...options?.include[5]?.where,
					// @ts-expect-error
					[ele]: options?.where[ele]
				}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				delete options.where[ele]
			}
		})
		// Poder filtrar por direccion
		if (options.where && 'ipAddress' in options.where) {
			const ipAddress = options.where.ipAddress
			const symbol = Object.getOwnPropertySymbols(ipAddress)[0]
			const value: string = ipAddress[symbol] as string

			;(options.include[5] as any).where = {
				ipAddress: sequelize.literal(`ip_address::text ILIKE '%${value}%'`)
			}

			delete options.where.ipAddress
		}

		// Poder filtrar por nombre de procesador
		if (options.where && 'processor' in options.where) {
			;(options.include[5] as any).include[0].where = {
				name: options.where.processor
			}
			delete options.where.processor
		}

		// Poder filtrar por ubicacion - Tipo de sitio
		if (options.where && 'typeOfSiteId' in options.where) {
			;(options.include[7] as any).where = {
				typeOfSiteId: (options.where as any)?.typeOfSiteId
			}
			delete options.where?.typeOfSiteId
		}

		//Filtrar por Cargo
		if (options.where && 'cargoId' in options.where) {
			;(options.include[4] as any).required = true
			;(options.include[4] as any).include[0].where = {
				id: (options.where as any)?.cargoId
			}
			delete options.where?.cargoId
		}
		//Filtrar por directiva
		if (options.where && 'directivaId' in options.where) {
			;(options.include[4] as any).required = true
			;(options.include[4] as any).include[1].where = {
				id: (options.where as any)?.directivaId
			}
			delete options.where?.directivaId
		}
		//Filtrar por VPE
		if (options.where && 'vicepresidenciaEjecutivaId' in options.where) {
			;(options.include[4] as any).required = true
			;(options.include[4] as any).include[2].where = {
				id: (options.where as any)?.vicepresidenciaEjecutivaId
			}
			delete options.where?.vicepresidenciaEjecutivaId
		}
		//Filtrar por VP
		if (options.where && 'vicepresidenciaId' in options.where) {
			;(options.include[4] as any).required = true
			;(options.include[4] as any).include[3].where = {
				id: (options.where as any)?.vicepresidenciaId
			}
			delete options.where?.vicepresidenciaId
		}
		//Filtrar por departamento
		if (options.where && 'departamentoId' in options.where) {
			;(options.include[4] as any).required = true
			;(options.include[4] as any).include[4].where = {
				id: (options.where as any)?.departamentoId
			}
			delete options.where?.departamentoId
		}

		// Poder filtrar por ubicacion - por sitio
		if (options.where && 'siteId' in options.where) {
			;(options.include[7] as any).required = true
			;(options.include[7] as any).include[1].where = {
				id: (options.where as any)?.siteId
			}
			delete options.where?.siteId
		}

		// Poder filtrar por ciudad
		if (options.where && 'cityId' in options.where) {
			;(options.include[7] as any).required = true
			;(options.include[7] as any).include[1].include[0].where = {
				id: options.where.cityId
			}

			delete options.where?.cityId
		}

		// Poder filtrar por estado
		if (options.where && 'stateId' in options.where) {
			;(options.include[7] as any).required = true
			;(options.include[7] as any).include[1].include[0].include[0].where = {
				id: options.where.stateId
			}

			delete options.where?.stateId
		}

		// Poder filtrar por region
		if (options.where && 'regionId' in options.where) {
			;(options.include[7] as any).required = true
			;(options.include[7] as any).include[1].include[0].include[0].include[0].where = {
				id: (options.where as any)?.regionId
			}

			delete options.where?.regionId
		}

		options.order = this.transformOrder(options.order)

		return options
	}

	private transformOrder(order: FindOptions['order']): FindOptions['order'] {
		if (!order || !Array.isArray(order)) return undefined

		const orderMap: Record<string, string[]> = {
			employeeId: ['employee', 'userName'],
			cargoId: ['employee', 'cargo', 'name'],
			directivaId: ['employee', 'directiva', 'name'],
			vicepresidenciaEjecutivaId: ['employee', 'vicepresidenciaEjecutiva', 'name'],
			vicepresidenciaId: ['employee', 'vicepresidencia', 'name'],
			departamentoId: ['employee', 'departamento', 'name'],
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			ipAddress: ['computer', 'ipAddress'],
			categoryId: ['category', 'name'],
			computerName: ['computer', 'computerName'],
			memoryRamCapacity: ['computer', 'memoryRamCapacity'],
			processorId: ['computer', 'processor', 'name'],
			operatingSystemId: ['computer', 'operatingSystem', 'name'],
			operatingSystemArqId: ['computer', 'operatingSystemArq', 'name'],
			hardDriveCapacityId: ['computer', 'hardDriveCapacity', 'name'],
			hardDriveTypeId: ['computer', 'hardDriveType', 'name'],
			brandId: ['brand', 'name'],
			modelId: ['model', 'name']
		}
		// @ts-ignore
		return order.map(([orderBy, orderType]) => {
			const mappedOrder = orderMap[orderBy]
			return mappedOrder ? [...mappedOrder, orderType] : [orderBy, orderType]
		})
	}
}
