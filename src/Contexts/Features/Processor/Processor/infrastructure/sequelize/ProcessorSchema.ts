import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type ProcessorDto } from '../../domain/Processor.dto'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorId } from '../../domain/ProcessorId'
import { type ProcessorProductCollection } from '../../domain/ProcessorProductCollection'
import { type ProcessorNumberModel } from '../../domain/ProcessorNumberModel'
import { type ProcessorCores } from '../../domain/ProcessorCores'
import { type ProcessorHasThreads } from '../../domain/ProcessorIsThreads'
import { type ProcessorFrequency } from '../../domain/ProcessorFrequency'

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

	static associate(models: Sequelize['models']): void {
		this.hasMany(models.DeviceComputer, { as: 'computer', foreignKey: 'processorId' })
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
			{ modelName: 'Processor', tableName: 'processors', underscored: true, sequelize }
		)
	}
}
