import { type IncludeOptions, type Order, type FindOptions } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @class DeviceAssociation
 * @description A utility class to build complex Sequelize query options for the Device model.
 * It dynamically constructs nested includes and applies filters and order clauses based on a Criteria object.
 */
export class DeviceAssociation {
	/**
	 * @method convertFilterLocation
	 * @description Converts a Criteria object into a Sequelize FindOptions object by mapping filters and orderings
	 * to their respective nested associations.
	 * @param {Criteria} criteria The criteria object containing filters, order, and pagination.
	 * @param {FindOptions} options The base Sequelize options to be modified.
	 * @returns {FindOptions} The fully constructed Sequelize FindOptions object.
	 */
	convertFilterLocation(criteria: Criteria, options: FindOptions): FindOptions {
		const mainCategoryId = criteria.obtainFilterValue('mainCategoryId') ?? []
		const whereFilters = { ...options.where } // Clone to avoid direct mutation

		// ------------------- 1. INCLUDES DEFINITION -------------------
		// Define all possible associations that can be included in the query.
		// These are later referenced by the filter configuration.
		const modelComputerInclude: IncludeOptions = {
			association: 'modelComputer',
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
		}

		const modelLaptopInclude: IncludeOptions = {
			association: 'modelLaptop',
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
		}

		const modelMonitorInclude: IncludeOptions = {
			association: 'modelMonitor', // 0 - 2
			attributes: ['screenSize', 'hasDVI', 'hasHDMI', 'hasVGA']
		}
		const modelPrinterInclude: IncludeOptions = {
			association: 'modelPrinter', // 0 - 3
			attributes: ['cartridgeModel']
		}
		const modelKeyboardInclude: IncludeOptions = {
			association: 'modelKeyboard', // 0 - 4
			include: ['inputType'],
			attributes: ['inputTypeId', 'hasFingerPrintReader']
		}
		const modelMouseInclude: IncludeOptions = {
			association: 'modelMouse', // 0 - 5
			include: ['inputType'],
			attributes: ['inputTypeId']
		}

		const modelInclude: IncludeOptions = {
			association: 'model',
			include: [
				modelComputerInclude,
				modelLaptopInclude,
				modelMonitorInclude,
				modelPrinterInclude,
				modelKeyboardInclude,
				modelMouseInclude
			],
			attributes: ['name', 'categoryId', 'brandId', 'generic']
		}

		const mainCategoryInclude: IncludeOptions = {
			association: 'mainCategory',
			attributes: ['id', 'name']
		}
		const categoryInclude: IncludeOptions = {
			association: 'category',
			include: [mainCategoryInclude]
		}

		const brandInclude: IncludeOptions = {
			association: 'brand',
			attributes: ['id', 'name']
		}
		const statusInclude: IncludeOptions = {
			association: 'status',
			attributes: ['id', 'name']
		}

		const cargoInclude: IncludeOptions = {
			association: 'cargo', // 4 - 0
			attributes: ['id', 'name']
		}
		const directivaInclude: IncludeOptions = {
			association: 'directiva', // 4 - 1
			attributes: ['id', 'name']
		}
		const vicepresidenciaEjecutivaInclude: IncludeOptions = {
			association: 'vicepresidenciaEjecutiva', // 4 - 2
			attributes: ['id', 'name']
		}
		const vicepresidenciaInclude: IncludeOptions = {
			association: 'vicepresidencia', // 4 - 3
			attributes: ['id', 'name']
		}
		const departamentoInclude: IncludeOptions = {
			association: 'departamento', // 4 - 4
			attributes: ['id', 'name']
		}

		const employeInclude: IncludeOptions = {
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
				cargoInclude,
				directivaInclude,
				vicepresidenciaEjecutivaInclude,
				vicepresidenciaInclude,
				departamentoInclude
			]
		}

		const processorInclude: IncludeOptions = {
			association: 'processor',
			attributes: ['productCollection', 'numberModel', 'name', 'frequency', 'cores', 'threads']
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
			attributes: ['name', 'buildNumber', 'version']
		}
		const operatingSystemArqInclude: IncludeOptions = {
			association: 'operatingSystemArq',
			attributes: ['name']
		}

