import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type OperatingSystemArqDto } from '../../domain/entity/OperatingSystemArq.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../../domain/valueObject/OperatingSystemArqID'
import { type OperatingSystemArqName } from '../../domain/valueObject/OperatingSystemArqName'

/**
 * @description Sequelize model for the `OperatingSystemArq` entity.
 */
export class OperatingSystemArqModel extends Model<OperatingSystemArqDto> implements OperatingSystemArqDto {
	declare id: Primitives<OperatingSystemArqId>
	declare name: Primitives<OperatingSystemArqName>

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'operatingSystemArqId' })
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{
				modelName: 'OperatingSystemArq',
				tableName: 'operating_system_arqs',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
