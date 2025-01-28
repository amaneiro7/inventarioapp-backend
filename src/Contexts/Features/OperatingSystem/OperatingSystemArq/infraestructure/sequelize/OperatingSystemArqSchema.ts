import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type OperatingSystemArqDto } from '../../domain/OperatingSystemArq.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type OperatingSystemArqId } from '../../domain/OperatingSystemArqID'
import { type OperatingSystemArqName } from '../../domain/OperatingSystemArqName'

export class OperatingSystemArqModel
	extends Model<OperatingSystemArqDto>
	implements OperatingSystemArqDto
{
	declare id: Primitives<OperatingSystemArqId>
	declare name: Primitives<OperatingSystemArqName>

	static async associate(models: Sequelize['models']): Promise<void> {
		this.hasMany(models.DeviceComputer, {
			as: 'computer',
			foreignKey: 'operatingSystemArqId'
		}) // An operating system arq can have many computer
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		OperatingSystemArqModel.init(
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
				modelName: 'OperatingSystemArq',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
