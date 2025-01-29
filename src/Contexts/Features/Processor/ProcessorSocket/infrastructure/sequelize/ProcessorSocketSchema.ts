import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketName } from '../../domain/ProcessorSocketName'
import { type ProcessorSocketDto } from '../../domain/ProcessorSocket.dto'

export class ProcessorSocketModel
	extends Model<ProcessorSocketDto>
	implements ProcessorSocketDto
{
	declare id: Primitives<ProcessorSocketId>
	declare name: Primitives<ProcessorSocketName>

	static async associate(models: Sequelize['models']): Promise<void> {
		// this.hasMany(models.ModelLaptop, { as: 'modelLaptop' }) // An processor socket can have many laptops
		// this.hasMany(models.ModelComputer, { as: 'modelComputer' }) // An processor socket can have many computers
	}

	static async initialize(sequelize: Sequelize): Promise<void> {
		ProcessorSocketModel.init(
			{
				id: {
					type: DataTypes.UUID,
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
				modelName: 'ProcessorSocket',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
