import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type ProcessorDto } from '../../domain/entity/Processor.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from '../../domain/valueObject/ProcessorId'
import { type ProcessorProductCollection } from '../../domain/valueObject/ProcessorProductCollection'
import { type ProcessorNumberModel } from '../../domain/valueObject/ProcessorNumberModel'
import { type ProcessorCores } from '../../domain/valueObject/ProcessorCores'
import { type ProcessorHasThreads } from '../../domain/valueObject/ProcessorIsThreads'
import { type ProcessorFrequency } from '../../domain/valueObject/ProcessorFrequency'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @description Sequelize model for the `Processor` entity.
 */
export class ProcessorModel extends Model<ProcessorDto> implements ProcessorDto {
	declare id: Primitives<ProcessorId>
	declare productCollection: Primitives<ProcessorProductCollection>
	declare numberModel: Primitives<ProcessorNumberModel>
	declare name: string
	declare cores: Primitives<ProcessorCores>
	declare threads: Primitives<ProcessorHasThreads>
	declare frequency: Primitives<ProcessorFrequency>

	static associate(models: SequelizeModels): void {
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'processorId' })
		this.belongsToMany(models.Model, {
			as: 'models',
			through: 'model_processor',
			foreignKey: 'processorId',
			otherKey: 'modelId'
		})
	}

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
				productCollection: { type: DataTypes.STRING, allowNull: false },
				numberModel: { type: DataTypes.STRING, allowNull: false, unique: true },
				cores: { type: DataTypes.INTEGER, allowNull: false },
				threads: { type: DataTypes.BOOLEAN, allowNull: false },
				frequency: { type: DataTypes.STRING, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false }
			},
			{
				modelName: 'Processor',
				tableName: 'processors',
				underscored: true,
				sequelize,
				indexes: [{ fields: ['product_collection'] }, { fields: ['name'] }]
			}
		)
	}
}
