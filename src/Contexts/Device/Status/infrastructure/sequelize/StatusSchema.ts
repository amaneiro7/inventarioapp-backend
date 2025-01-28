import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/StatusId'
import { type StatusName } from '../../domain/StatusName'
import { type StatusDto } from '../../domain/Status.dto'

export class StatusModel extends Model<StatusDto> implements StatusDto {
	declare id: Primitives<StatusId>
	declare name: Primitives<StatusName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'statusId' })
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		StatusModel.init(
			{
				id: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true
				}
			},
			{
				modelName: 'Status',
				tableName: 'status',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
