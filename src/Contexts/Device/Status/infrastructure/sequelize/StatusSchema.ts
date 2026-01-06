import { DataTypes, Model, type Sequelize } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StatusId } from '../../domain/valueObject/StatusId'
import { type StatusName } from '../../domain/valueObject/StatusName'
import { type StatusDto } from '../../domain/entity/Status.dto'
import { type SequelizeModels } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeModels'

/**
 * @class StatusModel
 * @extends Model<StatusDto>
 * @implements {StatusDto}
 * @description Sequelize model for the `Status` entity.
 */
export class StatusModel extends Model<StatusDto> implements StatusDto {
	declare id: Primitives<StatusId>
	declare name: Primitives<StatusName>

	/**
	 * @static
	 * @method associate
	 * @description Defines the relationship between the `StatusModel` and other models.
	 * @param {SequelizeModels} models An object containing all initialized Sequelize models.
	 */
	static associate(models: SequelizeModels): void {
		this.hasMany(models.Device, { as: 'devices', foreignKey: 'statusId' })
	}

	/**
	 * @static
	 * @method initialize
	 * @description Initializes the `StatusModel` with its schema definition.
	 * @param {Sequelize} sequelize The Sequelize instance.
	 */
	static initialize(sequelize: Sequelize): void {
		this.init(
			{
				id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
				name: { type: DataTypes.STRING, allowNull: false, unique: true }
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
