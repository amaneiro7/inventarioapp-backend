import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type HistoryPrimitives } from '../../domain/History'
import { type ActionType, acionTypes } from '../../domain/HistoryAction'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DeviceId } from '../../../Device/Device/domain/DeviceId'
import { HistoryId } from '../../domain/HistoryId'
import { UserId } from '../../../User/user/domain/UserId'
import { HistoryEmployee } from '../../domain/HistoryEmployee'

export class HistoryModel
	extends Model<HistoryPrimitives>
	implements HistoryPrimitives
{
	declare id: Primitives<HistoryId>
	declare deviceId: Primitives<DeviceId>
	declare userId: Primitives<UserId>
	declare employeeId: Primitives<HistoryEmployee>
	declare action: ActionType
	declare oldData: object
	declare newData: object
	declare createdAt: Date

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