		const computerInclude: IncludeOptions = {
			association: 'computer', // 5
			required: mainCategoryId.includes(MainCategoryList.COMPUTER),
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

		const hardDriveInclude: IncludeOptions = {
			association: 'hardDrive',
			include: ['hardDriveCapacity', 'hardDriveType']
		}

		const administrativeRegionInclude: IncludeOptions = {
			association: 'administrativeRegion',
			required: true,
			attributes: []
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

		const mfpInclude: IncludeOptions = {
			association: 'mfp',
			required: mainCategoryId.includes(MainCategoryList.PRINTERS)
		}

		const historyInclude: IncludeOptions = {
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

		options.include = [
			modelInclude,
			categoryInclude,
			brandInclude,
			statusInclude,
			employeInclude,
			computerInclude,
			hardDriveInclude,
			locationInclude,
			mfpInclude,
			historyInclude
		]

		// ------------------- 2. DYNAMIC FILTER APPLICATION -------------------
		// This section handles special-case filters that require complex logic.

		// Poder filtrar por main category
		if ('mainCategoryId' in whereFilters) {
			categoryInclude.required = true
			mainCategoryInclude.where = {
				id: whereFilters.mainCategoryId
			}
			delete whereFilters.mainCategoryId
		}
		// Poder filtrar por las caracteristicas de computer
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
		/**
		 * @SpecialFilter memoryRamTypeId
		 * @description This filter is unique because the 'memoryRamTypeId' field can exist in either
		 * the 'modelComputer' or 'modelLaptop' association. A standard WHERE clause on one would exclude the other.
		 * @solution To solve this, we apply an [Op.or] condition on the parent 'modelInclude'.
		 * We use Sequelize's '$association.column syntax to reference columns in nested includes,
		 * allowing us to build a condition that checks both possible paths.
		 */
		// Poder filtrar por typo de memoria ram
		if ('memoryRamTypeId' in whereFilters) {
			modelComputerInclude.where = {
				memoryRamTypeId: whereFilters.memoryRamTypeId
			}

			// 3. The parent model is required for the filter to apply correctly.
			modelInclude.required = true

			// 4. Clean up the processed filter.
			delete whereFilters.memoryRamTypeId
		}
		// Poder filtrar por nombre de procesador
		if ('processor' in whereFilters) {
			processorInclude.where = {
				name: whereFilters.processor
			}
			delete whereFilters.processor
		}

		//Filtrar por Cargo
		if ('cargoId' in whereFilters) {
			employeInclude.required = true
			cargoInclude.where = {
				id: whereFilters.cargoId
			}
			delete whereFilters?.cargoId
		}
		//Filtrar por directiva
		if ('directivaId' in whereFilters) {
			employeInclude.required = true
			directivaInclude.where = {
				id: whereFilters.directivaId
			}
			delete whereFilters?.directivaId
		}
		//Filtrar por VPE
		if ('vicepresidenciaEjecutivaId' in whereFilters) {
			employeInclude.required = true
			vicepresidenciaEjecutivaInclude.where = {
				id: whereFilters.vicepresidenciaEjecutivaId
			}
			delete whereFilters?.vicepresidenciaEjecutivaId
		}
		//Filtrar por VP
		if ('vicepresidenciaId' in whereFilters) {
			employeInclude.required = true
			vicepresidenciaInclude.where = {
				id: whereFilters.vicepresidenciaId
			}
			delete whereFilters?.vicepresidenciaId
		}
		//Filtrar por departamento
		if ('departamentoId' in whereFilters) {
			employeInclude.required = true
			departamentoInclude.where = {
				id: whereFilters.departamentoId
			}
			delete whereFilters?.departamentoId
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

		// Re-assign the modified where clauses back to the options.
		options.where = whereFilters

		// --- 3. Order Transformation ---
		// The `transformOrder` method correctly maps frontend field names (e.g., 'cityId')
		// to the nested Sequelize structure required for sorting on associated tables.
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
	private transformOrder(order: Order | undefined): Order | undefined {
		if (!order || !Array.isArray(order) || order.length === 0) return undefined

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
