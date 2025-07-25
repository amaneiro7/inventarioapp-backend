/**
 * @class DeviceAssociation
 * @description A utility class to build complex Sequelize query options for the Device model.
 * It dynamically constructs nested includes and applies filters and order clauses based on a Criteria object.
 * This class is optimized to handle a large number of potential filters in a scalable way.
 */
import { IncludeOptions, Op, Order, type FindOptions } from 'sequelize'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'

export class DeviceAssociation {
	/**
	 * @method convertFilterLocation
	 * @description Converts a Criteria object into a Sequelize FindOptions object. It maps filters and orderings
	 * to their respective nested associations (e.g., computer, employee, location) using a configuration-based approach.
	 *
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
			attributes: ['memoryRamTypeId', 'memoryRamSlotQuantity', 'hasBluetooth', 'hasWifiAdapter', 'hasDVI', 'hasHDMI', 'hasVGA']
		}
		const modelLaptopInclude: IncludeOptions = {
			association: 'modelLaptop',
			include: ['memoryRamType'],
			attributes: ['memoryRamTypeId', 'memoryRamSlotQuantity', 'hasBluetooth', 'hasWifiAdapter', 'hasDVI', 'hasHDMI', 'hasVGA', 'batteryModel']
		}
		const modelMonitorInclude: IncludeOptions = { association: 'modelMonitor', attributes: ['screenSize', 'hasDVI', 'hasHDMI', 'hasVGA'] }
		const modelPrinterInclude: IncludeOptions = { association: 'modelPrinter', attributes: ['cartridgeModel'] }
		const modelKeyboardInclude: IncludeOptions = { association: 'modelKeyboard', include: ['inputType'], attributes: ['inputTypeId', 'hasFingerPrintReader'] }
		const modelMouseInclude: IncludeOptions = { association: 'modelMouse', include: ['inputType'], attributes: ['inputTypeId'] }
		const modelInclude: IncludeOptions = {
			association: 'model',
			include: [modelComputerInclude, modelLaptopInclude, modelMonitorInclude, modelPrinterInclude, modelKeyboardInclude, modelMouseInclude],
			attributes: ['name', 'categoryId', 'brandId', 'generic']
		}
		const mainCategoryInclude: IncludeOptions = { association: 'mainCategory', attributes: ['id', 'name'] }
		const categoryInclude: IncludeOptions = { association: 'category', include: [mainCategoryInclude] }
		const brandInclude: IncludeOptions = { association: 'brand', attributes: ['id', 'name'] }
		const statusInclude: IncludeOptions = { association: 'status', attributes: ['id', 'name'] }
		const cargoInclude: IncludeOptions = { association: 'cargo', attributes: ['id', 'name'] }
		const directivaInclude: IncludeOptions = { association: 'directiva', attributes: ['id', 'name'] }
		const vicepresidenciaEjecutivaInclude: IncludeOptions = { association: 'vicepresidenciaEjecutiva', attributes: ['id', 'name'] }
		const vicepresidenciaInclude: IncludeOptions = { association: 'vicepresidencia', attributes: ['id', 'name'] }
		const departamentoInclude: IncludeOptions = { association: 'departamento', attributes: ['id', 'name'] }
		const employeInclude: IncludeOptions = {
			association: 'employee',
			attributes: ['id', 'userName', 'type', 'name', 'lastName', 'email', 'isStillWorking', 'employeeCode', 'nationality', 'cedula', 'extension', 'phone'],
			include: [cargoInclude, directivaInclude, vicepresidenciaEjecutivaInclude, vicepresidenciaInclude, departamentoInclude]
		}
		const processorInclude: IncludeOptions = { association: 'processor', attributes: ['productCollection', 'numberModel', 'name', 'frequency', 'cores', 'threads'] }
		const hardDriveCapacityInclude: IncludeOptions = { association: 'hardDriveCapacity', attributes: ['name'] }
		const hardDriveTypeInclude: IncludeOptions = { association: 'hardDriveType', attributes: ['name'] }
		const operatingSystemInclude: IncludeOptions = { association: 'operatingSystem', attributes: ['name'] }
		const operatingSystemArqInclude: IncludeOptions = { association: 'operatingSystemArq', attributes: ['name'] }
		const computerInclude: IncludeOptions = {
			association: 'computer',
			required: mainCategoryId.includes(MainCategoryList.COMPUTER),
			include: [processorInclude, hardDriveCapacityInclude, hardDriveTypeInclude, operatingSystemInclude, operatingSystemArqInclude],
			attributes: ['computerName', 'processorId', 'memoryRam', 'memoryRamCapacity', 'hardDriveCapacityId', 'hardDriveTypeId', 'operatingSystemId', 'operatingSystemArqId', 'macAddress', 'ipAddress']
		}
		const hardDriveInclude: IncludeOptions = { association: 'hardDrive', include: ['hardDriveCapacity', 'hardDriveType'] }
		const administrativeRegionInclude: IncludeOptions = { association: 'administrativeRegion', required: true, attributes: [] }
		const regionInclude: IncludeOptions = { association: 'region', required: true, include: [administrativeRegionInclude] }
		const stateInclude: IncludeOptions = { association: 'state', required: true, include: [regionInclude] }
		const cityInclude: IncludeOptions = { association: 'city', required: true, include: [stateInclude] }
		const siteInclude: IncludeOptions = { association: 'site', required: true, include: [cityInclude] }
		const typeOfSiteInclude: IncludeOptions = { association: 'typeOfSite' }
		const locationInclude: IncludeOptions = { association: 'location', include: [typeOfSiteInclude, siteInclude] }
		const mfpInclude: IncludeOptions = { association: 'mfp', required: mainCategoryId.includes(MainCategoryList.PRINTERS) }
		const historyInclude: IncludeOptions = {
			association: 'history',
			include: [{ association: 'user', attributes: ['email', 'name', 'lastName'] }, 'employee'],
			separate: true,
			order: [['createdAt', 'DESC']]
		}

		options.include = [modelInclude, categoryInclude, brandInclude, statusInclude, employeInclude, computerInclude, hardDriveInclude, locationInclude, mfpInclude, historyInclude]

		// ------------------- 2. DYNAMIC FILTER APPLICATION -------------------
		// This section handles special-case filters that require complex logic.

		/**
		 * @SpecialFilter memoryRamTypeId
		 * @description This filter is unique because the 'memoryRamTypeId' field can exist in either
		 * the 'modelComputer' or 'modelLaptop' association. A standard WHERE clause on one would exclude the other.
		 * @solution To solve this, we apply an [Op.or] condition on the parent 'modelInclude'.
		 * We use Sequelize's '$association.column
 syntax to reference columns in nested includes,
		 * allowing us to build a condition that checks both possible paths.
		 */
		if ('memoryRamTypeId' in whereFilters) {
			const memoryRamTypeId = whereFilters.memoryRamTypeId
			modelInclude.where = {
				...(modelInclude.where || {}),
				[Op.or]: [
					{ '$modelComputer.memoryRamTypeId
: memoryRamTypeId },
					{ '$modelLaptop.memoryRamTypeId
: memoryRamTypeId }
				]
			}
			// Since this is a special case, we set required on both potential models.
			modelComputerInclude.required = true
			modelLaptopInclude.required = true
			delete whereFilters.memoryRamTypeId
		}

