import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeName } from '../../domain/HardDriveTypeName'
import { type HardDriveTypeId } from '../../domain/HardDriveTypeId'
import { type HardDriveTypeDto } from '../../domain/HardDriveType.dto'

export class HardDriveTypeModel extends Model<HardDriveTypeDto> implements HardDriveTypeDto {
	declare id: Primitives<HardDriveTypeId>
	declare name: Primitives<HardDriveTypeName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.DeviceHardDrive, {
			as: 'hardDrive',
			foreignKey: 'hardDriveTypeId'
		}) // A hard drive type can have many hard drive
		this.hasMany(models.DeviceComputer, {
			as: 'computer',
			foreignKey: 'hardDriveTypeId'
		}) // A hard drive type can have many computer
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		HardDriveTypeModel.init(
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
				modelName: 'HardDriveType',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
