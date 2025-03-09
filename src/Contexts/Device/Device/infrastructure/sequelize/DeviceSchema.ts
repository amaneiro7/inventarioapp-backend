import { DataTypes, Model, type Sequelize } from 'sequelize'

import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { type DeviceId } from '../../domain/DeviceId'
import { type DeviceSerial } from '../../domain/DeviceSerial'
import { type DeviceActivo } from '../../domain/DeviceActivo'
import { type BrandId } from '../../../../Brand/domain/BrandId'
import { type DeviceEmployee } from '../../domain/DeviceEmployee'
import { type DeviceObservation } from '../../domain/DeviceObservation'
import { type DeviceLocation } from '../../domain/DeviceLocation'
import { type DeviceModelSeries } from '../../domain/DeviceModelSeries'
import { type DeviceStatus } from '../../domain/DeviceStatus'
import { type DeviceStocknumber } from '../../domain/DeviceStock'
import { type DeviceDto } from '../../domain/Device.dto'
import { StatusId } from '../../../Status/domain/StatusId'
import { type BrandDto } from '../../../../Brand/domain/Brand.dto'
import { type CategoryDto } from '../../../../Category/Category/domain/Category.dto'
import { type EmployeeDto } from '../../../../employee/Employee/domain/entity/Employee.dto'
import { type DeviceComputerDto } from '../../../../Features/Computer/domain/Computer.dto'
import { type DeviceHardDriveDto } from '../../../../Features/HardDrive/HardDrive/domain/HardDrive.dto'
import { type DeviceMFPDto } from '../../../../Features/MFP/domain/MFP.dto'
import { type HistoryDto } from '../../../../History/domain/History.dto'
import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type ModelSeriesDto } from '../../../../ModelSeries/ModelSeries/domain/ModelSeries.dto'
import { type StatusDto } from '../../../Status/domain/Status.dto'

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
	declare history: HistoryDto
	declare updatedAt: Date
	declare createdAt: Date

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		}) // A device belongs to a category
		this.belongsTo(models.Brand, { as: 'brand', foreignKey: 'brandId' }) // A device belongs to a brand
		this.belongsTo(models.Model, { as: 'model', foreignKey: 'modelId' }) // A device belongs to a model series
		this.belongsTo(models.Status, { as: 'status', foreignKey: 'statusId' }) // A device belongs to a status
		this.hasOne(models.DeviceHardDrive, {
			as: 'hardDrive',
			foreignKey: 'deviceId'
		}) // A device has one hard drive
		this.hasOne(models.DeviceComputer, {
			as: 'computer',
			foreignKey: 'deviceId'
		}) // A device has one computer
		this.hasOne(models.DeviceMFP, { as: 'mfp', foreignKey: 'deviceId' }) // A device has one multifuncional printer
		this.belongsTo(models.Employee, {
			as: 'employee',
			foreignKey: 'employeeId'
		}) // A device belongs to an employee
		this.belongsTo(models.Location, {
			as: 'location',
			foreignKey: 'locationId'
		}) // A device belongs to a location
		this.hasMany(models.History, { as: 'history', foreignKey: 'deviceId' }) // A device can have many history
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		DeviceModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				activo: {
					allowNull: true,
					type: DataTypes.STRING,
					unique: true
				},
				serial: {
					allowNull: true,
					type: DataTypes.STRING,
					unique: true
				},
				statusId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				categoryId: {
					type: DataTypes.STRING,
					allowNull: false
				},
				brandId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				modelId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				employeeId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				locationId: {
					type: DataTypes.UUID,
					allowNull: true,
					validate: {
						onlyNullIf(value: Primitives<DeviceLocation>) {
							if (this.statusId !== StatusId.StatusOptions.DESINCORPORADO && value === null) {
								throw new Error('Solo puede estar vacío si el estatus esta marcado como desincoporado')
							}
						}
					}
				},
				observation: {
					type: DataTypes.TEXT,
					allowNull: true
				},
				stockNumber: {
					type: DataTypes.STRING,
					allowNull: true
				}
			},
			{
				modelName: 'Device',
				timestamps: true,
				underscored: true,
				sequelize
			}
		)
	}
}