		if ('ipAddress' in whereFilters) {
			const subnetFilter = whereFilters.ipAddress as { [key: symbol]: string }
			const ipAddressValue = subnetFilter[Object.getOwnPropertySymbols(subnetFilter)[0]]
			computerInclude.where = {
				...(computerInclude.where || {}),
				ipAddress: sequelize.literal(`ip_address::text ILIKE '%${ipAddressValue}%'`)
			}
			delete whereFilters.ipAddress
		}

		// ------------------- 3. CONFIGURATION-BASED FILTERING -------------------
		// A map-based approach to apply standard filters. This is scalable and easy to maintain.
		// Each entry defines the filter key, the target include object, and the field to filter on.
		const filterConfig = [
			// Main Category Filter
			{ key: 'mainCategoryId', include: mainCategoryInclude, field: 'id' },
			// Computer Specific Filters
			{ key: 'computerName', include: computerInclude, field: 'computerName' },
			{ key: 'processorId', include: computerInclude, field: 'processorId' },
			{ key: 'hardDriveCapacityId', include: computerInclude, field: 'hardDriveCapacityId' },
			{ key: 'hardDriveTypeId', include: computerInclude, field: 'hardDriveTypeId' },
			{ key: 'operatingSystemId', include: computerInclude, field: 'operatingSystemId' },
			{ key: 'operatingSystemArqId', include: computerInclude, field: 'operatingSystemArqId' },
			{ key: 'memoryRam', include: computerInclude, field: 'memoryRam' },
			{ key: 'memoryRamCapacity', include: computerInclude, field: 'memoryRamCapacity' },
			{ key: 'macAddress', include: computerInclude, field: 'macAddress' },
			{ key: 'processor', include: processorInclude, field: 'name' },
			// Location Filters
			{ key: 'typeOfSiteId', include: typeOfSiteInclude, field: 'id' },
			{ key: 'siteId', include: siteInclude, field: 'id', parent: locationInclude },
			{ key: 'cityId', include: cityInclude, field: 'id', parent: locationInclude },
			{ key: 'stateId', include: stateInclude, field: 'id', parent: locationInclude },
			{ key: 'regionId', include: regionInclude, field: 'id', parent: locationInclude },
			{ key: 'administrativeRegionId', include: administrativeRegionInclude, field: 'id', parent: locationInclude },
			// Employee Filters
			{ key: 'cargoId', include: cargoInclude, field: 'id', parent: employeInclude },
			{ key: 'directivaId', include: directivaInclude, field: 'id', parent: employeInclude },
			{ key: 'vicepresidenciaEjecutivaId', include: vicepresidenciaEjecutivaInclude, field: 'id', parent: employeInclude },
			{ key: 'vicepresidenciaId', include: vicepresidenciaInclude, field: 'id', parent: employeInclude },
			{ key: 'departamentoId', include: departamentoInclude, field: 'id', parent: employeInclude }
		]

		for (const config of filterConfig) {
			if (config.key in whereFilters) {
				// Apply the filter to the corresponding include's where clause.
				config.include.where = {
					...(config.include.where || {}),
					[config.field]: whereFilters[config.key]
				}
				// If a filter is applied to a nested association, we must mark it as required.
				if (config.parent) {
					config.parent.required = true
				}
				delete whereFilters[config.key]
			}
		}

		options.where = whereFilters
		options.order = this.transformOrder(options.order)

		return options
	}

	/**
	 * @private
	 * @method transformOrder
	 * @description Transforms a simple order format (e.g., ['cityId', 'ASC']) into a nested format
	 * that Sequelize can use for ordering on associated tables (e.g., ['location', 'site', 'city', 'name', 'ASC']).
	 *
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
			return mappedPath ? [...mappedPath, direction] : [field, direction]
		})

		return transformedOrder as Order
	}
}
