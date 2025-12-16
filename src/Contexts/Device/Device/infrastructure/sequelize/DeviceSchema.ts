import { DataTypes, Model, type Sequelize } from 'sequelize'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type DeviceId } from '../../domain/DeviceId'
import { type DeviceSerial } from '../../domain/DeviceSerial'
import { type DeviceActivo } from '../../domain/DeviceActivo'
import { type BrandId } from '../../../../Brand/domain/valueObject/BrandId'
import { type DeviceEmployee } from '../../domain/DeviceEmployee'
import { type DeviceObservation } from '../../domain/DeviceObservation'
import { type DeviceLocation } from '../../domain/DeviceLocation'
import { type DeviceModelSeries } from '../../domain/DeviceModelSeries'
import { type DeviceStatus } from '../../domain/DeviceStatus'
import { type DeviceStocknumber } from '../../domain/DeviceStock'
import { type DeviceDto } from '../../domain/Device.dto'
import { type BrandDto } from '../../../../Brand/domain/entity/Brand.dto'
import { type CategoryDto } from '../../../../Category/Category/domain/Category.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type DeviceComputerDto } from '../../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveDto } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type DeviceMFPDto } from '../../../../Features/MFP/domain/MFP.dto'
import { type HistoryDto } from '../../../../History/domain/History.dto'
import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/ModelSeries/domain/ModelSeries.dto'
import { type StatusDto } from '../../../Status/domain/Status.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @class DeviceModel
 * @extends Model
 * @description Sequelize model for the `Device` entity. Defines the table structure, columns, and associations.
 */
export class DeviceModel
	extends Model<
		Omit<
			DeviceDto,
			| 'status'
			| 'category'
			| 'brand'
			| 'model'
			| 'employee'
			| 'location'
			| 'computer'
			| 'hardDrive'
			| 'mfp'
			| 'history'
			| 'updatedAt'
			| 'createdAt'
		>
	>
	implements DeviceDto
{
	declare id: Primitives<DeviceId>
	declare serial: Primitives<DeviceSerial>
	declare activo: Primitives<DeviceActivo>
	declare statusId: Primitives<DeviceStatus>
	declare categoryId: Primitives<CategoryId>
	declare brandId: Primitives<BrandId>
	declare modelId: Primitives<DeviceModelSeries>
	declare employeeId: Primitives<DeviceEmployee>
	declare locationId: Primitives<DeviceLocation>
	declare observation: Primitives<DeviceObservation>
	declare stockNumber: Primitives<DeviceStocknumber>
	declare status: StatusDto
	declare category: CategoryDto
	declare brand: BrandDto
	declare model: ModelSeriesDto
	declare employee: EmployeeDto
	declare location: LocationDto
	declare computer: DeviceComputerDto | null
	declare hardDrive: DeviceHardDriveDto | null
	declare mfp: DeviceMFPDto | null
	declare history: HistoryDto[]
	declare updatedAt: Date
	declare createdAt: Date

	/**
	 * @static
	 * @method associate
	 * @description Defines the relationships between the `DeviceModel` and other models.
	 * @param {Sequelize['models']} models An object containing all initialized Sequelize models.
	 */
	static associate(models: SequelizeModels): void {
		this.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' })
		this.belongsTo(models.Brand, { as: 'brand', foreignKey: 'brandId' })
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelId' })
		this.belongsTo(models.Status, { as: 'status', foreignKey: 'statusId' })
		this.belongsTo(models.Employee, { as: 'employee', foreignKey: 'employeeId' })
		this.belongsTo(models.Location, { as: 'location', foreignKey: 'locationId' })
		this.hasOne(models.DeviceHardDrive, { as: 'hardDrive', foreignKey: 'deviceId' })
		this.hasOne(models.DeviceComputer, { as: 'computer', foreignKey: 'deviceId' })
		this.hasOne(models.DeviceMonitoring, { as: 'deviceMonitoring', foreignKey: 'deviceId' })
		this.hasOne(models.DeviceMFP, { as: 'mfp', foreignKey: 'deviceId' })
		this.hasMany(models.History, { as: 'history', foreignKey: 'deviceId' })
		this.hasMany(models.ShipmentDevice, { as: 'shipmentDevice', foreignKey: 'deviceId' })
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the `DeviceModel` with its schema definition and configuration.
	 * @param {Sequelize} sequelize The Sequelize instance.
	 */
	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				activo: { type: DataTypes.STRING, unique: true, allowNull: true },
				serial: { type: DataTypes.STRING, unique: true, allowNull: true },
				statusId: { type: DataTypes.STRING, allowNull: false, field: 'status_id' },
				categoryId: { type: DataTypes.STRING, allowNull: false, field: 'category_id' },
				brandId: { type: DataTypes.UUID, allowNull: false, field: 'brand_id' },
				modelId: { type: DataTypes.UUID, allowNull: false, field: 'model_id' },
				employeeId: { type: DataTypes.UUID, allowNull: true, field: 'employee_id' },
				locationId: {
					type: DataTypes.UUID,
					allowNull: true,
					field: 'location_id',
					validate: {
						onlyNullIf(value: Primitives<DeviceLocation>) {
							if (this.statusId !== StatusOptions.DESINCORPORADO && value === null) {
								throw new Error('La ubicación solo puede ser nula si el estatus es "Desincorporado".')
							}
						}
					}
				},
				observation: { type: DataTypes.TEXT, allowNull: true },
				stockNumber: { type: DataTypes.STRING, allowNull: true }
			},
			{
				modelName: 'Device',
				tableName: 'devices',
				timestamps: true,
				underscored: true,
				sequelize,
				indexes: [
					{ unique: true, fields: ['serial'], name: 'device_serial_uk' },
					{ fields: ['statusId'], name: 'device_status_idx' },
					{ fields: ['categoryId'], name: 'device_category_idx' },
					{ fields: ['brandId'], name: 'device_brand_idx' },
					{ fields: ['modelId'], name: 'device_model_idx' },
					{ fields: ['employeeId'], name: 'device_employee_idx' },
					{ fields: ['locationId'], name: 'device_location_idx' }
				]
			}
		)
	}
}
