import { Op, type Order, type FindOptions, type IncludeOptions, WhereOptions } from 'sequelize'
import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { MigrationRule } from '../../domain/entity/MigrationRule'

export class HardwareEvaluationAssociation {
	/**
	 * @description Converts a Criteria object into a fully configured Sequelize FindOptions object.
	 * @param {Criteria} criteria The criteria object containing filters and ordering.
	 * @param {FindOptions} options The base FindOptions to be modified.
	 * @returns {FindOptions} The configured Sequelize FindOptions object.
	 */
	public static convertFilter({
		options,
		criteria,
		rule
	}: {
		criteria?: Criteria
		options: FindOptions
		rule: MigrationRule
	}): FindOptions {
		const modelComputerInclude: IncludeOptions = {
			association: 'modelComputer',
			include: ['memoryRamType'],
			attributes: ['memoryRamSlotQuantity']
		}
		const modelLaptopInclude: IncludeOptions = {
			association: 'modelComputer',
			include: ['memoryRamType'],
			attributes: ['memoryRamSlotQuantity']
		}

		const modelInclude: IncludeOptions = {
			association: 'model',
			include: [modelComputerInclude, modelLaptopInclude],
			attributes: ['id', 'name']
		}

		const brandInclude: IncludeOptions = {
			association: 'brand',
			attributes: ['id', 'name']
		}
		const statusInclude: IncludeOptions = {
			association: 'status',
			attributes: ['id', 'name']
		}
		const employeInclude: IncludeOptions = {
			association: 'employee', // 4
			attributes: ['id', 'userName', 'name', 'lastName']
		}

		const processorInclude: IncludeOptions = {
			association: 'processor',
			attributes: ['id', 'name']
		}
		const hardDriveCapacityInclude: IncludeOptions = {
			association: 'hardDriveCapacity',
			attributes: ['name']
		}
		const hardDriveTypeInclude: IncludeOptions = {
			association: 'hardDriveType',
			attributes: ['name']
		}
		const operatingSystemInclude: IncludeOptions = {
			association: 'operatingSystem',
			attributes: ['name']
		}
		const operatingSystemArqInclude: IncludeOptions = {
			association: 'operatingSystemArq',
			attributes: ['name']
		}

		const computerInclude: IncludeOptions = {
			association: 'computer', // 5
			required: true,
			include: [
				processorInclude,
				hardDriveCapacityInclude,
				hardDriveTypeInclude,
				operatingSystemInclude,
				operatingSystemArqInclude
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
		}

		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: ['name']
		}
		const regionInclude: IncludeOptions = {
			association: 'region',
			required: true,
			include: [administrativeRegionInclude]
		}
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite' }
		const locationInclude: IncludeOptions = {
			association: 'location',
			include: [typeOfSiteInclude, siteInclude]
		}

		options.include = [computerInclude, locationInclude, modelInclude, brandInclude, statusInclude, employeInclude]

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const whereFilters = (options.where ?? {}) as WhereOptions & Record<symbol, any>

		if ('computerName' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				computerName: whereFilters.computerName
			}
			delete whereFilters.computerName
		}
		if ('processorId' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				processorId: whereFilters.processorId
			}
			delete whereFilters.processorId
		}
		if ('hardDriveCapacityId' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				hardDriveCapacityId: whereFilters.hardDriveCapacityId
			}
			delete whereFilters.hardDriveCapacityId
		}
		if ('hardDriveTypeId' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				hardDriveTypeId: whereFilters.hardDriveTypeId
			}
			delete whereFilters.hardDriveTypeId
		}
		if ('operatingSystemId' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				operatingSystemId: whereFilters.operatingSystemId
			}
			delete whereFilters.operatingSystemId
		}
		if ('operatingSystem' in whereFilters) {
			operatingSystemInclude.where = {
				...(operatingSystemInclude.where || {}),
				name: whereFilters.operatingSystem
			}
			delete whereFilters.operatingSystem
		}
		if ('operatingSystemArqId' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				operatingSystemArqId: whereFilters.operatingSystemArqId
			}
			delete whereFilters.operatingSystemArqId
		}
		if ('memoryRam' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				memoryRam: whereFilters.memoryRam
			}
			delete whereFilters.memoryRam
		}
		if ('memoryRamCapacity' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				memoryRamCapacity: whereFilters.memoryRamCapacity
			}
			delete whereFilters.memoryRamCapacity
		}
		if ('macAddress' in whereFilters) {
			computerInclude.where = {
				...(computerInclude.where || {}),
				macAddress: whereFilters.macAddress
			}
			delete whereFilters.macAddress
		}
		// Poder filtrar por direccion
		if ('ipAddress' in whereFilters) {
			const subnetFilter = whereFilters.ipAddress as { [key: symbol]: string }
			const ipAddressValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]

			computerInclude.where = {
				...computerInclude.where,
				ipAddress: sequelize.literal(`ip_address::text ILIKE '%${ipAddressValue}%'`)
			}

			delete whereFilters.ipAddress
		}
		// Poder filtrar por ubicacion - Tipo de sitio
		if ('typeOfSiteId' in whereFilters) {
			locationInclude.required = true
			typeOfSiteInclude.where = {
				id: whereFilters.typeOfSiteId
			}
			delete whereFilters.typeOfSiteId
		}
		// Poder filtrar por ubicacion - por sitio
		if ('siteId' in whereFilters) {
			locationInclude.required = true
			siteInclude.where = {
				id: whereFilters.siteId
			}
			delete whereFilters?.siteId
		}

		// Poder filtrar por ciudad
		if ('cityId' in whereFilters) {
			locationInclude.required = true
			cityInclude.where = {
				id: whereFilters.cityId
			}

			delete whereFilters?.cityId
		}

		// Poder filtrar por estado
		if ('stateId' in whereFilters) {
			locationInclude.required = true
			stateInclude.where = {
				id: whereFilters.stateId
			}

			delete whereFilters?.stateId
		}

		// Poder filtrar por region
		if ('regionId' in whereFilters) {
			locationInclude.required = true
			regionInclude.where = {
				id: whereFilters.regionId
			}

			delete whereFilters?.regionId
		}
		// Poder filtrar por region administrativa
		if ('administrativeRegionId' in whereFilters) {
			locationInclude.required = true
			administrativeRegionInclude.where = {
				id: whereFilters.administrativeRegionId
			}

			delete whereFilters?.administrativeRegionId
		}

		// --- Lógica de Filtros de Evaluación (Apto / No Apto) ---

		// Definimos las condiciones básicas basadas en la Regla de Migración
		// 1. Tipamos explícitamente las condiciones para ayudar a TypeScript
		const ramCondition: WhereOptions = { memoryRamCapacity: { [Op.gte]: rule.minRamGbValue } }
		const processorCondition: WhereOptions = { processorId: { [Op.in]: rule.approvedProcessorValue } }
		const diskCondition = { name: { [Op.gte]: rule.minDiskGbValue } }

		// 2. Inicializamos arrays de condiciones para AND y OR con tipos estrictos de Sequelize
		const andConditions: WhereOptions[] = []
		const orConditions: WhereOptions[] = []

		// Filtro individual: RAM (Solo se aplica si el usuario selecciona 'true' o 'false')
		const isRamApto = criteria?.obtainFilterValue('isRamApto')
		if (isRamApto === 'true') {
			// Si queremos que la RAM sea apta, lo metemos al include de computer
			computerInclude.where = { ...(computerInclude.where || {}), ...ramCondition }
		} else if (isRamApto === 'false') {
			// Si explícitamente pedimos los NO aptos por RAM
			computerInclude.where = {
				...(computerInclude.where || {}),
				memoryRamCapacity: { [Op.lt]: rule.minRamGbValue }
			}
		}

		// Filtro individual: Procesador
		const isProcessorApto = criteria?.obtainFilterValue('isProcessorApto')
		if (isProcessorApto === 'true') {
			computerInclude.where = { ...(computerInclude.where || {}), ...processorCondition }
		} else if (isProcessorApto === 'false') {
			computerInclude.where = {
				...(computerInclude.where || {}),
				processorId: { [Op.notIn]: rule.approvedProcessorValue }
			}
		}

		// Filtro individual: Disco
		const isDiskApto = criteria?.obtainFilterValue('isDiskApto')
		if (isDiskApto === 'true') {
			hardDriveCapacityInclude.where = { ...(hardDriveCapacityInclude.where || {}), ...diskCondition }
		} else if (isDiskApto === 'false') {
			hardDriveCapacityInclude.where = {
				...(hardDriveCapacityInclude.where || {}),
				name: { [Op.lt]: rule.minDiskGbValue }
			}
		}

		// --- Filtros Globales (Dashboard) ---
		const isAptoFilter = criteria?.obtainFilterValue('isApto')
		// Filtro Global: Apto (Cumple TODAS las condiciones)
		if (isAptoFilter === 'true') {
			// Empujamos las condiciones individuales al AND general
			computerInclude.where = {
				...(computerInclude.where || {}),
				...ramCondition,
				...processorCondition
			}
			hardDriveCapacityInclude.where = {
				...(hardDriveCapacityInclude.where || {}),
				...diskCondition
			}
		} else if (isAptoFilter === 'false') {
			whereFilters[Op.or] = [
				...((whereFilters[Op.or] as WhereOptions[]) || []),
				{ '$computer.memory_ram_capacity$': { [Op.lt]: rule.minRamGbValue } },
				{ '$computer.processor_id$': { [Op.notIn]: rule.approvedProcessorValue } },
				{ '$computer.hardDriveCapacity.name$': { [Op.lt]: rule.minDiskGbValue } }
			]
		}

		if ('isApto' in whereFilters) {
			delete whereFilters?.isApto
		}
		if ('isRamApto' in whereFilters) {
			delete whereFilters?.isRamApto
		}
		if ('isProcessorApto' in whereFilters) {
			delete whereFilters?.isProcessorApto
		}
		if ('isDiskApto' in whereFilters) {
			delete whereFilters?.isDiskApto
		}

		// 3. Inyectamos las condiciones acumuladas en el where principal de forma segura y tipada
		if (andConditions.length > 0) {
			whereFilters[Op.and] = andConditions // <-- TypeScript ya sabe qué es Op.and aquí
		}

		if (orConditions.length > 0) {
			whereFilters[Op.or] = orConditions // <-- Sin usar "as any"
		}

		options.where = {
			...whereFilters,
			// Filtro de Negocio Base: Solo dispositivos con SO antiguos
			'$computer.operatingSystem.name$': {
				[Op.or]: [
					{ [Op.like]: '%Windows XP%' },
					{ [Op.like]: '%Windows 7%' },
					{ [Op.like]: '%Windows 8%' },
					{ [Op.like]: '%Windows 8.1%' }
				]
			}
		}

		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * @private
	 * @method transformOrder
	 * @description Transforms a simple order format into a nested format for Sequelize.
	 * @param {Order | undefined} order The order configuration from the criteria.
	 * @returns {Order | undefined} A Sequelize-compatible nested order configuration.
	 */
	private static transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

		const orderMap: Record<string, string[]> = {
			employeeId: ['employee', 'userName'],
			locationId: ['location', 'name'],
			cityId: ['location', 'site', 'city', 'name'],
			stateId: ['location', 'site', 'city', 'state', 'name'],
			regionId: ['location', 'site', 'city', 'state', 'region', 'name'],
			administrativeRegionId: ['location', 'site', 'city', 'state', 'region', 'administrativeRegion', 'name'],
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
		const transformedOrder = (order as Array<[string, string]>).map(([field, direction]) => {
			const mappedPath = orderMap[field]
			// If a mapping exists, use the nested path. Otherwise, use the original field name.
			return mappedPath ? [...mappedPath, direction] : [field, direction]
		})

		return transformedOrder as Order
	}
}
