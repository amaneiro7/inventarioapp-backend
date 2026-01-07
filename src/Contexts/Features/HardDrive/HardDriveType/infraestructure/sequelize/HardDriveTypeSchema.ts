import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type HardDriveTypeName } from '../../domain/valueObject/HardDriveTypeName'
import { type HardDriveTypeId } from '../../domain/valueObject/HardDriveTypeId'
import { type HardDriveTypeDto } from '../../domain/entity/HardDriveType.dto'

/**
 * @description Sequelize model for the `HardDriveType` entity.
 */
export class HardDriveTypeModel extends Model<HardDriveTypeDto> implements HardDriveTypeDto {
	declare id: Primitives<HardDriveTypeId>
	declare name: Primitives<HardDriveTypeName>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceHardDrive, { as: 'hardDrive', foreignKey: 'hardDriveTypeId' })
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'hardDriveTypeId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{
				modelName: 'HardDriveType',
				tableName: 'hard_drive_types',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
