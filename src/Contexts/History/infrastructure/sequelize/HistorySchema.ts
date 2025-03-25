import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type HistoryDto } from '../../domain/History.dto'
import { type ActionType, acionTypes } from '../../domain/HistoryAction'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DeviceId } from '../../../Device/Device/domain/DeviceId'
import { type HistoryId } from '../../domain/HistoryId'
import { type UserId } from '../../../User/user/domain/UserId'
import { type HistoryEmployee } from '../../domain/HistoryEmployee'
import { type DeviceDto } from '../../../Device/Device/domain/Device.dto'
import { type EmployeeDto } from '../../../employee/Employee/domain/entity/Employee.dto'
import { type UserDto } from '../../../User/user/domain/User.dto'

export class HistoryModel extends Model<Omit<HistoryDto, 'employee' | 'device' | 'user'>> implements HistoryDto {
	declare id: Primitives<HistoryId>
	declare deviceId: Primitives<DeviceId>
	declare userId: Primitives<UserId>
	declare employeeId: Primitives<HistoryEmployee>
	declare action: ActionType
	declare oldData: object
	declare newData: object
	declare createdAt: Date
	// joins
	declare employee: EmployeeDto
	declare device: DeviceDto
	declare user: UserDto

	static async associate(models: Sequelize['models']): Promise<void> {
		this.belongsTo(models.User, { as: 'user', foreignKey: 'userId' }) // A history belongs to a user
		this.belongsTo(models.Device, { as: 'device', foreignKey: 'deviceId' }) // A history belongs to a device
		this.belongsTo(models.Employee, {
			as: 'employee',
			foreignKey: 'employeeId'
		}) // A history belongs to an employee
	}
	static async initialize(sequelize: Sequelize): Promise<void> {
		HistoryModel.init(
			{
				id: {
					type: DataTypes.UUID,
					primaryKey: true,
					allowNull: false
				},
				deviceId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				userId: {
					type: DataTypes.UUID,
					allowNull: false
				},
				employeeId: {
					type: DataTypes.UUID,
					allowNull: true
				},
				action: {
					type: DataTypes.ENUM,
					values: Object.values(acionTypes),
					allowNull: false
				},
				oldData: {
					type: DataTypes.JSON,
					allowNull: false
				},
				newData: {
					type: DataTypes.JSON,
					allowNull: false
				},
				createdAt: {
					type: DataTypes.DATE,
					allowNull: false
				}
			},
			{
				modelName: 'History',
				underscored: true,
				createdAt: true,
				sequelize
			}
		)
	}
}
