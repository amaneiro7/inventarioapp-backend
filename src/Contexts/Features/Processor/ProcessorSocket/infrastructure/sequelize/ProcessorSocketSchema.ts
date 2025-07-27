import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorSocketId } from '../../domain/ProcessorSocketId'
import { type ProcessorSocketName } from '../../domain/ProcessorSocketName'
import { type ProcessorSocketDto } from '../../domain/ProcessorSocket.dto'

/**
 * @description Sequelize model for the `ProcessorSocket` entity.
 */
export class ProcessorSocketModel extends Model<ProcessorSocketDto> implements ProcessorSocketDto {
	declare id: Primitives<ProcessorSocketId>
	declare name: Primitives<ProcessorSocketName>

	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
			},
			{
				modelName: 'ProcessorSocket',
				tableName: 'processor_sockets',
				timestamps: false,
				underscored: true,
				sequelize
			}
		)
	}
}
