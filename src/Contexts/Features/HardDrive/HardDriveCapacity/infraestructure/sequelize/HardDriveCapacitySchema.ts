import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type HardDriveCapacityId } from '../../domain/HardDriveCapacityId'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveCapacityDto } from '../../domain/HardDriveCapacity.dto'
import { type HardDriveCapacityValue } from '../../domain/HardDriveCapacityValue'

export class HardDriveCapacityModel extends Model<HardDriveCapacityDto> implements HardDriveCapacityDto {
	declare id: Primitives<HardDriveCapacityId>
	declare name: Primitives<HardDriveCapacityValue>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.DeviceHardDrive, {
			as: 'hardDrive',
			foreignKey: 'hardDriveCapacityId'
		}) // A hard drive capacity can have many hard drive
		this.hasMany(models.DeviceComputer, {
			as: 'computer',
			foreignKey: 'hardDriveCapacityId'
		}) // A hard drive capacity can have many computer
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		HardDriveCapacityModel.init(
			{
				id: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false
				},
				name: {
					type: DataTypes.INTEGER,
					allowNull: false,
					unique: true
				}
			},
			{
				modelName: 'HardDriveCapacity',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
